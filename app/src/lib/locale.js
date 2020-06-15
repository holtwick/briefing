import { mergeDeep } from './base'
import { DEBUG } from '../config'

export function prepareLocaleStrings(
  {
    lang,
    locales = { en: {} },
    defaultLang = 'en',
  } = {}) {
  lang = lang || navigator.language
  if (DEBUG && localStorage.lang) {
    lang = localStorage.lang
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

