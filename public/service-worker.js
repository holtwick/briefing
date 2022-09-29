console.info("Unregister previous service workers")

caches.keys().then(function (names) {
  for (let name of names) caches.delete(name)
})

try {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
} catch (err) {
  console.error("Unregistering failed", err)
}
