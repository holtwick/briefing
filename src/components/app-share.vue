<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'
import type { LoggerInterface } from 'zeed'
import { Logger } from 'zeed'
import { qrcode } from '../lib/qrcode'
import { createLinkForRoom, shareLink } from '../lib/share'
import { state } from '../state'

import './app-share.scss'

const log: LoggerInterface = Logger('app-share')

const link = '<a href="mailto:support@holtwick.de?subject=Briefing">support@holtwick.de</a>'

const url = createLinkForRoom(state.room)
const qr = qrcode(0, 'H') as any
qr.addData(url)
qr.make()
const qrCodeSvg = qr.createSvgTag({
  scalable: true,
})

function selectAll() {
  setTimeout(() => {
    const el = this.$refs.input
    el.select()
  }, 0)
}

function doShare() {
  shareLink(createLinkForRoom(state.room))
}

const qrCodeElement = ref()
const { toggle } = useFullscreen(qrCodeElement)

function doToggleFullScreen(element: any) {
  log('toggle', element)
  if (!document.fullscreenElement) {
    if (element)
      element.requestFullscreen()
  }
  else {
    if (document.exitFullscreen)
      document.exitFullscreen()
  }
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
      <button class="sea-button -primary -has-title" @click="doShare">
        {{ $t('share.button_copy') }}
      </button>
    </div>
    <p>{{ $t('share.qr_info') }}</p>
    <div ref="qrCodeElement" class="qrcode" @click="toggle" v-html="qrCodeSvg" />
    <a v-html="$t('share.feedback', { link })" />
  </div>
</template>
