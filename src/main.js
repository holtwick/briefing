import Vue from 'vue'
import App from './app.vue'
import locale from './lib/locale'
// import './lib/registerServiceWorker'
import de from './locales/de'
import en from './locales/en'
import { state } from './state'

Vue.config.productionTip = false

// use localStorage.debug = '*'
// require('debug').enable('app:*,mq*')

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
