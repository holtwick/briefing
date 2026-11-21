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
 * Backup structure of mod_briefing.
 *
 * @package    mod_briefing
 * @category   backup
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Writes the settings of a Briefing activity.
 *
 * Room name, secret and moderator key are left out on purpose: a backup file
 * leaves Moodle (downloads, course copies, shared templates), and with the key
 * anybody holding it could moderate the room. Restore makes a new room instead.
 */
class backup_briefing_activity_structure_step extends backup_activity_structure_step {
    /**
     * The structure: one element per activity.
     *
     * @return backup_nested_element
     */
    protected function define_structure() {
        $briefing = new backup_nested_element('briefing', ['id'], [
            'name', 'intro', 'introformat', 'moderated', 'roommode', 'timecreated', 'timemodified',
        ]);
        $briefing->set_source_table('briefing', ['id' => backup::VAR_ACTIVITYID]);
        $briefing->annotate_files('mod_briefing', 'intro', null);
        return $this->prepare_activity_structure($briefing);
    }
}
