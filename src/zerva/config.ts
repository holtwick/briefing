import { on } from "@zerva/core"
import "@zerva/websocket"
import { Logger } from "zeed"

const log = Logger("config")

export function useConfig() {
  log("setup")

  let options = {}
  for (let [key, value] of Object.entries(process.env)) {
    if (key.startsWith("BRIEFING_")) {
      options[key.slice(9)] = value
    }
  }

  const configText = `window.briefingConfig = ${JSON.stringify(
    options,
    null,
    2
  )}`

  const hasConfig = Object.keys(options).length > 0

  on("httpInit", ({ get }) => {
    if (hasConfig) {
      get("config.js", configText)
    }
  })
}
