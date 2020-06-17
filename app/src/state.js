import { messages } from './lib/emitter'
import { setupWebRTC } from './logic/connection'
import { defaultAudioConstraints, defaultVideoConstraints, getDevices, getDisplayMedia, getUserMedia, setAudioTracks } from './logic/stream'
import { trackException, trackSilentException } from './bugs'
import { PRODUCTION } from './config'

const log = require('debug')('app:state')

// export const DEBUG = location.port.toString() === '8080' || !location.pathname.startsWith('/ng/')
// export const isPWA = process.env.VUE_APP_TARGET === 'pwa'

// ROOM

let m = /^\/ngs?\/(.*?)$/gi.exec(location.pathname)
let room = m && m[1] || null
// console.log('Room =', room)

try {
  if (location.pathname === '/') {
    window.history.pushState(
      null, // { room: '' },
      null, // 'brie.fi/ng',
      '/ng',
    )
  }
} catch (err) {
  trackSilentException(err)
}

// STATE

export let state = {

  // ID of this room
  room,

  // Local users peer ID
  peerID: null,

  // IDs of all currently active WebRTC peers
  peers: [],

  // Video stream of the local user without sound
  stream: null,

  status: {},

  bandwidth: false,
  fill: true,

  backgroundMode: '',
  backgroundImageURL: null,
  backgroundAuthor: '',
  backgroundURL: '',

  muteVideo: false,
  muteAudio: false,

  deviceVideo: null,
  deviceAudio: null,

  devices: [],

  svg: {
    stroke: '1.5',
  },

  maximized: '',

  // For notifications
  vapidPublicKey: null,

  error: null,
  upgrade: false,
  requestBugTracking: false,
}

messages.on('requestBugTracking', _ => state.requestBugTracking = true)
messages.on('upgrade', _ => state.upgrade = true)

messages.on('updateStream', updateStream)

function updateStream() {
  try {
    if (state.stream) {
      state.stream?.getVideoTracks().forEach(t => t.enabled = !state?.muteVideo)
      state.stream?.getAudioTracks().forEach(t => t.enabled = !state?.muteAudio)
    }
  } catch (err) {
    trackException(err)
  }
}

messages.on('switchMedia', switchMedia)

let blurLib

async function switchMedia() {
  let audio = {
    ...defaultAudioConstraints,
  }

  if (state.deviceAudio) {
    audio.deviceId = state.deviceAudio
  }

  let video = {
    ...defaultVideoConstraints,
  }

  if (state.deviceVideo) {
    video.deviceId = state.deviceVideo
  }

  let constraints = {
    audio,
    video,
  }

  let stream, desktopStream, media
  const showsDesktop = state.deviceVideo === 'desktop'

  if (showsDesktop) {
    let { stream } = await getDisplayMedia()
    if (stream) {
      desktopStream = stream
      delete constraints.video
    }
  }

  media = await getUserMedia(constraints)
  state.error = media.error
  stream = media.stream

  log('Stream', stream, constraints)
  if (stream) {
    let success = true

    let audioTracks = stream.getAudioTracks()
    if (state.deviceAudio && audioTracks?.length <= 0) {
      state.deviceAudio = null
      success = false
    }

    if (desktopStream) {
      setAudioTracks(desktopStream, audioTracks)

      stream = desktopStream
    }

    let videoTracks = stream.getVideoTracks()
    if (state.deviceVideo && videoTracks?.length <= 0) {
      state.deviceVideo = null
      success = false
    }

    // Reset to defaults
    if (!success) {
      await switchMedia()
    }

    if (state.backgroundMode && !desktopStream) {
      blurLib = await import(/* webpackChunkName: 'blur' */ './logic/background')
      stream = await blurLib.startBlurTransform(stream)
      setAudioTracks(stream, audioTracks)
    } else {
      if (blurLib) {
        log('stop blur')
        blurLib.stopBlurTransform()
      }
      blurLib = null
    }

  } else {
    console.error('Media error:', media.error)
  }

  state.stream = stream
  updateStream()
  messages.emit('setLocalStream', state.stream)
}

export async function setup() {
  let rtc
  try {

    rtc = await setupWebRTC(state)

    if (!rtc) {
      alert('Your browser does not support the required WebRTC technologies.\n\nPlease reconnect using an up to date web browser.\n\nThanks for your understanding.')
      location.assign('/ng/')
      return
    }

    let { stream, error } = await getUserMedia()
    state.error = error
    if (stream) {

      // Safari getDevices only works immediately after getUserMedia (bug)
      state.devices = (await getDevices() || []).map(d => {
        log('found device', d)
        return {
          kind: d?.kind?.toLowerCase() || '?',
          deviceId: d?.deviceId,
          label: d.label || 'Unknown name',
        }
      })

    } else {
      console.error('Media error', error)
    }

    state.stream = stream
    updateStream()
    messages.emit('setLocalStream', state.stream)

    if (!PRODUCTION && state.backgroundMode) {
      setTimeout(switchMedia, 250)
    }

  } catch (err) {
    trackException(err)
  }

  return {
    cleanup() {
      rtc?.cleanup()
    },
  }
}

