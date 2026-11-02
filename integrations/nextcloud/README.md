# Briefing for Nextcloud (app `briefing`)

Briefing video rooms in Nextcloud: an entry in the app menu lists one's rooms and those shared with one's groups.

- **Create a room** with a name, optionally shared with one of one's groups, moderated by default, as video call or chat.
- **The owner** opens a moderated room as moderator and copies the link for guests; **group members** see the room in their list and join as participants.
- **Instance**: Administration settings > Additional settings > Briefing. Empty means `https://brie.fi/ng/`; otherwise the URL of an own Briefing installation including its room path.
- Rooms of a deleted user are deleted with them.

The app stores per room only name, owner, group and the link parts (room name, secret, moderator key), and talks to no Briefing server; the link opens in the user's browser. How and why: [../README.md](../README.md).

## Install

Copy the folder `briefing/` to `<nextcloud>/apps/briefing` (or `custom_apps/`), then `occ app:enable briefing`. Requires Nextcloud 30-34, PHP 8.1+ with `openssl`. No build step: plain PHP templates, one small script and a stylesheet.

## App store release

Published on [apps.nextcloud.com](https://apps.nextcloud.com) as app id `briefing` ([developer docs](https://nextcloudappstore.readthedocs.io/en/latest/developer.html)). Certificate and key live outside the repo in `~/.nextcloud/certificates/briefing.{key,crt}`; the key signs every release and cannot be replaced without revoking the certificate.

1. Raise `<version>` in `briefing/appinfo/info.xml` and add the matching `## <version>` section to `briefing/CHANGELOG.md` (Keep a Changelog; the store reads it). Keep `<nextcloud max-version>` at the newest Nextcloud the app was tried on.
2. `./release.sh` (in this folder) writes `dist/briefing-<version>.tar.gz` (single top folder `briefing/`, no `.git`) and prints the signature. Another key path: `BRIEFING_NEXTCLOUD_KEY`.
3. Put the archive on a public https URL and add the release at https://apps.nextcloud.com/developer/apps/releases/new with that URL and signature.

### Status (2026-11-01)

- [x] `info.xml` store-ready (SPDX license, author, bug tracker, Nextcloud 30-34, store description in English and German), validates against `info.xsd`.
- [x] App `CHANGELOG.md`, release script.
- [x] CSR (`CN=briefing`) submitted as pull request to nextcloud/app-certificate-requests.
- [ ] Wait for `briefing.crt` in that PR, save it as `~/.nextcloud/certificates/briefing.crt` (trim whitespace).
- [ ] Register the app at https://apps.nextcloud.com/developer/apps/new (certificate + id signature, command below).
- [ ] Screenshots: 2-3 PNGs, 16:9, about 1600x900, on a public https URL, then `<screenshot>` entries in `info.xml` after `<bugs>`, best first. Suggested: (1) the room list in Nextcloud with a few rooms and the create form, (2) a running Briefing call with the moderator view (`?demo=6` in the room URL fills the stage with sample people), (3) the admin setting for the instance.
- [ ] Optional: `<repository>` once the source is public.
- [ ] First release: `./release.sh`, archive as release asset on a public URL (e.g. GitHub holtwick/briefing), add it at releases/new.

One-time setup, done once per app id: CSR (`CN=briefing`) as a pull request to [nextcloud/app-certificate-requests](https://github.com/nextcloud/app-certificate-requests), then register the app at https://apps.nextcloud.com/developer/apps/new with the returned certificate and the signature `echo -n "briefing" | openssl dgst -sha512 -sign ~/.nextcloud/certificates/briefing.key | openssl base64`.

## Tests

`php ../tests/link_check.php` checks the link code (shared with the Moodle plugin).

## Not yet

- Sharing with single users and several groups, more moderators per room.
- Links in calendar events and Talk conversations.
- Personal tickets with confirmed names and an attendance list, see [../README.md](../README.md#next-personal-tickets).

License: AGPL-3.0-or-later, like Nextcloud.
