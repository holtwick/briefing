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
      <div class="settings-info">Briefing tries to use up the available screen space as much as possible by scaling up the video in a way that makes it fit in its visual frame. When turned off you will see the whole video instead but with
        borders around it.
      </div>
    </div>
    <div class="form-group settings-group">
      <sea-switch v-model="state.subscribe">Subscribe to this room</sea-switch>
      <div class="settings-info">By subscribing you will receive a notification when somebody else enters this room. You can then join the conversation with one click.</div>
    </div>
    <div class="form-group settings-group">
      <sea-switch v-model="state.bandwidth">{{ l.settings.bandwidth }}</sea-switch>
      <div class="settings-info">Experimental: With this setting Briefing tries to reduce bandwith by thinning video and audio data.</div>
    </div>
    <div class="form-group settings-group">
      <sea-switch v-model="state.blur">{{ l.settings.blur }}</sea-switch>
      <div class="settings-info">Experimental: A smart artifical intelligence algorithm is able to indetify the shapes of persons and will blur out the remaining background. This adds some visual privacy to your call. But attention, this is
        a very power consuming feature and will very likely not work on mobile devices!
      </div>
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

