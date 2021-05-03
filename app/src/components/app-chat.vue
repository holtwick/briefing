<template>
  <div class="chat-container vstack text">
    <div v-if="!nameString">
      <label>Please enter your name : </label>
      <input
        style="margin-top: 0.4em"
        id="name"
        placeholder="You're chatting as?"
      />
      <br />
      <button @click="setName()" class="save-btn" type="button">Save</button>
    </div>
    <template v-else>
      <div class="messages-container -fit -scrollable">
        <div
          v-for="message in messages"
          :key="message.name + message.time + message.message"
          :style="
            ['display: flex;'] +
            [
              message.from_me
                ? 'flex-direction: row-reverse'
                : 'flex-direction: row',
            ]
          "
        >
          <p :class="message.from_me ? 'bg-light' : 'bg-dark'">
            <span style="font-weight: 500">{{ message.message }}</span>
            <br />
            <small style="font-size: 0.68em">
              <span v-if="!message.from_me">- {{ message.name }}</span> @
              {{ message.time }}
            </small>
          </p>
        </div>
      </div>
      <input
        placeholder="Type a message..."
        v-on:keyup.enter="sendMessage($event)"
        type="text"
        id="message-input"
      />
    </template>
  </div>
</template>

<script>
import { messages } from "@/lib/emitter"

export default {
  name: "app-chat",
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
  methods: {
    sendMessage(event) {
      let message = event.target.value
      let name = this.nameString
      let current = new Date()
      let ampm = current.getUTCHours() < 12 ? "AM" : "PM"
      let time =
        (current.getUTCHours() % 12) +
        ":" +
        current.getUTCMinutes() +
        " " +
        ampm +
        " (UTC)"
      messages.emit("chatMessage", { name, message, time })
      this.messages.push({
        name: name,
        message: message,
        from_me: true,
        time: time,
      })
      event.target.value = ""
    },
    setName() {
      let name = document.getElementById("name").value
      localStorage.setItem("name", name)
      this.nameString = name
      messages.emit("userInfo", {
        name: name,
      })
    },
    scrollToEnd: function () {
      let messages = this.$el.querySelector(".messages-container")
      messages.scrollTop = messages.lastElementChild.offsetTop
    },
  },
  updated() {
    this.$nextTick(() => this.scrollToEnd())
  },
  mounted() {
    messages.on("newMessage", (info) => {
      this.messages.push({
        name: info.name,
        message: info.message,
        from_me: false,
        time: info.time,
      })
    })
  },
}
</script>

<style lang="scss">
@import "../css/chat.scss";
</style>
