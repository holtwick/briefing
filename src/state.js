/* eslint-disable @typescript-eslint/no-use-before-define */

import { Logger, messages } from 'zeed'
import { trackException, trackSilentException } from './bugs'
import {
  MUTE_AUDIO,
  MUTE_VIDEO,
  ROOM_PATH,
  SHOW_CHAT,
  SHOW_FULLSCREEN,
  SHOW_INVITATION,
  SHOW_INVITATION_HINT,
  SHOW_SETTINGS,
  SHOW_SHARE,
} from './config'
import { isTrue, objectSnapshot } from './lib/base.js'
import { postMessageToParent } from './lib/iframe.js'
import { normalizeName } from './lib/names'
import { setupWebRTC } from './logic/connection'
import {
  defaultAudioConstraints,
  defaultVideoConstraints,
  getDevices,
  getDisplayMedia,
  getUserMedia,
  setAudioTracks,
} from './logic/stream'

const log = Logger('app:state')

const screenshots = false

// ROOM

const isOriginalBriefing = ROOM_PATH === '/ng/'

function getRoomByCurrentLocation() {
  const pathname = location.pathname
  log('getRoomByCurrentLocation', pathname)
  if (isOriginalBriefing) {
    const m = /^\/ngs?\/(.*?)$/gi.exec(pathname)
    return m && m[1]
  }
  else {
    if (pathname.startsWith(ROOM_PATH))
      return pathname.substr(ROOM_PATH.length)
  }
}

let room = getRoomByCurrentLocation()

const hash = location.hash.slice(1)
if (hash)
  room = normalizeName(hash)

log.info('Room =', room)

// Normalize URL matching to room
try {
  if (hash) {
    history.pushState(null, null, ROOM_PATH + room)
  }
  else {
    const pathname = location.pathname
    if (
      pathname === '/'
    || room === ''
    || room === null
    || (isOriginalBriefing && room === '/ng')
    ) {
      room = null
      history.pushState(null, null, isOriginalBriefing ? '/ng' : '/')
    }
    else {
      const newRoom = normalizeName(room)
      if (room !== newRoom) {
        room = newRoom
        history.pushState(null, null, ROOM_PATH + newRoom)
      }
    }
  }
}
catch (err) {
  trackSilentException(err)
}

// Track URL changes and fix room
window.addEventListener('popstate', (event) => {
  state.room = getRoomByCurrentLocation()
  log('popstate', state.room, event)
})

// Hack to avoid more complex routing for now ;)
const embedDemo = room === 'embed-demo'
if (embedDemo)
  room = null

log.info('Room =', room, 'Embed Demo =', embedDemo)

// STATE

const urlParams = new URLSearchParams(window.location.search)

export const state = {
  // ID of this room
  room,

  // Video stream of the local user without sound
  stream: null,

  // WebRTC connection status, containing peer info
  status: {},

  bandwidth: false,
  fill: true,

  backgroundMode: '',
  backgroundImageURL: null,
  backgroundAuthor: '',
  backgroundURL: '',

  muteVideo: !isTrue(urlParams.get('video') ?? !MUTE_VIDEO, true),
  muteAudio: !isTrue(urlParams.get('audio') ?? !MUTE_AUDIO, true),

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
  requestBugTracking: false,
  embedDemo,

  showInviteOnStart: isTrue(urlParams.get('invite'), SHOW_INVITATION),
  showInviteHint: isTrue(urlParams.get('invite'), SHOW_INVITATION_HINT),
  showFullscreen: isTrue(urlParams.get('fs'), SHOW_FULLSCREEN),
  showSettings: isTrue(urlParams.get('prefs'), SHOW_SETTINGS),
  showShare: isTrue(urlParams.get('share'), SHOW_SHARE),
  showChat: isTrue(urlParams.get('chat'), SHOW_CHAT),

  screenshots,

  original: isOriginalBriefing,
}

messages.on('requestBugTracking', _ => (state.requestBugTracking = true))

messages.on('updateStream', updateStream)

function updateStream() {
  try {
    if (state.stream) {
      state.stream
        ?.getVideoTracks()
        .forEach(t => (t.enabled = !state?.muteVideo))
      state.stream
        ?.getAudioTracks()
        .forEach(t => (t.enabled = !state?.muteAudio))
    }
  }
  catch (err) {
    trackException(err)
  }
}

