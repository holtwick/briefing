import Vue from 'vue'
import { Logger } from 'zeed'
import App from './app.vue'
import { setupBugTracker } from './bugs'
import locale from './lib/locale'
import de from './locales/de.json'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import id from './locales/id.json'
import it from './locales/it.json'
import pt from './locales/pt.json'
import ro from './locales/ro.json'
import ru from './locales/ru.json'
import tr from './locales/tr.json'
import zh from './locales/zh.json'
import { postUpdateToIframeParent, state } from './state'

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
setupBugTracker()

// Electron specific i.e. Windows App will become a nicer modern window title and some other small features
// if (
//   navigator.userAgent.toLowerCase().indexOf(" electron/") > -1 &&
//   window.beaker == null
// ) {
//   log("Identified Electron")
//   import("./pwa-electron.js").then()
//   log("Handled Electron")
// }

window.iOS = navigator?.platform?.match(/(iPhone|iPod|iPad)/i) != null
window.iPhone = navigator?.platform?.match(/(iPhone|iPod)/i) != null
if (window.iPhone)
  log('Identified Phone of a native app')

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      state,
    }
  },
  watch: {
    state: {
      handler: postUpdateToIframeParent,
      deep: true,
    },
  },
  methods: {
    openExternalLink(event) {
      if (window.electron) {
        let href
        if (typeof event === 'string') {
          href = event
        }
        else {
          let target = event?.target
          while (target && target?.href == null)
            target = target.parentElement

          href = target?.href
        }
        log.info('Open external link', event.target)
        if (href)
          window.electron.shell.openExternal(href)

        event.preventDefault()
        return false
      }
      return true
    },
  },
})

Vue.use(locale, {
  locales: {
    en,
    de,
    it, // Thanks to https://github.com/albanobattistella
    fr,
    zh, // Thanks to https://github.com/Bruce-Ming
    ru, // Thanks to https://github.com/vorons / Сергей
    id, // Thanks to Yusuf via poeditor
    ro, // Thanks to radumalica via poeditor
    tr, // Thanks to volkankoc via poeditor
    es,
    pt,
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')

// Do some tests on the actual browser
// localStorage.test = true

// if (localStorage?.test)
//   import('./logic/in-browser-test.js').then()

