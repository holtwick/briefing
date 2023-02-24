import { serve } from '@zerva/core'
import { useHttp } from '@zerva/http'
import { useVite } from '@zerva/vite'
import { useWebSocket } from '@zerva/websocket'
import { setupEnv, toPath } from 'zeed'
import { useConfig } from './config' 
import { useRoom } from './room'
import { useStun } from './stun'

if (process.env.ZERVA_MODE === 'development')
  setupEnv()

async function main() {
   
  useHttp({
    port: +(process.env.PORT || 8080),
    helmet: false,
  })

  useConfig()

  useWebSocket()

  useRoom()

  useStun()

  useVite({
    root: toPath('.'),
    www: toPath('www'),
  })

  // onStop(() => console.log('stopp!'))

  serve()
}

main()
