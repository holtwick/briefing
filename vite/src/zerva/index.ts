import { serve } from "@zerva/core"
import { useHttp } from "@zerva/http"
import { useVite } from "@zerva/vite"
import { useWebSocket } from "@zerva/websocket"
import { toPath } from "zeed"
import { useRoom } from "./room"

useHttp({
  port: 8080,
})

useWebSocket()

useVite({
  root: toPath("."),
  www: toPath("www"),
})

useRoom()

serve()
