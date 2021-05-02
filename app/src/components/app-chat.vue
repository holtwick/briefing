<template>
  <div class="chat-container -scrollable text">
    <div v-if="! nameString">
      <label>Please enter your name : </label>
      <input style="margin-top: .4em;" id="name" placeholder="You're chatting as?" />
      <br />
      <button @click="setName()" class="save-btn" type="button">
        Save
      </button>
    </div>
    <div v-else>
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
            <small style="font-size: .68em"><br />@ {{ message.time }}</small>
          </p>
        </div>
      </div>
      <input
        placeholder="Type a message..."
        v-on:keyup.enter="sendMessage($event)"
        type="text"
      />
    </div>
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
      nameString: this.name
    }
  },
  methods: {
    sendMessage(event) {
      let message = event.target.value
      let name = this.nameString
      let current = new Date();
      let ampm = current.getUTCHours() < 12 ? 'AM' : 'PM';
      let time = current.getUTCHours() % 12 + ':' + current.getUTCMinutes() + ' ' + ampm + ' (UTC)';
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
      let name = document.getElementById('name').value;
      localStorage.setItem('name', name);
      this.nameString = name;
      messages.emit("userInfo", {
        name: name,
      })
    },
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
