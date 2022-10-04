import { on } from '@zerva/core'
import '@zerva/websocket'
import { Logger } from 'zeed'

const log = Logger('config')

export function useConfig() {
  log('setup')

  const options = {}
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith('BRIEFING_')) {
      log.debug(`${key} = "${value}"`)
      options[key.slice(9)] = value
    }
  }

  const configText = `window.briefingConfig = ${JSON.stringify(
    options,
    null,
    2,
  )}`

  log.info(`Dynamic config for the frontend:\n\n${configText}`)

  on('httpInit', ({ get }) => {
    get('/briefing-config.js', () => configText)
  })
}
