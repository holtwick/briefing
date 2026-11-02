# Briefing for Moodle (`mod_briefing`)

An activity that puts a Briefing video room into a course. Teachers add it like any other activity; everybody in the course joins with one click from the activity page.

- **Moderated rooms** (default): teachers (`mod/briefing:moderate`) open the room with the moderator link and give roles, mute and remove participants in Briefing. Students (`mod/briefing:join`) join as participants.
- **Link for guests**: teachers see the participant link to hand to people outside the course.
- **New room**: the activity settings replace the room, e.g. for a new term; old links stop leading into it.
- **Instance**: Site administration > Plugins > Activity modules > Briefing. Default `https://brie.fi/ng/`, or the URL of an own Briefing installation including its room path.

The plugin stores per activity only the room name, secret and moderator key, and talks to no Briefing server; the link opens in the user's browser. How and why: [../README.md](../README.md).

## Install

Copy the folder `briefing/` to `<moodle>/mod/briefing` (or zip it as `briefing.zip` and upload it under Site administration > Plugins > Install plugins), then finish the upgrade. Requires Moodle 4.1 or newer and PHP's `openssl` extension.

## Tests

`tests/link_test.php` is a regular Moodle PHPUnit test (`vendor/bin/phpunit --filter mod_briefing`). Without a Moodle: `php ../tests/link_check.php`.

## Not yet

- Backup and restore (`FEATURE_BACKUP_MOODLE2`); a restored course needs the activity added again.
- Group mode (one room per course group).
- Personal tickets with confirmed names and an attendance list, see [../README.md](../README.md#next-personal-tickets).

License: GPL-3.0-or-later, like Moodle.
