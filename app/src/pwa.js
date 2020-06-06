import Vue from 'vue'
import locale from './lib/locale'
import './logic/registerServiceWorker'
import de from './locales/de'
import en from './locales/en'
import App from './pwa-app.vue'
import { state } from './state'

// Electron specific
if (navigator.userAgent.toLowerCase().indexOf(' electron/') > -1 && window.beaker == null) {
  console.log('Identified Electron')
  import(/* webpackChunkName: 'pwa-electron' */ './pwa-electron').then()
  console.log('Handled Electron')
}

if (localStorage.allowSentry) {
  import(/* webpackChunkName: 'sentry' */ '@sentry/browser').then(Sentry => Sentry.init({ dsn: 'https://e02a89182ca14a048aa21d7088c7f90a@o120938.ingest.sentry.io/266271' }))
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
  locales: { en, de },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
