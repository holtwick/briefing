import { createApp } from 'vue'
import { Logger } from 'zeed'
import appComponent from './app.vue'
import { i18n } from './i18n'

// import { setupBugTracker } from './bugs'

// import "./logic/registerServiceWorker"

const log = Logger('main')

log(`env = ${JSON.stringify(import.meta.env, null, 2)}`)

// Force removal of 1.0 service-workers
try {
  log('try removal of service workers')
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations)
      registration.unregister()
  })
}
catch (err) {
  log.error('Unregistering failed', err)
}

// This will be done privacy conform, see bugs/README-BUGTRACKER.md
// setupBugTracker()

const app = createApp(appComponent)
app.use(i18n)
app.mount('#app')

// Electron specific i.e. Windows App will become a nicer modern window title and some other small features
// if (
//   navigator.userAgent.toLowerCase().indexOf(" electron/") > -1 &&
//   window.beaker == null
// ) {
//   log("Identified Electron")
//   import("./pwa-electron.js").then()
//   log("Handled Electron")
// }

// Vue.mixin({
//   data() {
//     return {
//       state,
//     }
//   },
//   watch: {
//     state: {
//       handler: postUpdateToIframeParent,
//       deep: true,
//     },
//   },
// })
