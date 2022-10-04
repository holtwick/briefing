import { mergeDeep } from './base'

export function prepareLocaleStrings({
  lang,
  locales = { en: {} },
  defaultLang = 'en',
} = {}) {
  if (localStorage.briefingLang)
    lang = localStorage.briefingLang
  else
    lang = lang || navigator?.language?.slice(0, 2)

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
