import { getWebsocketUrlFromLocation } from '@zerva/websocket'
import { Logger, isValue } from 'zeed'
import { isTrue } from './lib/base'

const log = Logger('config')

export const iOS = navigator?.platform?.match(/(iPhone|iPod|iPad)/i) != null
// export const iPhone = navigator?.platform?.match(/(iPhone|iPod)/i) != null // Identified Phone of a native app

let configNormalized: any

const normalizeConfigName = (name: string) => name.toUpperCase().replace(/[-\ .]/gim, '_')

/**
 * There are multiple ways for configuration, listed by priority:
 *
 * 1. The server evaluates its ENV variables an passes them via
 *    URL `/briefing-config.js` to the server (loaded by `index.html` before
 *    all other code). Accessible through `window.briefingConfig`
 * 2. On build the ENV variables are passed via `import.meta.env`
 * 3. Default values
 */
export function getConfig(name: string, defaultValue?: string, forceUpdate = false) {
  if (forceUpdate || configNormalized == null) {
    const configEnv = Object.entries(import.meta.env).map(([key, value]) => {
      key = normalizeConfigName(key)
      if (key.startsWith('BRIEFING_'))
        return [key, value]
      return undefined
    }).filter(isValue)

    const configWindow = Object.entries(window.briefingConfig ?? {}).map(([key, value]) => ([`BRIEFING_${normalizeConfigName(key)}`, value]))

    configNormalized = Object.fromEntries([
      ...configEnv,
      ...configWindow,
    ])
  }

  return (configNormalized[`BRIEFING_${normalizeConfigName(name)}`] ?? defaultValue)
}

// See https://github.com/holtwick/briefing-signal
export const SIGNAL_SERVER_URL = getConfig(
  'SIGNAL_URL',
  getWebsocketUrlFromLocation(),
)

// getConfig('STUN_URL', 'stun:turn01.brie.fi:5349')
// iceServers: [
//   {
//     urls: [
//       'stun:stun.l.google.com:19302',
//       'stun:global.stun.twilio.com:3478'
//     ]
//   }
// ],
// sdpSemantics: 'unified-plan'
const stun = getConfig('STUN_URL', `stun:${location.hostname}:3478`)

const iceServers: any = [{ urls: stun }]

const turn = getConfig('TURN_URL') // , 'turn:turn01.brie.fi:5349')
if (turn) {
  iceServers.push({
    urls: turn,
    username: getConfig('TURN_USER', 'brie'),
    credential: getConfig('TURN_PASSWORD', 'fi'),
  })
}

// See https://github.com/feross/simple-peer#peer--new-peeropts
export const ICE_CONFIG = {
  iceTransportPolicy: 'all',
  reconnectTimer: 3000,

  // These settings are no secret, since they are readable from the client side anyway
  iceServers,
}

export const RELEASE = import.meta.env.BRIEFING_RELEASE

export const SENTRY_DSN = getConfig('SENTRY_DSN')

export const ROOM_PATH = getConfig('ROOM_PATH', '/')
export const ROOM_URL = getConfig('ROOM_URL', `${location.protocol}//${location.host}${ROOM_PATH}`)
export const ROOM_DOMAIN = getConfig('ROOM_DOMAIN', location.hostname)

export const SHOW_FULLSCREEN = isTrue(getConfig('SHOW_FULLSCREEN'), true)
export const SHOW_INVITATION = isTrue(getConfig('SHOW_INVITATION'), true)
export const SHOW_INVITATION_HINT = isTrue(getConfig('SHOW_INVITATION_HINT'), true)
export const SHOW_SETTINGS = isTrue(getConfig('SHOW_SETTINGS'), true)
export const SHOW_SHARE = isTrue(getConfig('SHOW_SHARE'), true)
export const SHOW_CHAT = isTrue(getConfig('SHOW_CHAT'), true)

export const MUTE_AUDIO = isTrue(getConfig('MUTE_AUDIO'), false)
export const MUTE_VIDEO = isTrue(getConfig('MUTE_VIDEO'), false)

export const DEFAULT_ROOM = getConfig('DEFAULT_ROOM')

export const LICENSE = getConfig('LICENSE', '')

log.info(
  `Config: ${JSON.stringify(
    {
      RELEASE,
      ROOM_URL,
      ROOM_PATH,
      ROOM_DOMAIN,
      DEFAULT_ROOM,
      SIGNAL_SERVER_URL,
      ICE_CONFIG,
      SENTRY_DSN,
      SHOW_FULLSCREEN,
      SHOW_CHAT,
      SHOW_INVITATION,
      SHOW_INVITATION_HINT,
      SHOW_SETTINGS,
      SHOW_SHARE,
      LICENSE,
    },
    null,
    2,
  )}`,
)
