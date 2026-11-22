# Briefing for Claude and other AI assistants

An MCP server that lets Claude (or any assistant that speaks the [Model Context Protocol](https://modelcontextprotocol.io)) create end-to-end encrypted [Briefing](https://brie.fi) video rooms and put the invitation link into emails, calendar events or messages:

> Plan a call with Anna tomorrow at 10 and send her the link.

The assistant creates the room with this server and writes the invitation with the mail or calendar tools it already has. You join as moderator with one click, in your own browser.

## Privacy

A Briefing room exists only as its link, so whoever makes the link makes the room. This server makes it **on your computer**: nothing is registered anywhere, and the server talks to no Briefing server and to nobody else.

| What                      | Goes to the assistant (and its AI provider) | Stays on your computer |
| ------------------------- | ------------------------------------------- | ---------------------- |
| Participant link          | yes, for invitations - unless you switch it off | also |
| Moderator link (with key) | **never**                                   | yes, opened in your browser or put on your clipboard on request |
| Room title                | yes, you gave it to the assistant           | yes, never part of the link |

- The participant link is the one you would send to your guests anyway; with **Let Claude see the participant link** off (`BRIEFING_SHARE_LINKS=false`), links only go to your clipboard and your browser, and the assistant cannot write them into invitations.
- The moderator link is not part of any tool result. `open_room` hands it to your default browser, which stores the moderator key on first opening; `copy_room_link` with `as: "moderator"` puts it on the clipboard.
- Room names are random (`room-x3k9qa`). The title only helps you find the room again.
- The rooms live in `rooms.json`, readable by your user account only (`0600`): `~/Library/Application Support/briefing-mcp/` on macOS, `%APPDATA%\briefing-mcp\` on Windows, `$XDG_DATA_HOME/briefing-mcp/` (default `~/.local/share/briefing-mcp/`) on Linux, or `$BRIEFING_MCP_DATA`.
- Links carry `?ref=mcp`, which Briefing's server counts per day, never with a person ([privacy policy](https://brie.fi/ng/_privacy), section 3.10 and 7.1).

## Tools

| Tool             | Does                                                                     |
| ---------------- | ------------------------------------------------------------------------ |
| `create_room`    | New room: `title` (local only), `moderated` (default `true`), `mode` (`video` default, `chat`) |
| `list_rooms`     | The rooms made on this computer, newest first                            |
| `get_room_link`  | The participant link of a room                                           |
| `open_room`      | Opens the room in the default browser, as moderator by default           |
| `copy_room_link` | Participant (default) or moderator link to the clipboard                 |
| `forget_room`    | Removes a room from the list; its links keep working                     |

## Install

**Claude Desktop:** open `briefing-<version>.mcpb` (Settings > Extensions); the settings ask for the Briefing server (empty = `https://brie.fi/ng/`) and whether Claude may see the participant link.

**Claude Code and other clients** (Node 20+):

```sh
claude mcp add briefing -- npx -y briefing-video-chat-mcp
```

```json
{
  "mcpServers": {
    "briefing": {
      "command": "npx",
      "args": ["-y", "briefing-video-chat-mcp"],
      "env": { "BRIEFING_INSTANCE": "https://brie.fi/ng/" }
    }
  }
}
```

| Environment            | Default                    |                                                   |
| ---------------------- | -------------------------- | ------------------------------------------------- |
| `BRIEFING_INSTANCE`    | `https://brie.fi/ng/`      | Your own Briefing; https only (http for localhost) |
| `BRIEFING_SHARE_LINKS` | `true`                     | `false`: no link in any tool result               |
| `BRIEFING_MCP_DATA`    | platform app data folder   | Folder for `rooms.json`                           |

Moderated rooms need Briefing's `moderation` plugin (full edition, on brie.fi). On a basic edition the moderator link opens the room as a plain participant.

## Development

```sh
pnpm --filter briefing-video-chat-mcp test:unit
pnpm --filter briefing-video-chat-mcp build      # dist/index.mjs, one file, no runtime dependencies
pnpm --filter briefing-video-chat-mcp release    # dist/briefing-<version>.mcpb
npx @modelcontextprotocol/inspector node dist/index.mjs
```

- The link code is `briefing-sdk/src/runtime/room-link.ts`, shared with the moderation plugin and checked against the test vector of the [link format](../README.md#link-format); tsdown inlines it.
- MCP is implemented by hand in `src/server.ts` (stdio, JSON-RPC: `initialize`, `ping`, `tools/list`, `tools/call`), so the package has no runtime dependencies - easy to review for whoever installs it. stdout carries only the protocol; diagnostics go to stderr.
- Version: `package.json`, `manifest.json`, `server.json` (twice), `SERVER_INFO` in `src/server.ts`, and in `plugin/` the `version` in `.claude-plugin/plugin.json` and the pinned package in `.mcp.json`, all together (a test checks it).
- `plugin/` is the Claude plugin bundle for the Claude directory, which no longer takes `.mcpb` files: manifest, `.mcp.json` running `npx -y briefing-video-chat-mcp@<version>`, its own README (the listing text), LICENSE, icon and screenshot. Check it with `claude plugin validate ./plugin`; the warnings about `icon`, `documentationUrl`, `supportUrl` and `privacyPolicyUrl` come from older Claude Code versions, the directory reads these fields.
- npm name and command `briefing-video-chat-mcp`: `briefing-mcp` belongs to an unrelated news service. The data folder is still called `briefing-mcp`.

## Screenshots

PNGs of 1600x900 in [screenshots/](screenshots/), listed in `manifest.json` and packed into the `.mcpb`:

- `1-hero.png`: title image in the look of the Nextcloud and Moodle ones, with an example conversation (deliberately not the look of any one assistant app), rendered from [hero.html](screenshots/hero.html) by `node screenshots/shot.cjs` (needs the briefing app's Playwright installed).
- `2-call.png`: the moderated room with demo participants, a copy of the Nextcloud shot (how it is made: [../nextcloud/README.md](../nextcloud/README.md#screenshots)). Rerender `1-hero.png` when it changes, it embeds it.

## Release

Nothing here publishes by itself.

1. Bump the version in the places above, `pnpm --filter briefing-video-chat-mcp test:unit`.
2. `pnpm --filter briefing-video-chat-mcp release`, then `npx @anthropic-ai/mcpb validate manifest.json`; try the `.mcpb` in Claude Desktop.
3. npm (first time: remove `"private": true`): `pnpm --filter briefing-video-chat-mcp build`, `npm publish` from this folder.
4. [MCP Registry](https://registry.modelcontextprotocol.io), after npm, since it only holds `server.json` and checks `mcpName` in the published package: `mcp-publisher login github` (as holtwick, the name is `io.github.holtwick/briefing`), then `mcp-publisher publish` from this folder.
5. Claude directory, after npm and after the public repo has `integrations/mcp/plugin/` (`pnpm briefing:integrations:publish`, push): in the [developer portal](https://claude.ai/directory/manage) "Submit new", "Plugin bundle", repository `holtwick/briefing`, folder `integrations/mcp/plugin`, "Validate", then submit. The pinned `npx` package is always held for a person to review. Later versions: bump, publish to npm, push; the directory picks up the commit. The `.mcpb` stays for installing by hand in Claude Desktop.
6. Smithery and Glama; check each one's current requirements first.

## License

MIT, see [LICENSE](LICENSE).
