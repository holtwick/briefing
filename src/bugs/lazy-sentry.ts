import * as Sentry from '@sentry/browser'
import { BrowserTracing } from '@sentry/tracing'
import { RELEASE } from '../config'

window.sentry = Sentry

export function setupSentry({ dsn }: any = {}) {
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
