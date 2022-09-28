import { isTrue } from "./lib/base"

// See https://github.com/holtwick/briefing-signal
export const SIGNAL_SERVER_URL = process.env.VUE_APP_SIGNAL_URL

// See https://github.com/feross/simple-peer#peer--new-peeropts
export const ICE_CONFIG = {
  iceTransportPolicy: "all",
  reconnectTimer: 3000,

  // These settings are no secret, since they are readable from the client side anyway
  iceServers: [
    {
      urls: process.env.VUE_APP_STUN_URL,
    },
    {
      urls: process.env.VUE_APP_TURN_URL,
      username: process.env.VUE_APP_TURN_USER,
      credential: process.env.VUE_APP_TURN_PASSWORD,
    },
  ],
}

export const DEBUG = process.env.NODE_ENV !== "production"
export const PRODUCTION = !DEBUG

export const RELEASE = process.env.VUE_APP_RELEASE

export const SENTRY_DSN = process.env.VUE_APP_SENTRY_DSN

export const ROOM_URL = process.env.VUE_APP_ROOM_URL || "https://brie.fi/ng/"
export const ROOM_PATH = process.env.VUE_APP_ROOM_PATH || "/ng/"

export const SHOW_FULLSCREEN = isTrue(process.env.VUE_APP_SHOW_FULLSCREEN, true)
export const SHOW_INVITATION = isTrue(process.env.VUE_APP_SHOW_INVITATION, true)
export const SHOW_INVITATION_HINT = isTrue(
  process.env.VUE_APP_SHOW_INVITATION_HINT,
  true
)
export const SHOW_SETTINGS = isTrue(process.env.VUE_APP_SHOW_SETTINGS, true)
export const SHOW_SHARE = isTrue(process.env.VUE_APP_SHOW_SHARE, true)
export const SHOW_CHAT = isTrue(process.env.VUE_APP_SHOW_CHAT, true)
