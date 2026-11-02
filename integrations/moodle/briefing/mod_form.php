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
 * Settings form of a Briefing activity.
 *
 * @package    mod_briefing
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

require_once($CFG->dirroot . '/course/moodleform_mod.php');

/**
 * Settings form of a Briefing activity.
 */
class mod_briefing_mod_form extends moodleform_mod {
    /**
     * Form definition.
     */
    public function definition() {
        $mform = $this->_form;

        $mform->addElement('header', 'general', get_string('general', 'form'));
        $mform->addElement('text', 'name', get_string('name'), ['size' => '48']);
        $mform->setType('name', PARAM_TEXT);
        $mform->addRule('name', null, 'required', null, 'client');
        $mform->addRule('name', get_string('maximumchars', '', 255), 'maxlength', 255, 'client');
        $this->standard_intro_elements();

        $mform->addElement('header', 'room', get_string('room', 'mod_briefing'));
        $mform->addElement('advcheckbox', 'moderated', get_string('moderated', 'mod_briefing'));
        $mform->addHelpButton('moderated', 'moderated', 'mod_briefing');
        $mform->setDefault('moderated', 1);

        $mform->addElement('select', 'roommode', get_string('roommode', 'mod_briefing'), [
            'video' => get_string('roommode_video', 'mod_briefing'),
            'chat' => get_string('roommode_chat', 'mod_briefing'),
        ]);
        $mform->setDefault('roommode', 'video');

        if (!empty($this->_instance)) {
            $mform->addElement('advcheckbox', 'newroom', get_string('newroom', 'mod_briefing'));
            $mform->addHelpButton('newroom', 'newroom', 'mod_briefing');
        }

        $this->standard_coursemodule_elements();
        $this->add_action_buttons();
    }
}
