#!/usr/bin/env node
import { createInterface } from 'node:readline'
import { normalizeInstance } from '@briefing/sdk/room-link'
import { createMcpHandler } from './server'
import { createRoomStore, defaultStorePath } from './store'
import { createSystemActions } from './system'
import { createTools } from './tools'

/**
 * Entry point: an MCP server on stdin/stdout. stdout carries the protocol
 * only, so diagnostics go to stderr (not through a logger that might print
 * to stdout). Settings come from the environment, which Claude Desktop fills
 * from the extension's settings (`manifest.json`, `user_config`).
 *
 *   BRIEFING_INSTANCE     Briefing instance, default https://brie.fi/ng/
 *   BRIEFING_SHARE_LINKS  "false" keeps even the participant link out of the assistant
 *   BRIEFING_MCP_DATA     folder for rooms.json, default the platform's app data folder
 */

function warn(message: string) {
  process.stderr.write(`briefing-mcp: ${message}\n`)
}

function flag(value: string | undefined, fallback: boolean): boolean {
  if (value == null || value.trim() === '' || value.startsWith('${'))
    return fallback
  return !/^(?:0|false|no|off)$/i.test(value.trim())
}

function setting(value: string | undefined): string | undefined {
  // An unfilled placeholder from a client that does not substitute it
  return value && !value.startsWith('${') ? value : undefined
}

let instance: string
try {
  instance = normalizeInstance(setting(process.env.BRIEFING_INSTANCE))
}
catch (err) {
  warn(`${(err as Error).message}: ${process.env.BRIEFING_INSTANCE}`)
  process.exit(1)
}

const store = createRoomStore(defaultStorePath())
const tools = createTools({
  instance,
  shareLinks: flag(process.env.BRIEFING_SHARE_LINKS, true),
  store,
  system: createSystemActions(),
})
const mcp = createMcpHandler(tools)

const input = createInterface({ input: process.stdin, crlfDelay: Infinity })
let pending = Promise.resolve()
input.on('line', (line) => {
  // In order: an answer never overtakes the one before it
  pending = pending.then(async () => {
    const answer = await mcp.handleLine(line)
    if (answer)
      process.stdout.write(`${answer}\n`)
  }).catch(err => warn(String(err)))
})
input.on('close', () => {
  pending.finally(() => process.exit(0))
})
