export function openExternalLink(event: any) {
  if (window.electron) {
    let href: string
    if (typeof event === 'string') {
      href = event
    }
    else {
      let target = event?.target
      while (target && target?.href == null)
        target = target.parentElement

      href = target?.href
    }
    // log.info('Open external link', event.target)
    if (href)
      window.electron.shell.openExternal(href)

    event.preventDefault()
    return false
  }
  return true
}
