import { useLocalStorage } from '@vueuse/core'
import { computed, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import { Logger, arraySorted, cloneObject, objectMap } from 'zeed'

const log = Logger('i18n')

const initialLocale = globalThis.isNodeTestEnv ? 'en' : (localStorage.getItem('locale') ?? '')

const messages = objectMap(
  import.meta.glob('../locales/*.json', { eager: true }),
  (path, component) => {
    const name = path.split('/').pop()?.slice(0, -5)
    return [name, cloneObject((component as any).default)]
  },
)

export const supportedLocales = arraySorted(Object.keys(messages))

export const i18n = createI18n({
  locale: initialLocale || navigator?.language?.slice(0, 2),
  // globalInjection: true,
  fallbackLocale: 'en',
  messages,
  legacy: false,
}) as any

log(`locale=${initialLocale || navigator?.language?.slice(0, 2)}, supportedLocales=${supportedLocales}`)

/** Shortcut to $t */
export const t = i18n?.global?.t ? i18n.global.t.bind(i18n.global) : (s: string) => s

// Locale

function setLocale(locale: string) {
  log('setLocale to', locale)
  i18n.global.locale.value = locale || navigator?.language?.slice(0, 2)
  localStorage.setItem('locale', locale)
}

export const locale = computed({
  get: () => i18n.global.locale.value,
  set(value) {
    setLocale(value)
  },
})

export const _languageTag = globalThis.isNodeTestEnv ? ref('') : useLocalStorage('languageTag', '')

export const languageTag = computed({
  get: () => _languageTag.value,
  set(value) {
    try {
      'a'.localeCompare('b', value)
      _languageTag.value = value
    }
    catch (err) {
      log.warn(`invalid languageTag: ${value}`, err)
      _languageTag.value = ''
    }
  },
})
