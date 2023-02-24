import { once } from '@zerva/core'
import Ministun from 'ministun'
import { Logger, uname } from 'zeed'

const log = Logger('stun')

const config = {
  udp4: true,
  udp6: true,
  port: 3478,
  log: null, // log.debug,
  err: log.error,
  sw: true,
}

/** See https://www.npmjs.com/package/ministun */
export function useStun() {
  const id = uname('stun')
  log('setup', config)

  const server = new Ministun(config)

  once('serveInit', async () => {
    await server.start()
  })

  once('serveStop', async () => {
    log('stun stop', id)
    await server.stop()
  })
}
