<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'
import AppMain from './components/app-main.vue'
import AppWhitelabel from './components/app-whitelabel.vue'
import AppEmbed from './product/app-embed.vue'
import AppWelcome from './product/app-welcome.vue'
import { state } from './state'

import './css/index.scss'

const props = withDefaults(defineProps<{
  value: any
}>(), {
  value: null,
})

const showBanner = useLocalStorage('_briefingBetaBanner', true)
</script>

<template>
  <div v-if="showBanner" class="banner">
    <div class="banner-close" @click="showBanner = false">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
    </div>
    <a href="https://beta.brie.fi/ng?ref=banner">Would you like to try the latest version 4 of Briefing? Visit the beta at https://beta.brie.fi</a>
  </div>
  <AppEmbed v-if="state.embedDemo === true" class="app" />
  <AppWelcome v-else-if="!state.room && state.original" class="app" />
  <AppWhitelabel v-else-if="!state.room && !state.original" class="app" />
  <AppMain v-else />
</template>
