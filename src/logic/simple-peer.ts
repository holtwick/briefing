// Original source: https://github.com/feross/simple-peer - MIT License

import { Emitter, Logger } from 'zeed'

function queueMicrotask(task: Function) {
  setTimeout(task, 0)
}

const log = Logger('simple-peer')
// log.level = LogLevel.info

const MAX_BUFFERED_AMOUNT = 64 * 1024
const ICECOMPLETE_TIMEOUT = 5 * 1000
const CHANNEL_CLOSING_TIMEOUT = 5 * 1000

function randombytes(size: number): Uint8Array {
  const array = new Uint8Array(size)
  for (let i = 0; i < size; i++)
    array[i] = (Math.random() * 256) | 0

  return array
}

function toHexString(byteArray: Uint8Array): string {
  return Array.prototype.map
    .call(byteArray, (byte: number) => {
      return (`0${(byte & 0xFF).toString(16)}`).slice(-2)
    })
    .join('')
}

function getBrowserRTC() {
  if (typeof globalThis === 'undefined')
    return null
  const wrtc = {
    RTCPeerConnection:
      globalThis.RTCPeerConnection
      || globalThis.mozRTCPeerConnection
      || globalThis.webkitRTCPeerConnection,
    RTCSessionDescription:
      globalThis.RTCSessionDescription
      || globalThis.mozRTCSessionDescription
      || globalThis.webkitRTCSessionDescription,
    RTCIceCandidate:
      globalThis.RTCIceCandidate
      || globalThis.mozRTCIceCandidate
      || globalThis.webkitRTCIceCandidate,
  }
  if (!wrtc.RTCPeerConnection)
    return null
  return wrtc
}

function errCode(err: Error, code: string) {
  Object.defineProperty(err, 'code', {
    value: code,
    enumerable: true,
    configurable: true,
  })
  return err
}

// HACK: Filter trickle lines when trickle is disabled #354
function filterTrickle(sdp: string) {
  return sdp.replace(/a=ice-options:trickle\s\n/g, '')
}

