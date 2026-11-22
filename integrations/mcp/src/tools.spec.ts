import type { SystemActions } from './system'
import { mkdtemp, readFile, stat } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { exportedModeratorKeyHash, parseModeratedSecret, parseRoomFragment } from '@briefing/sdk/room-link'
import { createRoomStore } from './store'
import { createTools, REF, TOOL_DEFINITIONS } from './tools'

async function setup(shareLinks = true) {
  const dir = await mkdtemp(join(tmpdir(), 'briefing-mcp-'))
  const store = createRoomStore(join(dir, 'rooms.json'))
  const opened: string[] = []
  const copied: string[] = []
  const system: SystemActions = {
    openUrl: async (url) => { opened.push(url) },
    copyText: async (text) => { copied.push(text) },
  }
  const tools = createTools({ instance: 'https://brie.fi/ng/', shareLinks, store, system, now: () => new Date('2026-11-22T10:00:00Z') })
  return { tools, store, opened, copied }
}

function allText(result: { content: { text: string }[], structuredContent?: unknown }) {
  return result.content.map(c => c.text).join('\n') + JSON.stringify(result.structuredContent ?? {})
}

describe('tools', () => {
  it('declares a schema and annotations for every tool', () => {
    for (const tool of TOOL_DEFINITIONS) {
      expect(tool.inputSchema.type).toBe('object')
      expect(tool.annotations.title).toBeTruthy()
      expect(tool.description.length).toBeGreaterThan(40)
    }
  })

  it('creates a moderated room and never shows the moderator key', async () => {
    const { tools, store } = await setup()
    const result = await tools.call('create_room', { title: 'Kündigung Müller' })
    expect(result.isError).toBeFalsy()
    const [room] = await store.list()
    expect(room!.title).toBe('Kündigung Müller')
    expect(room!.room).toMatch(/^room-[a-z0-9]{6}$/)
    expect(room!.moderatorKey).toMatch(/^[\w-]{128}$/)
    expect(parseModeratedSecret(room!.secret)?.keyHash).toBe(await exportedModeratorKeyHash(room!.moderatorKey!))
    const out = allText(result)
    expect(out).not.toContain(room!.moderatorKey)
    expect(out).not.toContain('&mk=')
    const link = (result.structuredContent as any).participantLink as string
    expect(link.startsWith(`https://brie.fi/ng/${room!.room}?ref=${REF}#`)).toBe(true)
    expect(parseRoomFragment(new URL(link).hash)).toEqual({ secret: room!.secret, mode: 'video' })
    // The title stays local
    expect(link).not.toMatch(/k%C3%BCndigung|kuendigung|mueller/i)
  })

  it('keeps the store readable by the user only', async () => {
    const { tools, store } = await setup()
    await tools.call('create_room', {})
    if (process.platform !== 'win32')
      expect((await stat(store.path)).mode & 0o777).toBe(0o600)
    expect(JSON.parse(await readFile(store.path, 'utf8')).version).toBe(1)
  })

  it('creates plain and chat rooms', async () => {
    const { tools, store } = await setup()
    await tools.call('create_room', { moderated: false, mode: 'chat' })
    const [room] = await store.list()
    expect(room!.moderatorKey).toBeUndefined()
    expect(parseModeratedSecret(room!.secret)).toBeUndefined()
    expect(room!.mode).toBe('chat')
    expect((await tools.call('open_room', { room: room!.room, as: 'moderator' })).isError).toBe(true)
  })

  it('rejects bad arguments', async () => {
    const { tools } = await setup()
    expect((await tools.call('create_room', { moderated: 'yes' })).isError).toBe(true)
    expect((await tools.call('create_room', { mode: 'audio' })).isError).toBe(true)
    expect((await tools.call('create_room', { title: 'x'.repeat(201) })).isError).toBe(true)
    expect((await tools.call('create_room', [])).isError).toBe(true)
    expect((await tools.call('get_room_link', {})).isError).toBe(true)
    expect((await tools.call('get_room_link', { room: 'nope' })).isError).toBe(true)
    expect((await tools.call('nope', {})).isError).toBe(true)
  })

  it('opens and copies links locally', async () => {
    const { tools, store, opened, copied } = await setup()
    await tools.call('create_room', {})
    const [room] = await store.list()
    const open = await tools.call('open_room', { room: room!.room })
    expect(allText(open)).not.toContain('&mk=')
    expect(parseRoomFragment(new URL(opened[0]!).hash).moderatorKey).toBe(room!.moderatorKey)
    await tools.call('open_room', { room: room!.room, as: 'participant' })
    expect(opened[1]).not.toContain('&mk=')
    await tools.call('copy_room_link', { room: room!.room })
    expect(copied[0]).not.toContain('&mk=')
    const copy = await tools.call('copy_room_link', { room: room!.room, as: 'moderator' })
    expect(copied[1]).toContain('&mk=')
    expect(allText(copy)).not.toContain('&mk=')
  })

  it('keeps every link out with shareLinks off', async () => {
    const { tools, store } = await setup(false)
    const created = await tools.call('create_room', { title: 'a' })
    const [room] = await store.list()
    for (const result of [created, await tools.call('list_rooms', {}), await tools.call('get_room_link', { room: room!.room })])
      expect(allText(result)).not.toContain(room!.secret)
    expect((await tools.call('get_room_link', { room: room!.room })).isError).toBe(true)
  })

  it('lists newest first and forgets', async () => {
    const { tools, store } = await setup()
    await tools.call('create_room', { title: 'one' })
    await tools.call('create_room', { title: 'two' })
    const listed = await tools.call('list_rooms', {})
    expect((listed.structuredContent as any).rooms).toHaveLength(2)
    const [first] = await store.list()
    expect((await tools.call('forget_room', { room: first!.room })).isError).toBeFalsy()
    expect(await store.list()).toHaveLength(1)
    expect((await tools.call('forget_room', { room: first!.room })).isError).toBe(true)
  })

  it('survives parallel writes', async () => {
    const { tools, store } = await setup()
    await Promise.all(Array.from({ length: 10 }, (_, i) => tools.call('create_room', { title: `r${i}` })))
    expect(await store.list()).toHaveLength(10)
  })
})
