import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'
import { assert } from './lib/assert'

window.sentry = Sentry

export function setupSentry({ dsn, Vue } = {}) {
  assert(dsn)
  assert(Vue)
  Sentry.init({
    dsn,
    integrations: [
      new VueIntegration({ Vue, attachProps: true }),
    ],
  })
}
