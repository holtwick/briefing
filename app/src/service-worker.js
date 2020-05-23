// --- END GENERATED CODE, START CUSTOM CODE

console.info('SW started')

workbox.core.setCacheNameDetails({ prefix: 'briefing' })
workbox.core.skipWaiting()

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('/index.html'))

// Custom code

self.addEventListener('message', event => {

})

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

self.addEventListener('push', event => {
  console.log('push', event)
  event.waitUntil(self.registration.showNotification('Briefing', {
    body: `Somebody entered`,
    actions: [{
      title: 'Join call',
      action: 'join',
    }],
  }))
})
