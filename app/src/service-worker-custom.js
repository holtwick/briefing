// --- END GENERATED CODE, START CUSTOM CODE

workbox.setConfig({ debug: true })

// Cache stuff

console.info('SW started')

workbox.core.setCacheNameDetails({ prefix: 'briefing' })
workbox.core.skipWaiting()
workbox.core.clientsClaim()

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('/index.html'))

// Custom code

self.addEventListener('notificationclick', event => {
  console.log('notificationclick', event)
  event.waitUntil(
    self.clients.matchAll().then(clientList => {
      const room = ''
      if (clientList.length > 0) {
        clientList[0].postMessage({
          join: room,
        })
        return clientList[0].focus()
      }
      return self.clients.openWindow('/ng/' + room)
    }),
  )
})

// Register event listener for the 'push' event.
self.addEventListener('push', function (event) {
  console.log('push', event)
  event.waitUntil(
    self.registration.showNotification('ServiceWorker Cookbook', {
      body: 'Alea iacta est',
      icon: '/icon-512x512.png\'\n'
    }),
  )
})

// self.addEventListener('push', event => {
//   console.log('push', event)
//   event.waitUntil(self.registration.showNotification('Briefing', {
//     body: `Somebody entered`,
//     actions: [{
//       title: 'Join call',
//       action: 'join',
//     }],
//   }))
// })

