import clipboardCopy from "clipboard-copy"
import { trackException } from "../bugs"
import { ROOM_URL } from "../config.js"

export function createLinkForRoom(room) {
  return ROOM_URL + room
}

export const canShare = navigator.share != null
export const canCopy = !canShare

export async function shareLink(
  url,
  {
    title = "Briefing URL",
    text = "Please open the link in your browser to join the video conference",
  } = {}
) {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      })
      return true
    } catch (err) {
      console.warn(err)
      // trackException(err)
    }
  } else if (window.electron) {
    try {
      // https://electronjs.org/docs/api/clipboard
      await window.electron.clipboard.writeText(url)
      // alert('The URL has been copied to your clipboard.')
      return true
    } catch (err) {
      console.warn(err)
      // trackException(err)
    }
  } else {
    try {
      await clipboardCopy(url)
      // alert('The URL has been copied to your clipboard.')
      return true
    } catch (err) {
      alert(`Cannot copy ${url}. Please do by hand.`)
      // trackException(err)
    }
  }
}
