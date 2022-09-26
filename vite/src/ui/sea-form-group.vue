<!-- Copyright (c) 2020-2021 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<template>
  <div class="form-group">
    <label :for="uid" class="form-label label-sm" v-if="label">
      {{ label }}
    </label>
    <div class="form-body">
      <slot v-bind:uid="uid"></slot>
    </div>
  </div>
</template>

<script>
import { uuid } from "zeed"

export default {
  name: "sea-form-group",
  props: {
    label: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      uid: uuid(),
    }
  },
}
</script>
