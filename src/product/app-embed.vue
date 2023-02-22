<script>
import { Logger } from 'zeed'
import { ROOM_URL } from '../config'
import { onMessageFromFrame } from '../lib/iframe'
import { generateName } from '../lib/names'
import SeaSwitch from '../ui/sea-switch.vue'

import './app-embed.scss'

const log = Logger('app-embed')

export default {
  components: {
    SeaSwitch,
  },
  data() {
    const defaultName = generateName()
    return {
      defaultName,
      room: '',
      presetAudio: true,
      presetVideo: true,
      presetFullscreen: false,
      presetInvite: false,
      presetPrefs: false,
      presetShare: false,
      presetChat: false,
      status: {},
    }
  },
  computed: {
    url() {
      // const prefix = location.protocol + "//" + location.host + "/" + ROOM_PATH
      const prefix = ROOM_URL
      return (
        `${prefix
        + (this.room || this.defaultName)
        }?audio=${
        Number(this.presetAudio)
        }&video=${
        Number(this.presetVideo)
        }&fs=${
        Number(this.presetFullscreen)
        }&invite=${
        Number(this.presetInvite)
        }&prefs=${
        Number(this.presetPrefs)
        }&share=${
        Number(this.presetShare)
        }&chat=${
        Number(this.presetChat)}`
      )
    },
    code() {
      return `<iframe 
  src="${this.url}"
  allow="camera; microphone; fullscreen; speaker; display-capture"
></iframe>`
    },
  },
  mounted() {
    onMessageFromFrame('status', (data) => {
      log('new guest count', data)
      this.status = data
    })
  },
}
</script>

<template>
  <div class="-scroll">
    <div class="app-welcome">
      <h1>Embed Briefing</h1>
      <iframe class="iframe" :src="url" />
      <div class="url">
        <a :href="url" targe="_blank">{{ url }}</a>
      </div>
      <div class="url">
        Room: <input v-model="room" type="text" :placeholder="defaultName">
      </div>
      <div class="options">
        <SeaSwitch v-model="presetAudio">
          Audio
        </SeaSwitch>
        <SeaSwitch v-model="presetVideo">
          Video
        </SeaSwitch>
        <SeaSwitch v-model="presetFullscreen">
          Fullscreen Button
        </SeaSwitch>
        <SeaSwitch v-model="presetPrefs">
          Setting Button
        </SeaSwitch>
        <SeaSwitch v-model="presetShare">
          Share Button
        </SeaSwitch>
        <SeaSwitch v-model="presetChat">
          Share Chat
        </SeaSwitch>
        <br>
        <SeaSwitch v-model="presetInvite">
          Invite on Start
        </SeaSwitch>
      </div>
      <div><br>HTML code to be used in client</div>
      <pre class="code">{{ code }}</pre>
      <div><br>Status sent from iframe</div>
      <pre class="code">{{ status }}</pre>
    </div>
  </div>
</template>
