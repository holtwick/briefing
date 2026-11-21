# Briefing for Moodle - maintainer notes

The plugin itself lives in [briefing/](briefing/README.md); its README goes into the zip. The source is public as part of the Briefing repo ([holtwick/briefing](https://github.com/holtwick/briefing/tree/master/integrations/moodle/briefing), mirrored by `../publish.sh`); there is no repo of its own, Moodle Marketplace checks every upload itself. How the links work and why: [../README.md](../README.md).

## Translations

The plugin ships English only, as the old Moodle plugins directory required (still to be checked for Moodle Marketplace, which replaced it in July 2026). Other languages go through [AMOS](https://lang.moodle.org) once the plugin is approved: [translations/de/briefing.php](translations/de/briefing.php) holds the German strings to enter there. A new or changed string in `briefing/lang/en/briefing.php` gets its German line there in the same change.

## Release

1. Raise `$plugin->version` (date + 2 digits) and `$plugin->release` in `briefing/version.php`.
2. `release.sh` packs `dist/mod_briefing-<release>.zip` (`../publish.sh` calls it too, along with mirroring the source into the public Briefing repo; commit and push there).
3. First release: on [Moodle Marketplace](https://marketplace.moodle.com/) (replaced the read-only plugins directory on 2026-07-20; sign up at <https://login.moodle.org/if/flow/default-enrollment-flow/>), "Submit a plugin", listing type free, upload the zip, add details, documentation, setup instructions and screenshots, source URL `https://github.com/holtwick/briefing/tree/master/integrations/moodle/briefing`, bug tracker `https://github.com/holtwick/briefing/issues` and the supported Moodle versions. The Marketplace runs archive validation and moodle-plugin-ci itself (it requires `db/upgrade.php` even without upgrade steps), then the plugin goes into the review queue (a Jira Service Management ticket). Steps per the [Plugins FAQ](https://docs.moodle.org/500/en/Plugins_FAQ).

## Before the first submission

- [x] 2026-11-21 Run it on a live Moodle (4.5 on the test instance, `infra/stacks/moodle`; 4.1 only in CI): add the activity as teacher and student, moderator and participant link, guest link, new room, duplicate, course backup and restore.
- [ ] Archive validation and moodle-plugin-ci green on the Marketplace upload.

## Screenshots

PNGs of 1600x900 in [screenshots/](screenshots/), outside `briefing/` so they stay out of the zip (the Marketplace only limits files to 10 MB):

- `1-hero.png`: title image, the Nextcloud one with Moodle wording, rendered from [hero.html](screenshots/hero.html) by `node screenshots/shot.cjs` (needs the briefing app's Playwright installed).
- `2-call.png`: the moderated room with demo participants, a copy of the Nextcloud shot (how it is made: [../nextcloud/README.md](../nextcloud/README.md#screenshots)). Rerender `1-hero.png` when it changes, it embeds it.
- `3-activity.png` and `4-settings.png`: the activity page as teacher and the site setting on the test Moodle, taken by hand and scaled to 1600x900.
