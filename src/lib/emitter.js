const log = require('debug')('app:emitter')

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
          console.warn('emit warning:', err)
        }
      }
    } catch (err) {
      console.error('emit exception', err)
    }
  }

  on(key, fn) {
    let subscribers = this.subscribers[key] || []
    subscribers.push(fn)
    this.subscribers[key] = subscribers
  }

  off(key, fn) {
    this.subscribers = (this.subscribers[key] || []).filter(f => fn && f !== fn)
  }

}

export const messages = new Emitter()
