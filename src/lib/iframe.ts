import { Logger } from 'zeed'

const log = Logger('app:iframe')

const source = 'briefing'

export function postMessageToParent(name: string, data = {}) {
  try {
    const info = {
      source,
      name,
      data,
    }
    log('postMessageToParent', info)
    window.parent.postMessage(info)
  }
  catch (err) {
    log('postMessageToParent error', err)
  }
}

export function onMessageFromFrame(name: string, fn: (data: any) => void) {
  window.addEventListener('message', (e) => {
    const info = e.data
    log('onMessageFromFrame', info)
    if (info.source === source && info.name === name)
      fn(info.data)
  })
}
