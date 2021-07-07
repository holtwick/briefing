import { Logger, activateConsoleDebug } from "zeed"

try {
  activateConsoleDebug()
} catch (e) {
  console.warn("activateConsoleDebug() did fail")
}

export { Logger }
