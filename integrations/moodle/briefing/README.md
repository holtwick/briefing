# Briefing for Moodle (`mod_briefing`)

An activity that puts a [Briefing](https://brie.fi/ng/) video room into a course. Teachers add it like any other activity; everybody in the course joins with one click from the activity page. Audio, video, chat and files are end-to-end encrypted and go directly between the participants; nothing is recorded.

- **Moderated rooms** (default): teachers (`mod/briefing:moderate`) open the room with the moderator link and give roles, mute and remove participants in Briefing. Students (`mod/briefing:join`) join as participants.
- **Link for guests**: teachers see the participant link to hand to people outside the course.
- **New room**: the activity settings replace the room, e.g. for a new term; old links stop leading into it.
- **Backup, restore, duplicate**: the settings are kept, the room is not. A restored, copied or duplicated activity always gets a new room, so a backup file never carries a moderator key.
- **Instance**: Site administration > Plugins > Activity modules > Briefing. Default `https://brie.fi/ng/`, `https://group.brie.fi/` for larger groups (every room through a media server), or the URL of an own Briefing installation including its room path.

## Privacy

The plugin stores per activity only the room name, secret and moderator key, and talks to no Briefing server. Joining opens the room in the user's own browser; the secret and the key travel in the URL fragment, which browsers never send to a server. How the links are built: [Briefing integrations](https://github.com/holtwick/briefing/tree/master/integrations).

## Install

From [Moodle Marketplace](https://marketplace.moodle.com/), or copy this folder to `<moodle>/mod/briefing` and finish the upgrade under Site administration > Notifications. Requires Moodle 4.1 or newer and PHP's `openssl` extension.

## Tests

`vendor/bin/phpunit --testsuite mod_briefing_testsuite` in a Moodle with PHPUnit set up. Moodle Marketplace runs Moodle's own checks (moodle-plugin-ci) on every upload.

## Not yet

- Group mode (one room per course group).
- Personal tickets with confirmed names and an attendance list.

License: GPL-3.0-or-later, like Moodle.
