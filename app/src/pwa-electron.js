console.log("Electron LIB")
// window.electron = __non_webpack_require__('electron')
window.electron = require("electron")

document.title = "Briefings"

// https://www.npmjs.com/package/custom-electron-titlebar
import { Color, Titlebar } from "custom-electron-titlebar"

new Titlebar({
  backgroundColor: Color.fromHex("#272727"),
  titleHorizontalAlignment: "left",
  menu: null,
})

console.log("Did load electron", window.electron)
