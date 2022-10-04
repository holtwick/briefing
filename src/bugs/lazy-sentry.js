import * as Sentry from '@sentry/browser'
import { BrowserTracing } from '@sentry/tracing'
import { RELEASE } from '../config'
import { assert } from '../lib/assert'

window.sentry = Sentry

export function setupSentry({ dsn, Vue } = {}) {
  assert(dsn)
  assert(Vue)

  Sentry.init({
    dsn,
    release: RELEASE,
    integrations: [new BrowserTracing()],

    // beforeBreadcrumb(breadcrumb) {
    //   // console.log("bc", breadcrumb)
    //   return breadcrumb.category === "console" ? null : breadcrumb
    // },
    // async beforeSend(event) {
    //   // console.log("ev", event)
    //   return event
    // },
  })
}
