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

if (localStorage.allowSentry !== '0') {
  console.log('Sentry bug tracking is allowed')
  import(/* webpackChunkName: 'sentry' */ './sentry').then(({ setupSentry }) => {
    setupSentry({
      dsn: 'https://5e7bc1b62da1458b8117dc68d6242746@o120938.ingest.sentry.io/5266804',
      Vue,
    })
    console.log('Did init Sentry bug tracking')
  })
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
