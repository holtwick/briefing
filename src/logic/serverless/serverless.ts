import { Logger, messages } from 'zeed'
import { SERVERLESS_API_ID } from '../../config'
import { joinRoom, selfId } from './torrent'

const log = Logger('serverless')

interface State {
  room: string
  status: any[]
  stream?: MediaStream
}

/** See https://github.com/dmotz/trystero */
export function useServerless(state: State) {
  const roomName = state.room

  const appId = SERVERLESS_API_ID
  const serverlessRoom = joinRoom({
    appId,

    // this is no real protection, but it avoid clear text transfer
    // of SDP data, see https://github.com/dmotz/trystero#encryption
    password: `${appId}|${roomName}`,
  }, roomName)

  // Remote messages

  // const local = selfId

  function publishLocalStream(stream: MediaStream) {
    serverlessRoom.addStream(stream)
  }

  serverlessRoom.onPeerJoin((peerId: string) => {
    log(`joined ${peerId}}`)
    if (state.stream)
      publishLocalStream(state.stream)
  })

  serverlessRoom.onPeerLeave((peerId: string) => {
    log(`leave ${peerId}}`)
  })

  serverlessRoom.onPeerStream((stream: MediaStream, peerId: string) => {
    log('stream', peerId, stream)
    state.status = [...state.status, {
      remote: peerId,
      peer: {
        id: peerId,
        name: peerId, // todo
        stream,
      },
    }]
  })

  // webrtc.on('status', (info) => {
  //   log('status', info.status)
  //   // hack somehow Vue doesn't like the real WebRtcPeer object any more
  //   const status = info.status.map((p) => {
  //     const pp = cloneObject(p)
  //     pp.peer.stream = p.peer.stream
  //     return pp
  //   })
  //   state.status = status
  // })

  // webrtc.on('connected', ({ peer }) => {
  //   log('connected', peer)
  //   if (state.stream)
  //     peer.setStream(state.stream)

  //   messages.emit('requestUserInfo')
  // })

  // // Getting Client's Info with Local Peer Info
  // webrtc.on('userInfoWithPeer', ({ peer, data }) => {
  //   webrtc.send('userInfoUpdate', { peer, data })
  // })

  // // Listening to Remote Client's Info with its Local Peer Info and
  // // emitting to Local Client
  // webrtc.on('userInfoUpdate', ({ peer, data }) => {
  //   messages.emit('userInfoUpdate', { peer, data })
  // })

  // // Listening to new messages from Remote Client and emitting to Local client
  // webrtc.on('chatMessage', (info) => {
  //   messages.emit('newMessage', info)
  // })

  // Local messages

  messages.on('setLocalStream', (stream) => {
    publishLocalStream(stream)
  })

  // Send a new message to all peers
  // messages.on('chatMessage', ({ name, message, time }) => {
  //   // serverlessRoom.makeAction('chat').
  //   // webrtc.send('chatMessage', { name, message, time })
  // })

  // // Listen to local userInfo and emit to webrtc for getting peer info
  // messages.on('userInfo', (data) => {
  //   // webrtc.emit('userInfo', { data })
  // })
}
