<template>
  <div
    class="app hstack"
    @dragover="onDragOver"
    @dragend="onDragEnd"
    @dragexit="onDragEnd"
    @dragleave="onDragEnd"
    @drop="onDrop"
  >
    <sea-modal
      xclass="panel -left panel-settings"
      :active="mode === 'settings'"
      :title="l.settings.title"
      @close="mode = ''"
    >
      <app-settings></app-settings>
    </sea-modal>

    <div
      class="-fit vstack"
      :data-mode="state.maximized ? 'maximized' : 'default'"
    >
      <div class="-fit stack videos -relative">
        <app-video
          v-if="videoAllowed && state.stream"
          :stream="state.stream"
          muted
          :mirrored="state.deviceVideo !== 'desktop'"
          title="Local"
          id="self"
        />

        <app-video
          v-for="peer in peers"
          :key="peer.remote"
          :id="peer.remote"
          :stream="peer && peer.peer && peer.peer.stream"
          :fingerprint="peer && peer.peer && peer.peer.fingerprint"
          :name="peer && peer.peer && peer.peer.name"
        />

        <div
          class="message-container -error"
          v-if="!state.screenshots && state.requestBugTracking"
        >
          <div class="message">
            An error occurred. Please help us fixing it by allowing to send the
            details to us. This option is also available in the settings.
            Thanks!
            <u @click="doAllow(true)">Allow</u> |
            <u @click="doAllow(false)">Deny</u>
          </div>
        </div>

        <div class="message-container -error" v-else-if="state.error">
          <div class="message">
            {{ state.error }}
            <u @click="doReload">Reload page</u>
          </div>
        </div>

        <div class="message-container" v-else-if="state.upgrade">
          <div class="message">
            A new version of this web app has been downloaded.
            <u @click="doReload">Reload page</u>
          </div>
        </div>

        <div
          class="message-container"
          v-else-if="
            !hasPeers &&
            !state.screenshots &&
            mode !== 'share' &&
            state.showInviteHint
          "
        >
          <div
            class="message"
            v-html="l.share.message.replace('$symbol$', symbol)"
          ></div>
        </div>
      </div>

      <div class="tools hstack">
        <sea-link
          v-if="state.showSettings"
          @action="doTogglePanel('settings')"
          class="tool"
          :class="{ '-active': mode === 'settings' }"
        >
          <!--        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>-->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </sea-link>
        <div class="-fit">
          <sea-link
            class="tool"
            :class="{ '-off': state.muteVideo }"
            @action="doVideo"
          >
            <svg
              v-if="state.muteVideo"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
              ></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </sea-link>
          <sea-link class="tool tool-close" @action="doQuit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <!--          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line></svg>-->
          </sea-link>
          <sea-link
            class="tool"
            :class="{ '-off': state.muteAudio }"
            @action="doAudio"
          >
            <svg
              v-if="state.muteAudio"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="1" y1="1" x2="23" y2="23"></line>
              <path
                d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
              ></path>
              <path
                d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
              ></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
              ></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </sea-link>
        </div>
        <sea-link
          v-if="state.showFullscreen && supportsFullscreen"
          @action="doToggleFullScreen"
          class="tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-if="!isFullScreen"
          >
            <path
              d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-if="isFullScreen"
          >
            <path
              d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
            ></path>
          </svg>
        </sea-link>

        <sea-link
          v-if="state.showChat"
          @action="toggleChat()"
          class="tool messageBtn"
          :class="{ '-active': mode === 'chat' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-message-square"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            ></path>
          </svg>
          <div v-if="unreadMessages" class="unread-msg"></div>
        </sea-link>

        <sea-link
          v-if="state.showShare"
          @action="doTogglePanel('share')"
          class="tool"
          :class="{ '-active': mode === 'share' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
        </sea-link>
      </div>
    </div>

    <sea-modal
      xclass="panel -left panel-share"
      :active="mode === 'share'"
      :title="l.share.title"
      @close="mode = ''"
    >
      <app-share></app-share>
    </sea-modal>

    <sea-modal
      xclass="panel -left panel-share"
      :active="mode === 'chat'"
      title="Chat with others"
      @close="mode = ''"
      :scrollable="false"
    >
      <app-chat :name="this.name"></app-chat>
    </sea-modal>
  </div>
</template>

<script>
import { messages } from "../lib/emitter"
import { createLinkForRoom, shareLink } from "../lib/share"
import { setup } from "../state"
import SeaButton from "../ui/sea-button"
import SeaLink from "../ui/sea-link"
import SeaModal from "../ui/sea-modal"
import AppVideo from "./app-video"
import { setAllowedBugTracking } from "../bugs"
import { setBackgroundImage } from "../logic/background"

