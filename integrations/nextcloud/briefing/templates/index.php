<?php
/**
 * SPDX-FileCopyrightText: 2026 Dirk Holtwick
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * @var array $_
 * @var \OCP\IL10N $l
 */
?>
<div id="app-content" class="briefing">
	<div class="briefing__page">
		<h2><?php p($l->t('Briefing video rooms')); ?></h2>
		<p class="briefing__intro"><?php p($l->t('Audio, video, chat and files are end-to-end encrypted and go directly between the participants. Rooms open on %s.', [$_['instance']])); ?></p>

		<form class="briefing__create" method="post" action="<?php p($_['createUrl']); ?>">
			<input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
			<label for="briefing-title"><?php p($l->t('Name')); ?></label>
			<input id="briefing-title" type="text" name="title" maxlength="255" placeholder="<?php p($l->t('Video room')); ?>">
			<label for="briefing-group"><?php p($l->t('Share with group')); ?></label>
			<select id="briefing-group" name="groupId">
				<option value=""><?php p($l->t('Nobody (only links)')); ?></option>
				<?php foreach ($_['groups'] as $gid => $name): ?>
					<option value="<?php p($gid); ?>"><?php p($name); ?></option>
				<?php endforeach; ?>
			</select>
			<label for="briefing-mode"><?php p($l->t('Start as')); ?></label>
			<select id="briefing-mode" name="mode">
				<option value="video"><?php p($l->t('Video call')); ?></option>
				<option value="chat"><?php p($l->t('Chat')); ?></option>
			</select>
			<span class="briefing__check">
				<input id="briefing-moderated" class="checkbox" type="checkbox" name="moderated" value="1" checked>
				<label for="briefing-moderated"><?php p($l->t('Moderated: you give roles, mute and remove participants')); ?></label>
			</span>
			<button type="submit" class="primary"><?php p($l->t('Create room')); ?></button>
		</form>

		<?php if (!$_['rooms']): ?>
			<p class="briefing__empty"><?php p($l->t('No rooms yet.')); ?></p>
		<?php endif; ?>
		<ul class="briefing__rooms">
			<?php foreach ($_['rooms'] as $room): ?>
				<li class="briefing__room">
					<div class="briefing__room-title">
						<strong><?php p($room['title']); ?></strong>
						<?php if ($room['group']): ?>
							<span class="briefing__meta"><?php p($l->t('Group: %s', [$room['group']])); ?></span>
						<?php endif; ?>
						<?php if ($room['moderated']): ?>
							<span class="briefing__meta"><?php p($l->t('Moderated')); ?></span>
						<?php endif; ?>
					</div>
					<div class="briefing__room-actions">
						<a class="button primary" href="<?php p($room['join']); ?>" target="_blank" rel="noopener noreferrer"><?php p($room['own'] && $room['moderated'] ? $l->t('Join as moderator') : $l->t('Join')); ?></a>
						<?php if ($room['guest']): ?>
							<button type="button" data-briefing-copy="<?php p($room['guest']); ?>" data-briefing-copied="<?php p($l->t('Copied')); ?>"><?php p($l->t('Copy link for guests')); ?></button>
						<?php endif; ?>
						<?php if ($room['deleteUrl']): ?>
							<form method="post" action="<?php p($room['deleteUrl']); ?>" data-briefing-confirm="<?php p($l->t('Delete "%s"? Its links stop working.', [$room['title']])); ?>">
								<input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
								<button type="submit"><?php p($l->t('Delete')); ?></button>
							</form>
						<?php endif; ?>
					</div>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</div>
