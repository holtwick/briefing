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

namespace mod_briefing;

/**
 * Tests of backup and restore: a copy gets a new room.
 *
 * @package    mod_briefing
 * @category   test
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @covers     \backup_briefing_activity_structure_step
 * @covers     \restore_briefing_activity_structure_step
 */
final class backup_test extends \advanced_testcase {
    public function test_duplicate_makes_a_new_room(): void {
        global $CFG, $DB;
        require_once($CFG->dirroot . '/course/lib.php');
        $this->resetAfterTest();
        $this->setAdminUser();

        $course = $this->getDataGenerator()->create_course();
        $module = $this->getDataGenerator()->create_module('briefing', [
            'course' => $course->id,
            'name' => 'Office hours',
            'moderated' => 1,
            'roommode' => 'chat',
        ]);
        $cm = get_coursemodule_from_instance('briefing', $module->id);
        $original = $DB->get_record('briefing', ['id' => $module->id], '*', MUST_EXIST);

        $newcm = duplicate_module($course, get_fast_modinfo($course)->get_cm($cm->id));
        $copy = $DB->get_record('briefing', ['id' => $newcm->instance], '*', MUST_EXIST);

        $this->assertSame('1', (string) $copy->moderated);
        $this->assertSame('chat', $copy->roommode);
        $this->assertNotSame($original->secret, $copy->secret);
        $this->assertNotSame($original->moderatorkey, $copy->moderatorkey);
        $this->assertNotEmpty($copy->moderatorkey);
        $this->assertStringEndsWith('.m' . local\link::key_hash_of($copy->moderatorkey), $copy->secret);
    }
}
