// Copyright (c) 2020 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright

import { v4 } from 'uuid'

// https://www.crockford.com/base32.html
// https://github.com/LinusU/base32-encode/blob/master/index.js
export function base32Encode(buffer) {
  const alphabet = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'
  // const alphabet = '0123456789abcdefghjkmnpqrstvwxyz'
  let length = buffer.byteLength
  let view = new Uint8Array(buffer)

  let bits = 0
  let value = 0
  let output = ''

  for (let i = 0; i < length; i++) {
    value = (value << 8) | view[i]
    bits += 8

    while (bits >= 5) {
      output += alphabet[(value >>> (bits - 5)) & 31]
      bits -= 5
    }
  }

  if (bits > 0) {
    output += alphabet[(value << (5 - bits)) & 31]
  }

  return output
}

export function UUID() {
  let array = []
  v4(null, array)
  return base32Encode(Buffer.from(array))
}

export const UUID_length = 26
