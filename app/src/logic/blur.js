// https://github.com/tensorflow/tfjs-models/tree/master/body-pix#bodypixdrawbokeheffect
// https://github.com/tensorflow/tfjs-models/blob/b72c10bdbdec6b04a13f780180ed904736fa52a5/body-pix/demos/index.js#L517
// https://www.tensorflow.org/js/models

import { assert } from '../lib/assert'

const bodyPix = require('@tensorflow-models/body-pix')

const log = require('debug')('app:blur')

let animationFrameRequest
let videoEl, outputEl, captureStream

async function startTransformer(videoEl, outputEl) {
  const net = await bodyPix.load()
  const backgroundBlurAmount = 3
  const edgeBlurAmount = 3
  const flipHorizontal = false

  async function step() {
    const segmentation = await net.segmentPerson(videoEl)
    bodyPix.drawBokehEffect(
      outputEl,
      videoEl,
      segmentation,
      backgroundBlurAmount,
      edgeBlurAmount,
      flipHorizontal,
    )
    animationFrameRequest = requestAnimationFrame(step)
  }

  await step()
}

function stopTransformer() {
  if (animationFrameRequest) {
    cancelAnimationFrame(animationFrameRequest)
    animationFrameRequest = null
  }
}

function setVideoStream(videoEl, stream) {
  videoEl.srcObject = stream

  // https://github.com/tensorflow/tfjs-models/blob/b72c10bdbdec6b04a13f780180ed904736fa52a5/body-pix/demos/index.js#L117
  return new Promise((resolve) => {
    videoEl.onloadedmetadata = () => {
      videoEl.width = videoEl.videoWidth
      videoEl.height = videoEl.videoHeight
      videoEl.onloadedmetadata = undefined
      resolve(videoEl)
    }
  })
}

function stopExistingVideoCapture(videoEl) {
  if (videoEl && videoEl.srcObject) {
    // videoEl.srcObject.getTracks().forEach(track => {
    //   track.stop()
    // })
    videoEl.srcObject = null
  }
}

export function stopBlurTransform() {
  log('stopBlurTransform')
  stopTransformer()
  stopExistingVideoCapture(videoEl)
}

export async function startBlurTransform(stream) {
  try {
    stopBlurTransform()

    if (stream) {
      log('startBlurTransform')

      if (!videoEl || !outputEl) {
        let el = document.createElement('div')
        // el.className = 'transform debugTransform'
        el.innerHTML = `
        <video id="transformVideo" playsinline></video>
        <canvas id="transformOutput"></canvas>
      `
        document.body.appendChild(el)

        videoEl = document.getElementById('transformVideo')
        outputEl = document.getElementById('transformOutput')
      }

      assert(videoEl, 'expect videoEl')
      assert(outputEl, 'expect videoEl')

      await setVideoStream(videoEl, stream)
      await startTransformer(videoEl, outputEl)

      await videoEl.play()

      if (!captureStream) {
        captureStream = outputEl.captureStream()
      }

      return captureStream
    }
  } catch (err) {
    console.error('Exception:', err)
  }

  return stream
}
