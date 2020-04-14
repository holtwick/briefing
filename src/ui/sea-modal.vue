<!-- Copyright (c) 2020 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<template>
  <div class="sea-modal " :class="{active}" id="modal-id" tabindex="-1" v-trap-focus aria-modal="true" :role="role">
    <a @click="doCancel" class="sea-modal-overlay" aria-label="Close"></a>
    <div class="sea-modal-container vstack">
      <header class="sea-modal-header modal-header -fix" v-if="title || close">
        <div class="hstack">
          <div class="sea-modal-title -fit">
            <slot name="title">{{ title }}</slot>
          </div>
          <sea-link v-if="close" xtooltip="Close" @click="doCancel" class="-fix" symbol="xmark"/>
        </div>
      </header>
      <section class="sea-modal-body modal-body -fit -scrollable">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
@import "./sea-modal";
</style>

<script>
import trapFocus from './lib/directives/trapFocus'
import { removeElement } from './lib/helpers'
import SeaLink from './sea-link'
import SeaSymbol from './sea-symbol'

const log = require('debug')('ui:sea-modal')

export default {
  name: 'sea-modal',
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
  components: {
    SeaSymbol,
    SeaLink,
  },
  directives: {
    trapFocus,
  },
  methods: {
    doCancel() {
      log('do cancel')
      this.$emit('cancel')
      let onCancel = this?.$parent?.onCancel || this?.onCancel
      if (onCancel) {
        onCancel.apply(null, arguments)
      }
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
      if (this.active && event.keyCode === 27) { // Esc key
        this.doCancel('escape')
      }
    },
  },
  created() {
    document?.addEventListener('keyup', this.keyPress)
  },
  beforeMount() {
    // Insert the Dialog component in the element container
    if (this.standalone && typeof window !== 'undefined') {
      this.$nextTick(() => {
        const container = /* document.querySelector(this.container) || */ document.body
        container.appendChild(this.$el)
      })
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      document?.removeEventListener('keyup', this.keyPress)
      // reset scroll
      // document?.documentElement.classList.remove('is-clipped')
    }
  },

}
</script>
