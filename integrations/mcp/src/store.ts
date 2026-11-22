import { chmod, mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'

/**
 * The rooms made on this computer, in one JSON file only the user can read:
 * it holds the moderator keys, which never leave this machine except into
 * the user's own browser.
 */

export interface StoredRoom {
  /** Room name, also the handle the assistant uses (`open_room`, ...) */
  room: string
  /** What the user called it; stays on this computer, never part of the link */
  title?: string
  /** From `normalizeInstance` */
  instance: string
  secret: string
  /** Only for moderated rooms */
  moderatorKey?: string
  mode: 'video' | 'chat'
  /** ISO time */
  created: string
}

interface StoreFile {
  version: 1
  rooms: StoredRoom[]
}

/** Where the rooms live: `BRIEFING_MCP_DATA`, else the platform's app data folder */
export function defaultStorePath(env: NodeJS.ProcessEnv = process.env, platform: NodeJS.Platform = process.platform): string {
  if (env.BRIEFING_MCP_DATA)
    return join(env.BRIEFING_MCP_DATA, 'rooms.json')
  const home = homedir()
  const base = platform === 'darwin'
    ? join(home, 'Library', 'Application Support')
    : platform === 'win32'
      ? (env.APPDATA || join(home, 'AppData', 'Roaming'))
      : (env.XDG_DATA_HOME || join(home, '.local', 'share'))
  return join(base, 'briefing-mcp', 'rooms.json')
}

function isStoredRoom(value: any): value is StoredRoom {
  return value != null
    && typeof value.room === 'string'
    && typeof value.instance === 'string'
    && typeof value.secret === 'string'
    && (value.mode === 'video' || value.mode === 'chat')
    && typeof value.created === 'string'
    && (value.moderatorKey == null || typeof value.moderatorKey === 'string')
    && (value.title == null || typeof value.title === 'string')
}

export function createRoomStore(path: string) {
  /** Serializes writes; reads see the last completed write */
  let queue: Promise<unknown> = Promise.resolve()

  async function read(): Promise<StoredRoom[]> {
    let text: string
    try {
      text = await readFile(path, 'utf8')
    }
    catch (err: any) {
      if (err?.code === 'ENOENT')
        return []
      throw err
    }
    const data = JSON.parse(text) as Partial<StoreFile>
    if (data.version !== 1 || !Array.isArray(data.rooms))
      throw new Error(`Unknown format of ${path}`)
    return data.rooms.filter(isStoredRoom)
  }

  async function write(rooms: StoredRoom[]) {
    await mkdir(dirname(path), { recursive: true, mode: 0o700 })
    const tmp = `${path}.${process.pid}.tmp`
    const data: StoreFile = { version: 1, rooms }
    await writeFile(tmp, `${JSON.stringify(data, null, 2)}\n`, { mode: 0o600 })
    await chmod(tmp, 0o600)
    await rename(tmp, path)
  }

  function update<T>(fn: (rooms: StoredRoom[]) => { rooms: StoredRoom[], result: T }): Promise<T> {
    const next = queue.then(async () => {
      const { rooms, result } = fn(await read())
      await write(rooms)
      return result
    })
    queue = next.catch(() => {})
    return next
  }

  return {
    path,

    async list(): Promise<StoredRoom[]> {
      await queue
      return read()
    },

    async get(room: string): Promise<StoredRoom | undefined> {
      return (await this.list()).find(r => r.room === room)
    },

    add(room: StoredRoom): Promise<void> {
      return update(rooms => ({ rooms: [...rooms.filter(r => r.room !== room.room), room], result: undefined }))
    },

    /** `true` if there was such a room */
    remove(room: string): Promise<boolean> {
      return update(rooms => ({
        rooms: rooms.filter(r => r.room !== room),
        result: rooms.some(r => r.room === room),
      }))
    },
  }
}

export type RoomStore = ReturnType<typeof createRoomStore>
