<!-- Copyright (c) 2020-2021 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<template>
  <i class="f7" :data-f7-icon="name" aria-hidden="true" />
</template>

<script>
export default {
  name: "sea-symbol",
  props: {
    name: {
      type: String,
      default: 0,
      required: true,
    },
  },
}
</script>
