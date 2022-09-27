import { on, serve } from "@zerva/core"
import { useHttp } from "@zerva/http"
import { useVite } from "@zerva/vite"
import { toPath } from "zeed"

useHttp({
  port: 8080,
})

useVite({
  root: toPath("."),
  www: toPath("www"),
})

on("httpInit", ({ get }) => {
  // get("/test", ({ req, res }) => {
  //   return "test"
  // })
})

serve()
