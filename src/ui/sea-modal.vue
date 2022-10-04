<!-- Copyright (c) 2020-2022 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<script>
import { Logger } from 'zeed'
import trapFocus from './lib/directives/trapFocus'
import { removeElement } from './lib/helpers'
import SeaLink from './sea-link.vue'

const log = Logger('ui:sea-modal')

export default {
  name: 'SeaModal',
  components: {
    SeaLink,
  },
  directives: {
    trapFocus,
  },
  props: {
    active: {
      type: Boolean,
    },
    title: {
      type: String,
      default: '',
    },
    close: {
      type: Boolean,
      default: true,
    },
    scrollable: {
      type: Boolean,
      default: true,
    },
    standalone: {
      type: Boolean,
      default: false,
    },
    role: {
      default: 'dialog',
    },
    canCancel: {
      type: Boolean,
      default: true,
    },
    onCancel: {
      type: Function,
      default: () => {
        log('onCancel not defined')
      },
    },
  },
  created() {
    document?.addEventListener('keyup', this.keyPress)
  },
  beforeMount() {
    // Insert the Dialog component in the element container
    if (this.standalone && typeof window !== 'undefined') {
      this.$nextTick(() => {
        const container
        /* document.querySelector(this.container) || */ = document.body
        container.appendChild(this.$el)
      })
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined')
      document?.removeEventListener('keyup', this.keyPress)
      // reset scroll
      // document?.documentElement.classList.remove('is-clipped')
  },
  methods: {
    doCancel(...args) {
      log('do cancel')
      this.$emit('cancel')
      const onCancel = this?.$parent?.onCancel || this?.onCancel
      if (onCancel)
        onCancel(...args)
      this.doClose()
    },
    doClose() {
      this.$emit('close', false)
      this.$emit('update:active', false)

      if (this.standalone) {
        // Timeout for the animation complete before destroying
        setTimeout(() => {
          // this.active = false
          this.$destroy()
          removeElement(this.$el)
        }, 150)
      }
    },
    keyPress(event) {
      if (this.active && event.keyCode === 27) {
        // Esc key
        this.doCancel('escape')
      }
    },
  },
}
</script>

<template>
  <div
    id="modal-id"
    v-trap-focus
    class="sea-modal sea-panel"
    :class="{ active }"
    tabindex="-1"
    aria-modal="true"
    :role="role"
  >
    <a class="sea-modal-overlay" aria-label="Close" @click="doCancel" />
    <div class="sea-modal-container vstack">
      <header v-if="title || close" class="sea-modal-header modal-header -fix">
        <div class="hstack">
          <div class="sea-modal-title -fit">
            <slot name="title">
              {{ title }}
            </slot>
          </div>
          <SeaLink
            v-if="close"
            xtooltip="Close"
            class="-fix icon"
            @click="doCancel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </SeaLink>
        </div>
      </header>
      <section
        class="sea-modal-body modal-body -fit"
        :class="scrollable && '-scrollable'"
      >
        <slot />
      </section>
    </div>
  </div>
</template>

<style lang="scss">
@import './sea-modal';
</style>
