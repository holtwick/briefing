<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Dirk Holtwick
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Briefing\Controller;

use OCA\Briefing\AppInfo\Application;
use OCA\Briefing\Db\Room;
use OCA\Briefing\Db\RoomMapper;
use OCA\Briefing\Service\BriefingLink;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IAppConfig;
use OCP\IGroupManager;
use OCP\IL10N;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUser;
use OCP\IUserSession;
use OCP\Util;

/**
 * The room list: create rooms, share them with a group, open them.
 * The owner opens a moderated room as moderator; group members and guests
 * join as participants.
 */
class PageController extends Controller {
	public function __construct(
		IRequest $request,
		private RoomMapper $rooms,
		private IUserSession $session,
		private IGroupManager $groups,
		private IAppConfig $config,
		private IURLGenerator $urls,
		private IL10N $l,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function index(): TemplateResponse {
		$user = $this->user();
		$uid = $user->getUID();
		$instance = $this->instance();
		$groups = $this->groupsOf($user);
		$list = [];
		foreach ($this->rooms->findVisible($uid, array_keys($groups)) as $room) {
			$own = $room->getOwnerUid() === $uid;
			$key = $room->getModeratorKey();
			$participant = BriefingLink::url($instance, $room->getRoom(), $room->getSecret(), null, $room->getMode());
			$list[] = [
				'id' => $room->getId(),
				'title' => $room->getTitle(),
				'own' => $own,
				'moderated' => (bool)$key,
				'group' => $room->getGroupId() ? ($groups[$room->getGroupId()] ?? $room->getGroupId()) : null,
				'join' => $own && $key
					? BriefingLink::url($instance, $room->getRoom(), $room->getSecret(), $key, $room->getMode())
					: $participant,
				// Only the owner hands out links; group members find the room here
				'guest' => $own ? $participant : null,
				'deleteUrl' => $own ? $this->urls->linkToRoute('briefing.page.delete', ['id' => $room->getId()]) : null,
			];
		}
		Util::addScript(Application::APP_ID, 'briefing-main');
		Util::addStyle(Application::APP_ID, 'style');
		return new TemplateResponse(Application::APP_ID, 'index', [
			'rooms' => $list,
			'groups' => $groups,
			'instance' => $instance,
			'createUrl' => $this->urls->linkToRoute('briefing.page.create'),
		]);
	}

	#[NoAdminRequired]
	public function create(string $title = '', string $moderated = '', string $mode = 'video', string $groupId = ''): RedirectResponse {
		$user = $this->user();
		$title = trim($title) !== '' ? mb_substr(trim($title), 0, 255) : $this->l->t('Video room');
		$groupId = array_key_exists($groupId, $this->groupsOf($user)) ? $groupId : null;

		$room = new Room();
		$room->setOwnerUid($user->getUID());
		$room->setTitle($title);
		$room->setRoom(BriefingLink::roomName($title));
		$room->setMode($mode === 'chat' ? 'chat' : 'video');
		$room->setGroupId($groupId);
		$room->setCreatedAt(time());
		if ($moderated !== '') {
			$key = BriefingLink::newModeratorKey();
			$room->setModeratorKey($key['key']);
			$room->setSecret(BriefingLink::newSecret($key['hash']));
		} else {
			$room->setModeratorKey(null);
			$room->setSecret(BriefingLink::newSecret());
		}
		$this->rooms->insert($room);
		return $this->toIndex();
	}

	#[NoAdminRequired]
	public function delete(int $id): RedirectResponse {
		try {
			$this->rooms->delete($this->rooms->findOwned($id, $this->user()->getUID()));
		} catch (DoesNotExistException) {
			// Not the user's room, or gone already
		}
		return $this->toIndex();
	}

	private function user(): IUser {
		$user = $this->session->getUser();
		if (!$user) {
			throw new \RuntimeException('not logged in');
		}
		return $user;
	}

	/** @return array<string, string> group id => display name */
	private function groupsOf(IUser $user): array {
		$out = [];
		foreach ($this->groups->getUserGroups($user) as $group) {
			$out[$group->getGID()] = $group->getDisplayName();
		}
		asort($out);
		return $out;
	}

	private function instance(): string {
		return BriefingLink::instance($this->config->getValueString(Application::APP_ID, Application::CONFIG_INSTANCE));
	}

	private function toIndex(): RedirectResponse {
		return new RedirectResponse($this->urls->linkToRoute('briefing.page.index'));
	}
}
