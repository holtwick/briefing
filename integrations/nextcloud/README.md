# Briefing for Nextcloud (app `briefing`)

Briefing video rooms in Nextcloud: an entry in the app menu lists one's rooms and those shared with one's groups.

- **Create a room** with a name, optionally shared with one of one's groups, moderated by default, as video call or chat.
- **The owner** opens a moderated room as moderator and copies the link for guests; **group members** see the room in their list and join as participants.
- **Instance**: Administration settings > Additional settings > Briefing. Empty means `https://brie.fi/ng/`; otherwise the URL of an own Briefing installation including its room path. The setting points to `https://group.brie.fi/` for larger groups (every room through a media server, `GROUP_INSTANCE`).
- Rooms of a deleted user are deleted with them.

The app stores per room only name, owner, group and the link parts (room name, secret, moderator key), and talks to no Briefing server; the link opens in the user's browser. Links carry `?ref=nextcloud`, so Briefing's statistics can count joins through Nextcloud per day. How and why: [../README.md](../README.md).

## Install

Copy the folder `briefing/` to `<nextcloud>/apps/briefing` (or `custom_apps/`), then `occ app:enable briefing`. Requires Nextcloud 30-35, PHP 8.1+ with `openssl`. No build step: plain PHP templates, one small script and a stylesheet.

## App store release

Published on [apps.nextcloud.com](https://apps.nextcloud.com) as app id `briefing` ([developer docs](https://nextcloudappstore.readthedocs.io/en/latest/developer.html)). Certificate and key live outside the repo in `~/.nextcloud/certificates/briefing.{key,crt}`; the key signs every release and cannot be replaced without revoking the certificate.

1. Raise `<version>` in `briefing/appinfo/info.xml` and add the matching `## <version>` section to `briefing/CHANGELOG.md` (Keep a Changelog; the store reads it). Keep `<nextcloud max-version>` at the newest Nextcloud the app was tried on (see "New Nextcloud version").
2. `pnpm briefing:integrations:publish` (`../publish.sh`) runs `./release.sh`, which writes `dist/briefing-<version>.tar.gz` (single top folder `briefing/`, no `.git`) and signs it (another key path: `BRIEFING_NEXTCLOUD_KEY`). It then copies `integrations/` into the public checkout of holtwick/briefing (`BRIEFING_PUBLIC_REPO`, default `~/work/github-briefing`), with the archive under `nextcloud/releases/` and the screenshots, without the screenshot tooling. It commits and pushes nothing.
3. In that checkout commit and push to `master`, then add the release at https://apps.nextcloud.com/developer/apps/releases/new with the download URL and signature the script printed (`https://raw.githubusercontent.com/holtwick/briefing/master/integrations/nextcloud/releases/briefing-<version>.tar.gz`).

### Status (2026-11-17)

- [x] `info.xml` store-ready (SPDX license, author, bug tracker, Nextcloud 30-34, store description in English and German), validates against `info.xsd`.
- [x] App `CHANGELOG.md`, release script.
- [x] CSR (`CN=briefing`) submitted as pull request to nextcloud/app-certificate-requests.
- [x] Certificate received (PR merged 2026-11-05), saved as `~/.nextcloud/certificates/briefing.crt`.
- [x] App registered at https://apps.nextcloud.com/developer/apps/new.
- [x] Screenshots, see below (no shot of the admin setting: one field, the description covers it).
- [x] 0.1.0 released with screenshots on about.brie.fi; the store showed none ("File not found" from its image cache `usercontent.apps.nextcloud.com`, which fetches screenshots only when it reads a release).
- [x] 1.0.0: screenshots and archive from raw.githubusercontent.com (via `publish.sh`), links to the project site with `?ref=nextcloud`.
- [ ] Optional: `<repository>` once the source is public.
- [ ] Release 1.0.0: `pnpm briefing:integrations:publish`, push, add at releases/new; check the screenshots on https://apps.nextcloud.com/apps/briefing.

One-time setup, done once per app id: CSR (`CN=briefing`) as a pull request to [nextcloud/app-certificate-requests](https://github.com/nextcloud/app-certificate-requests), then register the app at https://apps.nextcloud.com/developer/apps/new with the returned certificate and the signature `echo -n "briefing" | openssl dgst -sha512 -sign ~/.nextcloud/certificates/briefing.key | openssl base64`.

### Screenshots

PNGs of 1600x900 in [screenshots/](screenshots/), outside `briefing/` so they stay out of the release archive:

- `1-hero.png`: title image in the look of Briefing's share previews, rendered from [hero.html](screenshots/hero.html) by `node screenshots/shot.cjs --hero`. The claim stands apart from the faces: the demo photos are under the Unsplash License, which needs no credit but forbids making the people shown appear to endorse anything - no quotes, no speech bubbles.
- `2-call.png` (and `2-call-moderator.png` with the people list): a moderated room with six demo participants. Start a dev server with the demo plugin (`APP__PLUGINS_ON=demo pnpm --filter @briefing/app test:e2e:server`), then `SWAP=02=09:Ingrid TAB=none node screenshots/shot.cjs` (without `TAB=none` the sidebar opens on the people list). The own camera is the demo photo `08` (Sophie), `SWAP` puts photo `09` in place of `02` for this shot only, since the two look alike. Rerender `1-hero.png` afterwards, it embeds `2-call.png`.
- `3-nextcloud.png`: the room list in Nextcloud, taken by hand in Firefox's responsive design mode at 1200x675 with DPR 2 (below about 1024 px Nextcloud switches to its mobile layout) and scaled down with `sips -z 900 1600`.

### New Nextcloud version

The store lists the app only up to `<nextcloud max-version>`, and an instance upgraded past it disables the app until a release allows the new major. So with every Nextcloud major (about twice a year, announced months ahead):

1. `./smoke-test.sh <major>` runs the app on a throwaway `nextcloud:<major>` in Docker (SQLite, port 8099) with the limit raised inside the container: create, list and delete rooms, group sharing, `?ref=nextcloud` on the links, the admin setting, no page errors, rooms going with a deleted user, no warnings in `nextcloud.log` (deprecations show up there). It removes the container afterwards (`KEEP=1` leaves it for a look, admin / admin-smoke-test). Browser part: `smoke-test.cjs`, Playwright from Briefing's app.
2. All green: raise `max-version`, add a line to `briefing/CHANGELOG.md`, release as above.

Last run: Nextcloud 35.0.3 on 2026-11-17.

## Tests

`php ../tests/link_check.php` checks the link code (shared with the Moodle plugin).

## Not yet

- Sharing with single users and several groups, more moderators per room.
- Links in calendar events and Talk conversations.
- Personal tickets with confirmed names and an attendance list, see [../README.md](../README.md#next-personal-tickets).

License: AGPL-3.0-or-later, like Nextcloud.
