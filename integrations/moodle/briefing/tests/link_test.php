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

use mod_briefing\local\link;

/**
 * Tests of the room links.
 *
 * @package    mod_briefing
 * @category   test
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @covers     \mod_briefing\local\link
 */
final class link_test extends \basic_testcase {
    /** Test vector, the same as in Briefing's moderation-crypto.spec.ts */
    private const VECTOR_KEY = 'SLaNNwTPbOAkKY-TL8w6HNSnLyEz78RoIiL6010LHrw97VIoYS-GsviTnB9XqRP8_H9vx2Vy0Gf5Q_J4HXUlGmSBu5IIbwK9fFY7rDN9JnMXmg5YkUuUKVO_868J-l6i';

    /** Its key hash */
    private const VECTOR_HASH = 'Ltx21BCggP2KiOZAsv4RFs';

    public function test_key_hash_matches_briefing(): void {
        $this->assertSame(self::VECTOR_HASH, link::key_hash_of(self::VECTOR_KEY));
    }

    public function test_new_key_and_secret(): void {
        $key = link::new_moderator_key();
        $this->assertMatchesRegularExpression('/^[\w-]{128}$/', $key['key']);
        $this->assertSame($key['hash'], link::key_hash_of($key['key']));
        $secret = link::new_secret($key['hash']);
        $this->assertMatchesRegularExpression('/^[\w-]{22}\.m[\w-]{22}$/', $secret);
        $this->assertStringEndsWith('.m' . $key['hash'], $secret);
    }

    public function test_urls(): void {
        $this->assertSame('https://brie.fi/ng/', link::instance(''));
        $this->assertSame('https://meet.example.org/room/', link::instance('https://meet.example.org/room'));
        $this->assertSame('http://localhost:5173/', link::instance('http://localhost:5173'));
        $this->assertSame('https://brie.fi/ng/a-b#s.mH', link::url('https://brie.fi/ng/', 'a-b', 's.mH'));
        $this->assertSame('https://brie.fi/ng/a#s.mH&mk=K&m=chat', link::url('https://brie.fi/ng/', 'a', 's.mH', 'K', 'chat'));
    }

    public function test_insecure_instance_is_refused(): void {
        $this->expectException(\InvalidArgumentException::class);
        link::instance('http://meet.example.org/');
    }

    public function test_room_name(): void {
        $this->assertMatchesRegularExpression('/^mathe-10b-fruehjahr-[a-z0-9]{6}$/', link::room_name('Mathe 10b Frühjahr'));
        $this->assertMatchesRegularExpression('/^room-[a-z0-9]{6}$/', link::room_name('!!!'));
    }
}
