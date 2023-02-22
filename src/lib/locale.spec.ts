import { prepareLocaleStrings } from './locale'

describe('Locale', () => {
  const en:any = {
    home: {
      welcome: 'Welcome',
      email: 'someone@example.com',
    },
  }

  const de:any = {
    home: {
      welcome: 'Willkommen',
    },
  }

  it('should translate correctly: en', () => {
    const strings = prepareLocaleStrings({
      lang: 'en',
      locales: { en, de },
    })
    expect(strings.home.welcome).toBe('Welcome')
    expect(strings.home.email).toBe('someone@example.com')
    expect(strings.home.unknown).toBe(undefined)
  })

  it('should translate correctly: de', () => {
    const strings = prepareLocaleStrings({
      lang: 'de',
      locales: { en, de },
    })
    expect(strings.home.welcome).toBe('Willkommen')
    expect(strings.home.email).toBe('someone@example.com') // Fallback!
  })
})
