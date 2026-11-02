<?php
/**
 * SPDX-FileCopyrightText: 2026 Dirk Holtwick
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * @var array $_
 * @var \OCP\IL10N $l
 */
?>
<div id="briefing" class="section">
	<h2><?php p($l->t('Briefing')); ?></h2>
	<p class="settings-hint"><?php p($l->t('URL of the Briefing installation the rooms open on, including its room path. Empty: the official instance %s. Rooms already created keep working only on the instance they were made for.', [$_['default']])); ?></p>
	<?php if ($_['error']): ?>
		<p class="warning"><?php p($l->t('Not saved: the instance must be an https URL without query or fragment.')); ?></p>
	<?php endif; ?>
	<form method="post" action="<?php p($_['saveUrl']); ?>">
		<input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
		<label for="briefing-instance"><?php p($l->t('Briefing instance')); ?></label>
		<input id="briefing-instance" type="url" name="instance" value="<?php p($_['instance']); ?>" placeholder="<?php p($_['default']); ?>">
		<button type="submit"><?php p($l->t('Save')); ?></button>
	</form>
</div>
