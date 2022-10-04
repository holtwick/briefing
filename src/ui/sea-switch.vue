<!-- Copyright (c) 2020-2022 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<script>
// Mix of this receipt: https://www.cssscript.com/realistic-ios-switch-pure-css/
// And IBM Carbon: https://www.carbondesignsystem.com/components/toggle/code

import SeaInputBase from './sea-input-base.vue'

export default {
  name: 'SeaSwitch',
  components: {
    SeaInputBase,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'primary',
    },
  },
  data() {
    return {
      uid: Math.random().toString(),
    }
  },
  computed: {
    slotted() {
      return this.label || this.$slots?.default?.[0] != null
    },
  },
}
</script>

<template>
  <div
    class="sea-switch-container"
    :class="{ '-inline': !slotted, 'form-group': slotted }"
  >
    <label ref="labelSwitch" :for="uid" class="sea-switch" :class="`-${theme}`">
      <SeaInputBase
        :uid="uid"
        v-bind="$attrs"
        type="switch"
        v-on="$listeners"
      />
      <i />
      <span v-if="slotted" class="sea-switch-label">
        {{ label }}
        <slot />
      </span>
    </label>
  </div>
</template>

<style lang="scss">
@import './sea-switch';
</style>
