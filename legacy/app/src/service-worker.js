// --- END GENERATED CODE, START CUSTOM CODE

var ROOM_PATH = "/ng/"

workbox.setConfig({ debug: true })

// Cache stuff

console.info("SW started")

workbox.core.setCacheNameDetails({ prefix: "briefing" })
workbox.core.skipWaiting()
workbox.core.clientsClaim()

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

const whitelistRoomPath = new RegExp(
  "^" + ROOM_PATH.replaceAll("/", "\\/") + ".*$",
  "gim"
)

// console.log("whitelistRoomPath", whitelistRoomPath)

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/index.html"),
  {
    whitelist: [/^\/ng.*$/, whitelistRoomPath],
  }
)

// Custom code

self.addEventListener("notificationclick", (event) => {
  console.log("notificationclick", event)
  let room
  try {
    room = event.notification.data.room
  } catch (err) {
    console.error("Exception", err)
  }
  console.log("Enter room", room)
  if (room) {
    event.waitUntil(
      self.clients.matchAll().then((clientList) => {
        // if (clientList.length > 0) {
        //   clientList[0].postMessage({
        //     join: room,
        //   })
        //   return clientList[0].focus()
        // }
        return self.clients.openWindow(ROOM_PATH + room)
      })
    )
  }
})

// Register event listener for the 'push' event.
self.addEventListener("push", function (event) {
  console.log("push", event)
  let message = event.data.json()
  event.waitUntil(
    self.registration.showNotification("Brie.fi/ng", {
      body: message.count + ' users in room "' + message.room + '" now',
      icon: "/android-chrome-512x512.png",
      data: {
        room: message.room,
      },
      // Sound taken from https://notificationsounds.com/message-tones/pristine-609
      sound: "/pristine.mp3",
    })
  )
})
