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
    <div class="form-group settings-group">
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
    <div class="release-info">
      <a href="https://github.com/holtwick/briefing" target="_blank" rel="noopener" title="Open Github source code repository">{{ release }}</a>
    </div>
    <img v-if="state.bgURL" :src="state.bgURL" alt="">
  </div>
</template>

<script>
import { messages } from '../lib/emitter'
import SeaSwitch from '../ui/sea-switch'
import { RELEASE } from '../config'
import { isAllowedBugTracking, setAllowedBugTracking } from '../bugs'

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
      return [
        {
          deviceId: 'desktop',
          label: this.l.settings.desktop,
        },
        ...this.state.devices.filter(d => d.kind === 'videoinput' && d.deviceId !== 'default'),
      ]
    },
    audio() {
      return this.state.devices.filter(d => d.kind === 'audioinput' && d.deviceId !== 'default')
    },
    // audioOut() {
    //   return this.state.devices.filter(d => d.kind.toLowerCase() === 'audiooutput' && d.deviceId !== 'default')
    // },
  },
  async mounted() {
    if (!this.state.bgURL) {
      const UNSPLASH_API = process.env.VUE_APP_UNSPLASH_API
      if (UNSPLASH_API) {
        // Request (GET https://api.unsplash.com/photos/random?client_id=y7oYdXFfoT8OrOjUVrMpsiyFr5UkBy8mQOQgkIpx3z4&content_filter=high&query=background)
        let resp = await fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API}&content_filter=high&query=background`)
        if (resp) {
          let info = await resp.json()
          log('Unsplash', info?.urls?.regular)
          this.state.bgURL = info?.urls?.regular
        }
      }
    }
  },
  watch: {
    async 'state.deviceVideo'() {
      await this.$nextTick()
      messages.emit('switchMedia')
    },
    async 'state.deviceAudio'() {
      await this.$nextTick()
      messages.emit('switchMedia')
    },
    async 'state.blur'() {
      await this.$nextTick()
      messages.emit('switchMedia')
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

