<script>
import { Logger, messages } from 'zeed'
import { setAllowedBugTracking } from '../bugs'
import { ROOM_PATH } from '../config'
import { historyAddRoom } from '../lib/history'
import { createLinkForRoom, shareLink } from '../lib/share'
import { setup } from '../state'
import SeaLink from '../ui/sea-link.vue'
import SeaModal from '../ui/sea-modal.vue'
import AppChat from './app-chat.vue'
import AppSettings from './app-settings.vue'
import AppShare from './app-share.vue'
import AppVideo from './app-video.vue'

const log = Logger('app:app-sidebar')

export default {
  name: 'AppMain',
  components: {
    AppSettings,
    AppShare,
    AppChat,
    SeaLink,
    SeaModal,
    AppVideo,
  },
  data() {
    return {
      mode: '',
      settings: false,
      share: false,
      conn: null,

      supportsFullscreen: document.fullscreenEnabled,
      isFullScreen: false,
      fullscreenHandler: null,
      symbol:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>',
      name: '',
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
      if (window.webkit != null)
        return this.mode === ''

      return true
    },
  },
  mounted() {
    this.setName()
    this.triggerChatFunctions()

    setTimeout(async () => {
      this.conn = await setup()
    }, 50)
    if (!this.hasPeers && !window.iPhone && this.state.showInviteOnStart)
      this.mode = 'share'

    this.fullscreenHandler = (ev) => {
      this.isFullScreen = !!document.fullscreenElement
    }
    document.addEventListener('fullscreenchange', this.fullscreenHandler)

    // Remember room name for next visits
    historyAddRoom(this.state.room)
  },
  beforeUnmount() {
    document.removeEventListener('fullscreenchange', this.fullscreenHandler)
    this.conn?.cleanup()
  },
  methods: {
    doShare() {
      shareLink(createLinkForRoom(this.state.room))
    },
    doVideo() {
      this.state.muteVideo = !this.state.muteVideo
      messages.emit('updateStream')
    },
    doAudio() {
      this.state.muteAudio = !this.state.muteAudio
      messages.emit('updateStream')
    },
    doQuit() {
      // eslint-disable-next-line no-alert
      if (confirm('Really quit this session?'))
        location.assign(ROOM_PATH)
    },
    doReload() {
      location.reload()
    },
    doAllow(allow) {
      if (allow)
        setAllowedBugTracking(allow)

      this.state.requestBugTracking = false
    },
    doToggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
      }
      else {
        if (document.exitFullscreen)
          document.exitFullscreen()
      }
    },
    doTogglePanel(mode = 'settings') {
      this.mode = !mode || this.mode === mode ? '' : mode
    },
    didChangeFullscreen(ev) {},
    toggleChat() {
      if (this.mode === 'chat') {
        this.mode = ''
      }
      else {
        this.unreadMessages = false
        this.mode = 'chat'
        this.focusChatInput()
      }
    },
    updateUserInfo() {
      messages.emit('userInfo', {
        name: this.name,
      })
    },
    triggerChatFunctions() {
      messages.on('newMessage', () => {
        if (this.mode !== 'chat')
          this.unreadMessages = true
      })

      messages.on('userInfoUpdate', ({ peer, data }) => {
        this.peers[
          this.peers.findIndex(el => el.remote === peer.local)
        ].peer.name = data.data.name
      })

      // Update Local Name to Remote peers every 10 seconds for new peers
      messages.on('requestUserInfo', () => {
        this.updateUserInfo()
      })
    },
    setName() {
      const name = localStorage.getItem('name')
      if (name) {
        this.name = name
        messages.emit('userInfo', {
          name,
        })
      }
    },
    focusChatInput() {
      if (
        !/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
      ) {
        setTimeout(() => {
          document.getElementById('message-input')?.focus()
        }, 100)
      }
    },
  },
}
</script>

<template>
  <div class="app hstack">
    <SeaModal
      xclass="panel -left panel-settings"
      :active="mode === 'settings'"
      :title="l.settings.title"
      @close="mode = ''"
    >
      <AppSettings />
    </SeaModal>

    <div
      class="-fit vstack"
      :data-mode="state.maximized ? 'maximized' : 'default'"
    >
      <div class="-fit stack videos -relative">
        <AppVideo
          v-if="videoAllowed && state.stream"
          id="self"
          :stream="state.stream"
          muted
          :mirrored="state.deviceVideo !== 'desktop'"
          title="Local"
        />

        <AppVideo
          v-for="peer in peers"
          :id="peer.remote"
          :key="peer.remote"
          :stream="peer?.peer?.stream"
          :fingerprint="peer?.peer?.fingerprint"
          :name="peer?.peer?.name"
        />

        <div
          v-if="!state.screenshots && state.requestBugTracking"
          class="message-container -error"
        >
          <div class="message">
            An error occurred. Please help us fixing it by allowing to send the
            details to us. This option is also available in the settings.
            Thanks!
            <u @click="doAllow(true)">Allow</u> |
            <u @click="doAllow(false)">Deny</u>
          </div>
        </div>

        <div v-else-if="state.error" class="message-container -error">
          <div class="message">
            {{ state.error }}
            <u @click="doReload">Reload page</u>
          </div>
        </div>

        <div
          v-else-if="
            !hasPeers
              && !state.screenshots
              && mode !== 'share'
              && state.showInviteHint
          "
          class="message-container"
        >
          <div
            class="message"
            v-html="l.share.message.replace('$symbol$', symbol)"
          />
        </div>
      </div>

      <div class="tools hstack">
        <SeaLink
          v-if="state.showSettings"
          class="tool"
          :class="{ '-active': mode === 'settings' }"
          @action="doTogglePanel('settings')"
        >
          <!--        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> -->
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
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
        </SeaLink>
        <div class="-fit">
          <SeaLink
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
              />
              <line x1="1" y1="1" x2="23" y2="23" />
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
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </SeaLink>
          <SeaLink class="tool tool-close" @action="doQuit">
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <!--          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line></svg> -->
          </SeaLink>
          <SeaLink
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
              <line x1="1" y1="1" x2="23" y2="23" />
              <path
                d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
              />
              <path
                d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
              />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
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
              />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </SeaLink>
        </div>
        <SeaLink
          v-if="state.showFullscreen && supportsFullscreen"
          class="tool"
          @action="doToggleFullScreen"
        >
          <svg
            v-if="!isFullScreen"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
            />
          </svg>
          <svg
            v-if="isFullScreen"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
            />
          </svg>
        </SeaLink>

        <SeaLink
          v-if="state.showChat"
          class="tool messageBtn"
          :class="{ '-active': mode === 'chat' }"
          @action="toggleChat()"
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
            />
          </svg>
          <div v-if="unreadMessages" class="unread-msg" />
        </SeaLink>

        <SeaLink
          v-if="state.showShare"
          class="tool"
          :class="{ '-active': mode === 'share' }"
          @action="doTogglePanel('share')"
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
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        </SeaLink>
      </div>
    </div>

    <SeaModal
      xclass="panel -left panel-share"
      :active="mode === 'share'"
      :title="l.share.title"
      @close="mode = ''"
    >
      <AppShare />
    </SeaModal>

    <SeaModal
      xclass="panel -left panel-share"
      :active="mode === 'chat'"
      title="Chat with others"
      :scrollable="false"
      @close="mode = ''"
    >
      <AppChat :name="name" />
    </SeaModal>
  </div>
</template>
