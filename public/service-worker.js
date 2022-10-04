console.info('Unregister previous service workers')

try {
  self.addEventListener('install', () => {
    // Skip over the "waiting" lifecycle state, to ensure that our
    // new service worker is activated immediately, even if there's
    // another tab open controlled by our older service worker code.
    self.skipWaiting()
  })

  self.addEventListener('activate', () => {
    // Optional: Get a list of all the current open windows/tabs under
    // our service worker's control, and force them to reload.
    // This can "unbreak" any open windows/tabs as soon as the new
    // service worker activates, rather than users having to manually reload.
    self.clients
      .matchAll({
        type: 'window',
      })
      .then((windowClients) => {
        windowClients.forEach((windowClient) => {
          windowClient.navigate(windowClient.url)
        })
      })
  })

  self.addEventListener('activate', function (e) {
    self.registration
      .unregister()
      .then(function () {
        return self.clients.matchAll()
      })
      .then(function (clients) {
        clients.forEach((client) => client.navigate(client.url))
      })
  })
} catch (err) {
  console.error('Activate failed', err)
}

try {
  caches.keys().then(function (names) {
    for (let name of names) caches.delete(name)
  })
} catch (err) {
  console.error('Cache delete failed', err)
}

try {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
} catch (err) {
  console.error('Unregistering failed', err)
}
