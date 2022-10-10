<script>
import { Logger } from 'zeed'
import AppMain from './components/app-main.vue'
import AppWhitelabel from './components/app-whitelabel.vue'
import AppEmbed from './product/app-embed.vue'
import AppWelcome from './product/app-welcome.vue'

const log = Logger('app:app')

export default {
  name: 'App',
  components: {
    AppWelcome,
    AppWhitelabel,
    AppMain,
    AppEmbed,
  },
  data() {
    return {}
  },
  mounted() {
    log('mounted')
  },
}
</script>

<template>
  <AppEmbed v-if="state.embedDemo === true" class="app" />
  <AppWelcome v-else-if="!state.room && state.original" class="app" />
  <AppWhitelabel v-else-if="!state.room && !state.original" class="app" />
  <AppMain v-else />
</template>

<style lang="scss">
@import './css/index.scss';
</style>
