<!-- Copyright (c) 2020-2021 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<template>
  <button
    :class="classnames"
    v-bind="$attrs"
    :disabled="disabled"
    :role="role"
    @mousedown="doBeforeClick"
    @click="doClick"
    @contextmenu="doClick"
  >
    <sea-symbol
      v-if="symbol || symbolLeft"
      :name="symbol || symbolLeft"
      class="sea-button-symbol-left"
    />
    {{ title }}
    <slot></slot>
    <sea-symbol
      v-if="symbolRight"
      :name="symbolRight"
      class="sea-button-symbol-right"
    />
  </button>
</template>

<style lang="scss">
@import "./sea-button";
</style>

<script>
// import Popover from './sea-popover'
import SeaSymbol from "./sea-symbol"
import { trackException } from "../bugs"

import { Logger } from "../lib/logger"
const log = Logger("ui:button")

// @action, @click

export default {
  name: "sea-button",
  components: { SeaSymbol },
  props: {
    title: {
      type: String,
      default: "",
    },
    theme: {
      default: "primary",
    },
    symbol: {
      type: String,
    },
    symbolLeft: {
      type: String,
    },
    symbolRight: {
      type: String,
    },
    role: {
      type: String,
      default: "button",
      validator(value) {
        return ["button", "link"].includes(value)
      },
    },
    active: {
      // active state for selections
      type: Boolean,
      default: false,
    },
    passive: {
      // do not loose focus
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      disabled: false,
      tooltipInstance: null,
      hoverCount: 0,
    }
  },
  computed: {
    slotted() {
      return this.title || this.$slots?.default?.[0] != null
    },
    classnames() {
      return {
        [`sea-${this.role}`]: true,
        [`-${this.theme}`]: true,
        "-active": this.active === true,
        "-has-title": this.slotted,
      }
    },
  },
  methods: {
    async doAction(ev) {
      // this.hideTooltip()
      if (this.disabled) return
      this.disabled = true
      try {
        // ev.waitUntil = async () => null
        await this.$nextTick()
        this.$emit("click", ev)
        this.$emit("action", ev)
        this.$emit("update:active", !this.active)
        if (ev.waitUntil) {
          await ev.waitUntil
        }
      } catch (err) {
        trackException(err)
      }
      this.disabled = false
      log("click done", ev.waitUntil)
    },
    async doClick(ev) {
      if (!this.passive) {
        await this.doAction(ev)
      }
    },
    async doBeforeClick(ev) {
      if (this.passive) {
        ev.preventDefault()
        await this.doAction(ev)
      }
    },
  },
}
</script>
