<template>
  <div class="-fit vstack">

    <!--    <div class="-fit stack videos" v-if="false">-->
    <!--      <div class="peer item">-->
    <!--        <img src="../assets/faces/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg" class="video">-->
    <!--      </div>-->
    <!--      <div class="peer item">-->
    <!--        <img src="../assets/faces/roberto-delgado-webb-Anuz2z-rPXA-unsplash.jpg" class="video">-->
    <!--      </div>-->
    <!--      <div class="peer item">-->
    <!--        <img src="../assets/faces/harishan-kobalasingam-MU7sdKlY1uo-unsplash.jpg" class="video">-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="-fit stack videos">

      <app-video
        :stream="state.stream"
        muted
        :mirrored="state.deviceVideo !== 'desktop'"
        title="Local"
      />

      <app-video
        v-for="peer in state.status"
        :key="peer.remote"
        :stream="peer.peer.stream"
      />

    </div>

    <div class="tools hstack">
      <sea-link @action="settings=true" symbol="gear_alt_fill" class="tool"></sea-link>
      <div class="-fit">
        <sea-link symbol="videocam_fill" class="tool" :class="{'-off': state.muteVideo}" @action="doVideo"></sea-link>
        <sea-link symbol="xmark" class="tool tool-close" @action="doQuit"></sea-link>
        <sea-link symbol="mic_fill" class="tool" :class="{'-off': state.muteAudio}" @action="doAudio"></sea-link>
      </div>
      <sea-link @action="share=true" symbol="square_arrow_up" class="tool"></sea-link>
    </div>

    <sea-modal :active.sync="share" close :title="l.share.title" class="text">
      <app-share></app-share>
    </sea-modal>

    <sea-modal :active.sync="settings" close :title="l.settings.title" class="text">
      <app-settings></app-settings>
    </sea-modal>

  </div>
</template>

<script>
import { messages } from '../lib/emitter'
import { createLinkForRoom, shareLink } from '../lib/share'
import SeaButton from '../ui/sea-button'
import SeaLink from '../ui/sea-link'
import SeaModal from '../ui/sea-modal'
import AppVideo from './app-video'

const log = require('debug')('app:app-sidebar')

export default {
  name: 'app-main',
  components: {
    AppSettings: () => import(/* webpackChunkName: 'settings' */ './app-settings'),
    AppShare: () => import(/* webpackChunkName: 'share' */ './app-share'),
    SeaLink,
    SeaModal,
    SeaButton,
    AppVideo,
  },
  data() {
    return {
      settings: false,
      share: false,
    }
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
      if (confirm('Really quit this session?')) {
        location.assign('/ng/')
      }
    },
  },
  async mounted() {
  },
}
</script>

