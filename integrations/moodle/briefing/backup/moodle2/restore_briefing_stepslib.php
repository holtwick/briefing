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
 * Restore structure of mod_briefing.
 *
 * @package    mod_briefing
 * @category   backup
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Reads the settings of a Briefing activity and gives it a new room.
 *
 * The backup holds no room (see backup_briefing_activity_structure_step), so a
 * restored, copied or duplicated activity never shares a room with the original.
 */
class restore_briefing_activity_structure_step extends restore_activity_structure_step {
    /**
     * The paths to process.
     *
     * @return restore_path_element[]
     */
    protected function define_structure() {
        return $this->prepare_activity_structure([new restore_path_element('briefing', '/activity/briefing')]);
    }

    /**
     * Insert the activity with a new room.
     *
     * @param array $data
     */
    protected function process_briefing($data) {
        global $CFG, $DB;
        require_once($CFG->dirroot . '/mod/briefing/lib.php');

        $data = (object) $data;
        unset($data->id);
        $data->course = $this->get_courseid();
        $data->moderated = empty($data->moderated) ? 0 : 1;
        $data->roommode = ($data->roommode ?? 'video') === 'chat' ? 'chat' : 'video';
        briefing_new_room($data);
        $data->timemodified = time();

        $newitemid = $DB->insert_record('briefing', $data);
        $this->apply_activity_instance($newitemid);
    }

    /**
     * Restore the files of the description.
     */
    protected function after_execute() {
        $this->add_related_files('mod_briefing', 'intro', null);
    }
}
