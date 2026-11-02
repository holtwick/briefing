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
 * List of the Briefing activities in a course.
 *
 * @package    mod_briefing
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require(__DIR__ . '/../../config.php');

$id = required_param('id', PARAM_INT);
$course = $DB->get_record('course', ['id' => $id], '*', MUST_EXIST);
require_course_login($course);

$context = context_course::instance($course->id);
\mod_briefing\event\course_module_instance_list_viewed::create(['context' => $context])->trigger();

$PAGE->set_url('/mod/briefing/index.php', ['id' => $id]);
$PAGE->set_title(format_string($course->shortname) . ': ' . get_string('modulenameplural', 'mod_briefing'));
$PAGE->set_heading(format_string($course->fullname));
$PAGE->set_pagelayout('incourse');

echo $OUTPUT->header();
echo $OUTPUT->heading(get_string('modulenameplural', 'mod_briefing'));

$briefings = get_all_instances_in_course('briefing', $course);
if (!$briefings) {
    notice(get_string('thereareno', 'moodle', get_string('modulenameplural', 'mod_briefing')),
        new moodle_url('/course/view.php', ['id' => $course->id]));
}

$table = new html_table();
$table->head = [get_string('name')];
foreach ($briefings as $briefing) {
    $url = new moodle_url('/mod/briefing/view.php', ['id' => $briefing->coursemodule]);
    $attributes = $briefing->visible ? [] : ['class' => 'dimmed'];
    $table->data[] = [html_writer::link($url, format_string($briefing->name), $attributes)];
}
echo html_writer::table($table);
echo $OUTPUT->footer();
