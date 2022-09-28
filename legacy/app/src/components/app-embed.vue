<template>
  <div class="-scroll">
    <div class="app-welcome">
      <h1>Embed Briefing</h1>
      <iframe class="iframe" :src="url"></iframe>
      <div class="url">
        <a :href="url" targe="_blank">{{ url }}</a>
      </div>
      <div class="options">
        <sea-switch v-model="presetAudio">Audio</sea-switch>
        <sea-switch v-model="presetVideo">Video</sea-switch>
        <sea-switch v-model="presetFullscreen">Fullscreen Button</sea-switch>
        <sea-switch v-model="presetPrefs">Setting Button</sea-switch>
        <sea-switch v-model="presetShare">Share Button</sea-switch>
        <sea-switch v-model="presetChat">Share Chat</sea-switch>
        <br />
        <sea-switch v-model="presetInvite">Invite on Start</sea-switch>
      </div>
      <div><br />HTML code to be used in client</div>
      <pre class="code">{{ code }}</pre>
      <div><br />Status sent from iframe</div>
      <pre class="code">{{ status }}</pre>
    </div>
  </div>
</template>

<style lang="scss">
.app-welcome {
  margin: 2rem;
  padding-bottom: 4rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  a {
    color: rgba(43, 184, 255, 1);
    user-select: text;
  }

  .url {
    margin-bottom: 1rem;
  }

  .options {
    display: inline-block;
    margin-bottom: 1rem;

    .form-group {
      margin-bottom: 0.5rem;
    }
  }

  .code {
    display: inline-block;
    text-align: left;
    user-select: text;
    width: 75vw;

    background: #ccc;
    color: black;
    padding: 1rem;
    border-radius: 0.25rem;
  }
}
</style>

<style>
.iframe {
  border: 1px solid #ccc;
  width: Min(90vh, 90vw);
  height: Calc(0.75 * Min(90vh, 90vw));
  margin-bottom: 1rem;
}
</style>

<script>
import { DEBUG, ROOM_PATH, ROOM_URL, SHOW_FULLSCREEN } from "../config"
import { generateName } from "../lib/names"
import { onMessageFromFrame } from "../lib/iframe"
import SeaSwitch from "../ui/sea-switch"

export default {
  components: {
    SeaSwitch,
  },
  data() {
    let defaultName = DEBUG
      ? process.env.VUE_APP_DEBUG_DEFAULT_ROOM || "development"
      : generateName()
    return {
      defaultName,
      room: defaultName,
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
      let prefix = DEBUG ? ROOM_PATH : ROOM_URL
      return (
        prefix +
        this.defaultName +
        "?audio=" +
        Number(this.presetAudio) +
        "&video=" +
        Number(this.presetVideo) +
        "&fs=" +
        Number(this.presetFullscreen) +
        "&invite=" +
        Number(this.presetInvite) +
        "&prefs=" +
        Number(this.presetPrefs) +
        "&share=" +
        Number(this.presetShare) +
        "&chat=" +
        Number(this.presetChat)
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
    onMessageFromFrame("status", (data) => {
      console.log("new guest count", data)
      this.status = data
    })
  },
}
</script>
