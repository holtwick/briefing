<!-- Copyright (c) 2020-2022 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<script>
import SeaButton from './sea-button.vue'

export default {
  name: 'SeaLink',
  components: { SeaButton },
}
</script>

<template>
  <SeaButton role="link" v-bind="$attrs" v-on="$listeners">
    <slot />
  </SeaButton>
</template>
