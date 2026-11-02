<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Dirk Holtwick
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Briefing\Settings;

use OCA\Briefing\AppInfo\Application;
use OCA\Briefing\Service\BriefingLink;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IAppConfig;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\Settings\ISettings;

/**
 * Admin setting: which Briefing instance the rooms open on.
 */
class Admin implements ISettings {
	public function __construct(
		private IAppConfig $config,
		private IRequest $request,
		private IURLGenerator $urls,
	) {
	}

	public function getForm(): TemplateResponse {
		return new TemplateResponse(Application::APP_ID, 'admin', [
			'instance' => $this->config->getValueString(Application::APP_ID, Application::CONFIG_INSTANCE),
			'default' => BriefingLink::DEFAULT_INSTANCE,
			'error' => $this->request->getParam('briefing_error') === '1',
			'saveUrl' => $this->urls->linkToRoute('briefing.settings.save'),
		], 'blank');
	}

	public function getSection(): string {
		return 'additional';
	}

	public function getPriority(): int {
		return 50;
	}
}
