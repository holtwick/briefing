const source = "briefing"

export function postMessageToParent(name, data = {}) {
  let info = {
    source,
    name,
    data,
  }
  console.log("postMessageToParent", info)
  window.parent.postMessage(info)
}

export function onMessageFromFrame(name, fn) {
  window.addEventListener("message", (e) => {
    let info = e.data
    console.log("onMessageFromFrame", info)
    if (info.source === source && info.name === name) {
      fn(info.data)
    }
  })
}
