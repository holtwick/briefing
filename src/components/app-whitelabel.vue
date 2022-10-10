<script>
import { trackSilentException } from '../bugs'
import { DEFAULT_ROOM, ROOM_PATH, ROOM_URL } from '../config'
import { generateName } from '../lib/names'

export default {
  name: 'AppWhitelabel',
  components: {},
  data() {
    const defaultName = DEFAULT_ROOM ?? generateName()
    return {
      defaultName,
      room: defaultName,
      url: '',
      initialWidth: -1,
      currentChar: 0,
      observer: null,
      roomHtml: ROOM_URL.replace(/^https?:\/\//gm, '')
        .replaceAll('/', '<span class="slash">/</span>')
        .replaceAll('.', '<span class="dot">.</span>'),
    }
  },
  watch: {
    room() {
      this.updateInput()
    },
  },
  async mounted() {
    await this.$nextTick()

    const input = this.$refs.input
    if (input) {
      input.style.width = `${input.scrollWidth}px`
      this.updateInput()

      this.observer = new ResizeObserver(this.updateInput)
      this.observer.observe(document.body)

      this.charAnimation()

      if (
        !/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
      )
        input.focus()
    }
  },

  beforeUnmount() {
    this.observer?.disconnect()
  },
  methods: {
    doEnterRoom() {
      const room = this.room || this.defaultName || ''
      this.state.room = room
      try {
        window.history.pushState(
          null, // { room },
          null, // room,
          ROOM_PATH + room,
        )
      }
      catch (err) {
        trackSilentException(err)
      }
    },
    updateInput() {
      const input = this.$refs.input
      if (input) {
        if (this.initialWidth < 0)
          this.initialWidth = input.scrollWidth
        const value = input.value.trim()
        input.style.width = '1px'
        input.style.width = `${value ? input.scrollWidth : this.initialWidth}px`
        this.url = ROOM_PATH + (value || this.defaultName)
      }
    },
    charAnimation() {
      setTimeout(() => {
        const input = this.$refs.input
        if (input) {
          this.currentChar++
          this.$refs.input.value = this.defaultName.substr(0, this.currentChar)
          this.updateInput()
          if (this.currentChar < this.defaultName.length)
            this.charAnimation()
        }
      }, 100)
    },
  },
}
</script>

<template>
  <div class="-scroll">
    <div class="page1">
      <div class="logo">
        <form id="form" @submit.prevent="doEnterRoom">
          <a
            id="link"
            :href="url"
            class="link"
            @click.prevent="doEnterRoom"
            v-html="roomHtml"
          />
          <wbr>
          <input
            id="room"
            ref="input"
            v-model="room"
            type="text"
            name="room"
            enterkeyhint="go"
            spellcheck="false"
            :placeholder="defaultName"
          >
        </form>
        <div class="button-container">
          <a
            id="button"
            :href="url"
            class="button start-button"
            @click.prevent="doEnterRoom"
          >{{ l.welcome.start }}</a>
        </div>
      </div>
      <div class="footer links">
        <p>
          FOR WHITELABEL USE WE ASK YOU TO PURCHASE A
          <a href="https://github.com/holtwick/briefing/#commercial-license">
            COMMERCIAL LICENSE
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'app-whitelabel.scss';
</style>
