import { mergeDeep } from './base'

export function prepareLocaleStrings(
  {
    lang,
    locales = { en: {} },
    defaultLang = 'en',
  } = {}) {
  lang = lang || navigator.language
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

