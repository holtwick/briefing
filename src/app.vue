<script>
import { Logger } from 'zeed'
import AppWelcome from './components/app-welcome.vue'
import AppWhitelabel from './components/app-whitelabel.vue'
import AppMain from './components/app-main.vue'
import AppEmbed from './components/app-embed.vue'

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

.debug {
  position: fixed;
  width: 2rem;
  height: 2rem;
  bottom: 1rem;
  right: 1rem;
  background-color: red;
  overflow: hidden;
  border: 0.5rem red solid;
  z-index: 99999;

  .debug-content {
    display: none;
    padding: 1rem;
  }

  &:hover,
  &:active,
  &.-show {
    top: 1rem;
    left: 1rem;
    width: auto; // calc(100% - 2rem);
    height: auto; // calc(100% - 2rem);
    bottom: 1rem;
    right: 1rem;
    overflow: auto;
    background: white;

    .debug-content {
      display: block;
    }
  }
}
</style>
