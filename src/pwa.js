import Vue from 'vue'
import App from './pwa-app.vue'
import locale from './lib/locale'
import de from './locales/de'
import en from './locales/en'
import { state } from './state'
import './lib/registerServiceWorker'

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return { state }
  },
})

Vue.use(locale, {
  locales: { en, de },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
