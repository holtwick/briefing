import { Logger, MemStorage, setupEnv } from 'zeed'

// Someone else also sets the logger?!
Logger.setLock(true)

// eslint-disable-next-line no-console
console.info('vitest setup performed!')

setupEnv()

// @ts-expect-error HACK
globalThis.navigator = { language: 'en', userAgent: '' }

// @ts-expect-error HACK
globalThis.location = {
  protocol: 'http:',
  host: 'localhost:8080',
}

// @ts-expect-error HACK
globalThis.window = {}

// @ts-expect-error Hack
globalThis.localStorage = new MemStorage()
