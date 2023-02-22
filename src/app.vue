<script lang="ts" setup>
import AppMain from './components/app-main.vue'
import AppWhitelabel from './components/app-whitelabel.vue'
import AppEmbed from './product/app-embed.vue'
import AppWelcome from './product/app-welcome.vue'
import { state } from './state'

import './css/index.scss'
</script>

<template>
  <AppEmbed v-if="state.embedDemo === true" class="app" />
  <AppWelcome v-else-if="!state.room && state.original" class="app" />
  <AppWhitelabel v-else-if="!state.room && !state.original" class="app" />
  <AppMain v-else />
</template>
