import type { RoomStore, StoredRoom } from './store'
import type { SystemActions } from './system'
import { newExportedModeratorKey, newLinkSecret, roomLinkUrl, roomNameFromTitle } from '@briefing/sdk/room-link'

/**
 * The tools the assistant sees. What it may learn is the participant link,
 * the one meant for invitations anyway - and with `shareLinks: false` not
 * even that. The moderator link never goes into a tool result: it reaches
 * the user only through their own browser or clipboard.
 */

/** `ref` of the links made here: Briefing counts joins per source and day, nothing else */
export const REF = 'mcp'

export interface ToolsConfig {
  /** From `normalizeInstance` */
  instance: string
  /** Whether tool results may carry the participant link */
  shareLinks: boolean
  store: RoomStore
  system: SystemActions
  now?: () => Date
}

export interface ToolResult {
  content: { type: 'text', text: string }[]
  structuredContent?: Record<string, unknown>
  isError?: boolean
}

interface ToolAnnotations {
  title: string
  readOnlyHint: boolean
  destructiveHint: boolean
  idempotentHint: boolean
  openWorldHint: boolean
}

export interface ToolDefinition {
  name: string
  title: string
  description: string
  inputSchema: Record<string, unknown>
  annotations: ToolAnnotations
}

const ROOM_ARG = {
  type: 'string',
  description: 'The room id from create_room or list_rooms (e.g. "room-x3k9qa")',
}

