<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Dirk Holtwick
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

return [
    'routes' => [
        ['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],
        ['name' => 'page#create', 'url' => '/rooms', 'verb' => 'POST'],
        ['name' => 'page#delete', 'url' => '/rooms/{id}/delete', 'verb' => 'POST'],
        ['name' => 'settings#save', 'url' => '/settings', 'verb' => 'POST'],
    ],
];
