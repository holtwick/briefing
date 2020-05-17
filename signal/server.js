const express = require('express')
const app = express()
const http = require('http')
const server = new http.Server(app)
const io = require('socket.io')(server)
const helmet = require('helmet')
const cors = require('cors')
const {
  rooms,
  addSocketToRoom,
  removeSocketFromRoom,
  allSocketsForRoom,
} = require('./rooms')
const config = require('./config')

const CONFIG = {
  title: config.title,
  host: process.env.HOST || config.host || undefined,
  port: process.env.PORT || config.port || 4444,
  timeout: config.timeout || 30000,
  max: config.max || 50,
  debug: config.debug || false
}

process.title = CONFIG.title

const log = require('debug')('signal:server')

app.use(helmet())
app.use(cors())

// SOCKET.IO

let brokenSockets = {}

function activeSockets(id = null) {
  return Object.keys(io.sockets.connected).filter(sid => sid !== id && !brokenSockets[sid])
}

function brokenSocket(socket) {
  brokenSockets[socket.id] = true
  // log('--- broken sockets', Object.keys(brokenSockets).length, 'connected', activeSockets().length)
  io.emit('remove', { id: socket.id })
}

function socketByID(id) {
  return io.sockets.connected[id]
}

function emitByID(id, name, msg) {
  let socket = socketByID(id)
  if (socket) {
    log('emit', id, name, msg)
    socket.emit(name, msg)
  }
}

function broadcastByID(ids, name, msg) {
  for (let id of ids) {
    emitByID(id, name, msg)
  }
}

io.on('connection', function (socket) {
  const sid = socket.id
  let currentRoom

  // let peers = activeSockets(sid)
  log('connection socket id:', sid)

  for (const msg of ['disconnect', 'disconnecting', 'error']) {
    socket.on(msg, data => {
      log(`* ${msg}:`, data)
      brokenSocket(socket)
      removeSocketFromRoom(sid, currentRoom)
    })
  }

  // The peer that joined is responsible for initiating WebRTC connections
  socket.on('join', ({ room }) => {
    let peers = allSocketsForRoom(room)
    const full = peers.length >= config.max
    if (full) {
      socket.emit('error', {
        error: `Room ${room} is full`,
        code: 1,
        full,
      })
    } else {
      removeSocketFromRoom(sid, currentRoom)
      addSocketToRoom(sid, room)
      currentRoom = room
      socket.emit('joined', {
        room,
        peers,
      })
    }
  })

  // Ask for a connection to another socket via ID
  socket.on('signal', data => {
    log('signal', data.from, data.to)
    if (data.from !== sid) {
      log('*** error, wrong from', data.from)
    }
    if (data.to) {
      const toSocket = socketByID(data.to)
      if (toSocket) {
        toSocket.emit('signal', {
          ...data,
          // from: socket.id,
        })
      } else {
        log('Cannot find socket for %s', data.to)
      }
    }
  })

})

// EXPRESS.IO

const startDate = new Date()

if (CONFIG.debug) {
  app.use('/status', (req, res) => {
    let status = {
      api: 1,
      success: true,
      info: {
        timeStarted: Math.round(startDate.getTime()),
        activeConnections: activeSockets().length,
        rooms,
      },
    }
    res.json(status)
  })
}

app.use('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-tap-highlight" content="no">
  <title>Briefing Signal Server</title>
</head>
<body>
  <p><b><a href="https://brie.fi/ng">Briefing</a> Signal Server</b></p>
  <p>Running since ${startDate.toISOString()}</p>  
</body>
</html>`)
})

// app.use('/', express.static('public'))

//

server.listen({
  host: CONFIG.host,
  port: CONFIG.port,
}, info => {
  console.info(`Running on`, server.address())
})
