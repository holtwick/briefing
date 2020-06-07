import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'
import { assert } from './lib/assert'

window.sentry = Sentry

export function setupSentry({ dsn, Vue } = {}) {
  assert(dsn)
  assert(Vue)
  const release = process.env.VUE_APP_NAME + '@' + process.env.VUE_APP_VERSION
  console.info(release)
  Sentry.init({
    dsn,
    release,
    integrations: [
      new VueIntegration({ Vue, attachProps: true }),
    ],
  })
}
