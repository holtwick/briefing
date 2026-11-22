import { readFileSync } from 'node:fs'
import { mkdtemp } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createMcpHandler, PROTOCOL_VERSIONS, SERVER_INFO } from './server'
import { createRoomStore } from './store'
import { createTools } from './tools'

async function setup() {
  const dir = await mkdtemp(join(tmpdir(), 'briefing-mcp-'))
  const tools = createTools({
    instance: 'https://brie.fi/ng/',
    shareLinks: true,
    store: createRoomStore(join(dir, 'rooms.json')),
    system: { openUrl: async () => {}, copyText: async () => {} },
  })
  return createMcpHandler(tools)
}

async function call(mcp: Awaited<ReturnType<typeof setup>>, method: string, params?: unknown, id: number = 1) {
  return JSON.parse((await mcp.handleLine(JSON.stringify({ jsonrpc: '2.0', id, method, params })))!)
}

describe('mcp server', () => {
  it('initializes with the client version or the newest', async () => {
    const mcp = await setup()
    const a = await call(mcp, 'initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 't', version: '1' } })
    expect(a.result.protocolVersion).toBe('2025-06-18')
    expect(a.result.capabilities.tools).toBeTruthy()
    expect(a.result.serverInfo.name).toBe('briefing')
    const b = await call(mcp, 'initialize', { protocolVersion: '1999-01-01' })
    expect(b.result.protocolVersion).toBe(PROTOCOL_VERSIONS[0])
  })

  it('never answers notifications', async () => {
    const mcp = await setup()
    expect(await mcp.handleLine(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }))).toBeUndefined()
    expect(await mcp.handleLine('')).toBeUndefined()
  })

  it('lists and calls tools', async () => {
    const mcp = await setup()
    const list = await call(mcp, 'tools/list')
    expect(list.result.tools.map((t: any) => t.name)).toContain('create_room')
    const created = await call(mcp, 'tools/call', { name: 'create_room', arguments: { title: 'x' } })
    expect(created.result.isError).toBeFalsy()
    expect(created.result.content[0].type).toBe('text')
    const listed = await call(mcp, 'tools/call', { name: 'list_rooms', arguments: {} })
    expect(listed.result.structuredContent.rooms).toHaveLength(1)
  })

  it('answers errors as JSON-RPC errors', async () => {
    const mcp = await setup()
    expect(JSON.parse((await mcp.handleLine('{nope'))!).error.code).toBe(-32700)
    expect((await call(mcp, 'resources/list')).error.code).toBe(-32601)
    expect((await call(mcp, 'tools/call', { name: 'nope' })).error.code).toBe(-32602)
    expect((await call(mcp, 'ping')).result).toEqual({})
  })

  it('keeps its version in step with package.json, manifest.json and server.json', () => {
    const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
    const manifest = JSON.parse(readFileSync(new URL('../manifest.json', import.meta.url), 'utf8'))
    const registry = JSON.parse(readFileSync(new URL('../server.json', import.meta.url), 'utf8'))
    expect(SERVER_INFO.version).toBe(pkg.version)
    expect(manifest.version).toBe(pkg.version)
    expect(registry.version).toBe(pkg.version)
    expect(registry.packages[0].version).toBe(pkg.version)
    // The MCP Registry checks that the npm package names the server it is listed as
    expect(registry.name).toBe(pkg.mcpName)
    expect(registry.packages[0].identifier).toBe(pkg.name)
    expect(registry.description.length).toBeLessThanOrEqual(100)
  })

  it('lists the same tools in manifest.json', async () => {
    const mcp = await setup()
    const manifest = JSON.parse(readFileSync(new URL('../manifest.json', import.meta.url), 'utf8'))
    const list = await call(mcp, 'tools/list')
    expect(manifest.tools.map((t: any) => t.name)).toEqual(list.result.tools.map((t: any) => t.name))
  })
})
