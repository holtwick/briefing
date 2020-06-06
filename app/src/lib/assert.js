// Copyright (c) 2020 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright

// const log = require('debug')('assert')

import { trackSilentException } from './bugs'

export function assert(cond, ...args) {
  if (!cond) {
    if (typeof console !== undefined) {
      if (console.assert) {
        // https://developer.mozilla.org/de/docs/Web/API/Console/assert
        console.assert(cond, ...args)
      } else {
        console.error(`Assert did fail with: ${cond}`, ...args)
      }
    }
    try {
      if (typeof expect !== undefined) {
        expect(cond).toBeTruthy(cond)
      }
    } catch (err) {
      console.warn('assert err', err)
      trackSilentException(err)
      // console.error('Exception:', err)
    }
  }
  // log(`Assert: ${cond}`, ...args)
}
