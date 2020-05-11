// --- END GENERATED CODE, START CUSTOM CODE

console.info('SW started')

workbox.core.setCacheNameDetails({ prefix: 'briefing' })
workbox.core.skipWaiting()

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  // urlManipulation: ({ url }) => {
  //   console.info('urlManipulation', url)
  //   // Your logic goes here...
  //   if (url.href.includes('/ng/')) {
  //     return ['http://127.0.0.1:8080/']
  //   }
  //   return [url.href]
  // },
})

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('/index.html'))
