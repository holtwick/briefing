<!-- Copyright (c) 2020-2021 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright -->

<template>
  <textarea
    v-if="type === 'textarea'"
    class="form-input"
    v-bind="$attrs"
    v-on="$listeners"
    :id="uid"
    :placeholder="placeholder"
    :value="computedValue"
    @input="onInput"
    @keydown.enter=""
    @blur=""
    @change="$emit('action', computedValue)"
    v-text="value"
  />

  <select
    v-else-if="type === 'select'"
    class="form-select"
    v-bind="$attrs"
    v-on="$listeners"
    :id="uid"
    :value="computedValue"
    @input="onInput"
    @change="$emit('action', computedValue)"
  >
    <option v-if="placeholder" value="" disabled hidden>
      {{ placeholder }}
    </option>
    <option v-for="o in options" :value="o" :key="o">
      {{ o }}
    </option>
    <slot></slot>
  </select>

  <input
    v-else-if="type === 'switch'"
    type="checkbox"
    v-bind="$attrs"
    v-on="$listeners"
    :id="uid"
    :checked="computedValue"
    role="switch"
    @input="onInputBool"
    @change="$emit('action', computedValue)"
  />

  <input
    v-else-if="type === 'number'"
    type="number"
    autocomplete="off"
    class="form-input"
    v-bind="$attrs"
    v-on="$listeners"
    :id="uid"
    :value="computedValue"
    @input="onInput"
    :placeholder="placeholder"
    @change="$emit('action', computedValue)"
  />

  <input
    v-else
    type="text"
    class="form-input"
    v-bind="$attrs"
    v-on="$listeners"
    :id="uid"
    :value="computedValue"
    :placeholder="placeholder"
    autocomplete="off"
    @input="onInput"
    @keydown.enter.prevent=""
    @change="$emit('action', computedValue)"
  />
</template>

<script>
import { Logger } from "../lib/logger"
const log = Logger("app:fa-textarea")

export default {
  name: "sea-input-base",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: "Text",
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
        log("set value", value)
        this.newValue = value
        this.$emit("input", value)
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
        if (event.target) {
          this.computedValue = event.target.value
        }
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
