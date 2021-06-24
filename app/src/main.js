import Vue from "vue"
import locale from "./lib/locale"
import "./logic/registerServiceWorker"
import de from "./locales/de.json"
import en from "./locales/en.json"
import it from "./locales/it.json"
import zh from "./locales/zh.json"
import fr from "./locales/fr.json"
import ru from "./locales/ru.json"
import tr from "./locales/tr.json"
import ro from "./locales/ro.json"
import id from "./locales/id.json"
import es from "./locales/es.json"
import pt from "./locales/pt.json"
import App from "./pwa-app.vue"
import { postUpdateToIframeParent, state } from "./state"
import { setupBugTracker } from "./bugs"

// This will be done privacy conform, see bugs/README-BUGTRACKER.md
setupBugTracker()

// Electron specific i.e. Windows App will become a nicer modern window title and some other small features
if (
  navigator.userAgent.toLowerCase().indexOf(" electron/") > -1 &&
  window.beaker == null
) {
  console.log("Identified Electron")
  import(/* webpackChunkName: 'pwa-electron' */ "./pwa-electron").then()
  console.log("Handled Electron")
}

window.iOS = navigator?.platform?.match(/(iPhone|iPod|iPad)/i) != null
window.iPhone = navigator?.platform?.match(/(iPhone|iPod)/i) != null
if (window.iPhone) {
  console.log("Identified Phone of a native app")
}

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
        if (typeof event === "string") {
          href = event
        } else {
          let target = event?.target
          while (target && target?.href == null) {
            target = target.parentElement
          }
          href = target?.href
        }
        console.info("Open external link", event.target)
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
  render: (h) => h(App),
}).$mount("#app")

// Do some tests on the actual browser

if (localStorage?.test) {
  import(/* webpackChunkName: 'test' */ "./in-browser-test.js").then()
}
