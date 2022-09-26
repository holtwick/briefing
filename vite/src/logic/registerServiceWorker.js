import { register } from "register-service-worker"
import { messages } from "../lib/emitter"

register(`${process.env.BASE_URL}service-worker.js`, {
  ready(swr) {
    // For more details, visit https://goo.gl/AFskqB
    console.log("PWA: App is being served from cache by a service worker.")
  },
  registered() {
    console.log("PWA: Service worker has been registered.")
  },
  cached() {
    console.log("PWA: Content has been cached for offline use.")
  },
  updatefound() {
    console.log("PWA: New content is downloading.")
  },
  updated() {
    console.log("PWA: New content is available; please refresh.")
    messages.emit("upgrade")
  },
  offline() {
    console.log(
      "PWA: No internet connection found. App is running in offline mode."
    )
  },
  error(error) {
    console.error("Error during service worker registration:", error)
  },
})
