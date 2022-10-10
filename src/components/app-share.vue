<script>
import { Logger } from 'zeed'
import { qrcode } from '../lib/qrcode'
import { createLinkForRoom, shareLink } from '../lib/share'
import SeaButton from '../ui/sea-button.vue'

const log = Logger('app:app-share')

export default {
  name: 'AppShare',
  components: { SeaButton },
  data() {
    return {
      url: '',
      qrcode: '',
    }
  },
  async mounted() {
    this.url = createLinkForRoom(this.state.room)
    const typeNumber = 0
    const errorCorrectionLevel = 'H'
    const qr = qrcode(typeNumber, errorCorrectionLevel)
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
      shareLink(createLinkForRoom(this.state.room))
    },
  },
}
</script>

<template>
  <div class="share-container -scrollable text">
    <p>
      {{ l.share.link_info }}
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
        {{ l.share.button_copy }}
      </SeaButton>
    </div>
    <p>{{ l.share.qr_info }}</p>
    <p class="qrcode" v-html="qrcode" />
    <p v-html="l.share.feedback" />
  </div>
</template>

<style lang="scss">
@import 'app-share.scss';
</style>
