/**
 * SPDX-FileCopyrightText: 2026 Dirk Holtwick
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// Copy a guest link, ask before deleting a room. Texts come from the template.
document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-briefing-copy]')
  if (!button)
    return
  navigator.clipboard.writeText(button.dataset.briefingCopy).then(() => {
    const label = button.textContent
    button.textContent = button.dataset.briefingCopied
    setTimeout(() => {
      button.textContent = label
    }, 2000)
  })
})

document.addEventListener('submit', (event) => {
  const form = event.target.closest('[data-briefing-confirm]')
  // eslint-disable-next-line no-alert -- plain script without a build step, @nextcloud/dialogs would need one
  if (form && !window.confirm(form.dataset.briefingConfirm))
    event.preventDefault()
})