import { Logger } from "../lib/logger"
const log = Logger("app:app-sidebar")

export default {
  name: "app-main",
  components: {
    AppSettings: () =>
      import(/* webpackChunkName: 'settings' */ "./app-settings"),
    AppShare: () => import(/* webpackChunkName: 'share' */ "./app-share"),
    AppChat: () => import(/* webpackChunkName: 'chat' */ "./app-chat"),
    SeaLink,
    SeaModal,
    SeaButton,
    AppVideo,
  },
  data() {
    return {
      mode: "",
      settings: false,
      share: false,
      conn: null,
      dragOver: false,
      supportsFullscreen: document.fullscreenEnabled,
      isFullScreen: false,
      fullscreenHandler: null,
      symbol:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>',
      name: "",
      unreadMessages: false,
    }
  },
  computed: {
    hasPeers() {
      return Object.keys(this.state.status).length > 0
    },
    peers() {
      return this.state.screenshots ? [2, 3] : this.state.status
    },
    videoAllowed() {
      if (window.webkit != null) {
        return this.mode === ""
      }
      return true
    },
  },
  methods: {
    doShare() {
      shareLink(createLinkForRoom(this.state.room))
    },
    doVideo() {
      this.state.muteVideo = !this.state.muteVideo
      messages.emit("updateStream")
    },
    doAudio() {
      this.state.muteAudio = !this.state.muteAudio
      messages.emit("updateStream")
    },
    doQuit() {
      if (confirm("Really quit this session?")) {
        location.assign("/ng/")
      }
    },
    doReload() {
      location.reload()
    },
    doAllow(allow) {
      if (allow) {
        setAllowedBugTracking(allow)
      }
      this.state.requestBugTracking = false
    },
    doToggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
    },
    doTogglePanel(mode = "settings") {
      this.mode = !mode || this.mode === mode ? "" : mode
    },
    onDragOver(ev) {
      ev.preventDefault()
      ev.dataTransfer.dropEffect = "copy"
      this.dragOver = true
    },
    onDragEnd(ev) {
      this.dragOver = false
      ev.preventDefault()
    },
    onDrop(ev) {
      this.dragOver = false
      ev.preventDefault()
      let dataProvider = ev.dataTransfer || ev.clipboardData
      if (dataProvider) {
        const files = dataProvider?.files || []
        if (files.length) {
          let url = URL.createObjectURL(files[0])
          setBackgroundImage(url)
          this.state.backgroundImageURL = url
          this.state.backgroundAuthor = ""
          this.state.backgroundURL = ""

          // If just the background mode changes, don't restart the whole thing
          // if ((value && !prevValue) || (prevValue && !value)) {
          if (this.state.backgroundImageURL !== "image") {
            this.state.backgroundMode = "image"
            messages.emit("switchMedia")
          }
          // }
        }
      }
    },
    didChangeFullscreen(ev) {},
    toggleChat() {
      if (this.mode === "chat") {
        this.mode = ""
      } else {
        this.unreadMessages = false
        this.mode = "chat"
        this.focusChatInput()
      }
    },
    updateUserInfo() {
      messages.emit("userInfo", {
        name: this.name,
      })
    },
    triggerChatFunctions() {
      messages.on("newMessage", () => {
        if (this.mode !== "chat") {
          this.unreadMessages = true
        }
      })

      messages.on("userInfoUpdate", ({ peer, data }) => {
        this.peers[
          this.peers.findIndex((el) => el.remote === peer.local)
        ].peer.name = data.data.name
      })

      // Update Local Name to Remote peers every 10 seconds for new peers
      messages.on("requestUserInfo", () => {
        this.updateUserInfo()
      })
    },
    setName() {
      let name = localStorage.getItem("name")
      if (name) {
        this.name = name
        messages.emit("userInfo", {
          name: name,
        })
      }
    },
    focusChatInput() {
      if (
        !/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
      ) {
        setTimeout(() => {
          document.getElementById("message-input")?.focus()
        }, 100)
      }
    },
  },
  mounted() {
    this.setName()
    this.triggerChatFunctions()

    setTimeout(async () => {
      this.conn = await setup()
    }, 50)
    if (!this.hasPeers && !window.iPhone && this.state.showInviteOnStart) {
      this.mode = "share"
    }
    this.fullscreenHandler = (ev) => {
      this.isFullScreen = !!document.fullscreenElement
    }
    document.addEventListener("fullscreenchange", this.fullscreenHandler)
  },
  beforeDestroy() {
    document.removeEventListener("fullscreenchange", this.fullscreenHandler)
    this.conn?.cleanup()
  },
}
</script>