export const TOOL_DEFINITIONS: ToolDefinition[] = [
  {
    name: 'create_room',
    title: 'Create a Briefing room',
    description: 'Create a new end-to-end encrypted Briefing video room (or chat room). The room is made on this computer; nothing is registered anywhere. Returns a room id and, if allowed by the user\'s settings, the participant link to put into invitations, emails or calendar events. The moderator link stays on this computer: never ask the user for it; the user joins as moderator with open_room.',
    inputSchema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          maxLength: 200,
          description: 'What the meeting is about, only kept on this computer to find the room again. It is not part of the link.',
        },
        moderated: {
          type: 'boolean',
          default: true,
          description: 'With a moderator who admits guests and manages the room (default). Without, everybody with the link is equal.',
        },
        mode: {
          type: 'string',
          enum: ['video', 'chat'],
          default: 'video',
          description: '"video" for a call (default), "chat" for a room that starts as a text chat',
        },
      },
      additionalProperties: false,
    },
    annotations: { title: 'Create a Briefing room', readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: false },
  },
  {
    name: 'list_rooms',
    title: 'List Briefing rooms',
    description: 'List the Briefing rooms made on this computer, newest first, with their room ids, titles and (if allowed by the user\'s settings) participant links.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    annotations: { title: 'List Briefing rooms', readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  },
  {
    name: 'get_room_link',
    title: 'Get the participant link',
    description: 'The participant link of a room, to invite more people (for example in an email or a calendar event). Only available if the user allows links in the assistant; otherwise use copy_room_link.',
    inputSchema: { type: 'object', properties: { room: ROOM_ARG }, required: ['room'], additionalProperties: false },
    annotations: { title: 'Get the participant link', readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  },
  {
    name: 'open_room',
    title: 'Join a Briefing room',
    description: 'Open a room in the user\'s default browser, as moderator by default (for moderated rooms) or as participant. The link goes straight to the browser, not into the conversation.',
    inputSchema: {
      type: 'object',
      properties: {
        room: ROOM_ARG,
        as: { type: 'string', enum: ['moderator', 'participant'], description: 'Default: moderator for moderated rooms' },
      },
      required: ['room'],
      additionalProperties: false,
    },
    annotations: { title: 'Join a Briefing room', readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  },
  {
    name: 'copy_room_link',
    title: 'Copy a room link',
    description: 'Put the participant link (default) or the moderator link of a room on the user\'s clipboard, without showing it in the conversation. The moderator link is for the user alone or a co-moderator they trust.',
    inputSchema: {
      type: 'object',
      properties: {
        room: ROOM_ARG,
        as: { type: 'string', enum: ['participant', 'moderator'], default: 'participant' },
      },
      required: ['room'],
      additionalProperties: false,
    },
    annotations: { title: 'Copy a room link', readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  },
  {
    name: 'forget_room',
    title: 'Forget a Briefing room',
    description: 'Remove a room from this computer\'s list. Its links keep working for whoever has them; a moderator key not yet opened in a browser is lost. Ask the user before forgetting a room.',
    inputSchema: { type: 'object', properties: { room: ROOM_ARG }, required: ['room'], additionalProperties: false },
    annotations: { title: 'Forget a Briefing room', readOnlyHint: false, destructiveHint: true, idempotentHint: true, openWorldHint: false },
  },
]

export class ToolError extends Error {}

function text(message: string, structuredContent?: Record<string, unknown>): ToolResult {
  return structuredContent
    ? { content: [{ type: 'text', text: message }], structuredContent }
    : { content: [{ type: 'text', text: message }] }
}

function participantLink(room: StoredRoom) {
  return roomLinkUrl({ instance: room.instance, room: room.room, secret: room.secret, mode: room.mode, ref: REF })
}

function moderatorLink(room: StoredRoom) {
  return roomLinkUrl({ instance: room.instance, room: room.room, secret: room.secret, moderatorKey: room.moderatorKey, mode: room.mode, ref: REF })
}

function optionalString(args: Record<string, unknown>, key: string, max = 200): string | undefined {
  const value = args[key]
  if (value == null)
    return
  if (typeof value !== 'string')
    throw new ToolError(`"${key}" must be a string`)
  const trimmed = value.trim()
  if (trimmed.length > max)
    throw new ToolError(`"${key}" is longer than ${max} characters`)
  return trimmed || undefined
}

function oneOf<T extends string>(args: Record<string, unknown>, key: string, values: readonly T[]): T | undefined {
  const value = args[key]
  if (value == null)
    return
  if (!values.includes(value as T))
    throw new ToolError(`"${key}" must be one of ${values.join(', ')}`)
  return value as T
}

export function createTools(config: ToolsConfig) {
  const { store, system, shareLinks } = config
  const now = config.now ?? (() => new Date())

  async function roomArg(args: Record<string, unknown>): Promise<StoredRoom> {
    const id = optionalString(args, 'room')
    if (!id)
      throw new ToolError('"room" is required')
    const room = await store.get(id)
    if (!room)
      throw new ToolError(`No room "${id}" on this computer. list_rooms shows the rooms there are.`)
    return room
  }

  function summary(room: StoredRoom) {
    return {
      room: room.room,
      title: room.title,
      moderated: !!room.moderatorKey,
      mode: room.mode,
      created: room.created,
      ...(shareLinks ? { participantLink: participantLink(room) } : {}),
    }
  }

  const handlers: Record<string, (args: Record<string, unknown>) => Promise<ToolResult>> = {
    async create_room(args) {
      const title = optionalString(args, 'title')
      const moderated = args.moderated == null ? true : args.moderated
      if (typeof moderated !== 'boolean')
        throw new ToolError('"moderated" must be true or false')
      const mode = oneOf(args, 'mode', ['video', 'chat'] as const) ?? 'video'
      const key = moderated ? await newExportedModeratorKey() : undefined
      const room: StoredRoom = {
        // A random name: the server sees it, the title it never learns
        room: roomNameFromTitle(),
        ...(title ? { title } : {}),
        instance: config.instance,
        secret: newLinkSecret(key?.keyHash),
        ...(key ? { moderatorKey: key.exported } : {}),
        mode,
        created: now().toISOString(),
      }
      await store.add(room)
      const lines = [
        `Created ${moderated ? 'moderated ' : ''}Briefing ${mode === 'chat' ? 'chat ' : ''}room "${room.room}"${title ? ` (${title})` : ''}.`,
        shareLinks
          ? `Participant link for invitations: ${participantLink(room)}`
          : 'The user keeps links out of the assistant: use copy_room_link to put the participant link on their clipboard.',
        moderated
          ? 'The moderator link stays on this computer. The user joins as moderator with open_room; the first opening also stores the moderator key in their browser.'
          : 'Everybody with the link joins as an equal participant.',
      ]
      return text(lines.join('\n'), summary(room))
    },

    async list_rooms() {
      const rooms = (await store.list()).sort((a, b) => b.created.localeCompare(a.created))
      if (!rooms.length)
        return text('No Briefing rooms on this computer yet.', { rooms: [] })
      const lines = rooms.map((r) => {
        const parts = [`- ${r.room}`, r.title ? `"${r.title}"` : undefined, r.moderatorKey ? 'moderated' : undefined, r.mode === 'chat' ? 'chat' : undefined, `created ${r.created.slice(0, 10)}`]
        const line = parts.filter(Boolean).join(', ')
        return shareLinks ? `${line}: ${participantLink(r)}` : line
      })
      return text(lines.join('\n'), { rooms: rooms.map(summary) })
    },

    async get_room_link(args) {
      const room = await roomArg(args)
      if (!shareLinks)
        throw new ToolError('The user keeps links out of the assistant. Use copy_room_link to put the participant link on their clipboard.')
      const link = participantLink(room)
      return text(link, { room: room.room, participantLink: link })
    },

    async open_room(args) {
      const room = await roomArg(args)
      const as = oneOf(args, 'as', ['moderator', 'participant'] as const) ?? (room.moderatorKey ? 'moderator' : 'participant')
      if (as === 'moderator' && !room.moderatorKey)
        throw new ToolError(`"${room.room}" is not moderated; open it as participant.`)
      await system.openUrl(as === 'moderator' ? moderatorLink(room) : participantLink(room))
      return text(`Opened "${room.room}" in the browser as ${as}.`)
    },

    async copy_room_link(args) {
      const room = await roomArg(args)
      const as = oneOf(args, 'as', ['moderator', 'participant'] as const) ?? 'participant'
      if (as === 'moderator' && !room.moderatorKey)
        throw new ToolError(`"${room.room}" is not moderated and has no moderator link.`)
      await system.copyText(as === 'moderator' ? moderatorLink(room) : participantLink(room))
      return text(as === 'moderator'
        ? `The moderator link of "${room.room}" is on the clipboard. It gives full control of the room: only for the user or a co-moderator.`
        : `The participant link of "${room.room}" is on the clipboard.`)
    },

    async forget_room(args) {
      const room = await roomArg(args)
      await store.remove(room.room)
      return text(`Forgot "${room.room}" on this computer. Its links keep working for whoever has them.`)
    },
  }

  return {
    definitions: TOOL_DEFINITIONS,

    async call(name: string, args: unknown): Promise<ToolResult> {
      const handler = handlers[name]
      if (!handler)
        return { content: [{ type: 'text', text: `Unknown tool "${name}"` }], isError: true }
      if (args != null && (typeof args !== 'object' || Array.isArray(args)))
        return { content: [{ type: 'text', text: 'Arguments must be an object' }], isError: true }
      try {
        return await handler((args ?? {}) as Record<string, unknown>)
      }
      catch (err) {
        const message = err instanceof ToolError
          ? err.message
          : `Failed: ${err instanceof Error ? err.message : String(err)}`
        return { content: [{ type: 'text', text: message }], isError: true }
      }
    },
  }
}

export type Tools = ReturnType<typeof createTools>
