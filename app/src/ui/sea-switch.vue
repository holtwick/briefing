<!-- Copyright (c) 2020-2021 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<template>
  <div
    class="sea-switch-container"
    :class="{ '-inline': !slotted, 'form-group': slotted }"
  >
    <label :for="uid" class="sea-switch" :class="`-${theme}`" ref="labelSwitch">
      <sea-input-base
        :uid="uid"
        v-bind="$attrs"
        v-on="$listeners"
        type="switch"
      />
      <i></i>
      <span class="sea-switch-label" v-if="slotted">
        {{ label }}
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<style lang="scss">
@import "./sea-switch";
</style>

<script>
// Mix of this receipt: https://www.cssscript.com/realistic-ios-switch-pure-css/
// And IBM Carbon: https://www.carbondesignsystem.com/components/toggle/code

import SeaFormGroup from "./sea-form-group"
import SeaInputBase from "./sea-input-base"

export default {
  name: "sea-switch",
  components: {
    SeaFormGroup,
    SeaInputBase,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    slotted() {
      return this.label || this.$slots?.default?.[0] != null
    },
  },
  data() {
    return {
      uid: Math.random().toString(),
    }
  },
}
</script>
