<template>
  <div class="-scroll">
    <div class="page1">
      <div class="logo">
        <form id="form" @submit.prevent="doEnterRoom">
          <a @click.prevent="doEnterRoom" :href="url" id="link" class="link"
            >example<span class="dot">.</span>com<span class="slash">/</span></a
          >
          <wbr />
          <input
            type="text"
            id="room"
            name="room"
            ref="input"
            enterkeyhint="go"
            spellcheck="false"
            v-model="room"
            :placeholder="defaultName"
          />
        </form>
        <div class="button-container">
          <a
            @click.prevent="doEnterRoom"
            :href="url"
            class="button start-button"
            id="button"
            >{{ l.welcome.start }}</a
          >
        </div>
      </div>
      <div class="footer links">
        <p>
          FOR WHITELABEL USE YOU'LL NEED TO PURCHASE A
          <a href="https://github.com/holtwick/briefing/#commercial-license">
            COMMERCIAL LICENSE
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page1 {
  text-align: center;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.5;

  /*.text {*/
  /*  max-width: 40rem;*/
  /*  margin-left: auto;*/
  /*  margin-right: auto;*/
  /*  text-align: left;*/
  /*  padding: 1rem;*/
  /*  margin-top: 4rem;*/
  /*}*/

  a {
    color: inherit;
    text-decoration: inherit;
  }

  .logo {
    flex: auto;
    flex-direction: column;
    justify-content: center;
    display: inline-flex;
    align-items: center;
    font-variant-ligatures: common-ligatures;
    padding: 1rem;
    padding-top: 5rem;
    font-size: 4rem;
  }

  .dot,
  .slash {
    color: #00b5ff;
    opacity: 0.8;
  }

  .button-container {
    margin-top: 2rem;
  }

  .button {
    border: none;
    background: #00a2e4;
    color: white;
    font-weight: 400;
    font-size: 2rem;
    border-radius: 0.25rem;
    padding: 1rem 1.5rem;
    text-decoration: none;

    &:hover {
      background: #00b5ff;
    }

    &:active {
      background: #0088c0;
    }
  }

  .footer {
    margin-top: 5rem;
    opacity: 0.6;
    padding: 1rem;
    font-weight: 600;

    a {
      color: #00b5ff;
      text-decoration: none;
    }

    a:hover {
      color: rgba(129, 228, 255, 1);
    }

    a:active {
      color: #0088c0;
    }
  }

  /*.text a {*/
  /*  color: #0088c0;*/
  /*  text-decoration: none;*/

  /*  a:hover {*/
  /*    color: #00b5ff;*/
  /*  }*/

  /*  a:active {*/
  /*    color: #99e2ff;*/
  /*  }*/
  /*}*/

  input,
  input::placeholder {
    appearance: none;
    border: none;
    background: transparent;
    color: #99e2ff !important;
    font-size: inherit;
  }

  input {
    max-width: 90vw !important;
    width: 1px;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  input::placeholder {
    opacity: 0.5;
  }

  @media only screen and (max-width: 799px) {
    .logo {
      font-size: 8vw;
    }

    .link {
      font-size: 12vw;
      display: block;
    }

    .button-container {
      /*margin-top: 4vw;*/
      margin-top: 4rem;
    }

    .button {
      font-size: 4vw;
    }
  }

  .brand-icon {
    margin-left: 0.5rem;
    display: inline-block;
    vertical-align: middle;

    svg {
      fill: currentColor;
      color: inherit;
      width: 1rem; //  auto !important;
      height: 1rem;
    }
  }
}
</style>

<script>
import { trackSilentException } from "../bugs"
import { DEBUG, ROOM_PATH } from "../config"
import { generateName } from "../lib/names"

export default {
  name: "app-whitelabel",
  components: {},
  data() {
    let defaultName = DEBUG
      ? import.meta.env.BRIEFING_DEBUG_DEFAULT_ROOM || "development"
      : generateName()
    return {
      defaultName,
      room: defaultName,
      url: "",
      initialWidth: -1,
      currentChar: 0,
      observer: null,
    }
  },
  methods: {
    doEnterRoom() {
      const room = this.room || this.defaultName || ""
      this.state.room = room
      try {
        window.history.pushState(
          null, // { room },
          null, // room,
          ROOM_PATH + room
        )
      } catch (err) {
        trackSilentException(err)
      }
    },
    updateInput() {
      const input = this.$refs.input
      if (this.initialWidth < 0) this.initialWidth = input.scrollWidth
      let value = input.value.trim()
      input.style.width = "1px"
      input.style.width = (value ? input.scrollWidth : this.initialWidth) + "px"
      this.url = ROOM_PATH + (value || this.defaultName)
    },
    charAnimation() {
      setTimeout(() => {
        let input = this.$refs.input
        if (input) {
          this.currentChar++
          this.$refs.input.value = this.defaultName.substr(0, this.currentChar)
          this.updateInput()
          if (this.currentChar < this.defaultName.length) {
            this.charAnimation()
          }
        }
      }, 100)
    },
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
      input.style.width = input.scrollWidth + "px"
      this.updateInput()

      this.observer = new ResizeObserver(this.updateInput)
      this.observer.observe(document.body)

      this.charAnimation()

      if (
        !/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
      ) {
        input.focus()
      }
    }
  },

  beforeDestroy() {
    this.observer?.disconnect()
  },
}
</script>
