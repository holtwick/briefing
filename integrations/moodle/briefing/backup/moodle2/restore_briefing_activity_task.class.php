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
 * Restore task of mod_briefing.
 *
 * @package    mod_briefing
 * @category   backup
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

require_once($CFG->dirroot . '/mod/briefing/backup/moodle2/restore_briefing_stepslib.php');

/**
 * Restores one Briefing activity with a new room.
 */
class restore_briefing_activity_task extends restore_activity_task {
    /**
     * No settings of its own.
     */
    protected function define_my_settings() {
    }

    /**
     * One structure step reading briefing.xml.
     */
    protected function define_my_steps() {
        $this->add_step(new restore_briefing_activity_structure_step('briefing_structure', 'briefing.xml'));
    }

    /**
     * Fields whose links are decoded.
     *
     * @return restore_decode_content[]
     */
    public static function define_decode_contents() {
        return [new restore_decode_content('briefing', ['intro'], 'briefing')];
    }

    /**
     * Rules for the links encoded by the backup task.
     *
     * @return restore_decode_rule[]
     */
    public static function define_decode_rules() {
        return [
            new restore_decode_rule('BRIEFINGVIEWBYID', '/mod/briefing/view.php?id=$1', 'course_module'),
            new restore_decode_rule('BRIEFINGINDEX', '/mod/briefing/index.php?id=$1', 'course'),
        ];
    }

    /**
     * Rules for legacy log entries of the activity.
     *
     * @return restore_log_rule[]
     */
    public static function define_restore_log_rules() {
        return [
            new restore_log_rule('briefing', 'add', 'view.php?id={course_module}', '{briefing}'),
            new restore_log_rule('briefing', 'update', 'view.php?id={course_module}', '{briefing}'),
            new restore_log_rule('briefing', 'view', 'view.php?id={course_module}', '{briefing}'),
        ];
    }

    /**
     * Rules for legacy log entries of the course.
     *
     * @return restore_log_rule[]
     */
    public static function define_restore_log_rules_for_course() {
        return [new restore_log_rule('briefing', 'view all', 'index.php?id={course}', null)];
    }
}
