import { serve } from "@zerva/core"
import { useHttp } from "@zerva/http"
import { useVite } from "@zerva/vite"
import { useWebSocket } from "@zerva/websocket"
import { toPath } from "zeed"
import { useApple } from "./apple"
import { useConfig } from "./config"
import { useRoom } from "./room"

useHttp({
  port: 8080,
  helmet: false,
})

useWebSocket()

useVite({
  root: toPath("."),
  www: toPath("www"),
})

useConfig()

useRoom()

useApple()

serve()
