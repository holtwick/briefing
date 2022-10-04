<!-- Copyright (c) 2020-2022 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<script>
export default {
  name: 'SeaSymbol',
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<template>
  <i class="f7" :data-f7-icon="name" aria-hidden="true" />
</template>
