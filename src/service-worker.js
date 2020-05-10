// /**
//  * Welcome to your Workbox-powered service worker!
//  *
//  * You'll need to register this file in your web app and you should
//  * disable HTTP caching for this file too.
//  * See https://goo.gl/nhQhGp
//  *
//  * The rest of the code is auto-generated. Please don't update this file
//  * directly; instead, make changes to your Workbox build configuration
//  * and re-run your build process.
//  * See https://goo.gl/2aRDsh
//  */
//
// importScripts("/pwa/workbox-v4.3.1/workbox-sw.js");
// workbox.setConfig({modulePathPrefix: "/pwa/workbox-v4.3.1"});
//
// importScripts(
//   "/pwa/precache-manifest.ba6c73ceeaf1f34eef7efd66468f42c6.js"
// );

workbox.core.setCacheNameDetails({ prefix: 'briefing' })

workbox.core.skipWaiting()

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('/pwa/index.html'))

// workbox.routing.setDefaultHandler()
