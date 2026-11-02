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
 * Library of mod_briefing: the activity callbacks.
 *
 * @package    mod_briefing
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

use mod_briefing\local\link;

defined('MOODLE_INTERNAL') || die();

/**
 * Features of the activity.
 *
 * @param string $feature FEATURE_xx constant
 * @return mixed
 */
function briefing_supports($feature) {
    if (defined('FEATURE_MOD_PURPOSE') && $feature === FEATURE_MOD_PURPOSE) {
        return MOD_PURPOSE_COMMUNICATION;
    }
    switch ($feature) {
        case FEATURE_MOD_INTRO:
        case FEATURE_SHOW_DESCRIPTION:
        case FEATURE_COMPLETION_TRACKS_VIEWS:
            return true;
        case FEATURE_BACKUP_MOODLE2:
        case FEATURE_GRADE_HAS_GRADE:
        case FEATURE_GROUPS:
            return false;
        default:
            return null;
    }
}

/**
 * Give $data a new room: name, secret and, if moderated, a moderator key.
 *
 * @param stdClass $data
 */
function briefing_new_room(stdClass $data): void {
    $data->room = link::room_name($data->name);
    if (!empty($data->moderated)) {
        $key = link::new_moderator_key();
        $data->moderatorkey = $key['key'];
        $data->secret = link::new_secret($key['hash']);
    } else {
        $data->moderatorkey = null;
        $data->secret = link::new_secret();
    }
}

/**
 * Create an activity.
 *
 * @param stdClass $data from mod_form
 * @param mod_briefing_mod_form|null $mform
 * @return int new instance id
 */
function briefing_add_instance(stdClass $data, $mform = null): int {
    global $DB;
    $data->moderated = empty($data->moderated) ? 0 : 1;
    $data->roommode = ($data->roommode ?? 'video') === 'chat' ? 'chat' : 'video';
    briefing_new_room($data);
    $data->timecreated = $data->timemodified = time();
    return $DB->insert_record('briefing', $data);
}

/**
 * Update an activity. A new room only on request or when moderation changes,
 * since every stored link points to the old one.
 *
 * @param stdClass $data from mod_form
 * @param mod_briefing_mod_form|null $mform
 * @return bool
 */
function briefing_update_instance(stdClass $data, $mform = null): bool {
    global $DB;
    $data->id = $data->instance;
    $old = $DB->get_record('briefing', ['id' => $data->id], '*', MUST_EXIST);
    $data->moderated = empty($data->moderated) ? 0 : 1;
    $data->roommode = ($data->roommode ?? 'video') === 'chat' ? 'chat' : 'video';
    if (!empty($data->newroom) || (int) $old->moderated !== $data->moderated) {
        briefing_new_room($data);
    } else {
        $data->room = $old->room;
        $data->secret = $old->secret;
        $data->moderatorkey = $old->moderatorkey;
    }
    $data->timemodified = time();
    return $DB->update_record('briefing', $data);
}

/**
 * Delete an activity.
 *
 * @param int $id instance id
 * @return bool
 */
function briefing_delete_instance($id): bool {
    global $DB;
    if (!$DB->record_exists('briefing', ['id' => $id])) {
        return false;
    }
    $DB->delete_records('briefing', ['id' => $id]);
    return true;
}
