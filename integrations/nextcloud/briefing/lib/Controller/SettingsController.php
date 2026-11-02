<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Dirk Holtwick
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Briefing\Controller;

use OCA\Briefing\AppInfo\Application;
use OCA\Briefing\Service\BriefingLink;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IAppConfig;
use OCP\IRequest;
use OCP\IURLGenerator;

/**
 * Saves the admin setting; admins only (no NoAdminRequired), CSRF checked.
 */
class SettingsController extends Controller {
	public function __construct(
		IRequest $request,
		private IAppConfig $config,
		private IURLGenerator $urls,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	public function save(string $instance = ''): RedirectResponse {
		$params = ['section' => 'additional'];
		try {
			$instance = trim($instance);
			if ($instance !== '') {
				$instance = BriefingLink::instance($instance);
			}
			$this->config->setValueString(Application::APP_ID, Application::CONFIG_INSTANCE, $instance);
		} catch (\InvalidArgumentException) {
			$params['briefing_error'] = '1';
		}
		return new RedirectResponse($this->urls->linkToRoute('settings.AdminSettings.index', $params) . '#briefing');
	}
}
