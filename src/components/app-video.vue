<script lang="ts">
import { Logger } from 'zeed'
import { trackSilentException } from '../bugs'
import { state } from '../state'

const log = Logger('app:app-peer')

export default {
  name: 'AppVideo',
  props: {
    stream: {
      type: MediaStream,
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
    fingerprint: {
      type: String,
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      screenshotNumber: ++state.screenshotsNumber,
      showCode: false,
      showPlayButton: false,
      state,
    }
  },
  watch: {
    stream(value) {
      this.doConnectStream(value)
    },
  },
  async mounted() {
    // webrtc.on('stream', async () => {
    //   await this.$nextTick()
    //   await this.doConnectStream(this.stream)
    // })
    if (this.stream)
      await this.doConnectStream(this.stream)
  },
  methods: {
    playVideo(video) {
      const startPlayPromise = video.play().catch((err) => {
        log('VideoPlayError', err)
      })
      log('play', startPlayPromise)
      if (startPlayPromise !== undefined) {
        startPlayPromise
          .then(() => {
            // Start whatever you need to do only after playback
            // has begun.
          })
          .catch((error) => {
            if (error.name === 'NotAllowedError')
              this.showPlayButton = true
            else
              trackSilentException(error)
          })
      }
    },
    async doConnectStream(stream) {
      log('doConnectStream', this.title, stream)
      if (stream) {
        try {
          await this.$nextTick()

          const video = this.$refs.video
          log('connectStreamToVideoElement', stream, video)
          if (stream) {
            if ('srcObject' in video)
              video.srcObject = stream
            else
              video.src = window.URL.createObjectURL(stream) // for older browsers

            // Keep in mind https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
            // But if the user allows to access camera it should be fine
            // https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide
            video.onloadedmetadata = () => this.playVideo(video)
            video.onloadeddata = () => this.playVideo(video)
            video.onpause = () => this.playVideo(video)
            video.oncanplay = () => this.playVideo(video)
          }
        }
        catch (err) {
          trackSilentException(err)
        }
      }
    },
    handleClick() {
      if (this.showPlayButton)
        this.doPlay()
      else if (state.maximized === this.id)
        state.maximized = ''
      else
        state.maximized = this.id
    },
    doToggleShow() {
      this.showCode = !this.showCode
    },
    async doPlay() {
      try {
        log('force play manually')
        this.$refs?.video?.play()
        this.showPlayButton = false
      }
      catch (err) {
        trackSilentException(err)
      }
    },
  },
}
</script>

<template>
  <div class="peer item" :class="{ '-maximized': state.maximized === id }" @click="handleClick">
    <div
      v-if="state.screenshots"
      :style="`background:url(/faces/${screenshotNumber}.jpg); background-size: cover; background-position: center;`"
      alt="" class="video" :class="{ '-mirrored': mirrored }"
    />
    <video
      v-else-if="stream" ref="video" class="video" :class="{ '-mirrored': mirrored }" autoplay playsinline
      :muted="muted" :data-fit="state.fill ? 'cover' : 'contain'" autoPictureInPicture="true"
    />
    <div v-else class="video video-placeholder -content-placeholder">
      <svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="-icon-placeholder"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
      <label>{{ $t("main.connection_wait") }}</label>
    </div>
    <div
      v-if="fingerprint" v-show="!state.maximized"
      class="video video-placeholder video-fingerprint -content-placeholder -overlay -info"
    >
      <label v-show="!showCode" title="Verification code" class="-short" @click.stop.prevent="doToggleShow">
        <svg
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-shield"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        {{ fingerprint.substr(fingerprint.length - 4, 4) }}
      </label>
      <label v-show="showCode" title="Verification code" class="-long" @click.stop.prevent="doToggleShow">
        {{ $t("main.security_info") }}
        <br>
        <code>{{ fingerprint }}</code>
      </label>
      <label v-if="String(name).trim().length" title="Name" class="-short" style="right: 5rem">
        {{ name }}
      </label>
    </div>
    <div v-if="state.muteVideo && id === 'self'" class="video video-placeholder -content-placeholder">
      <svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="-icon-placeholder"
      >
        <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
      <label>{{ $t("main.video_muted") }}</label>
    </div>
    <div v-if="stream && showPlayButton" class="video video-placeholder -content-placeholder -overlay">
      <svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="-icon-placeholder"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
      <label>{{ $t("main.action_restart_video") }}</label>
    </div>
  </div>
</template>
