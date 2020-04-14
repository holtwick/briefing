export async function getDevices() {
  try {
    return navigator.mediaDevices.enumerateDevices()
  } catch (err) {
    console.warn('enumerateDevices err', err)
  }
  return []
}

export let bandwidthVideoConstraints = {
  video: {
    width: { ideal: 320 },
    height: { ideal: 240 },
  },
  width: { ideal: 320 },
  height: { ideal: 240 },
}

export let defaultVideoConstraints = {
  frameRate: {
    min: 1,
    ideal: 15,
  },
}

export let defaultAudioConstraints = {
  echoCancellation: true,
  noiseSuppression: true,
  autoGainControl: true,
}

export async function getUserMedia(constraints = {
  audio: {
    ...defaultAudioConstraints,
  },
  video: {
    ...defaultVideoConstraints,
    facingMode: 'user',
  },
}) {
  try {
    // Solution via https://stackoverflow.com/a/47958949/140927
    // Only available for HTTPS! See https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Security
    return navigator.mediaDevices.getUserMedia(constraints)
  } catch (err) {
    console.warn('getUserMedia err', err)
  }
}

