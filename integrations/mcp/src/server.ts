import type { Tools } from './tools'

/**
 * The Model Context Protocol over stdio, by hand: newline-delimited JSON-RPC
 * 2.0, and of MCP only what a tools-only server needs (initialize, ping,
 * tools/list, tools/call). No SDK - the server stays one small file without
 * runtime dependencies, which is easy to review for the people who install it.
 */

/** Newest first; the client's version is taken when it is one of these */
export const PROTOCOL_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26', '2024-11-05']

export const SERVER_INFO = {
  name: 'briefing',
  title: 'Briefing',
  version: '1.0.0',
}

const INSTRUCTIONS = [
  'Briefing is an end-to-end encrypted video chat. A room exists only as its link, made on this computer.',
  'Create a room with create_room and put the participant link into invitations (email, calendar event, message).',
  'The moderator link never appears in this conversation; the user joins as moderator with open_room. Never ask for it.',
  'If the user keeps links out of the assistant, links go to the clipboard with copy_room_link instead.',
].join(' ')

interface JsonRpcRequest {
  jsonrpc: '2.0'
  id?: string | number | null
  method: string
  params?: any
}

type JsonRpcResponse = {
  jsonrpc: '2.0'
  id: string | number | null
} & ({ result: unknown } | { error: { code: number, message: string } })

const PARSE_ERROR = -32700
const INVALID_REQUEST = -32600
const METHOD_NOT_FOUND = -32601
const INVALID_PARAMS = -32602

function error(id: JsonRpcResponse['id'], code: number, message: string): JsonRpcResponse {
  return { jsonrpc: '2.0', id, error: { code, message } }
}

/** One answer per request; `undefined` for notifications, which are never answered */
export function createMcpHandler(tools: Tools) {
  async function handle(message: unknown): Promise<JsonRpcResponse | undefined> {
    const req = message as Partial<JsonRpcRequest>
    if (req == null || typeof req !== 'object' || req.jsonrpc !== '2.0' || typeof req.method !== 'string')
      return error((req as any)?.id ?? null, INVALID_REQUEST, 'Invalid request')
    const isNotification = !('id' in req) || req.id === undefined
    if (isNotification)
      return
    const id = req.id ?? null
    const ok = (result: unknown): JsonRpcResponse => ({ jsonrpc: '2.0', id, result })

    switch (req.method) {
      case 'initialize': {
        const requested = req.params?.protocolVersion
        return ok({
          protocolVersion: PROTOCOL_VERSIONS.includes(requested) ? requested : PROTOCOL_VERSIONS[0],
          capabilities: { tools: { listChanged: false } },
          serverInfo: SERVER_INFO,
          instructions: INSTRUCTIONS,
        })
      }
      case 'ping':
        return ok({})
      case 'tools/list':
        return ok({ tools: tools.definitions })
      case 'tools/call': {
        const name = req.params?.name
        if (typeof name !== 'string')
          return error(id, INVALID_PARAMS, 'Missing tool name')
        if (!tools.definitions.some(t => t.name === name))
          return error(id, INVALID_PARAMS, `Unknown tool: ${name}`)
        return ok(await tools.call(name, req.params?.arguments))
      }
      default:
        return error(id, METHOD_NOT_FOUND, `Method not found: ${req.method}`)
    }
  }

  /** One line in, at most one line out */
  async function handleLine(line: string): Promise<string | undefined> {
    if (!line.trim())
      return
    let message: unknown
    try {
      message = JSON.parse(line)
    }
    catch {
      return JSON.stringify(error(null, PARSE_ERROR, 'Parse error'))
    }
    // Batches were dropped from MCP in 2025-06-18; answered one by one for older clients
    if (Array.isArray(message)) {
      const answers = (await Promise.all(message.map(handle))).filter(Boolean)
      return answers.length ? JSON.stringify(answers) : undefined
    }
    const answer = await handle(message)
    return answer && JSON.stringify(answer)
  }

  return { handle, handleLine }
}