// WebRTC peer connection.
export class Peer extends Emitter<{
  signal(value: any): void
  close(): void
  _iceComplete(): void
  iceTimeout(): void
  iceStateChange(iceConnectionState: any, iceGatheringState: any): void
  error(error: any): void
  negotiated(): void
  signalingStateChange(state: any): void
  disconnect(): void
  connect(): void
  data(data: Uint8Array): void
  track(a: any, b: any): void
  stream(stream: MediaStream): void
}> {
  _id: string
  _doDebug: any
  channelName: any
  initiator: any
  channelConfig: any
  channelNegotiated: any
  config: any
  offerOptions: any
  answerOptions: any
  sdpTransform: any
  trickle: any
  allowHalfTrickle: any
  iceCompleteTimeout: any
  destroyed: boolean
  destroying: boolean
  _connected: boolean
  remoteAddress: any
  remoteFamily: any
  remotePort: any
  localAddress: any
  localFamily: any
  localPort: any
  _wrtc: any
  _pcReady: boolean
  _channelReady: boolean
  _iceComplete: boolean
  _iceCompleteTimer: any
  _channel: any
  _pendingCandidates: any[]
  _isNegotiating: boolean
  _firstNegotiation: boolean
  _batchedNegotiation: boolean
  _queuedNegotiation: boolean
  _sendersAwaitingStable: any[]
  _senderMap: Map<any, any>
  _closingInterval: any
  _remoteTracks: any[]
  _remoteStreams: any[]
  _chunk: any
  _cb: any
  _interval: any
  _pc: any
  _isReactNativeWebrtc = false
  _connecting: any

  static WEBRTC_SUPPORT: boolean

  constructor(opts: any = {}) {
    super()
    this._id = toHexString(randombytes(4)).slice(0, 7)
    log('id', this._id)
    this._doDebug = opts.debug
    log('new peer %o', opts)

    this.channelName = opts.initiator
      ? opts.channelName || toHexString(randombytes(20))
      : null

    this.initiator = opts.initiator || false
    this.channelConfig = opts.channelConfig || {}
    this.channelNegotiated = this.channelConfig.negotiated
    this.config = Object.assign(
      {},
      {
        // iceServers: [
        //   {
        //     urls: [
        //       "stun:stun.l.google.com:19302",
        //       "stun:global.stun.twilio.com:3478",
        //     ],
        //   },
        // ],
        sdpSemantics: 'unified-plan',
      },
      opts.config,
    )
    this.offerOptions = opts.offerOptions || {}
    this.answerOptions = opts.answerOptions || {}
    this.sdpTransform = opts.sdpTransform || ((sdp: any) => sdp)
    this.trickle = opts.trickle !== undefined ? opts.trickle : true
    this.allowHalfTrickle
      = opts.allowHalfTrickle !== undefined ? opts.allowHalfTrickle : false
    this.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT

    this.destroyed = false
    this.destroying = false
    this._connected = false

    this.remoteAddress = undefined
    this.remoteFamily = undefined
    this.remotePort = undefined
    this.localAddress = undefined
    this.localFamily = undefined
    this.localPort = undefined

    this._wrtc
      = opts.wrtc && typeof opts.wrtc === 'object' ? opts.wrtc : getBrowserRTC()

    if (!this._wrtc) {
      if (typeof window === 'undefined') {
        throw errCode(
          new Error(
            'No WebRTC support: Specify `opts.wrtc` option in this environment',
          ),
          'ERR_WEBRTC_SUPPORT',
        )
      }
      else {
        throw errCode(
          new Error('No WebRTC support: Not a supported browser'),
          'ERR_WEBRTC_SUPPORT',
        )
      }
    }

    this._pcReady = false
    this._channelReady = false
    this._iceComplete = false // ice candidate trickle done (got null candidate)
    this._iceCompleteTimer = null // send an offer/answer anyway after some timeout
    this._channel = null
    this._pendingCandidates = []

    this._isNegotiating = false // is this peer waiting for negotiation to complete?
    this._firstNegotiation = true
    this._batchedNegotiation = false // batch synchronous negotiations
    this._queuedNegotiation = false // is there a queued negotiation request?
    this._sendersAwaitingStable = []
    this._senderMap = new Map()
    this._closingInterval = null

    this._remoteTracks = []
    this._remoteStreams = []

    this._chunk = null
    this._cb = null
    this._interval = null

    try {
      this._pc = new this._wrtc.RTCPeerConnection(this.config)
      log('config', this.config)
    }
    catch (err: any) {
      queueMicrotask(() => this.destroy(errCode(err, 'ERR_PC_CONSTRUCTOR')))
      return
    }

    // We prefer feature detection whenever possible, but sometimes that's not
    // possible for certain implementations.
    this._isReactNativeWebrtc = typeof this._pc._peerConnectionId === 'number'

    this._pc.oniceconnectionstatechange = () => {
      this._onIceStateChange()
    }
    this._pc.onicegatheringstatechange = () => {
      this._onIceStateChange()
    }
    this._pc.onconnectionstatechange = () => {
      this._onConnectionStateChange()
    }
    this._pc.onsignalingstatechange = () => {
      this._onSignalingStateChange()
    }
    this._pc.onicecandidate = (event: any) => {
      this._onIceCandidate(event)
    }

    // Other spec events, unused by this implementation:
    // - onconnectionstatechange
    // - onicecandidateerror
    // - onfingerprintfailure
    // - onnegotiationneeded

    if (this.initiator || this.channelNegotiated) {
      this._setupData({
        channel: this._pc.createDataChannel(
          this.channelName,
          this.channelConfig,
        ),
      })
    }
    else {
      this._pc.ondatachannel = (event: any) => {
        this._setupData(event)
      }
    }

    const streams = opts.streams || (opts.stream ? [opts.stream] : []) // support old "stream" option
    if (streams) {
      streams.forEach((stream: any) => {
        this.addStream(stream)
      })
    }
    this._pc.ontrack = (event: any) => {
      this._onTrack(event)
    }

    log('initial negotiation')
    this._needsNegotiation()
  }

  get bufferSize() {
    return (this._channel && this._channel.bufferedAmount) || 0
  }

  // HACK: it's possible channel.readyState is "closing" before peer.destroy() fires
  // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
  get connected() {
    return this._connected && this._channel.readyState === 'open'
  }

  address() {
    return {
      port: this.localPort,
      family: this.localFamily,
      address: this.localAddress,
    }
  }

  signal(data: any) {
    if (this.destroyed) {
      throw errCode(
        new Error('cannot signal after peer is destroyed'),
        'ERR_SIGNALING',
      )
    }
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data)
      }
      catch (err) {
        data = {}
      }
    }

    if (data.renegotiate && this.initiator) {
      log('got request to renegotiate')
      this._needsNegotiation()
    }
    if (data.transceiverRequest && this.initiator) {
      log('got request for transceiver')
      this.addTransceiver(
        data.transceiverRequest.kind,
        data.transceiverRequest.init,
      )
    }
    if (data.candidate) {
      if (this._pc.remoteDescription && this._pc.remoteDescription.type)
        this._addIceCandidate(data.candidate)
      else
        this._pendingCandidates.push(data.candidate)
    }
    if (data.sdp) {
      this._pc
        .setRemoteDescription(new this._wrtc.RTCSessionDescription(data))
        .then(() => {
          if (this.destroyed)
            return

          this._pendingCandidates.forEach((candidate) => {
            this._addIceCandidate(candidate)
          })
          this._pendingCandidates = []

          if (this._pc.remoteDescription.type === 'offer')
            this._createAnswer()
        })
        .catch((err: any) => {
          this.destroy(errCode(err, 'ERR_SET_REMOTE_DESCRIPTION'))
        })
    }
    if (
      !data.sdp
      && !data.candidate
      && !data.renegotiate
      && !data.transceiverRequest
    ) {
      this.destroy(
        errCode(
          new Error('signal() called with invalid signal data'),
          'ERR_SIGNALING',
        ),
      )
    }
  }

  _addIceCandidate(candidate: any) {
    const iceCandidateObj = new this._wrtc.RTCIceCandidate(candidate)
    this._pc.addIceCandidate(iceCandidateObj).catch((err: any) => {
      if (
        !iceCandidateObj.address
        || iceCandidateObj.address.endsWith('.local')
      )
        log.warn('Ignoring unsupported ICE candidate.', iceCandidateObj)
      else
        this.destroy(errCode(err, 'ERR_ADD_ICE_CANDIDATE'))
    })
  }

  /**
   * Send text/binary data to the remote peer.
   */
  send(chunk: ArrayBufferView | ArrayBuffer | string | Blob) {
    this._channel.send(chunk)
  }

  /**
   * Add a Transceiver to the connection.
   */
  addTransceiver(kind: string, init?: RTCRtpTransceiverInit) {
    log('addTransceiver()')

    if (this.initiator) {
      try {
        this._pc.addTransceiver(kind, init)
        this._needsNegotiation()
      }
      catch (err: any) {
        this.destroy(errCode(err, 'ERR_ADD_TRANSCEIVER'))
      }
    }
    else {
      this.emit('signal', {
        // request initiator to renegotiate
        type: 'transceiverRequest',
        transceiverRequest: { kind, init },
      })
    }
  }

  activeStreams: Record<string, MediaStream | null> = {}

  get streams(): MediaStream[] {
    return Object.values(this.activeStreams).filter(v => v != null)
  }

  hasStream(stream: MediaStream): boolean {
    return stream && this.activeStreams[stream.id] != null
  }

  /**
   * Add a MediaStream to the connection.
   */
  addStream(stream: MediaStream) {
    if (stream == null)
      return
    if (!this.hasStream(stream)) {
      this.activeStreams[stream.id] = stream
      stream.getTracks().forEach((track: any) => {
        this.addTrack(track, stream)
      })
    }
  }

  setStream(stream: MediaStream) {
    if (stream == null)
      return
    for (const activeStream of this.streams) {
      if (activeStream.id !== stream.id)
        this.removeStream(activeStream)
    }

    if (!this.hasStream(stream))
      this.addStream(stream)
  }

  /**
   * Add a MediaStreamTrack to the connection.
   */
  addTrack(track: MediaStreamTrack, stream: MediaStream) {
    log('addTrack()')
    if (track == null)
      return

    const submap = this._senderMap.get(track) || new Map() // nested Maps map [track, stream] to sender
    let sender = submap.get(stream)
    if (!sender) {
      sender = this._pc.addTrack(track, stream)
      submap.set(stream, sender)
      this._senderMap.set(track, submap)
      this._needsNegotiation()
    }
    else if (sender.removed) {
      throw errCode(
        new Error(
          'Track has been removed. You should enable/disable tracks that you want to re-add.',
        ),
        'ERR_SENDER_REMOVED',
      )
    }
    else {
      throw errCode(
        new Error('Track has already been added to that stream.'),
        'ERR_SENDER_ALREADY_ADDED',
      )
    }
  }

  /**
   * Replace a MediaStreamTrack by another in the connection.
   */
  replaceTrack(
    oldTrack: MediaStreamTrack,
    newTrack: MediaStreamTrack,
    stream: MediaStream,
  ) {
    log('replaceTrack()')

    const submap = this._senderMap.get(oldTrack)
    const sender = submap ? submap.get(stream) : null
    if (!sender) {
      throw errCode(
        new Error('Cannot replace track that was never added.'),
        'ERR_TRACK_NOT_ADDED',
      )
    }
    if (newTrack)
      this._senderMap.set(newTrack, submap)

    if (sender.replaceTrack != null) {
      sender.replaceTrack(newTrack)
    }
    else {
      this.destroy(
        errCode(
          new Error('replaceTrack is not supported in this browser'),
          'ERR_UNSUPPORTED_REPLACETRACK',
        ),
      )
    }
  }

  /**
   * Remove a MediaStreamTrack from the connection.
   */
  removeTrack(track: MediaStreamTrack, stream: MediaStream) {
    log('removeSender()')

    const submap = this._senderMap.get(track)
    const sender = submap ? submap.get(stream) : null
    if (!sender) {
      log.warn('Cannot remove track that was never added.')
      // throw errCode(
      //   new Error('Cannot remove track that was never added.'),
      //   'ERR_TRACK_NOT_ADDED',
      // )
      return
    }

    try {
      sender.removed = true
      this._pc.removeTrack(sender)
    }
    catch (err: any) {
      if (err.name === 'NS_ERROR_UNEXPECTED')
        this._sendersAwaitingStable.push(sender) // HACK: Firefox must wait until (signalingState === stable) https://bugzilla.mozilla.org/show_bug.cgi?id=1133874
      else
        this.destroy(errCode(err, 'ERR_REMOVE_TRACK'))
    }
    this._needsNegotiation()
  }

  /**
   * Remove a MediaStream from the connection.
   */
  removeStream(stream: MediaStream) {
    log('removeSenders()')
    this.activeStreams[stream.id] = null
    const tracks = [...stream.getTracks()]
    tracks.forEach((track: any) => {
      this.removeTrack(track, stream)
    })
  }

  _needsNegotiation() {
    log('_needsNegotiation')
    if (this._batchedNegotiation)
      return // batch synchronous renegotiations
    this._batchedNegotiation = true
    queueMicrotask(() => {
      this._batchedNegotiation = false
      if (this.initiator || !this._firstNegotiation) {
        log('starting batched negotiation')
        this.negotiate()
      }
      else {
        log('non-initiator initial negotiation request discarded')
      }
      this._firstNegotiation = false
    })
  }

  negotiate() {
    if (this.initiator) {
      if (this._isNegotiating) {
        this._queuedNegotiation = true
        log('already negotiating, queueing')
      }
      else {
        log('start negotiation')
        setTimeout(() => {
          // HACK: Chrome crashes if we immediately call createOffer
          this._createOffer()
        }, 0)
      }
    }
    else {
      if (this._isNegotiating) {
        this._queuedNegotiation = true
        log('already negotiating, queueing')
      }
      else {
        log('requesting negotiation from initiator')
        this.emit('signal', {
          // request initiator to renegotiate
          type: 'renegotiate',
          renegotiate: true,
        })
      }
    }
    this._isNegotiating = true
  }

  destroy(err?: { message: any }) {
    log('destroy', err)
    if (this.destroyed || this.destroying)
      return
    this.destroying = true

    log('destroying (error: %s)', err && (err.message || err))

    queueMicrotask(() => {
      // allow events concurrent with the call to _destroy() to fire (see #692)
      this.destroyed = true
      this.destroying = false

      log('destroy (error: %s)', err && (err.message || err))

      this._connected = false
      this._pcReady = false
      this._channelReady = false
      this._remoteTracks = []
      this._remoteStreams = []
      this._senderMap = new Map()

      clearInterval(this._closingInterval)
      this._closingInterval = null

      clearInterval(this._interval)
      this._interval = null
      this._chunk = null
      this._cb = null

      if (this._channel) {
        try {
          this._channel.close()
        }
        catch (err) {}

        // allow events concurrent with destruction to be handled
        this._channel.onmessage = null
        this._channel.onopen = null
        this._channel.onclose = null
        this._channel.onerror = null
      }
      if (this._pc) {
        try {
          this._pc.close()
        }
        catch (err) {}

        // allow events concurrent with destruction to be handled
        this._pc.oniceconnectionstatechange = null
        this._pc.onicegatheringstatechange = null
        this._pc.onsignalingstatechange = null
        this._pc.onicecandidate = null
        this._pc.ontrack = null
        this._pc.ondatachannel = null
      }
      this._pc = null
      this._channel = null

      if (err)
        this.emit('error', err)
      this.emit('close')
    })
  }

  _setupData(event: { channel: any }) {
    if (!event.channel) {
      // In some situations `pc.createDataChannel()` returns `undefined` (in wrtc),
      // which is invalid behavior. Handle it gracefully.
      // See: https://github.com/feross/simple-peer/issues/163
      return this.destroy(
        errCode(
          new Error('Data channel event is missing `channel` property'),
          'ERR_DATA_CHANNEL',
        ),
      )
    }

    this._channel = event.channel
    this._channel.binaryType = 'arraybuffer'

    if (typeof this._channel.bufferedAmountLowThreshold === 'number')
      this._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT

    this.channelName = this._channel.label

    this._channel.onmessage = (event: any) => {
      this._onChannelMessage(event)
    }
    this._channel.onbufferedamountlow = () => {
      this._onChannelBufferedAmountLow()
    }
    this._channel.onopen = () => {
      this._onChannelOpen()
    }
    this._channel.onclose = () => {
      this._onChannelClose()
    }
    this._channel.onerror = (err: any) => {
      this.destroy(errCode(err, 'ERR_DATA_CHANNEL'))
    }

    // HACK: Chrome will sometimes get stuck in readyState "closing", let's check for this condition
    // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
    let isClosing = false
    this._closingInterval = setInterval(() => {
      // No "onclosing" event
      if (this._channel && this._channel.readyState === 'closing') {
        if (isClosing)
          this._onChannelClose() // closing timed out: equivalent to onclose firing
        isClosing = true
      }
      else {
        isClosing = false
      }
    }, CHANNEL_CLOSING_TIMEOUT)
  }

  _startIceCompleteTimeout() {
    if (this.destroyed)
      return
    if (this._iceCompleteTimer)
      return
    log('started iceComplete timeout')
    this._iceCompleteTimer = setTimeout(() => {
      if (!this._iceComplete) {
        this._iceComplete = true
        log('iceComplete timeout completed')
        this.emit('iceTimeout')
        this.emit('_iceComplete')
      }
    }, this.iceCompleteTimeout)
  }

  _createOffer() {
    if (this.destroyed)
      return

    this._pc
      .createOffer(this.offerOptions)
      .then((offer: { sdp: any }) => {
        if (this.destroyed)
          return
        if (!this.trickle && !this.allowHalfTrickle)
          offer.sdp = filterTrickle(offer.sdp)

        offer.sdp = this.sdpTransform(offer.sdp)

        const sendOffer = () => {
          if (this.destroyed)
            return
          const signal = this._pc.localDescription || offer
          log('signal')
          this.emit('signal', {
            type: signal.type,
            sdp: signal.sdp,
          })
        }

        const onSuccess = () => {
          log('createOffer success')
          if (this.destroyed)
            return
          if (this.trickle || this._iceComplete)
            sendOffer()
          else this.once('_iceComplete', sendOffer) // throw new Error("Method not implemented.") // this.once("_iceComplete", sendOffer) // wait for candidates
        }

        const onError = (err: any) => {
          this.destroy(errCode(err, 'ERR_SET_LOCAL_DESCRIPTION'))
        }

        this._pc.setLocalDescription(offer).then(onSuccess).catch(onError)
      })
      .catch((err: any) => {
        this.destroy(errCode(err, 'ERR_CREATE_OFFER'))
      })
  }

  _requestMissingTransceivers() {
    if (this._pc.getTransceivers) {
      this._pc
        .getTransceivers()
        .forEach(
          (transceiver: {
            mid: any
            sender: { track: { kind: any } }
            requested: boolean
          }) => {
            if (
              !transceiver.mid
              && transceiver.sender.track
              && !transceiver.requested
            ) {
              transceiver.requested = true // HACK: Safari returns negotiated transceivers with a null mid
              this.addTransceiver(transceiver.sender.track.kind)
            }
          },
        )
    }
  }

  _createAnswer() {
    if (this.destroyed)
      return

    this._pc
      .createAnswer(this.answerOptions)
      .then((answer: { sdp: any }) => {
        if (this.destroyed)
          return
        if (!this.trickle && !this.allowHalfTrickle)
          answer.sdp = filterTrickle(answer.sdp)

        answer.sdp = this.sdpTransform(answer.sdp)

        const sendAnswer = () => {
          if (this.destroyed)
            return
          const signal = this._pc.localDescription || answer
          log('signal')
          this.emit('signal', {
            type: signal.type,
            sdp: signal.sdp,
          })
          if (!this.initiator)
            this._requestMissingTransceivers()
        }

        const onSuccess = () => {
          if (this.destroyed)
            return
          if (this.trickle || this._iceComplete)
            sendAnswer()
          else this.once('_iceComplete', sendAnswer)
        }

        const onError = (err: any) => {
          this.destroy(errCode(err, 'ERR_SET_LOCAL_DESCRIPTION'))
        }

        this._pc.setLocalDescription(answer).then(onSuccess).catch(onError)
      })
      .catch((err: any) => {
        this.destroy(errCode(err, 'ERR_CREATE_ANSWER'))
      })
  }

  _onConnectionStateChange() {
    log('_onConnectionStateChange')
    if (this.destroyed)
      return
    if (this._pc.connectionState === 'failed') {
      this.destroy(
        errCode(new Error('Connection failed.'), 'ERR_CONNECTION_FAILURE'),
      )
    }
  }

  _onIceStateChange() {
    log('_onIceStateChange')
    if (this.destroyed)
      return
    const iceConnectionState = this._pc.iceConnectionState
    const iceGatheringState = this._pc.iceGatheringState

    log(
      'iceStateChange (connection: %s) (gathering: %s)',
      iceConnectionState,
      iceGatheringState,
    )
    this.emit('iceStateChange', iceConnectionState, iceGatheringState)

    if (
      iceConnectionState === 'connected'
      || iceConnectionState === 'completed'
    ) {
      this._pcReady = true
      this._maybeReady()
    }

    if (iceConnectionState === 'disconnected')
      this.emit('disconnect')

    if (iceConnectionState === 'failed') {
      this.destroy(
        errCode(
          new Error('Ice connection failed.'),
          'ERR_ICE_CONNECTION_FAILURE',
        ),
      )
    }
    if (iceConnectionState === 'closed') {
      this.destroy(
        errCode(
          new Error('Ice connection closed.'),
          'ERR_ICE_CONNECTION_CLOSED',
        ),
      )
    }
  }

  getStats(cb: Function) {
    // statreports can come with a value array instead of properties
    const flattenValues = (report: { values?: any }) => {
      if (Object.prototype.toString.call(report.values) === '[object Array]') {
        report.values.forEach((value: any) => {
          Object.assign(report, value)
        })
      }
      return report
    }

    // Promise-based getStats() (standard)
    if (this._pc.getStats.length === 0 || this._isReactNativeWebrtc) {
      this._pc.getStats().then(
        (res: any[]) => {
          const reports: any[] = []
          res.forEach((report: any) => {
            reports.push(flattenValues(report))
          })
          cb(null, reports)
        },
        (err: any) => cb(err),
      )

      // Single-parameter callback-based getStats() (non-standard)
    }
    else if (this._pc.getStats.length > 0) {
      this._pc.getStats(
        (res: { result: () => any[] }) => {
          // If we destroy connection in `connect` callback this code might happen to run when actual connection is already closed
          if (this.destroyed)
            return

          const reports: any[] = []
          res
            .result()
            .forEach(
              (result: {
                names: () => any[]
                stat: (arg0: any) => any
                id: any
                type: any
                timestamp: any
              }) => {
                const report: any = {}
                result.names().forEach((name: string | number) => {
                  report[name] = result.stat(name)
                })
                report.id = result.id
                report.type = result.type
                report.timestamp = result.timestamp
                reports.push(flattenValues(report))
              },
            )
          cb(null, reports)
        },
        (err: any) => cb(err),
      )

      // Unknown browser, skip getStats() since it's anyone's guess which style of
      // getStats() they implement.
    }
    else {
      cb(null, [])
    }
  }

  _maybeReady() {
    log('maybeReady pc %s channel %s', this._pcReady, this._channelReady)
    if (
      this._connected
      || this._connecting
      || !this._pcReady
      || !this._channelReady
    )
      return

    this._connecting = true

    // HACK: We can't rely on order here, for details see https://github.com/js-platform/node-webrtc/issues/339
    const findCandidatePair = () => {
      if (this.destroyed)
        return

      this.getStats((err: any, items: any[]) => {
        if (this.destroyed)
          return

        // Treat getStats error as non-fatal. It's not essential.
        if (err)
          items = []

        const remoteCandidates: any = {}
        const localCandidates: any = {}
        const candidatePairs: any = {}
        let foundSelectedCandidatePair = false

        items.forEach((item: { type: string; id: string | number }) => {
          // TODO: Once all browsers support the hyphenated stats report types, remove
          // the non-hypenated ones
          if (
            item.type === 'remotecandidate'
            || item.type === 'remote-candidate'
          )
            remoteCandidates[item.id] = item

          if (
            item.type === 'localcandidate'
            || item.type === 'local-candidate'
          )
            localCandidates[item.id] = item

          if (item.type === 'candidatepair' || item.type === 'candidate-pair')
            candidatePairs[item.id] = item
        })

        const setSelectedCandidatePair = (selectedCandidatePair: {
          localCandidateId: string | number
          googLocalAddress: string
          remoteCandidateId: string | number
          googRemoteAddress: string
        }) => {
          foundSelectedCandidatePair = true

          let local = localCandidates[selectedCandidatePair.localCandidateId]

          if (local && (local.ip || local.address)) {
            // Spec
            this.localAddress = local.ip || local.address
            this.localPort = Number(local.port)
          }
          else if (local && local.ipAddress) {
            // Firefox
            this.localAddress = local.ipAddress
            this.localPort = Number(local.portNumber)
          }
          else if (
            typeof selectedCandidatePair.googLocalAddress === 'string'
          ) {
            // TODO: remove this once Chrome 58 is released
            local = selectedCandidatePair.googLocalAddress.split(':')
            this.localAddress = local[0]
            this.localPort = Number(local[1])
          }
          if (this.localAddress)
            this.localFamily = this.localAddress.includes(':') ? 'IPv6' : 'IPv4'

          let remote = remoteCandidates[selectedCandidatePair.remoteCandidateId]

          if (remote && (remote.ip || remote.address)) {
            // Spec
            this.remoteAddress = remote.ip || remote.address
            this.remotePort = Number(remote.port)
          }
          else if (remote && remote.ipAddress) {
            // Firefox
            this.remoteAddress = remote.ipAddress
            this.remotePort = Number(remote.portNumber)
          }
          else if (
            typeof selectedCandidatePair.googRemoteAddress === 'string'
          ) {
            // TODO: remove this once Chrome 58 is released
            remote = selectedCandidatePair.googRemoteAddress.split(':')
            this.remoteAddress = remote[0]
            this.remotePort = Number(remote[1])
          }
          if (this.remoteAddress) {
            this.remoteFamily = this.remoteAddress.includes(':')
              ? 'IPv6'
              : 'IPv4'
          }

          log(
            `connect local: ${this.localAddress}:${this.localPort} remote: ${this.remoteAddress}:${this.remotePort}`,
          )
        }

        items.forEach(
          (item: {
            type: string
            selectedCandidatePairId: string | number
            googActiveConnection: string
            selected: any
          }) => {
            // Spec-compliant
            if (item.type === 'transport' && item.selectedCandidatePairId) {
              setSelectedCandidatePair(
                candidatePairs[item.selectedCandidatePairId],
              )
            }

            // Old implementations
            if (
              (item.type === 'googCandidatePair'
                && item.googActiveConnection === 'true')
              || ((item.type === 'candidatepair'
                || item.type === 'candidate-pair')
                && item.selected)
            ) {
              // @ts-expect-error xxx
              setSelectedCandidatePair(item)
            }
          },
        )

        // Ignore candidate pair selection in browsers like Safari 11 that do not have any local or remote candidates
        // But wait until at least 1 candidate pair is available
        if (
          !foundSelectedCandidatePair
          && (!Object.keys(candidatePairs).length
            || Object.keys(localCandidates).length)
        ) {
          setTimeout(findCandidatePair, 100)
          return
        }
        else {
          this._connecting = false
          this._connected = true
        }

        if (this._chunk) {
          try {
            this.send(this._chunk)
          }
          catch (err: any) {
            return this.destroy(errCode(err, 'ERR_DATA_CHANNEL'))
          }
          this._chunk = null
          log('sent chunk from "write before connect"')

          const cb = this._cb
          this._cb = null
          cb(null)
        }

        // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
        // fallback to using setInterval to implement backpressure.
        if (typeof this._channel.bufferedAmountLowThreshold !== 'number') {
          this._interval = setInterval(() => this._onInterval(), 150)
          if (this._interval.unref)
            this._interval.unref()
        }

        log('connect')
        this.emit('connect')
      })
    }
    findCandidatePair()
  }

  _onInterval() {
    if (
      !this._cb
      || !this._channel
      || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT
    )
      return

    this._onChannelBufferedAmountLow()
  }

  _onSignalingStateChange() {
    if (this.destroyed)
      return

    if (this._pc.signalingState === 'stable') {
      this._isNegotiating = false

      // HACK: Firefox doesn't yet support removing tracks when signalingState !== 'stable'
      log('flushing sender queue', this._sendersAwaitingStable)
      this._sendersAwaitingStable.forEach((sender) => {
        this._pc.removeTrack(sender)
        this._queuedNegotiation = true
      })
      this._sendersAwaitingStable = []

      if (this._queuedNegotiation) {
        log('flushing negotiation queue')
        this._queuedNegotiation = false
        this._needsNegotiation() // negotiate again
      }
      else {
        log('negotiated')
        this.emit('negotiated')
      }
    }

    log('signalingStateChange %s', this._pc.signalingState)
    this.emit('signalingStateChange', this._pc.signalingState)
  }

  _onIceCandidate(event: {
    candidate: { candidate: any; sdpMLineIndex: any; sdpMid: any }
  }) {
    if (this.destroyed)
      return
    if (event.candidate && this.trickle) {
      this.emit('signal', {
        type: 'candidate',
        candidate: {
          candidate: event.candidate.candidate,
          sdpMLineIndex: event.candidate.sdpMLineIndex,
          sdpMid: event.candidate.sdpMid,
        },
      })
    }
    else if (!event.candidate && !this._iceComplete) {
      this._iceComplete = true
      this.emit('_iceComplete')
    }
    // as soon as we've received one valid candidate start timeout
    if (event.candidate)
      this._startIceCompleteTimeout()
  }

  _onChannelMessage(event: { data: any }) {
    if (this.destroyed)
      return
    let data = event.data
    if (data instanceof ArrayBuffer)
      data = new Uint8Array(data)
    this.emit('data', data)
  }

  _onChannelBufferedAmountLow() {
    if (this.destroyed || !this._cb)
      return
    log('ending backpressure: bufferedAmount %d', this._channel.bufferedAmount)
    const cb = this._cb
    this._cb = null
    cb(null)
  }

  _onChannelOpen() {
    if (this._connected || this.destroyed)
      return
    log('on channel open')
    this._channelReady = true
    this._maybeReady()
  }

  _onChannelClose() {
    if (this.destroyed)
      return
    log('on channel close')
    this.destroy()
  }

  _onTrack(event: { streams: any[]; track: any }) {
    if (this.destroyed)
      return

    event.streams.forEach((eventStream: MediaStream) => {
      log('on track')
      this.emit('track', event.track, eventStream)

      this._remoteTracks.push({
        track: event.track,
        stream: eventStream,
      })

      if (
        this._remoteStreams.some((remoteStream) => {
          return remoteStream.id === eventStream.id
        })
      )
        return
      // Only fire one 'stream' event, even though there may be multiple tracks per stream

      this._remoteStreams.push(eventStream)
      queueMicrotask(() => {
        log('on stream')
        this.emit('stream', eventStream) // ensure all tracks have been added
      })
    })
  }
}

Peer.WEBRTC_SUPPORT = !!getBrowserRTC()
