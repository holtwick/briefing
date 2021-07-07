import { trackSilentException } from "../bugs"

import { Logger } from "./logger"
const log = Logger("app:emitter")

export class Emitter {
  subscribers = {}

  emit(key, info) {
    try {
      let subscribers = this.subscribers[key] || []
      for (let i = 0; i < subscribers.length; i++) {
        const fn = subscribers[i]
        try {
          fn(info)
        } catch (err) {
          console.warn("emit warning:", err)
          trackSilentException(err)
        }
      }
    } catch (err) {
      console.error("emit exception", err)
      trackSilentException(err)
    }
  }

  on(key, fn) {
    let subscribers = this.subscribers[key] || []
    subscribers.push(fn)
    this.subscribers[key] = subscribers
    return {
      cleanup: () => {
        this.off(key, fn)
      },
    }
  }

  off(key, fn) {
    log("off", key)
    this.subscribers = (this.subscribers[key] || []).filter(
      (f) => fn && f !== fn
    )
  }
}

export const messages = new Emitter()
