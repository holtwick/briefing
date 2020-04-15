// https://webrtchacks.com/limit-webrtc-bandwidth-sdp/

import { messages } from '../lib/emitter'

const log = require('debug')('app:connection')

function setMediaBitrate(sdp, media, bitrate) {
  let lines = sdp.split('\n')
  let line = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].indexOf('m=' + media) === 0) {
      line = i
      break
    }
  }
  if (line === -1) {
    // log('Could not find the m line for', media)
    return sdp
  }
  // log('Found the m line for', media, 'at line', line)

  // Pass the m line
  line++

  // Skip i and c lines
  while (lines[line].indexOf('i=') === 0 || lines[line].indexOf('c=') === 0) {
    line++
  }

  // If we're on a b line, replace it
  if (lines[line].indexOf('b') === 0) {
    // log('Replaced b line at line', line)
    lines[line] = 'b=AS:' + bitrate
    return lines.join('\n')
  }

  // Add a new b line
  // log('Adding new b line before line', line)
  let newLines = lines.slice(0, line)
  newLines.push('b=AS:' + bitrate)
  newLines = newLines.concat(lines.slice(line, lines.length))
  return newLines.join('\n')
}

// function isFirefox() {
//   return navigator?.userAgent?.includes('Firefox/')
// }
//
// function updateBandwidthRestriction(sdp, bandwidth) {
//   let modifier = 'AS'
//   if (isFirefox()) {
//     bandwidth = (bandwidth >>> 0) * 1000
//     modifier = 'TIAS'
//   }
//   if (sdp.indexOf('b=' + modifier + ':') === -1) {
//     // insert b= after c= line.
//     sdp = sdp.replace(/c=IN (.*)\r\n/, 'c=IN $1\r\nb=' + modifier + ':' + bandwidth + '\r\n')
//   } else {
//     sdp = sdp.replace(new RegExp('b=' + modifier + ':.*\r\n'), 'b=' + modifier + ':' + bandwidth + '\r\n')
//   }
//   return sdp
// }

function removeBandwidthRestriction(sdp) {
  return sdp.replace(/b=AS:.*\r\n/, '').replace(/b=TIAS:.*\r\n/, '')
}

export async function setupWebRTC(state) {
  let { WebRTC } = await import(/* webpackChunkName: 'webrtc' */ './webrtc')

  if (!WebRTC.isSupported()) return null

  let config = {
    iceTransportPolicy: 'all',
    reconnectTimer: 3000,
    iceServers: [{
      urls: 'stun:stun.brie.fi:5349',
    }, {
      urls: 'turn:stun.brie.fi:5349',
      username: 'brie',
      credential: 'fi',
    }],
  }

  // if (localStorage.stun) {
  //   config.iceServers = [{
  //     urls: localStorage.stun,
  //   }]
  // }

  const webrtc = new WebRTC({
    room: state.room,
    peerSettings: {
      trickle: true,
      sdpTransform: sdp => {
        log('sdpTransform', state.bandwidth) // , sdp)
        let newSDP = sdp
        if (state.bandwidth) {
          //   newSDP = updateBandwidthRestriction(sdp, 10)
          // log('Old SDP', newSDP)
          newSDP = setMediaBitrate(newSDP, 'video', 233)
          newSDP = setMediaBitrate(newSDP, 'audio', 80)
          // log('New SDP', newSDP)
        } else {
          newSDP = removeBandwidthRestriction(sdp)
        }
        return newSDP
      },
      config,
    },
  })

  webrtc.on('status', info => {
    state.status = info.status
  })

  webrtc.on('connected', ({ peer }) => {
    log('connected', peer)
    if (state.stream) {
      peer.setStream(state.stream)
    }
  })

  messages.on('setLocalStream', stream => {
    webrtc.forEachPeer(peer => {
      peer.setStream(stream)
    })
  })

  messages.on('negotiateBandwidth', stream => {
    webrtc.forEachPeer(peer => {
      peer.peer.negotiate()
    })
  })

  // async function getStats(peer) {
  //   let bytes = 0
  //   let timestamp = 0
  //   return new Promise(resolve => {
  //     peer?.peer?.getStats((_, reports) => {
  //       reports.forEach(report => {
  //         if (report.type === 'outbound-rtp') {
  //           if (report.isRemote) return
  //           bytes += report.bytesSent
  //           timestamp = report.timestamp
  //           // console.log('bb', bytes, prevBytes, timestamp, prevTimestamp)
  //           resolve({ bytes, timestamp })
  //         }
  //       })
  //     })
  //   })
  // }
  //
  // // https://github.com/webrtc/samples/blob/gh-pages/src/content/peerconnection/bandwidth/js/main.js#L253
  // let prevTimestamp = 0
  // let prevBytes = 0
  //
  // if (!!localStorage.debug) {
  //   let el = document.createElement('div')
  //   el.className = 'bandwidth'
  //   document.body.appendChild(el)
  //
  //   setInterval(async () => {
  //     // const now = performance.now()
  //     let results = await Promise.all(Object.values(webrtc.peerConnections).map(p => getStats(p)))
  //     let bytes = results.reduce((acc, curr) => curr.bytes + acc, 0)
  //     let timestamp = results?.[0]?.timestamp
  //     const bitrate = 8 * (bytes - prevBytes) / (timestamp - prevTimestamp)
  //     el.textContent = bitrate.toFixed(2) + ' Bit/s'
  //     prevBytes = bytes
  //     prevTimestamp = timestamp
  //   }, 1000)
  // }

  return webrtc
}
