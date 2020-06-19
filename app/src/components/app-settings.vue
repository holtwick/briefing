<template>
  <div class="text">
    <div class="form-group settings-group" v-if="video.length">
      <label class="form-labelx"><b>{{ l.settings.video }}</b></label>
      <label class="form-radio" v-for="d in video">
        <input type="radio" :id="d.deviceId" :value="d.deviceId" v-model="state.deviceVideo">
        <i class="form-icon"></i>
        {{ d.label }}
      </label>
    </div>
    <div class="form-group settings-group" v-if="audio.length">
      <label class="form-labelx"><b>{{ l.settings.audio }}</b></label>
      <label class="form-radio" v-for="d in audio">
        <input type="radio" :id="d.deviceId" :value="d.deviceId" v-model="state.deviceAudio">
        <i class="form-icon"></i>
        {{ d.label }}
      </label>
    </div>
    <div class="form-group settings-group">
      <sea-switch v-model="state.fill">{{ l.settings.fill }}</sea-switch>
      <div class="settings-info">{{ l.settings.fill_info }}</div>
    </div>
    <div class="form-group settings-group" v-if="false">
      <sea-switch v-model="state.bandwidth">{{ l.settings.bandwidth }}</sea-switch>
      <div class="settings-info">{{ l.settings.bandwidth_info }}</div>
    </div>
    <div class="form-group settings-group" v-if="false">
      <sea-switch v-model="state.blur">{{ l.settings.blur }}</sea-switch>
      <div class="settings-info">{{ l.settings.blur_info }}</div>
    </div>
    <div class="form-group settings-group" v-if="enableSubscribe">
      <sea-switch v-model="state.subscribe">{{ l.settings.subscribe }}</sea-switch>
      <div class="settings-info">{{ l.settings.subscribe_info }}</div>
    </div>
    <div class="form-group settings-group">
      <sea-switch v-model="sentry">{{ l.settings.sentry}}</sea-switch>
      <div class="settings-info" v-html="l.settings.sentry_info"></div>
    </div>
    <div class="form-group settings-group" v-if="false">
      <sea-switch v-model="sentry">Persist Settings</sea-switch>
      <!--      <div class="settings-info" v-html="l.settings.sentry_info"></div>-->
    </div>
    <div class="form-group settings-group">
      <label class="form-labelx"><b>Background</b></label>
      <label class="form-radio">
        <input type="radio" value="" v-model="state.backgroundMode">
        <i class="form-icon"></i>
        Original background
      </label>
      <label class="form-radio">
        <input type="radio" value="blur" v-model="state.backgroundMode">
        <i class="form-icon"></i>
        Blurred background
      </label>
      <label class="form-radio">
        <input type="radio" value="image" v-model="state.backgroundMode">
        <i class="form-icon"></i>
        Image background
      </label>
      <div v-if="state.backgroundMode === 'image'" class="settings-info">
        You can upload your own background by dragging an image file on this window.
        <div v-if="!state.backgroundAuthor">
          <img v-if="state.backgroundImageURL" :src="state.backgroundImageURL" alt="Your custom image" title="Your custom image">
        </div>
        <div v-else>
          <img v-if="state.backgroundImageURL" :src="state.backgroundImageURL" :alt="`Image by ${state.backgroundAuthor}`" :title="`Image by ${state.backgroundAuthor}`">
          Photo by
          <a :href="`${state.backgroundURL}?utm_source=briefing&utm_medium=referral`">{{ state.backgroundAuthor }}</a>
          on
          <a href="https://unsplash.com/?utm_source=briefing&utm_medium=referral" target="_blank" rel="noopener nofollow">Unsplash</a>.
          <br>
          <br>
          <a href="#" @click.prevent="doUnSplashImage">Click to get another random image.</a>
        </div>
      </div>
    </div>
    <div class="release-info">
      <a href="https://github.com/holtwick/briefing" target="_blank" rel="noopener" title="Open Github source code repository">{{ release }}</a>
    </div>
  </div>
</template>

<script>
import { messages } from '../lib/emitter'
import SeaSwitch from '../ui/sea-switch'
import { RELEASE } from '../config'
import { isAllowedBugTracking, setAllowedBugTracking } from '../bugs'
import { setBackgroundImage } from '../logic/background'

const log = require('debug')('app:app-settings')

export default {
  name: 'app-settings',
  components: {
    SeaSwitch,
  },
  data() {
    return {
      enableSubscribe: false,
    }
  },
  computed: {
    release: _ => RELEASE,
    sentry: {
      set(v) {
        setAllowedBugTracking(v, this.l.settings.sentry_confirm)
      },
      get() {
        return isAllowedBugTracking()
      },
    },
    video() {
      let videoDevices = this.state.devices.filter(d => d.kind === 'videoinput' && d.deviceId !== 'default')
      if (navigator?.mediaDevices?.getDisplayMedia) {
        return [{
          deviceId: 'desktop',
          label: this.l.settings.desktop,
        },
          ...videoDevices,
        ]
      }
      return videoDevices
    },
    audio() {
      return this.state.devices.filter(d => d.kind === 'audioinput' && d.deviceId !== 'default')
    },
  },
  methods: {
    async doUnSplashImage() {
      const UNSPLASH_API = process.env.VUE_APP_UNSPLASH_API
      if (UNSPLASH_API) {
        // Request (GET https://api.unsplash.com/photos/random?client_id=y7oYdXFfoT8OrOjUVrMpsiyFr5UkBy8mQOQgkIpx3z4&content_filter=high&query=background)
        let resp = await fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API}&content_filter=high&query=background`)
        if (resp) {
          let info = await resp.json()
          this.state.backgroundAuthor = info?.user?.name || 'Unknown'
          this.state.backgroundURL = info?.links?.html || 'https://unsplash.com/'
          // log('Unsplash', info?.urls?.regular)
          let url = info?.urls?.regular
          this.state.backgroundImageURL = url
          await setBackgroundImage(url)
        }
      }
    },
  },
  // async mounted() {
  //   if (!this.state.backgroundImageURL) {
  //     await this.doUnSplashImage()
  //   }
  // },
  watch: {
    async 'state.deviceVideo'() {
      await this.$nextTick()
      messages.emit('switchMedia')
    },
    async 'state.deviceAudio'() {
      await this.$nextTick()
      messages.emit('switchMedia')
    },
    async 'state.backgroundMode'(value, prevValue) {
      await this.$nextTick()

      if (value === 'image') {
        if (!this.state.backgroundImageURL) {
          await this.doUnSplashImage()
        }
      }

      // If just the background mode changes, don't restart the whole thing
      if ((value && !prevValue) || (prevValue && !value)) {
        messages.emit('switchMedia')
      }
    },
    async 'state.bandwidth'() {
      await this.$nextTick()
      messages.emit('negotiateBandwidth')
    },
    async 'state.subscribe'() {
      await this.$nextTick()
      messages.emit('subscribePush')
    },
  },
}
</script>

