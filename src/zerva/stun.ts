import { once } from '@zerva/core'
import Ministun from 'ministun'
import { Logger } from 'zeed'

const log = Logger('stun')

const config = {
  udp4: true,
  udp6: true,
  port: 3478,
  log: null, // log.debug.bind(log),
  err: log.error.bind(log),
  sw: true,
}

/** See https://www.npmjs.com/package/ministun */
export function useStun() {
  log('setup', config)

  const server = new Ministun(config)

  once('serveInit', async () => {
    await server.start()
  })

  once('serveStop', async () => {
    await server.stop()
  })
}
