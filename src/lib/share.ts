import clipboardCopy from 'clipboard-copy'
import { Logger } from 'zeed'
import { ROOM_URL } from '../config'

const log = Logger('share')

export function createLinkForRoom(room) {
  return `${ROOM_URL + room}#${room}`
}

export const canShare = navigator.share != null
export const canCopy = !canShare

export async function shareLink(
  url: string,
  {
    title = 'Briefing URL',
    text = 'Please open the link in your browser to join the video conference',
  } = {},
) {
  if (navigator.share) {
    log('nav share')
    try {
      await navigator.share({
        title,
        text,
        url,
      })
      return true
    }
    catch (err) {
      log.warn(err)
      // trackException(err)
    }
  }
  else if (window.electron) {
    log('electron')
    try {
      // https://electronjs.org/docs/api/clipboard
      await window.electron.clipboard.writeText(url)
      // eslint-disable-next-line no-alert
      alert('The URL has been copied to your clipboard.')
      return true
    }
    catch (err) {
      log.warn(err)
      // trackException(err)
    }
  }
  else {
    log('copy clipboard')
    try {
      await clipboardCopy(url)
      // eslint-disable-next-line no-alert
      alert('The URL has been copied to your clipboard.')
      return true
    }
    catch (err) {
      // eslint-disable-next-line no-alert
      alert(`Cannot copy ${url}. Please do by hand.`)
      // trackException(err)
    }
  }
}
