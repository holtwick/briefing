import { on, onInit, register, requireModules } from "@zerva/core"
import { Channel, Logger, uname } from "zeed"
import "@zerva/websocket"

const log = Logger("room")

const moduleName = "room"

interface Room {
  name: string
  peers: Record<string, Channel>
}

export function useRoom(config: {} = {}) {
  log("setup")

  register(moduleName)

  const rooms = new Map<string, Room>()

  onInit(() => {
    requireModules("websocket")
  })

  const useConnection = (channel: Channel) => {
    const peerId = uname("peer") // uuid()

    let log = Logger(`${peerId}::${moduleName}`)
    log.info("useConnection")

    let roomName: string | undefined

    function channelEmit(name: string, data: any) {
      channel.postMessage(JSON.stringify({ name, data }))
    }

    const methods = {
      signal: (data: any) => {
        log("signal")
      },

      status: (info: any) => {
        log("status", info)
        channelEmit("status", {
          info: {
            server: true,
          },
        })
      },
    }

    channel.on("message", (event) => {
      log("onMessage:", event.data)
      try {
        let { name, data } = JSON.parse(event.data)
        methods[name]?.(data)
      } catch (err) {
        log.error("onMessage error:", err)
      }
    })

    channel.on("close", () => {
      log("close")
    })

    // const leave = async (id: string) => {
    //   if (roomName) {
    //     log.info("room leave", roomName, id)
    //     let room = rooms.get(roomName)
    //     if (room) {
    //       room.peers.delete(id)
    //       room.queue.enqueue(async () => {
    //         for (const peer of Array.from(room?.peers?.values() || [])) {
    //           peer.client?.peerLeftRoom?.(id)
    //         }
    //       })
    //     }
    //   }
    // }
  }

  on("webSocketConnect", ({ channel }) => {
    log("webSocketConnect", channel)
    useConnection(channel)
  })
}
