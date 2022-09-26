import * as Sentry from "@sentry/browser"
import { Vue as VueIntegration } from "@sentry/integrations"
import { assert } from "../lib/assert"
import { RELEASE } from "../config"

window.sentry = Sentry

export function setupSentry({ dsn, Vue } = {}) {
  assert(dsn)
  assert(Vue)
  Sentry.init({
    dsn,
    release: RELEASE,
    integrations: [new VueIntegration({ Vue, attachProps: true })],
  })
}
