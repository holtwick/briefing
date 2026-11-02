<?php
/**
 * Checks the link code of both integrations without Moodle or Nextcloud:
 * the shared test vector and that both make the same links.
 *
 *   php tests/link_check.php   (from the integrations folder)
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

declare(strict_types=1);

require __DIR__ . '/../moodle/briefing/classes/local/link.php';
require __DIR__ . '/../nextcloud/briefing/lib/Service/BriefingLink.php';

use mod_briefing\local\link;
use OCA\Briefing\Service\BriefingLink;

// Same vector as in Briefing's own moderation tests
const VECTOR_KEY = 'SLaNNwTPbOAkKY-TL8w6HNSnLyEz78RoIiL6010LHrw97VIoYS-GsviTnB9XqRP8_H9vx2Vy0Gf5Q_J4HXUlGmSBu5IIbwK9fFY7rDN9JnMXmg5YkUuUKVO_868J-l6i';
const VECTOR_HASH = 'Ltx21BCggP2KiOZAsv4RFs';

$failed = 0;
function check(string $what, bool $ok): void {
    global $failed;
    echo ($ok ? 'ok   ' : 'FAIL ') . $what . "\n";
    if (!$ok) {
        $failed++;
    }
}

check('moodle: vector key hash', link::key_hash_of(VECTOR_KEY) === VECTOR_HASH);
check('nextcloud: vector key hash', BriefingLink::keyHashOf(VECTOR_KEY) === VECTOR_HASH);

for ($i = 0; $i < 20; $i++) {
    $key = link::new_moderator_key();
    check("moodle: new key $i has 128 characters and its hash", preg_match('/^[\w-]{128}$/', $key['key']) === 1
        && link::key_hash_of($key['key']) === $key['hash']);
    $key = BriefingLink::newModeratorKey();
    check("nextcloud: new key $i has 128 characters and its hash", preg_match('/^[\w-]{128}$/', $key['key']) === 1
        && BriefingLink::keyHashOf($key['key']) === $key['hash']);
}

$secret = link::new_secret(VECTOR_HASH);
check('secret shape', preg_match('/^[\w-]{22}\.mLtx21BCggP2KiOZAsv4RFs$/', $secret) === 1);
check('same url', link::url(link::instance(''), 'a', $secret, VECTOR_KEY, 'chat')
    === BriefingLink::url(BriefingLink::instance(''), 'a', $secret, VECTOR_KEY, 'chat'));
check('url format', link::url('https://brie.fi/ng/', 'a', 's.mH', 'K', 'chat') === 'https://brie.fi/ng/a#s.mH&mk=K&m=chat');
check('instance with path', link::instance('https://meet.example.org/room') === 'https://meet.example.org/room/');
check('localhost over http', BriefingLink::instance('http://localhost:5173') === 'http://localhost:5173/');
foreach (['http://meet.example.org/', 'https://x/?a=1', 'ftp://x/', 'meet.example.org'] as $bad) {
    try {
        link::instance($bad);
        check("refuses $bad", false);
    } catch (InvalidArgumentException) {
        check("refuses $bad", true);
    }
}
check('room name', preg_match('/^mathe-10b-fruehjahr-[a-z0-9]{6}$/', BriefingLink::roomName('Mathe 10b Frühjahr')) === 1);

// A link made here opens in Briefing: print one to try by hand
$key = link::new_moderator_key();
$secret = link::new_secret($key['hash']);
echo "\nmoderator link:   " . link::url('https://brie.fi/ng/', 'php-check', $secret, $key['key']) . "\n";
echo "participant link: " . link::url('https://brie.fi/ng/', 'php-check', $secret) . "\n";

exit($failed ? 1 : 0);
