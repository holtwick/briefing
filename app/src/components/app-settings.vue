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
    <div class="form-group settings-group">
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
  </div>
</template>

<script>
import { messages } from '../lib/emitter'
import SeaSwitch from '../ui/sea-switch'

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
    sentry: {
      set(v) {
        localStorage.allowSentry = v ? '1' : '0'
        if (v) {
          if (confirm(this.l.settings.sentry_confirm)) {
            location.reload()
          }
        }
      },
      get() {
        return localStorage.allowSentry !== '0'
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

  watch: {
    async 'state.deviceVideo'() {
      await this.$nextTick()
      messages.emit('switchVideo')
    },
    async 'state.deviceAudio'() {
      await this.$nextTick()
      messages.emit('switchVideo')
    },
    async 'state.blur'() {
      await this.$nextTick()
      messages.emit('switchVideo')
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

