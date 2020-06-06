const log = require('debug')('app:bugs')

export function trackException(e) {
  console.error('Exception:', e)
  if (window.sentry) {
    log('sentry exception', e)
    window.sentry.captureException(e)
  }
}

export function trackSilentException(e) {
  if (window.sentry) {
    log('sentry silent  exception', e)
    window.sentry.captureException(e)
  }
}

export function trackEvent(e) {
  if (window.sentry) {
    log('sentry event', e)
    window.sentry.captureEvent(e)
  }
}
