import { on, serve } from "@zerva/core"
import { useHttp } from "@zerva/http"
import { useVite } from "@zerva/vite"
import { toPath } from "zeed"
import { useRoom } from "./room"

useHttp({
  port: 8080,
})

useVite({
  root: toPath("."),
  www: toPath("www"),
})

useRoom()

// on("httpInit", ({ get }) => {
//   // get("/test", ({ req, res }) => {
//   //   return "test"
//   // })
// })

serve()
