# Briefing integrations

Plugins that bring Briefing rooms into platforms that already know their users:

| Folder                     | Platform                         | License    | Status      |
| -------------------------- | -------------------------------- | ---------- | ----------- |
| [moodle/](moodle/)         | Moodle 4.1+, activity `mod_briefing` | GPL-3.0+ | first version, untested on a live Moodle |
| [nextcloud/](nextcloud/)   | Nextcloud 30-34, app `briefing`  | AGPL-3.0+  | runs on Nextcloud 34, app store submission under way |

Both work with the official instance (`https://brie.fi/ng/`, the default) and with any self-hosted one: the operator of the platform enters the instance URL once in the admin settings, so an organization can run its own Briefing and its own Moodle/Nextcloud together.

The licenses are those of the host platforms (a Moodle plugin runs inside Moodle, a Nextcloud app inside Nextcloud). They cover only these plugins. Briefing itself is only opened by URL and is not affected.

## How it works

A Briefing room exists only as a link; there is no API to create one. The plugins therefore talk to no Briefing server at all - they make links:

1. On creation the plugin generates a room name, a random secret and, for a moderated room, an ECDSA P-256 moderator key whose hash is bound into the secret. All three are stored in the platform's database.
2. People with the moderator right (Moodle: teachers, Nextcloud: the owner) open the **moderator link**, everybody else the **participant link**.
3. Briefing's server learns nothing new: the secret and the key travel in the URL fragment, which browsers never send.

Trust moves to the operator of the platform, who holds secret and key - the same trust its users already place in it for everything else (grades, files, messages). This is a deliberate decision (2026-10-31): Briefing's principles describe its core, an integration is a use case on top.

## Link format

This is a public interface. Changing it breaks every link the plugins have stored.

```text
<instance><room>#<secret>[&mk=<moderator key>][&m=chat]
```

- `instance`: base URL including the room path, ending in `/` (Briefing's `APP__ROOM_PATH`, default `/`), e.g. `https://brie.fi/ng/` or `https://meet.example.org/room/`. `https` only, `http` only for `localhost`.
- `room`: the room name, URL-encoded, must not start with `_`.
- `secret`: URL-encoded. Generated as 16 random bytes in base64url (no padding). A moderated room appends `.m<key hash>`.
- `key hash`: `base64url(SHA-256("briefing:moderation:1\nkey\n" || publicRaw))`, first 22 characters, where `publicRaw` is the uncompressed P-256 public key (`0x04 || x || y`, 65 bytes).
- `moderator key`: `base64url(d || x || y)`, each 32 bytes big-endian (128 characters). Only in the moderator link; Briefing takes it out of the address bar at once and keeps it in the browser.
- `&m=chat`: room starts as chat only; nothing for a video room.

Reference implementation: Briefing's moderation plugin and its room link parser. Test vector (also pinned in Briefing's own tests and in both plugins' tests; public, never use it as a real moderator key):

```text
moderator key  SLaNNwTPbOAkKY-TL8w6HNSnLyEz78RoIiL6010LHrw97VIoYS-GsviTnB9XqRP8_H9vx2Vy0Gf5Q_J4HXUlGmSBu5IIbwK9fFY7rDN9JnMXmg5YkUuUKVO_868J-l6i
key hash       Ltx21BCggP2KiOZAsv4RFs
```

The PHP code lives twice, as `classes/local/link.php` (Moodle) and `lib/Service/BriefingLink.php` (Nextcloud), because each plugin ships on its own. Keep both in step.

## Next: personal tickets

Planned, needs support in Briefing first (a new signed message type next to the role grants in `moderation`): when a signed-in user clicks "Join", the plugin signs a short-lived ticket `{ room, uid, name, role, iat, exp }` with the moderator key and appends it as `&t=<ticket>`. Briefing checks it against the key hash in the secret, locks the name, takes the role from the course or group, and the moderator's attendance list records the confirmed identity.

## Tests

`php tests/link_check.php` from this folder (needs PHP with `openssl`, no Moodle or Nextcloud; without a local PHP: `docker run --rm -v "$PWD":/w -w /w php:8.3-cli php tests/link_check.php`) checks the test vector, that both copies make the same links, and prints a moderator and a participant link to try by hand. The Moodle plugin also has a regular PHPUnit test. The Nextcloud app runs on a live Nextcloud 34; the Moodle plugin has not run on a live Moodle yet.
