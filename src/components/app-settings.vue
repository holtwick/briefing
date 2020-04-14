<template>
  <div>
    <div class="form-group">
      <sea-switch v-model="state.bandwidth">{{ l.settings.bandwidth }}</sea-switch>
    </div>
    <div class="form-group">
      <sea-switch v-model="state.blur">{{ l.settings.blur }}</sea-switch>
    </div>
    <div class="form-group" v-if="video.length">
      <label class="form-label"><b>{{ l.settings.video }}</b></label>
      <label class="form-radio" v-for="d in video">
        <input type="radio" :id="d.deviceId" :value="d.deviceId" v-model="state.deviceVideo">
        <i class="form-icon"></i>
        {{ d.label }}
      </label>
    </div>
    <div class="form-group" v-if="audio.length">
      <label class="form-label"><b>{{ l.settings.audio }}</b></label>
      <label class="form-radio" v-for="d in audio">
        <input type="radio" :id="d.deviceId" :value="d.deviceId" v-model="state.deviceAudio">
        <i class="form-icon"></i>
        {{ d.label }}
      </label>
    </div>
  </div>
</template>

<style lang="scss">
.form-group {
  margin-bottom: 1rem;
}
</style>

<script>
import { messages } from '../lib/emitter'
import SeaSwitch from '../ui/sea-switch'

export default {
  name: 'app-settings',
  components: {
    SeaSwitch,
  },
  data() {
    return {}
  },
  computed: {
    video() {
      return [
        {
          deviceId: 'desktop',
          label: this.l.settings.desktop,
        },
        ...this.state.devices.filter(d => d.kind.toLowerCase() === 'videoinput' && d.deviceId !== 'default'),
      ]
    },
    audio() {
      return this.state.devices.filter(d => d.kind.toLowerCase() === 'audioinput' && d.deviceId !== 'default')
    },
    // audioOut() {
    //   return this.state.devices.filter(d => d.kind.toLowerCase() === 'audiooutput' && d.deviceId !== 'default')
    // },
  },

  watch: {
    'state.deviceVideo'() {
      messages.emit('switchVideo')
    },
    'state.deviceAudio'() {
      messages.emit('switchVideo')
    },
    'state.blur'() {
      messages.emit('switchVideo')
    },
    'state.bandwidth'() {
      messages.emit('negotiateBandwidth')
    },
  },
}
</script>

