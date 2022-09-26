// https://github.com/tensorflow/tfjs-models/tree/master/body-pix#bodypixdrawbokeheffect
// https://github.com/tensorflow/tfjs-models/blob/b72c10bdbdec6b04a13f780180ed904736fa52a5/body-pix/demos/index.js#L517
// https://www.tensorflow.org/js/models

import { assert } from "../lib/assert"
import { state } from "../state"
import { trackException } from "../bugs/index"

const bodyPix = require("@tensorflow-models/body-pix")

import { Logger } from "../lib/logger"
const log = Logger("app:blur")

let animationFrameRequest
let videoEl, outputEl, captureStream

let image

export async function setBackgroundImage(url) {
  image = null
  if (url) {
    let resp = await fetch(url)
    log("img", resp)
    if (resp) {
      let blob = await resp.blob()
      log("blob", blob)
      let url = URL.createObjectURL(blob)
      let img = new Image()
      img.onload = function () {
        image = this
        log("image", image)
      }
      img.src = url
    }
  }
}

async function startTransformer(videoEl, outputEl) {
  const net = await bodyPix
    .load
    // {
    //   // https://github.com/tensorflow/tfjs-models/tree/master/body-pix#config-params-in-bodypixload
    //   architecture: 'MobileNetV1',
    //   outputStride: 16,
    //   multiplier: 0.75,
    //   quantBytes: 2,
    // },
    ()
  const backgroundBlurAmount = 3
  const edgeBlurAmount = 3
  const flipHorizontal = false

  async function step() {
    const segmentation = await net.segmentPerson(videoEl, {
      // https://github.com/tensorflow/tfjs-models/tree/master/body-pix#params-in-segmentperson
      // internalResolution: 'full',
      // maxDetections: 5, // persons
    })
    if (state.backgroundMode === "image") {
      const width = videoEl.width
      const height = videoEl.height

      if (width <= 0 || height <= 0) {
        return
      }

      // Make video and canvas the same size
      if (outputEl.width !== width || outputEl.height !== height) {
        outputEl.width = width
        outputEl.height = height
      }

      // Background
      let bgPixel
      let ctx = outputEl.getContext("2d")
      if (image) {
        ctx.drawImage(image, 0, 0, width, height)
        // todo: keep if width and height did not change
        bgPixel = ctx.getImageData(0, 0, width, height)?.data
      }

      // Foreground
      ctx.drawImage(videoEl, 0, 0, width, height)
      let imageData = ctx.getImageData(0, 0, width, height)
      let pixel = imageData.data
      for (let p = 0; p < pixel.length; p += 4) {
        // take the pixel either from the video or the background, simple yet effective ;)
        if (segmentation.data[p / 4] === 0) {
          if (bgPixel) {
            pixel[p] = bgPixel[p]
            pixel[p + 1] = bgPixel[p + 1]
            pixel[p + 2] = bgPixel[p + 2]
            pixel[p + 3] = bgPixel[p + 3]
          } else {
            pixel[p + 3] = 0
          }
        }
      }
      ctx.imageSmoothingEnabled = true
      ctx.putImageData(imageData, 0, 0)
    } else {
      bodyPix.drawBokehEffect(
        outputEl,
        videoEl,
        segmentation,
        backgroundBlurAmount,
        edgeBlurAmount,
        flipHorizontal
      )
    }
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
    videoEl.onloadeddata = () => {
      videoEl.width = videoEl.videoWidth
      videoEl.height = videoEl.videoHeight
      videoEl.onloadeddata = undefined
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
  log("stopBlurTransform")
  stopTransformer()
  stopExistingVideoCapture(videoEl)
}

export async function startBlurTransform(stream) {
  try {
    stopBlurTransform()

    if (stream) {
      log("startBlurTransform")

      if (!videoEl || !outputEl) {
        let el = document.createElement("div")
        // el.className = 'transform debugTransform'
        el.innerHTML = `
        <video id="transformVideo" playsinline></video>
        <canvas id="transformOutput"></canvas>
      `
        document.body.appendChild(el)

        videoEl = document.getElementById("transformVideo")
        outputEl = document.getElementById("transformOutput")
      }

      assert(videoEl, "expect videoEl")
      assert(outputEl, "expect videoEl")

      await setVideoStream(videoEl, stream)
      await videoEl.play()

      await startTransformer(videoEl, outputEl)

      if (!captureStream) {
        captureStream = outputEl.captureStream()
      }

      return captureStream
    }
  } catch (err) {
    trackException(err)
  }

  return stream
}
