<template>
  <div class="chat-container -scrollable text">
    <div style="height: 78vh; flex-direction: column">
      <div
        v-for="message in messages"
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
          <small v-if="!message.from_me"><br />- {{ message.name }}</small>
        </p>
      </div>
    </div>
    <input
      placeholder="Type a message..."
      v-on:keyup.enter="sendMessage($event)"
      type="text"
    />
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
    }
  },
  methods: {
    sendMessage(event) {
      let message = event.target.value
      let name = this.name
      messages.emit("chatMessage", { name, message })
      this.messages.push({
        name: name,
        message: message,
        from_me: true,
      })
      event.target.value = ""
    },
  },
  mounted() {
    messages.on("newMessage", (info) => {
      this.messages.push({
        name: info.name,
        message: info.message,
        from_me: false,
      })
    })
  },
}
</script>

<style lang="scss">
@import "../css/chat.scss";
</style>
