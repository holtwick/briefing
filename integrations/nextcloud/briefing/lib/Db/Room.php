<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Dirk Holtwick
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Briefing\Db;

use OCP\AppFramework\Db\Entity;

/**
 * A Briefing room: its link parts, who owns it and the group it is shared with.
 *
 * @method string getOwnerUid()
 * @method void setOwnerUid(string $uid)
 * @method string getTitle()
 * @method void setTitle(string $title)
 * @method string getRoom()
 * @method void setRoom(string $room)
 * @method string getSecret()
 * @method void setSecret(string $secret)
 * @method string|null getModeratorKey()
 * @method void setModeratorKey(?string $key)
 * @method string getMode()
 * @method void setMode(string $mode)
 * @method string|null getGroupId()
 * @method void setGroupId(?string $groupId)
 * @method int getCreatedAt()
 * @method void setCreatedAt(int $time)
 */
class Room extends Entity {
	protected $ownerUid;
	protected $title;
	protected $room;
	protected $secret;
	protected $moderatorKey;
	protected $mode;
	protected $groupId;
	protected $createdAt;

	public function __construct() {
		$this->addType('createdAt', 'integer');
	}
}
