<template>
  <div class="share-container -scrollable text">
    <p>
      {{ l.share.link_info }}
    </p>
    <div class="p hstack">
      <input
        class="input -fit"
        type="text"
        :value="url"
        ref="input"
        readonly
        @click="selectAll"
      />
      <sea-button @action="doShare">{{ l.share.button_copy }}</sea-button>
    </div>
    <p>{{ l.share.qr_info }}</p>
    <p class="qrcode" v-html="qrcode">QRCode</p>
    <p v-html="l.share.feedback"></p>
  </div>
</template>

<style lang="scss">
.share-container {
  p,
  .p {
    margin-bottom: 1rem;
  }

  .input {
    border: 1px solid gray;
    background: white;
    padding: 0.5rem;
    border-radius: 0.25rem;
    width: 100%;
    color: #1e89f6;
    margin-right: 0.5rem;
  }

  .qrcode {
    max-width: 50vh;
  }
}
</style>

<script>
import { qrcode } from "../lib/qrcode"
import { createLinkForRoom, shareLink } from "../lib/share"
import SeaButton from "../ui/sea-button"

import { Logger } from "../lib/logger"
const log = Logger("app:app-share")

export default {
  name: "app-share",
  components: { SeaButton },
  data() {
    return {
      url: "",
      qrcode: "",
    }
  },
  methods: {
    selectAll() {
      setTimeout(() => {
        let el = this.$refs.input
        el.select()
      }, 0)
    },
    doShare() {
      shareLink(createLinkForRoom(this.state.room))
    },
  },
  async mounted() {
    this.url = createLinkForRoom(this.state.room)
    const typeNumber = 0
    const errorCorrectionLevel = "H"
    const qr = qrcode(typeNumber, errorCorrectionLevel)
    qr.addData(this.url)
    qr.make()
    this.qrcode = qr.createSvgTag({
      scalable: true,
    })
  },
}
</script>
