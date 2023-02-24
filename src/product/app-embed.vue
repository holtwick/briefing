<script>
import { Logger } from 'zeed'
import { ROOM_URL } from '../config'
import { onMessageFromFrame } from '../lib/iframe'
import { generateName } from '../lib/names'

import './app-embed.scss'

const log = Logger('app-embed')

export default {
  components: {
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
        <label>
          <input v-model="presetAudio" type="checkbox" class="form-switch">
          Audio
        </label>
        <label>
          <input v-model="presetVideo" type="checkbox" class="form-switch">
          Video
        </label>
        <label>
          <input v-model="presetFullscreen" type="checkbox" class="form-switch">
          Fullscreen Button
        </label>
        <label>
          <input v-model="presetPrefs" type="checkbox" class="form-switch">
          Setting Button
        </label>
        <label>
          <input v-model="presetShare" type="checkbox" class="form-switch">
          Share Button
        </label>
        <label>
          <input v-model="presetChat" type="checkbox" class="form-switch">
          Share Chat
        </label>
        <label>
          <input v-model="presetInvite" type="checkbox" class="form-switch">
          Invite on Start
        </label>
      </div>
      <div><br>HTML code to be used in client</div>
      <pre class="code">{{ code }}</pre>
      <div><br>Status sent from iframe</div>
      <pre class="code">{{ status }}</pre>
    </div>
  </div>
</template>
