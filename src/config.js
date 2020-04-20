// See https://github.com/holtwick/peer2school-server
export const SIGNAL_SERVER_URL = 'wss://signal.brie.fi'

// See https://github.com/feross/simple-peer#peer--new-peeropts
export const ICE_CONFIG = {
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
