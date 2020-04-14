<template>
  <div class="peer item">
    <video
      class="video"
      ref="video"
      autoplay
      playsinline
      :muted="muted"
      v-if="stream"
      :class="{'-mirrored': mirrored}"
    />
    <div v-else class="video video-placeholder -content-placeholder">
      <i data-f7-icon="rectangle_stack_person_crop"></i>
    </div>
  </div>
</template>

<script>
const log = require('debug')('app:app-peer')

async function connectStreamToVideoElement(stream, video) {
  log('connectStreamToVideoElement', stream, video)
  if (stream) {
    if ('srcObject' in video) {
      video.srcObject = stream
    } else {
      video.src = window.URL.createObjectURL(stream) // for older browsers
    }
    video.onloadedmetadata = function (e) {
      video.play()
    }
    // setInterval(async () => {
    //   try {
    //     let result = await video.play()
    //     log('play ok', result)
    //   } catch (err) {
    //     log('play error', err)
    //   }
    // }, 1000)
  }
}

export default {
  name: 'app-video',

  props: {
    stream: {
      type: MediaStream | Object,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
    muted: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    mirrored: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    async doConnectStream(stream) {
      log('doConnectStream', this.title, stream)
      if (stream) {
        await this.$nextTick()
        await connectStreamToVideoElement(stream, this.$refs.video)
        // stream.onaddtrack = async () => await connectStreamToVideoElement(stream, this.$refs.video)
        // stream.onremovetrack = async () => await connectStreamToVideoElement(stream, this.$refs.video)
      }
    },
  },
  async mounted() {
    // webrtc.on('stream', async () => {
    //   await this.$nextTick()
    //   await this.doConnectStream(this.stream)
    // })
    await this.doConnectStream(this.stream)
  },
  watch: {
    stream(value) {
      this.doConnectStream(value)
    },
  },
}
</script>

