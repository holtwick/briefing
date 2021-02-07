import { DEBUG } from "../config"
import { mergeDeep } from "./base"

export function prepareLocaleStrings({
  lang,
  locales = { en: {} },
  defaultLang = "en",
} = {}) {
  if (DEBUG && localStorage.lang) {
    lang = localStorage.lang
  } else {
    lang = lang || navigator?.language?.slice(0, 2)
    if (DEBUG && localStorage?.lang) {
      lang = localStorage?.lang
    }
  }
  return mergeDeep(mergeDeep({}, locales[defaultLang]), locales[lang] || {})
}

export default {
  install(Vue, opt) {
    Vue.mixin({
      data() {
        return {
          l: prepareLocaleStrings(opt),
        }
      },
    })
  },
}
