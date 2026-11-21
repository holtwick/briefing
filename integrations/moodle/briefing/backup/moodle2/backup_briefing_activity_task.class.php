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
 * Backup task of mod_briefing.
 *
 * @package    mod_briefing
 * @category   backup
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

require_once($CFG->dirroot . '/mod/briefing/backup/moodle2/backup_briefing_stepslib.php');

/**
 * Backs up one Briefing activity: its settings, never its room.
 */
class backup_briefing_activity_task extends backup_activity_task {
    /**
     * No settings of its own.
     */
    protected function define_my_settings() {
    }

    /**
     * One structure step writing briefing.xml.
     */
    protected function define_my_steps() {
        $this->add_step(new backup_briefing_activity_structure_step('briefing_structure', 'briefing.xml'));
    }

    /**
     * Encode links to the activity so restore can point them at the new course.
     *
     * @param string $content
     * @return string
     */
    public static function encode_content_links($content) {
        global $CFG;
        $base = preg_quote($CFG->wwwroot, '/');
        $content = preg_replace('/(' . $base . '\/mod\/briefing\/index.php\?id\=)([0-9]+)/', '$@BRIEFINGINDEX*$2@$', $content);
        $content = preg_replace('/(' . $base . '\/mod\/briefing\/view.php\?id\=)([0-9]+)/', '$@BRIEFINGVIEWBYID*$2@$', $content);
        return $content;
    }
}
