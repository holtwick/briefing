<!-- Copyright (c) 2020-2021 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<template>
  <sea-button role="link" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </sea-button>
</template>

<script>
import SeaButton from "./sea-button"

export default {
  name: "sea-link",
  components: { SeaButton },
}
</script>
