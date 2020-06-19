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
