"use strict"

const { app, BrowserWindow, protocol } = require("electron")
const windowStateKeeper = require("electron-window-state")

const URL = "https://brie.fi/ng/?platform=electron"
const isDevelopment = process.env.NODE_ENV !== "production"

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
])

function createWindow() {
  // https://github.com/mawie81/electron-window-state
  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600,
  })

  // Create the browser window.
  win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    backgroundColor: "#272727",
    title: "Briefings",
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindowState.manage(win)

  // if (isDevelopment) {
  //   win.loadURL('https://localhost:8080')
  //   if (!process.env.IS_TEST) win.webContents.openDevTools()
  // } else {
  win.loadURL(URL)
  // }

  win.on("closed", () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// app.on('open-url', function (event, url) {
//   event.preventDefault()
//   let parts = url.split('/')
//   let room = parts[parts.length - 1]
// })

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  // app.setAsDefaultProtocolClient('briefing')
  // app.setAsDefaultProtocolClient('briefings')

  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit()
      }
    })
  } else {
    process.on("SIGTERM", () => {
      app.quit()
    })
  }
}
