export function setMediaBitrate(sdp, media, bitrate) {
  let lines = sdp.split("\n")
  let line = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].indexOf("m=" + media) === 0) {
      line = i
      break
    }
  }
  if (line === -1) {
    // log('Could not find the m line for', media)
    return sdp
  }
  // log('Found the m line for', media, 'at line', line)

  // Pass the m line
  line++

  // Skip i and c lines
  while (lines[line].indexOf("i=") === 0 || lines[line].indexOf("c=") === 0) {
    line++
  }

  // If we're on a b line, replace it
  if (lines[line].indexOf("b") === 0) {
    // log('Replaced b line at line', line)
    lines[line] = "b=AS:" + bitrate
    return lines.join("\n")
  }

  // Add a new b line
  // log('Adding new b line before line', line)
  let newLines = lines.slice(0, line)
  newLines.push("b=AS:" + bitrate)
  newLines = newLines.concat(lines.slice(line, lines.length))
  return newLines.join("\n")
}

export function removeBandwidthRestriction(sdp) {
  return sdp.replace(/b=AS:.*\r\n/, "").replace(/b=TIAS:.*\r\n/, "")
}

// function isFirefox() {
//   return navigator?.userAgent?.includes('Firefox/')
// }
//
// function updateBandwidthRestriction(sdp, bandwidth) {
//   let modifier = 'AS'
//   if (isFirefox()) {
//     bandwidth = (bandwidth >>> 0) * 1000
//     modifier = 'TIAS'
//   }
//   if (sdp.indexOf('b=' + modifier + ':') === -1) {
//     // insert b= after c= line.
//     sdp = sdp.replace(/c=IN (.*)\r\n/, 'c=IN $1\r\nb=' + modifier + ':' + bandwidth + '\r\n')
//   } else {
//     sdp = sdp.replace(new RegExp('b=' + modifier + ':.*\r\n'), 'b=' + modifier + ':' + bandwidth + '\r\n')
//   }
//   return sdp
// }
