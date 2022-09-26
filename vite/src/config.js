import { isTrue } from "./lib/base"

// See https://github.com/holtwick/briefing-signal
export const SIGNAL_SERVER_URL = import.meta.env.VUE_APP_SIGNAL_URL

// See https://github.com/feross/simple-peer#peer--new-peeropts
export const ICE_CONFIG = {
  iceTransportPolicy: "all",
  reconnectTimer: 3000,

  // These settings are no secret, since they are readable from the client side anyway
  iceServers: [
    {
      urls: import.meta.env.VUE_APP_STUN_URL,
    },
    {
      urls: import.meta.env.VUE_APP_TURN_URL,
      username: import.meta.env.VUE_APP_TURN_USER,
      credential: import.meta.env.VUE_APP_TURN_PASSWORD,
    },
  ],
}

export const DEBUG = import.meta.env.NODE_ENV !== "production"
export const PRODUCTION = !DEBUG

export const RELEASE = import.meta.env.VUE_APP_RELEASE

export const SENTRY_DSN = import.meta.env.VUE_APP_SENTRY_DSN

export const ROOM_URL =
  import.meta.env.VUE_APP_ROOM_URL || "https://brie.fi/ng/"
export const ROOM_PATH = import.meta.env.VUE_APP_ROOM_PATH || "/ng/"

export const SHOW_FULLSCREEN = isTrue(
  import.meta.env.VUE_APP_SHOW_FULLSCREEN,
  true
)
export const SHOW_INVITATION = isTrue(
  import.meta.env.VUE_APP_SHOW_INVITATION,
  true
)
export const SHOW_INVITATION_HINT = isTrue(
  import.meta.env.VUE_APP_SHOW_INVITATION_HINT,
  true
)
export const SHOW_SETTINGS = isTrue(import.meta.env.VUE_APP_SHOW_SETTINGS, true)
export const SHOW_SHARE = isTrue(import.meta.env.VUE_APP_SHOW_SHARE, true)
export const SHOW_CHAT = isTrue(import.meta.env.VUE_APP_SHOW_CHAT, true)
