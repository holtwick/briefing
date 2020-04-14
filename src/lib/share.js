import clipboardCopy from 'clipboard-copy'

export function createLinkForRoom(room) {
  return `https://brie.fi/ng/${room}`
}

export async function shareLink(url, {
  title = 'Student\'s link',
  text = 'Dear student, please open the link in your browser to follow our class',
} = {}) {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      })
      return true
    } catch (err) {
      console.error('Exception:', err)
    }
  }
  if (window.electron) {
    try {
      // https://electronjs.org/docs/api/clipboard
      await window.electron.clipboard.writeText(url)
      alert('The URL has been copied to your clipboard. Please share it with your students.')
      return true
    } catch (err) {
      console.error('Exception:', err)
    }
  }
  try {
    await clipboardCopy(url)
    alert('The URL has been copied to your clipboard. Please share it with your students.')
    return true
  } catch (err) {
    console.error('Exception:', err)
  }
  alert(`Cannot copy ${url}. Please do by hand.`)
}
