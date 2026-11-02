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
 * The page of a Briefing activity: a button into the room.
 *
 * @package    mod_briefing
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require(__DIR__ . '/../../config.php');
require_once($CFG->libdir . '/completionlib.php');

use mod_briefing\local\link;

$id = required_param('id', PARAM_INT);
$cm = get_coursemodule_from_id('briefing', $id, 0, false, MUST_EXIST);
$course = $DB->get_record('course', ['id' => $cm->course], '*', MUST_EXIST);
$briefing = $DB->get_record('briefing', ['id' => $cm->instance], '*', MUST_EXIST);

require_login($course, true, $cm);
$context = context_module::instance($cm->id);
require_capability('mod/briefing:join', $context);

$event = \mod_briefing\event\course_module_viewed::create([
    'objectid' => $briefing->id,
    'context' => $context,
]);
$event->add_record_snapshot('course', $course);
$event->add_record_snapshot('briefing', $briefing);
$event->trigger();
(new completion_info($course))->set_module_viewed($cm);

$PAGE->set_url('/mod/briefing/view.php', ['id' => $cm->id]);
$PAGE->set_title(format_string($briefing->name));
$PAGE->set_heading(format_string($course->fullname));
$PAGE->set_context($context);

$instance = link::instance(get_config('mod_briefing', 'instance'));
$moderator = !empty($briefing->moderatorkey) && has_capability('mod/briefing:moderate', $context);
$participanturl = link::url($instance, $briefing->room, $briefing->secret, null, $briefing->roommode);
$joinurl = $moderator
    ? link::url($instance, $briefing->room, $briefing->secret, $briefing->moderatorkey, $briefing->roommode)
    : $participanturl;

echo $OUTPUT->header();

// The fragment holds the room secret; it is never sent to any server, so the link can open in a new tab as it is.
echo html_writer::div(
    html_writer::link($joinurl, get_string($moderator ? 'joinasmoderator' : 'join', 'mod_briefing'), [
        'class' => 'btn btn-primary',
        'target' => '_blank',
        'rel' => 'noopener noreferrer',
    ]),
    'mb-3'
);

if ($moderator) {
    echo $OUTPUT->notification(get_string('moderatorhint', 'mod_briefing'), \core\output\notification::NOTIFY_INFO, false);
}

if (has_capability('mod/briefing:moderate', $context)) {
    echo html_writer::tag('h3', get_string('guestlink', 'mod_briefing'), ['class' => 'h5 mt-4']);
    echo html_writer::tag('p', get_string('guestlink_desc', 'mod_briefing'));
    echo html_writer::empty_tag('input', [
        'type' => 'text',
        'readonly' => 'readonly',
        'class' => 'form-control',
        'value' => $participanturl,
        'aria-label' => get_string('guestlink', 'mod_briefing'),
    ]);
}

echo $OUTPUT->footer();
