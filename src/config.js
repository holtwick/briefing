import { getWebsocketUrlFromLocation } from "@zerva/websocket"
import { isTrue } from "./lib/base"

// See https://github.com/holtwick/briefing-signal
export const SIGNAL_SERVER_URL =
  import.meta.env.BRIEFING_SIGNAL_URL || getWebsocketUrlFromLocation()

// See https://github.com/feross/simple-peer#peer--new-peeropts
export const ICE_CONFIG = {
  iceTransportPolicy: "all",
  reconnectTimer: 3000,

  // These settings are no secret, since they are readable from the client side anyway
  iceServers: [
    {
      urls: import.meta.env.BRIEFING_STUN_URL ?? "stun:turn01.brie.fi:5349",
    },
    {
      urls: import.meta.env.BRIEFING_TURN_URL ?? "turn:turn01.brie.fi:5349",
      username: import.meta.env.BRIEFING_TURN_USER ?? "brie",
      credential: import.meta.env.BRIEFING_TURN_PASSWORD ?? "fi",
    },
  ],
}

export const DEBUG = import.meta.env.NODE_ENV !== "production"
export const PRODUCTION = !DEBUG

export const RELEASE = import.meta.env.BRIEFING_RELEASE

export const SENTRY_DSN = import.meta.env.BRIEFING_SENTRY_DSN

export const ROOM_URL =
  import.meta.env.BRIEFING_ROOM_URL || `${location.protocol}//${location.host}/` // "https://brie.fi/ng/"
export const ROOM_PATH = import.meta.env.BRIEFING_ROOM_PATH || "/" // "/ng/"

export const SHOW_FULLSCREEN = isTrue(
  import.meta.env.BRIEFING_SHOW_FULLSCREEN,
  true
)
export const SHOW_INVITATION = isTrue(
  import.meta.env.BRIEFING_SHOW_INVITATION,
  true
)
export const SHOW_INVITATION_HINT = isTrue(
  import.meta.env.BRIEFING_SHOW_INVITATION_HINT,
  true
)
export const SHOW_SETTINGS = isTrue(
  import.meta.env.BRIEFING_SHOW_SETTINGS,
  true
)
export const SHOW_SHARE = isTrue(import.meta.env.BRIEFING_SHOW_SHARE, true)
export const SHOW_CHAT = isTrue(import.meta.env.BRIEFING_SHOW_CHAT, true)
