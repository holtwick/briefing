const source = "briefing"

import { Logger } from "./logger"
const log = Logger("app:iframe")

export function postMessageToParent(name, data = {}) {
  try {
    let info = {
      source,
      name,
      data,
    }
    log("postMessageToParent", info)
    window.parent.postMessage(info)
  } catch (err) {
    log("postMessageToParent error", err)
  }
}

export function onMessageFromFrame(name, fn) {
  window.addEventListener("message", (e) => {
    let info = e.data
    log("onMessageFromFrame", info)
    if (info.source === source && info.name === name) {
      fn(info.data)
    }
  })
}
