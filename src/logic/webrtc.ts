// Copyright (c) 2020-2022 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright

import { WebSocketConnection } from '@zerva/websocket'
import { Emitter, Logger, uuid } from 'zeed'
import { SIGNAL_SERVER_URL } from '../config'
import { assert } from '../lib/assert'
import { state } from '../state'
import { WebRTCPeer } from './webrtc-peer'

const log = Logger('app:webrtc')

// Handles multiple connections, one to each peer
export class WebRTC extends Emitter {
  /** Direct connections via WebRTC. Do not mix up with websocket connections ;)  */
  peerConnections: Record<string, WebRTCPeer> = {}

  peerSettings = {}

  /** The ID that has been assigned to us via websocket/joined. To be used in further communication via websocket. */
  websocketId: string

  websocketChannel: WebSocketConnection

  room: string
  status: any

  static isSupported() {
    return WebRTCPeer.isSupported()
  }

  static async checkStatus() {
    return new Promise((resolve, reject) => {
      const id = uuid()

      const channel = new WebSocketConnection(SIGNAL_SERVER_URL)

      channel.on('connect', () => {
        channel.postMessage(
          JSON.stringify({ name: 'status', data: { ping: id } }),
        )
      })

      channel.on('message', (event) => {
        const { name, data } = JSON.parse(event.data)
        log('check result', name, data)
        if (name === 'status') {
          data.ok = data.pong === id
          if (data.ok) {
            resolve(data)
            return
          }
        }
        reject(new Error('Did not connect to Websocket Server'))
        channel.close()
      })
    })
  }

  channelEmit(name: string, data: any) {
    this.websocketChannel.postMessage(JSON.stringify({ name, data }))
  }

  constructor({
    wrtc = undefined, // wrtc is used for unit testing via node.js
    room = undefined,
    peerSettings = {},
  }: {
    wrtc?: any
    room?: string
    peerSettings?: any
  } = {}) {
    super()
    assert(room, 'room cannot be empty')

    this.room = room
    this.peerSettings = peerSettings

    log('webrtc contacts signal server')

    this.websocketChannel = new WebSocketConnection(SIGNAL_SERVER_URL)

    const methods = {
      remove: (id: string) => {
        const peer = this.peerConnections[id]
        if (peer) {
          peer.close()
          delete this.peerConnections[id]
          this.updateStatus()
          this.emit('disconnected', { peer })
        }
      },

      joined: ({ room, peers, self }) => {
        log('joined', state, room, peers)

        this.websocketId = self

        for (let i = 0; i < peers.length; i++) {
          const remote = peers[i]
          this.handlePeer({
            remote,
            local: this.websocketId,
            initiator: true,
            wrtc,
          })
        }

        this.updateStatus()
      },

      signal: ({ from, signal }) => { // to, initiator
        // log('received signal', from, to === local, initiator)
        // If we are not already connected, do it now
        let peer = this.peerConnections[from]
        if (!peer) {
          peer = this.handlePeer({
            remote: from,
            local: this.websocketId,
            initiator: false,
            wrtc,
          })
        }
        peer.signal(signal)
        this.updateStatus()
      },

      status: ({ info }) => {
        log(`status = ${info}`)
        this.status = info
      },

      error: (info: any) => {
        log.error('websocket error server side:', info)
      },
    }

    this.websocketChannel.on('message', (event) => {
      try {
        const { name, data } = JSON.parse(event.data)
        log(`onMessage: ${name}`)
        methods[name]?.(data)
      }
      catch (err) {
        log.error('onMessage error:', err)
      }
    })

    // this.channel.on("disconnect", () => {
    //   log("channel disconnect")
    // connected.value = false
    // })

    this.websocketChannel.on('close', () => {
      //   log("channel close")
      //   connected.value = false
    })

    this.websocketChannel.on('connect', () => {
      log('onConnect')
      // this.channelEmit("status", { hello: "world" })
      this.channelEmit('join', { room })
    })
  }

  forEachPeer(fn: any) {
    Object.values(this.peerConnections).forEach(fn)
  }

  updateStatus() {
    const status = Object.values(this.peerConnections).map((peer) => {
      const { active, initiator, local, remote, error } = peer as any
      return {
        active,
        initiator,
        local,
        remote,
        error,
        peer,
      }
    })
    this.emit('status', { status })
  }

  getPeer(id: string) {
    return this.peerConnections[id] || null
  }

  // @ts-expect-error xxx
  handlePeer({ remote, wrtc, local, initiator = false } = {}) {
    const peer = new WebRTCPeer({
      local,
      remote,
      // @ts-expect-error xxx
      initiator,
      wrtc,
      room: this.room,
      ...this.peerSettings,
    })

    this.peerConnections[remote] = peer

    // We received the local signal (i.e. network location description) that
    // we will now send via web socket signaling server to the remote peer
    peer.on('signal', (signal) => {
      // log('received peer signal', remote)
      this.channelEmit('signal', {
        from: local,
        to: remote,
        signal,
        initiator,
      })
    })

    // The full connection is established, from now on we can exchange data
    peer.on('connect', () => {
      this.emit('connected', { peer })
      this.updateStatus()
    })

    // A message from the remote peer
    peer.on('data', (data) => {
      // depr
      const { type, ...msg } = JSON.parse(data)
      this.emit(type, msg)
    })

    peer.on('message', (data) => {
      this.emit('message', data) // Channel compat
    })

    peer.on('stream', _ => this.updateStatus())
    peer.on('track', _ => this.updateStatus())

    // Listening to userInfo and emitting back with local peer info
    this.on('userInfo', (data) => {
      this.emit('userInfoWithPeer', { peer, data })
    })

    return peer
  }

  postMessage(data) {
    // Channel compat
    this.forEachPeer((peer) => {
      peer.postMessage(data)
    })
  }

  send(type, msg = {}) {
    // depr
    this.postMessage(JSON.stringify({ ...msg, type }))
  }

  close() {
    this.forEachPeer(peer => peer.close())
    this.peerConnections = {}
    this.websocketChannel.close()
  }

  async cleanup() {
    // await super.cleanup()
    this.close()
  }
}
