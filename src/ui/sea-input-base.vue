<!-- Copyright (c) 2020-2022 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<script>
import { Logger } from 'zeed'

const log = Logger('app:fa-textarea')

export default {
  name: 'SeaInputBase',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Text',
    },
    value: {
      type: [String, Boolean, Number],
    },
    uid: {
      type: String,
      default: Math.random().toString(),
    },
    type: {
      type: String,
      // textarea, select, switch, number
    },
    options: {
      type: Array,
      default: () => [],
    },
    singleLine: {
      default: false,
    },
  },
  data() {
    return {
      newValue: this.value,
    }
  },
  computed: {
    computedValue: {
      get() {
        // log('get value', this.newValue, this.type)
        return this.newValue
      },
      set(value) {
        log('set value', value)
        this.newValue = value
        this.$emit('input', value)
        // !this.isValid && this.checkHtml5Validity()
      },
    },
  },
  watch: {
    value(value) {
      this.newValue = value
    },
  },
  methods: {
    onInput(event) {
      // log('onInput', event.target.value)
      this.$nextTick(() => {
        if (event.target)
          this.computedValue = event.target.value
      })
    },
    onInputBool(event) {
      // log('onInputBool', event.target.value)
      this.$nextTick(() => {
        if (event.target) {
          this.computedValue = event.target.checked
          event.target.focus()
        }
      })
    },
  },
}
</script>

<template>
  <textarea
    v-if="type === 'textarea'"
    v-bind="$attrs"
    :id="uid"
    class="form-input"
    :placeholder="placeholder"
    :value="computedValue"
    v-on="$listeners"
    @input="onInput"
    @keydown.enter=""
    @blur=""
    @change="$emit('action', computedValue)"
    v-text="value"
  />

  <select
    v-else-if="type === 'select'"
    v-bind="$attrs"
    :id="uid"
    class="form-select"
    :value="computedValue"
    v-on="$listeners"
    @input="onInput"
    @change="$emit('action', computedValue)"
  >
    <option v-if="placeholder" value="" disabled hidden>
      {{ placeholder }}
    </option>
    <option v-for="o in options" :key="o" :value="o">
      {{ o }}
    </option>
    <slot />
  </select>

  <input
    v-else-if="type === 'switch'"
    v-bind="$attrs"
    :id="uid"
    type="checkbox"
    :checked="computedValue"
    role="switch"
    v-on="$listeners"
    @input="onInputBool"
    @change="$emit('action', computedValue)"
  >

  <input
    v-else-if="type === 'number'"
    v-bind="$attrs"
    :id="uid"
    type="number"
    autocomplete="off"
    class="form-input"
    :value="computedValue"
    :placeholder="placeholder"
    v-on="$listeners"
    @input="onInput"
    @change="$emit('action', computedValue)"
  >

  <input
    v-else
    v-bind="$attrs"
    :id="uid"
    type="text"
    class="form-input"
    :value="computedValue"
    :placeholder="placeholder"
    autocomplete="off"
    v-on="$listeners"
    @input="onInput"
    @keydown.enter.prevent=""
    @change="$emit('action', computedValue)"
  >
</template>
