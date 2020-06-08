<template>
  <div class="peer item" @click="handleClick" :class="{ '-maximized': state.maximized === id }">
    <video
      class="video"
      :class="{'-mirrored': mirrored}"
      ref="video"
      autoplay
      playsinline
      :muted="muted"
      v-if="stream"
      :data-fit="state.fill ? 'cover' : 'contain'"
      @loadedmetadata="doPlay"
    />
    <div v-else class="video video-placeholder -content-placeholder">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
      <label>Waiting for connection</label>
    </div>
    <div v-if="state.muteVideo && id === 'self'" class="video video-placeholder -content-placeholder">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video-off">
        <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      </svg>
      <label>You turned the video off</label>
    </div>
  </div>
</template>

<script>
import { trackSilentException } from '../bugs'

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
      // Keep in mind https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
      // But if the user allows to access camera it should be fine
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
    id: {
      type: String,
    },
  },
  data() {
    return {}
  },
  methods: {
    async doConnectStream(stream) {
      log('doConnectStream', this.title, stream)
      if (stream) {
        try {
          await this.$nextTick()
          await connectStreamToVideoElement(stream, this.$refs.video)
        } catch (err) {
          trackSilentException(err)
        }
      }
    },
    handleClick() {
      if (this.state.maximized === this.id) {
        this.state.maximized = ''
      } else {
        this.state.maximized = this.id
      }
    },
    async doPlay() {
      try {
        log('force play')
        await this.$nextTick()
        this.$refs?.video?.play()
      } catch (err) {
        trackSilentException(err)
      }
    },
  },
  async mounted() {
    // webrtc.on('stream', async () => {
    //   await this.$nextTick()
    //   await this.doConnectStream(this.stream)
    // })
    if (this.stream) {
      await this.doConnectStream(this.stream)
    }
  },
  watch: {
    stream(value) {
      this.doConnectStream(value)
    },
  },
}
</script>

