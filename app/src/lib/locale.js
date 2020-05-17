export default {
  install(Vue, { lang, locales = { en: {} } } = {}) {

    lang = lang || navigator.language
    if (locales[lang] == null) {
      lang = 'en'
    }

    Vue.mixin({
      data() {
        return {
          l: locales[lang],
        }
      },
    })

  },
}

