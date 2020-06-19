export function getCompactChecksum(...args) {
  args.sort()
  let values = Array.prototype.concat.apply([], args) // join
  if (values.length % 2) values.push(0) // even length
  let checksum = 0
  for (let j = 0; j < values.length; j += 2) {
    const left = values[j]
    const right = values[j + 1]
    checksum += left * 0xff + right
  }
  return (checksum % 0xffff).toString(16).padStart(4, '0')
}

const BASE32_ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'

// https://www.crockford.com/base32.html
// https://github.com/LinusU/base32-encode/blob/master/index.js
export function base32Encode(buffer, outputLength) {
  let length = buffer.byteLength
  let view = new Uint8Array(buffer)

  let bits = 0
  let value = 0
  let output = ''

  for (let i = 0; i < length; i++) {
    value = (value << 8) | view[i]
    bits += 8

    while (bits >= 5) {
      output += BASE32_ALPHABET[(value >>> (bits - 5)) & 31]
      bits -= 5

      if (outputLength >= 0) {
        if (output.length >= outputLength) {
          return output
        }
      }
    }
  }

  if (bits > 0) {
    output += BASE32_ALPHABET[(value << (5 - bits)) & 31]
  }

  return output
}

export function splitByNChars(value, splitN = 3, join = '-') {
  let strings = []
  while (value?.length) {
    strings.push(value.substr(0, splitN))
    value = value.substr(splitN)
  }
  return strings.join(join)
}

export async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
  return base32Encode(hashBuffer, 9)
}

export async function digestMessages(...messages) {
  console.log('messages', messages)
  messages = messages.map(m => m.toString().toLowerCase().trim())
  messages.sort()
  return digestMessage(messages.join('\n'))
}

export async function sha256Messages(...messages) {
  console.log('messages', messages)
  messages = messages.map(m => m.toString().toLowerCase().trim())
  messages.sort()
  const message = messages.join('\n')
  const msgUint8 = new TextEncoder().encode(message)
  return await crypto.subtle.digest('SHA-256', msgUint8)
}


function getFingerprintArray(fp) {
  if (!fp) return null
  return fp.split(':').map(v => parseInt(v.toLowerCase(), 16))
  // return Uint8Array.from(fp.split(':').map(v => parseInt(v.toLowerCase(), 16)))
}

export function getFingerprint(sdp) {
  if (sdp) {
    let m = /^a=fingerprint(:[\w-]+)?\s+(.*)$/gm.exec(sdp)
    if (m.length) {
      // console.log(sdp, m)
      return getFingerprintArray(m[2])
    }
  }
  return null
}

export function getFingerprintString(sdp) {
  if (sdp) {
    let m = /^a=fingerprint.*$/gm.exec(sdp)
    if (m && m.length) {
      return m[0]
    }
  }
  return null
}

