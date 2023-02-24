# User Interface Configuration 

All settings are **optional**! By default standard values are used.

Environment variables can be set on build or runtime, e.g. by using [.env](../.env) files. But then these need to be prefixed by `BRIEFING_`. So for example `ROOM_PATH` becomes `BRIEIFING_ROOM_PATH`.

If used in a [static website](installation/website.md) these values go into the `briefing-config.js` file.

### Rooms

- `ROOM_URL`: URL used in the share dialog. Default is the current location. Example: `https://example.com/room/`
- `ROOM_PATH`: The path to prefix the room names, default is `/`. Example: `/room/`
- `ROOM_DOMAIN`: If you use the public signaling server, you can choose a unique domain to not get in conflict with brie.fi/ng's rooms. By default the hostname is used here.

### Server Bindings

By default Briefing comes with STUN build in. But if also TURN is required, the installation of [coturn.md](installation/coturn.md) is recommended.

- `SIGNAL_URL`: Signal server, default is the same as the web site URL. Example: `wss://example.com`
- `STUN_URL`: TURN server to be used. Please set up your own, if you expect heavy traffic.  Example: `stun:turn01.brie.fi:5349` 
- `TURN_URL`: STUN server to be used. Please set up your own, if you expect heavy traffic. See [coturn.md](installation/coturn.md). Example: `turn:turn01.brie.fi:5349`
- `TURN_USER`: Username
- `TURN_PASSWORD`: Password

### UI Defaults

Boolean values may be set as `0` or `1`

- `MUTE_VIDEO`: Start with video off.
- `MUTE_AUDIO`: Start with audio muted.
- `SHOW_FULLSCREEN`: Show fullscreen button.
- `SHOW_INVITATION`: Show invitation button.
- `SHOW_INVITATION_HINT`: Show invitation hint if only one peer is in the room.
- `SHOW_SETTINGS`: Show settings button.
- `SHOW_SHARE`: Show share button.
- `SHOW_CHAT`: Show chat button.

### Debugging

- `DEFAULT_ROOM`: For development it is nice to always have a static room name preset, otherwise it is randomly generated.
- `SENTRY_DSN`: Lazy error message handling using a <sentry.io> service. Enter your projects DSN here.