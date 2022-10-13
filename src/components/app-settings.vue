<!-- eslint-disable vue/no-constant-condition -->

<script>
import { Logger, messages } from 'zeed'
import { isAllowedBugTracking, setAllowedBugTracking } from '../bugs'
import { ICE_CONFIG, RELEASE, SIGNAL_SERVER_URL } from '../config'
import { WebRTC } from '../logic/webrtc'
import SeaSwitch from '../ui/sea-switch.vue'

const log = Logger('app:app-settings')

export default {
  name: 'AppSettings',
  components: {
    SeaSwitch,
  },
  data() {
    return {
      enableSubscribe: false,
      iOS: window.iOS,
      iPhone: window.iPhone,
      SIGNAL_SERVER_URL,
      ICE_CONFIG,
      signalStatus: '',
      showInfo: false,
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
      const videoDevices = this.state.devices.filter(
        d => d.kind === 'videoinput' && d.deviceId !== 'default',
      )
      if (navigator?.mediaDevices?.getDisplayMedia) {
        return [
          {
            deviceId: 'desktop',
            label: `${this.l.settings.desktop}\xA0 🖥`,
          },
          ...videoDevices,
        ]
      }
      return videoDevices
    },
    audio() {
      return this.state.devices.filter(
        d => d.kind === 'audioinput' && d.deviceId !== 'default',
      )
    },
  },
  watch: {
    'state.deviceVideo': async function () {
      await this.$nextTick()
      messages.emit('switchMedia')
    },
    'state.deviceAudio': async function () {
      await this.$nextTick()
      messages.emit('switchMedia')
    },
    'state.backgroundMode': async function (value, prevValue) {
      await this.$nextTick()

      // If just the background mode changes, don't restart the whole thing
      if ((value && !prevValue) || (prevValue && !value))
        messages.emit('switchMedia')
    },
    'state.bandwidth': async function () {
      await this.$nextTick()
      messages.emit('negotiateBandwidth')
    },
    'state.subscribe': async function () {
      await this.$nextTick()
      messages.emit('subscribePush')
    },
  },
  mounted() {
    // this.doCheckSignal()
  },
  methods: {
    async doCheckSignal() {
      const result = await WebRTC.checkStatus()
      this.signalStatus = result.ok ? '✅' : '❌'
    },
  },
}
</script>

<template>
  <div class="text">
    <div v-if="video.length" class="form-group settings-group">
      <label class="form-labelx"><b>{{ l.settings.video }}</b></label>
      <label v-for="d in video" :key="d.deviceId" class="form-radio">
        <input
          :id="d.deviceId"
          v-model="state.deviceVideo"
          type="radio"
          :value="d.deviceId"
        >
        <i class="form-icon" />
        {{ d.label }}
      </label>
    </div>
    <div v-if="audio.length" class="form-group settings-group">
      <label class="form-labelx"><b>{{ l.settings.audio }}</b></label>
      <label v-for="d in audio" :key="d.deviceId" class="form-radio">
        <input
          :id="d.deviceId"
          v-model="state.deviceAudio"
          type="radio"
          :value="d.deviceId"
        >
        <i class="form-icon" />
        {{ d.label }}
      </label>
    </div>
    <div class="form-group settings-group">
      <SeaSwitch v-model="state.fill">
        {{ l.settings.fill }}
      </SeaSwitch>
      <div class="settings-info">
        {{ l.settings.fill_info }}
      </div>
    </div>
    <div v-if="false" class="form-group settings-group">
      <SeaSwitch v-model="state.bandwidth">
        {{
          l.settings.bandwidth
        }}
      </SeaSwitch>
      <div class="settings-info">
        {{ l.settings.bandwidth_info }}
      </div>
    </div>
    <div v-if="false" class="form-group settings-group">
      <SeaSwitch v-model="state.blur">
        {{ l.settings.blur }}
      </SeaSwitch>
      <div class="settings-info">
        {{ l.settings.blur_info }}
      </div>
    </div>
    <div v-if="enableSubscribe" class="form-group settings-group">
      <SeaSwitch v-model="state.subscribe">
        {{
          l.settings.subscribe
        }}
      </SeaSwitch>
      <div class="settings-info">
        {{ l.settings.subscribe_info }}
      </div>
    </div>
    <div v-if="false" class="form-group settings-group">
      <SeaSwitch v-model="sentry">
        {{ l.settings.sentry }}
      </SeaSwitch>
      <div class="settings-info" v-html="l.settings.sentry_info" />
    </div>
    <div v-if="false" class="form-group settings-group">
      <SeaSwitch v-model="sentry">
        {{
          l.settings.persist_settings
        }}
      </SeaSwitch>
      <!--      <div class="settings-info" v-html="l.settings.sentry_info"></div> -->
    </div>
    <div class="release-info">
      <a href="#" @click.prevent="showInfo = !showInfo">Server Info</a>
      |
      <a
        href="https://github.com/holtwick/briefing"
        target="_blank"
        rel="noopener"
        title="Open Github source code repository"
      >{{ release }}</a>
    </div>
    <div v-if="showInfo">
      <div class="form-group settings-group">
        <label class="form-labelx"><b>Signal Server</b></label>
        <div>{{ signalStatus }} {{ SIGNAL_SERVER_URL }}</div>
        <div>
          <a href="#" @click.prevent="doCheckSignal">Check Connectivity</a>
        </div>
      </div>
      <div class="form-group settings-group">
        <label class="form-labelx"><b>STUN / TURN Servers</b></label>
        <div v-for="(server, index) in ICE_CONFIG.iceServers" :key="index">
          {{ server.urls }}
        </div>
      </div>
    </div>
  </div>
</template>
