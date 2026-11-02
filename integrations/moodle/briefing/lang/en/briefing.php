<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * English strings of mod_briefing.
 *
 * @package    mod_briefing
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['briefing:addinstance'] = 'Add a Briefing video room';
$string['briefing:join'] = 'Join the Briefing video room';
$string['briefing:moderate'] = 'Moderate the Briefing video room';
$string['guestlink'] = 'Link for guests';
$string['guestlink_desc'] = 'People without an account in this course join with this link. It lets them in as participants, never as moderators. Anybody who has it can enter, so share it only with those you invite.';
$string['instance'] = 'Briefing instance';
$string['instance_desc'] = 'URL of the Briefing installation the rooms open on, including its room path, for example https://brie.fi/ng/ (the official instance) or https://meet.example.org/ for your own. Rooms already created keep working only on the instance they were made for.';
$string['join'] = 'Join the room';
$string['joinasmoderator'] = 'Join the room as moderator';
$string['moderated'] = 'Moderated room';
$string['moderated_help'] = 'In a moderated room, teachers are moderators: they give roles, mute participants and remove them. Everybody else joins as a participant. Changing this setting later makes a new room.';
$string['moderatorhint'] = 'You open the room as moderator. Your link contains the moderator key - do not share it; use the link for guests below instead.';
$string['modulename'] = 'Briefing';
$string['modulename_help'] = 'A Briefing video room for the course. Audio, video, chat and files are end-to-end encrypted and go directly between the participants; nothing is recorded or stored on a server. Participants join with one click from this page, without an extra account or installation.';
$string['modulenameplural'] = 'Briefing rooms';
$string['newroom'] = 'Make a new room';
$string['newroom_help'] = 'Replaces the room with a new one, for example for a new term. The old links, including the link for guests, stop leading into it.';
$string['pluginadministration'] = 'Briefing administration';
$string['pluginname'] = 'Briefing';
$string['privacy:metadata'] = 'The Briefing activity stores no personal data. It keeps only the room name, the room secret and the moderator key of each activity, and sends nothing about users to the Briefing instance.';
$string['room'] = 'Room';
$string['roommode'] = 'Start as';
$string['roommode_chat'] = 'Chat (camera and microphone can be switched on later)';
$string['roommode_video'] = 'Video call';
