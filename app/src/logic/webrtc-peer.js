// Copyright (c) 2020-2021 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright

import SimplePeer from "simple-peer"
import { cloneObject } from "../lib/base"
import { Emitter } from "../lib/emitter"
import { trackException } from "../bugs"
import {
  getFingerprintString,
  sha256Messages,
  splitByNChars,
} from "./fingerprint"

import { Logger } from "../lib/logger"
import { encodeBase32 } from "zeed"
const log = Logger("app:webrtc-peer")

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
    this.room = opt.room || ""
    this.id = "webrtc-peer" + ctr++
    this.fingerprint = ""
    this.name = ""

    log("peer", this.id)
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

    log("SimplePeer opts:", opts)

    // https://github.com/feross/simple-peer/blob/master/README.md
    this.peer = new SimplePeer(opts)

    this.peer.on("close", (_) => this.close())

    // We receive a connection error
    this.peer.on("error", (err) => {
      log(`${this.id} | error`, err)
      this.error = err
      this.emit("error", err)
      this.close()
      setTimeout(() => {
        this.setupPeer(opt) // ???
      }, 1000)
    })

    // This means, we received network details (signal) we need to provide
    // the remote peer, so he can set up a connection to us. Usually we will
    // send this over a separate channel like the web socket signaling server
    this.peer.on("signal", (data) => {
      // log(`${this.id} | signal`, this.initiator)
      this.emit("signal", data)
    })

    this.peer.on("signalingStateChange", async (_) => {
      const fpl =
        getFingerprintString(this.peer?._pc?.currentLocalDescription?.sdp) || ""
      const fpr =
        getFingerprintString(this.peer?._pc?.currentRemoteDescription?.sdp) ||
        ""
      if (fpl && fpr) {
        const digest = await sha256Messages(this.room, fpl, fpr)
        this.fingerprint = splitByNChars(encodeBase32(digest), 4)
      } else {
        this.fingerprint = ""
      }
    })

    // We received data from the peer
    this.peer.on("data", (data) => {
      log(`${this.id} | data`, data)
      this.emit("data", data)
      this.emit("message", { data }) // Channel compat
    })

    // Connection succeeded
    this.peer.on("connect", (event) => {
      log(`${this.id} | connect`, event)
      this.active = true
      // p.send('whatever' + Math.random())
      this.emit("connect", event)
    })

    this.peer.on("stream", (stream) => {
      log("new stream", stream)
      this.stream = stream
      this.emit("stream", stream)
    })
  }

  setStream(stream) {
    if (!this.peer.streams.includes(stream)) {
      try {
        this.peer.streams.forEach((s) => {
          try {
            this.peer.removeStream(s)
          } catch (err) {
            trackException(err)
          }
        })
      } catch (err) {
        trackException(err)
      }
      if (stream) {
        try {
          this.peer.addStream(stream)
        } catch (err) {
          trackException(err)
        }
      }
    }
  }

  // We got a signal from the remote peer and will use it now to establish the connection
  signal(data) {
    if (this.peer && !this.peer.destroyed) {
      // To prove that manipulated fingerprints will result in refusing connection
      // if (data?.sdp) {
      //   data.sdp = data.sdp.replace(/(fingerprint:.*?):(\w\w):/, '$1:00:')
      // }
      this.peer.signal(data)
    } else {
      log("Tried to set signal on destroyed peer", this.peer, data)
    }
  }

  postMessage(data) {
    // Channel compat
    this.peer.send(data)
  }

  close() {
    this.emit("close")
    this.active = false
    this.peer?.destroy()
  }
}
