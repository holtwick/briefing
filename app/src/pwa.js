import Vue from 'vue'
import locale from './lib/locale'
import './logic/registerServiceWorker'
import de from './locales/de'
import en from './locales/en'
import it from './locales/it'
import App from './pwa-app.vue'
import { state } from './state'
import { setupBugTracker } from './bugs'

// This will be done privacy conform, see bugs/README-BUGTRACKER.md
setupBugTracker()

// Electron specific i.e. Windows App will become a nicer modern window title and some other small features
if (navigator.userAgent.toLowerCase().indexOf(' electron/') > -1 && window.beaker == null) {
  console.log('Identified Electron')
  import(/* webpackChunkName: 'pwa-electron' */ './pwa-electron').then()
  console.log('Handled Electron')
}

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return { state }
  },
  methods: {
    openExternalLink(event) {
      if (window.electron) {
        let href
        if (typeof event === 'string') {
          href = event
        } else {
          let target = event?.target
          while (target && target?.href == null) {
            target = target.parentElement
          }
          href = target?.href
        }
        console.info('Open external link', event.target)
        if (href) {
          window.electron.shell.openExternal(href)
        }
        event.preventDefault()
        return false
      }
      return true
    },
  },
})

Vue.use(locale, {
  locales: { en, de, it },
})

new Vue({
  render: h => h(App),
}).$mount('#app')

// Do some tests on the actual browser

if (localStorage.test) {
  import(/* webpackChunkName: 'test' */ './test').then()
}
