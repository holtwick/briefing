# Briefing as a Matrix widget

Shows a Briefing room inside a Matrix room, in Element Web and Element Desktop: the call opens in the room's side panel, next to the chat, without leaving the Matrix client. There is no code to install. A Matrix widget is an address that the client shows in a frame, and a Briefing room is an address, so the widget is just the room link.

This is not Element Call and does not talk to it: the call runs on Briefing (direct or over its LiveKit media server), with Briefing's own end-to-end encryption, and guests without a Matrix account can join with the same link in their browser.

## Instance setting

Briefing refuses to be shown in frames of other sites (`frame-ancestors 'self'`). The instance has to allow the Matrix clients its users run, in plugin `http`:

```sh
HTTP__FRAME_ANCESTORS="https://app.element.io vector://vector"
```

- `https://app.element.io` is Element Web hosted by Element, add the address of every self-hosted Element Web (`https://chat.example.org`, or `https://*.example.org` for all subdomains).
- `vector://vector` is Element Desktop.
- Only origins are taken; a bare scheme (`https:`) or `*` is refused and logged, it would let every site frame Briefing.

Every site on that list can put a Briefing room under its own page, so list only the clients whose users the instance serves.

## Adding the widget

1. Create a room in Briefing and copy the **participant link** (the invitation link), never the moderator link.
2. Optional: insert `?ref=matrix` before the `#`, so the instance's statistics count the joins under "Matrix": `https://brie.fi/ng/team-weekly?ref=matrix#3vQ...`
3. In the Matrix room send `/addwidget <link>`. Adding widgets needs the power level for widgets (moderators by default).
4. Members open it from the room info (Extensions). Element asks each member once whether to allow the widget, then the browser asks for camera and microphone as usual.

To end it, remove the widget in the room info. To give the room a new secret, remove it and add a widget with a new Briefing room.

## Privacy

The widget is a state event of the Matrix room (`im.vector.modular.widgets`). **State events are not end-to-end encrypted, also not in encrypted rooms.** So the link, including the room secret, is readable by:

- every member of the Matrix room, also everybody who joins later, and a member who leaves keeps it;
- the homeserver of every member (federation), and it stays in the room's state history for good, also after the widget is removed.

This follows the trust decision of the other integrations (the platform holds the secret, see [../README.md](../README.md#how-it-works)), but the platform here is every homeserver in the room, not one operator. For rooms with members on foreign homeservers, or for calls the homeservers must not be able to enter, share the link in an encrypted message instead.

Never put a moderator link in a widget: every member of the Matrix room would get the moderator key, and it would sit unencrypted in the room state.

## Moderated rooms

The widget can be the participant link of a moderated room. Moderators open their moderator link in a browser tab of their own, not in the widget: in a frame the browser keeps storage apart per embedding site, so the moderator key that Briefing keeps for brie.fi is not available inside Element.

## Limits

- **Element X** (the new mobile apps) shows no custom widgets. There members open the link in the browser.
- **Transcripts** run on one thread in the widget: a frame is never cross-origin isolated unless the Matrix client is too, which Element is not.
- **Names** are not taken from Matrix, each member enters a name in Briefing once (kept per browser, inside the widget separately from a brie.fi tab).
- **What the server sees:** Element adds `widgetId` and `parentUrl` (the address of the Element client without its fragment) to the query of the widget address. Briefing ignores both; like every query they reach the server with the page request, the secret in the fragment does not.

## Why not join Element Call calls

Element Call (MatrixRTC) gives every participant a Matrix identity and distributes the media keys over Matrix to-device messages. Taking part in its calls would mean a Matrix account for everybody and Briefing's keys going through homeservers - against Briefing's principle that a room needs no account and that the server never learns anything about the call. The widget brings Briefing into Matrix without that.
