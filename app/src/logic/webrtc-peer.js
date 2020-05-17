// Copyright (c) 2020 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright

import SimplePeer from 'simple-peer'
import { assert } from '../lib/assert'
import { cloneObject } from '../lib/base'
import { Emitter } from '../lib/emitter'

const log = require('debug')('app:webrtc-peer')

let ctr = 1

export class WebRTCPeer extends Emitter {

  static isSupported() {
    return SimplePeer.WEBRTC_SUPPORT
  }

  constructor({ remote, local, ...opt } = {}) {
    super()

    this.remote = remote
    this.local = local
    this.initiator = opt.initiator
    this.id = 'webrtc-peer' + ctr++

    log('peer', this.id)
    this.setupPeer(opt)
  }

  setupPeer(opt) {
    this.error = null
    this.active = false
    this.stream = null

    let opts = cloneObject({
      ...opt,
      // Allow the peer to receive video, even if it's not sending stream:
      // https://github.com/feross/simple-peer/issues/95
      offerConstraints: {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true,
      },
    })

    log('SimplePeer opts:', opts)

    // https://github.com/feross/simple-peer/blob/master/README.md
    this.peer = new SimplePeer(opts)

    this.peer.on('close', _ => this.close())

    // We receive a connection error
    this.peer.on('error', err => {
      log(`${this.id} | error`, err)
      this.error = err
      this.emit('error', err)
      this.close()
      setTimeout(() => {
        this.setupPeer(opt) // ???
      }, 1000)
    })

    // This means, we received network details (signal) we need to provide
    // the remote peer, so he can set up a connection to us. Usually we will
    // send this over a separate channel like the web socket signaling server
    this.peer.on('signal', data => {
      // log(`${this.id} | signal`, this.initiator)
      this.emit('signal', data)
    })

    // We received data from the peer
    this.peer.on('data', data => {
      log(`${this.id} | data`, data)
      this.emit('data', data)
      this.emit('message', { data }) // Channel compat
    })

    // Connection succeeded
    this.peer.on('connect', event => {
      log(`${this.id} | connect`, event)
      this.active = true
      // p.send('whatever' + Math.random())
      this.emit('connect', event)
    })

    this.peer.on('stream', stream => {
      log('new stream', stream)
      this.stream = stream
      this.emit('stream', stream)
    })

  }

  setStream(stream) {
    if (!this.peer.streams.includes(stream)) {
      try {
        this.peer.streams.forEach(s => this.peer.removeStream(s))
      } catch (err) {
        console.error('Exception setStream remove:', err)
      }
      if (stream) {
        assert(stream, 'Expected a stream')
        this.peer.addStream(stream)
      }
    }
  }

  // We got a signal from the remote peer and will use it now to establish the connection
  signal(data) {
    if (this.peer && !this.peer.destroyed) {
      this.peer.signal(data)
    } else {
      log('Tried to set signal on destroyed peer', this.peer, data)
    }
  }

  postMessage(data) {  // Channel compat
    this.peer.send(data)
  }

  close() {
    this.emit('close')
    this.active = false
    this.peer?.destroy()
  }

}
