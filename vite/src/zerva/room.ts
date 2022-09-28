import { assertModules, on, onInit, register } from "@zerva/core"
import "@zerva/websocket"
import { Channel, Logger, uname } from "zeed"

const log = Logger("room")

const moduleName = "room"

interface RoomPeer {
  id: string
  emit(name: string, data: any): void
  channel: Channel
}

interface Room {
  name: string
  peers: Map<string, RoomPeer>
}

export function useRoom(config: {} = {}) {
  log("setup")
  register(moduleName)

  const rooms = new Map<string, Room>()

  onInit(() => {
    assertModules("websocket")
  })

  const useConnection = (channel: Channel) => {
    const peerId = uname("peer") // uuid()

    let log = Logger(`${peerId}::${moduleName}`)
    log.info("useConnection")

    let roomInfo: Room

    function channelEmit(name: string, data: any) {
      channel.postMessage(JSON.stringify({ name, data }))
    }

    const methods = {
      join: ({ room }) => {
        log("join")

        if (roomInfo) {
          log.warn("Tries to connect more than once.")
          return
        }

        // Get / create room
        roomInfo = rooms.get(room)
        if (roomInfo == null) {
          roomInfo = {
            name: room,
            peers: new Map(),
          }
          rooms.set(room, roomInfo)
        }

        // Existing peers (before we add self)
        let peers = [...roomInfo.peers.keys()]

        // Add self
        roomInfo.peers.set(peerId, {
          id: peerId,
          channel,
          emit: channelEmit,
        })

        // Let client know
        channelEmit("joined", {
          room,
          peers,
          self: peerId,
        })
      },

      signal: (data: any) => {
        log("signal", data)
        const { from, to } = data
        if (from !== peerId) {
          log.warn("Strange message that was not sent by us.")
        } else if (to) {
          const peer = roomInfo?.peers.get(to)
          if (!peer) {
            log.warn(`Cannot find peer ${to} for sending signal.`)
          } else {
            peer.emit("signal", data)
          }
        } else {
          log.warn("Missing data for signal.")
        }
        log("signal")
      },

      status: (info: any) => {
        log("status", info)
        channelEmit("status", {
          api: 1,
          pong: info?.ping || "pong",
          config: {},
        })
      },
    }

    channel.on("message", (event) => {
      try {
        let { name, data } = JSON.parse(event.data)
        log(`onMessage "${name}":`, data)
        methods[name]?.(data)
      } catch (err) {
        log.error("onMessage error:", err)
      }
    })

    channel.on("close", () => {
      log("close")
      roomInfo.peers.delete(peerId)
      if (roomInfo.peers.size <= 0) {
        // we can also leave it dangle around
      }
      roomInfo = undefined
    })
  }

  on("webSocketConnect", ({ channel }) => {
    log("webSocketConnect")
    useConnection(channel)
  })
}
