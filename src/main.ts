import { createApp } from 'vue'
import { Logger } from 'zeed'
import appComponent from './app.vue'
import { i18n } from './i18n'

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

const app = createApp(appComponent)
app.use(i18n)
app.mount('#app')
