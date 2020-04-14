<template>
  <div class="app tiles" @click="doShuffle">
    <div
      v-for="(t, i) in tiles"
      :key="t.id" class="tile"
      :style="t.style"
    >{{ i }}. {{ t }}
    </div>
  </div>
</template>

<style lang="scss">

.tiles {
  display: flex;
  align-items: stretch;
  align-content: stretch;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
  overflow: hidden;

  .tile {
    flex-shrink: 1;
    flex-grow: 1;

    object-fit: contain;

    margin: 1rem;
    // background-color: hsl(147, 100%, 34%);
    border-right: 0.25rem;
    min-width: 2rem;
    min-height: 2rem;
    color: black;
  }

}
</style>

<script>
import { UUID } from '../lib/uuid'

function between(low, high) {
  return Math.round(Math.random() * (high - low) + low)
}

export default {
  name: 'app-sample',
  data() {
    return {
      tiles: [],
    }
  },
  mounted() {
    this.doShuffle()
  },
  methods: {
    doShuffle() {
      let tiles = []
      let n = between(2, 12)
      // n = 2
      for (let i = 0; i < n; i++) {
        tiles.push({
          id: UUID(),
          style: {
            width: between(200, 400) + 'px',
            height: between(120, 320) + 'px',
            'background-color': `rgb(${between(0, 255)},${between(0, 255)},${between(0, 255)})`,
          },
        })
      }
      this.tiles = tiles
    },
  },
}
</script>

