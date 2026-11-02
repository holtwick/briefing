<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Dirk Holtwick
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Briefing\Db;

use OCP\AppFramework\Db\QBMapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * @template-extends QBMapper<Room>
 */
class RoomMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'briefing_rooms', Room::class);
	}

	/**
	 * Rooms the user owns or that are shared with one of their groups, newest first.
	 *
	 * @param string[] $groupIds
	 * @return Room[]
	 */
	public function findVisible(string $uid, array $groupIds): array {
		$qb = $this->db->getQueryBuilder();
		$visible = [$qb->expr()->eq('owner_uid', $qb->createNamedParameter($uid))];
		if ($groupIds) {
			$visible[] = $qb->expr()->in('group_id', $qb->createNamedParameter($groupIds, IQueryBuilder::PARAM_STR_ARRAY));
		}
		$qb->select('*')
			->from($this->getTableName())
			->where($qb->expr()->orX(...$visible))
			->orderBy('created_at', 'DESC');
		return $this->findEntities($qb);
	}

	/**
	 * @throws \OCP\AppFramework\Db\DoesNotExistException if the user does not own it
	 */
	public function findOwned(int $id, string $uid): Room {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')
			->from($this->getTableName())
			->where($qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT)))
			->andWhere($qb->expr()->eq('owner_uid', $qb->createNamedParameter($uid)));
		return $this->findEntity($qb);
	}

	public function deleteOwnedBy(string $uid): void {
		$qb = $this->db->getQueryBuilder();
		$qb->delete($this->getTableName())
			->where($qb->expr()->eq('owner_uid', $qb->createNamedParameter($uid)));
		$qb->executeStatement();
	}
}