messages.on('switchMedia', switchMedia)

async function switchMedia() {
  // See following links for detail:
  // https://github.com/holtwick/briefing/pull/131
  // https://stackoverflow.com/questions/55953038/why-is-the-ended-event-not-firing-for-this-mediastreamtrack/55960232#55960232

  state.stream?.getTracks().forEach((track) => {
    if (typeof track.stop === 'function' && track.readyState !== 'ended') {
      track.stop()
      // Manually emit the event, some webview implement doesn't fire it
      const trackStoppedEvt = new MediaStreamTrackEvent('ended', { track })
      track.dispatchEvent(trackStoppedEvt)
    }
  })

  const audio = {
    ...defaultAudioConstraints,
  }

  if (state.deviceAudio)
    audio.deviceId = state.deviceAudio

  const video = {
    ...defaultVideoConstraints,
  }

  if (state.deviceVideo)
    video.deviceId = state.deviceVideo

  const constraints = {
    audio,
    video,
  }

  let stream, desktopStream
  const showsDesktop = state.deviceVideo === 'desktop'

  if (showsDesktop) {
    const { stream } = await getDisplayMedia()
    if (stream) {
      desktopStream = stream
      delete constraints.video
    }
  }

  const media = await getUserMedia(constraints)
  state.error = media.error
  stream = media.stream

  log('Stream', stream, constraints)
  if (stream) {
    let success = true

    const audioTracks = stream.getAudioTracks()
    if (state.deviceAudio && audioTracks?.length <= 0) {
      state.deviceAudio = null
      success = false
    }

    if (desktopStream) {
      setAudioTracks(desktopStream, audioTracks)

      stream = desktopStream
    }

    const videoTracks = stream.getVideoTracks()
    if (state.deviceVideo && videoTracks?.length <= 0) {
      state.deviceVideo = null
      success = false
    }

    // Reset to defaults
    if (!success)
      await switchMedia()
  }
  else {
    log.error('Media error:', media.error)
  }

  state.stream = stream
  updateStream()
  messages.emit('setLocalStream', state.stream)
}

export async function setup() {
  log('Setup state')
  let rtc
  try {
    rtc = await setupWebRTC(state)

    if (!rtc) {
      // eslint-disable-next-line no-alert
      alert(
        'Your browser does not support the required WebRTC technologies.\n\nPlease reconnect using an up to date web browser.\n\nThanks for your understanding.',
      )
      location.assign(ROOM_PATH)
      return
    }

    const { stream, error } = await getUserMedia()
    state.error = error
    if (stream) {
      // Safari getDevices only works immediately after getUserMedia (bug)
      state.devices = ((await getDevices()) || []).map((d) => {
        log('found device', d)
        return {
          kind: d?.kind?.toLowerCase() || '?',
          deviceId: d?.deviceId,
          label: d.label || 'Unknown name',
        }
      })
    }
    else {
      log.error('Media error', error)
    }

    state.stream = stream
    updateStream()
    messages.emit('setLocalStream', state.stream)

    if (!state.backgroundMode)
      setTimeout(switchMedia, 250)
  }
  catch (err) {
    trackException(err)
  }

  return {
    cleanup() {
      rtc?.cleanup()
    },
  }
}

// Communicate to parent

let lastUpdateSnapshot = ''
let counter = 0

export function postUpdateToIframeParent() {
  setTimeout(() => {
    try {
      const update = {
        room: state.room,
        error: state.error,
        peers: Array.from(state.status || []).map(info => ({
          id: info.id,
          active: info.active,
          initiator: info.initiator,
          error: info.error,
          fingerprint: info.fingerprint,
        })),
        backgroundMode: state.backgroundMode,
        muteVideo: state.muteVideo,
        muteAudio: state.muteAudio,
        maximized: state.maximized,
      }
      const snapshot = objectSnapshot(update)
      // log.log("snapshot", snapshot)
      if (snapshot !== lastUpdateSnapshot) {
        lastUpdateSnapshot = snapshot
        update.counter = counter++
        postMessageToParent('status', update)
      }
    }
    catch (err) {
      log.error(err)
    }
  }, 0)
}
