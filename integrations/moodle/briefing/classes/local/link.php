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

namespace mod_briefing\local;

/**
 * Briefing room links: secret, moderator key and URL.
 *
 * Same code as the Nextcloud app (lib/Service/BriefingLink.php), keep both in
 * step. Format: README.md "Link format" in the integrations folder.
 *
 * @package    mod_briefing
 * @copyright  2026 Dirk Holtwick
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
final class link {
    /** Domain separation of Briefing's moderation crypto; must match MODERATION_CONTEXT */
    public const CONTEXT = 'briefing:moderation:1';

    /** base64url characters of the key hash in the secret */
    public const KEY_HASH_LENGTH = 22;

    /** The official instance */
    public const DEFAULT_INSTANCE = 'https://brie.fi/ng/';

    /**
     * base64url without padding.
     *
     * @param string $bin
     * @return string
     */
    public static function b64url(string $bin): string {
        return rtrim(strtr(base64_encode($bin), '+/', '-_'), '=');
    }

    /**
     * Decode base64url.
     *
     * @param string $value
     * @return string
     */
    public static function from_b64url(string $value): string {
        $bin = base64_decode(strtr($value, '-_', '+/'), true);
        if ($bin === false) {
            throw new \InvalidArgumentException('not base64url');
        }
        return $bin;
    }

    /**
     * Hash of an uncompressed P-256 public key as it appears in the secret.
     *
     * @param string $publicraw 0x04 || x || y
     * @return string
     */
    public static function key_hash(string $publicraw): string {
        $digest = hash('sha256', self::CONTEXT . "\nkey\n" . $publicraw, true);
        return substr(self::b64url($digest), 0, self::KEY_HASH_LENGTH);
    }

    /**
     * Hash of an exported moderator key (d || x || y).
     *
     * @param string $exported
     * @return string
     */
    public static function key_hash_of(string $exported): string {
        $raw = self::from_b64url($exported);
        if (strlen($raw) !== 96) {
            throw new \InvalidArgumentException('moderator key has the wrong length');
        }
        return self::key_hash("\x04" . substr($raw, 32, 64));
    }

    /**
     * A new moderator key pair.
     *
     * @return array{key: string, hash: string} the exported key for the moderator link and its hash for the secret
     */
    public static function new_moderator_key(): array {
        $pair = openssl_pkey_new([
            'private_key_type' => OPENSSL_KEYTYPE_EC,
            'curve_name' => 'prime256v1',
        ]);
        if ($pair === false) {
            throw new \RuntimeException('openssl cannot make a P-256 key');
        }
        $ec = openssl_pkey_get_details($pair)['ec'] ?? null;
        if (!$ec) {
            throw new \RuntimeException('openssl returned no EC key');
        }
        $d = self::coordinate($ec['d']);
        $x = self::coordinate($ec['x']);
        $y = self::coordinate($ec['y']);
        return [
            'key' => self::b64url($d . $x . $y),
            'hash' => self::key_hash("\x04" . $x . $y),
        ];
    }

    /**
     * A key part as exactly 32 bytes; openssl drops leading zero bytes.
     *
     * @param string $value
     * @return string
     */
    private static function coordinate(string $value): string {
        $value = str_pad($value, 32, "\0", STR_PAD_LEFT);
        if (strlen($value) !== 32) {
            throw new \RuntimeException('P-256 key part longer than 32 bytes');
        }
        return $value;
    }

    /**
     * A new room secret, bound to a moderator key if its hash is given.
     *
     * @param string|null $keyhash
     * @return string
     */
    public static function new_secret(?string $keyhash = null): string {
        $base = self::b64url(random_bytes(16));
        return $keyhash ? "{$base}.m{$keyhash}" : $base;
    }

    /**
     * A readable room name from a title, with a short random tail.
     *
     * @param string $title
     * @return string
     */
    public static function room_name(string $title): string {
        $slug = strtr(mb_strtolower($title, 'UTF-8'), ['ä' => 'ae', 'ö' => 'oe', 'ü' => 'ue', 'ß' => 'ss']);
        $slug = trim(preg_replace('/[^a-z0-9]+/', '-', $slug), '-');
        $slug = substr($slug, 0, 40);
        $tail = strtolower(substr(self::b64url(random_bytes(6)), 0, 6));
        $tail = preg_replace('/[^a-z0-9]/', 'x', $tail);
        return ($slug !== '' ? $slug : 'room') . '-' . $tail;
    }

    /**
     * The instance URL with a trailing slash, the official one if empty.
     *
     * @param string|null $url
     * @return string
     */
    public static function instance(?string $url): string {
        $url = trim((string) $url);
        if ($url === '') {
            return self::DEFAULT_INSTANCE;
        }
        $parts = parse_url($url);
        $scheme = strtolower($parts['scheme'] ?? '');
        $host = strtolower($parts['host'] ?? '');
        $local = $host === 'localhost' || $host === '127.0.0.1';
        if (!$host || !($scheme === 'https' || ($scheme === 'http' && $local)) || isset($parts['query']) || isset($parts['fragment'])) {
            throw new \InvalidArgumentException('Briefing instance must be an https URL without query or fragment');
        }
        return rtrim($url, '/') . '/';
    }

    /**
     * The link into a room.
     *
     * @param string $instance from instance()
     * @param string $room
     * @param string $secret
     * @param string|null $moderatorkey only for the moderator link
     * @param string $mode 'video' or 'chat'
     * @return string
     */
    public static function url(string $instance, string $room, string $secret, ?string $moderatorkey = null,
            string $mode = 'video'): string {
        $fragment = rawurlencode($secret);
        if ($moderatorkey) {
            $fragment .= '&mk=' . $moderatorkey;
        }
        if ($mode === 'chat') {
            $fragment .= '&m=chat';
        }
        return $instance . rawurlencode($room) . '#' . $fragment;
    }
}
