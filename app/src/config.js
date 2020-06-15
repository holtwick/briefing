// See https://github.com/holtwick/briefing-signal
export const SIGNAL_SERVER_URL = 'wss://sig03.brie.fi'

// export const SIGNAL_SERVER_URL = 'ws://localhost:4444'

// See https://github.com/feross/simple-peer#peer--new-peeropts
export const ICE_CONFIG = {

  iceTransportPolicy: 'all',
  reconnectTimer: 3000,

  // These settings are no secret, since they are readable from the client side anyway
  iceServers: [{
    urls: 'stun:turn01.brie.fi:5349',
  }, {
    urls: 'turn:turn01.brie.fi:5349',
    username: 'brie',
    credential: 'fi',
  }],
}

export const DEBUG = process.env.NODE_ENV !== 'production'
export const PRODUCTION = !DEBUG

export const RELEASE = process.env.VUE_APP_RELEASE
