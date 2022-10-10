<script>
import { messages } from 'zeed'

export default {
  name: 'AppChat',
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      messages: [],
      nameString: this.name,
    }
  },
  updated() {
    this.$nextTick(() => this.scrollToEnd())
  },
  mounted() {
    messages.on('newMessage', (info) => {
      this.messages.push({
        name: info.name,
        message: info.message,
        from_me: false,
        time: info.time,
      })
    })
  },
  methods: {
    sendMessage(event) {
      const message = event.target.value
      const name = this.nameString
      const current = new Date()
      const ampm = current.getUTCHours() < 12 ? 'AM' : 'PM'
      const time
        = `${current.getUTCHours() % 12
         }:${
         current.getUTCMinutes()
         } ${
         ampm
         } (UTC)`
      messages.emit('chatMessage', { name, message, time })
      this.messages.push({
        name,
        message,
        from_me: true,
        time,
      })
      event.target.value = ''
    },
    setName() {
      const name = document.getElementById('name').value
      localStorage.setItem('name', name)
      this.nameString = name
      messages.emit('userInfo', {
        name,
      })
    },
    scrollToEnd() {
      const messages = this.$el.querySelector('.messages-container')
      messages.scrollTop = messages.lastElementChild.offsetTop
    },
  },
}
</script>

<template>
  <div class="chat-container vstack text">
    <div v-if="!nameString">
      <label>Please enter your name : </label>
      <input
        id="name"
        style="margin-top: 0.4em"
        placeholder="You're chatting as?"
      >
      <br>
      <button class="save-btn" type="button" @click="setName()">
        Save
      </button>
    </div>
    <template v-else>
      <div class="messages-container -fit -scrollable">
        <div
          v-for="message in messages"
          :key="message.name + message.time + message.message"
          :style="
            ['display: flex;']
              + [
                message.from_me
                  ? 'flex-direction: row-reverse'
                  : 'flex-direction: row',
              ]
          "
        >
          <p :class="message.from_me ? 'bg-light' : 'bg-dark'">
            <span style="font-weight: 500">{{ message.message }}</span>
            <br>
            <small style="font-size: 0.68em">
              <span v-if="!message.from_me">- {{ message.name }}</span> @
              {{ message.time }}
            </small>
          </p>
        </div>
      </div>
      <input
        id="message-input"
        placeholder="Type a message..."
        type="text"
        @keyup.enter="sendMessage($event)"
      >
    </template>
  </div>
</template>

<style lang="scss">
@import 'app-chat.scss';
</style>
