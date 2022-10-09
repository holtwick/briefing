import { serve } from '@zerva/core'
import { useHttp } from '@zerva/http'
import { useVite } from '@zerva/vite'
import { useWebSocket } from '@zerva/websocket'
import { toPath } from 'zeed'
import { useApple } from './apple'
import { useConfig } from './config'
import { useRoom } from './room'
import { useStun } from './stun'

useHttp({
  port: +(process.env.PORT || 8080),
  helmet: false,
})

useConfig()

useApple()

useWebSocket()

useRoom()

useStun()

useVite({
  root: toPath('.'),
  www: toPath('www'),
})

serve()
