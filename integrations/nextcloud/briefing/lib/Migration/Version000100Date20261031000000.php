<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Dirk Holtwick
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Briefing\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20261031000000 extends SimpleMigrationStep {
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();
		if ($schema->hasTable('briefing_rooms')) {
			return null;
		}
		$table = $schema->createTable('briefing_rooms');
		$table->addColumn('id', Types::BIGINT, ['autoincrement' => true, 'notnull' => true, 'unsigned' => true]);
		$table->addColumn('owner_uid', Types::STRING, ['notnull' => true, 'length' => 64]);
		$table->addColumn('title', Types::STRING, ['notnull' => true, 'length' => 255]);
		// Path and fragment of the link, see BriefingLink
		$table->addColumn('room', Types::STRING, ['notnull' => true, 'length' => 100]);
		$table->addColumn('secret', Types::STRING, ['notnull' => true, 'length' => 100]);
		$table->addColumn('moderator_key', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('mode', Types::STRING, ['notnull' => true, 'length' => 10, 'default' => 'video']);
		$table->addColumn('group_id', Types::STRING, ['notnull' => false, 'length' => 64]);
		$table->addColumn('created_at', Types::BIGINT, ['notnull' => true, 'default' => 0, 'unsigned' => true]);
		$table->setPrimaryKey(['id']);
		$table->addIndex(['owner_uid'], 'briefing_rooms_owner');
		$table->addIndex(['group_id'], 'briefing_rooms_group');
		return $schema;
	}
}
