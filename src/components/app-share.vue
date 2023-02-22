<script lang="ts">
import { qrcode } from '../lib/qrcode'
import { createLinkForRoom, shareLink } from '../lib/share'
import { state } from '../state'
import SeaButton from '../ui/sea-button.vue'

import './app-share.scss'

export default {
  name: 'AppShare',
  components: { SeaButton },
  data() {
    return {
      url: '',
      qrcode: '',
      link: '<a href="mailto:support@holtwick.de?subject=Briefing">support@holtwick.de</a>',
    }
  },
  async mounted() {
    this.url = createLinkForRoom(state.room)
    const typeNumber = 0
    const errorCorrectionLevel = 'H'
    const qr = qrcode(typeNumber, errorCorrectionLevel) as any
    qr.addData(this.url)
    qr.make()
    this.qrcode = qr.createSvgTag({
      scalable: true,
    })
  },
  methods: {
    selectAll() {
      setTimeout(() => {
        const el = this.$refs.input
        el.select()
      }, 0)
    },
    doShare() {
      shareLink(createLinkForRoom(state.room))
    },
  },
}
</script>

<template>
  <div class="share-container -scrollable text">
    <p>
      {{ $t('share.link_info') }}
    </p>
    <div class="p hstack">
      <input
        ref="input"
        class="input -fit"
        type="text"
        :value="url"
        readonly
        @click="selectAll"
      >
      <SeaButton @action="doShare">
        {{ $t('share.button_copy') }}
      </SeaButton>
    </div>
    <p>{{ $t('share.qr_info') }}</p>
    <p class="qrcode" v-html="qrcode" />
    <a v-html="$t('share.feedback', { link })" />
  </div>
</template>
