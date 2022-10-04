<!-- Copyright (c) 2020-2022 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<script>
import { uuid } from 'zeed'

export default {
  name: 'SeaFormGroup',
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

<template>
  <div class="form-group">
    <label v-if="label" :for="uid" class="form-label label-sm">
      {{ label }}
    </label>
    <div class="form-body">
      <slot :uid="uid" />
    </div>
  </div>
</template>
