<template>
  <app-welcome class="app" v-if="state.room == null"></app-welcome>
  <app-main v-else></app-main>
</template>

<script>
import AppWelcome from './components/app-welcome'

const log = require('debug')('app:pwa-app')

export default {
  name: 'App',
  components: {
    AppWelcome,
    AppMain: () => import(/* webpackChunkName: 'main' */ './components/app-main'),
  },
  data() {
    return {}
  },
  mounted() {
    log('pwa')
  },
}
</script>

<style lang="scss">
@import "css/index";

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
