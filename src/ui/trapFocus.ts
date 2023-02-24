const findFocusable = (element: HTMLElement): HTMLElement[] => {
  if (!element)
    return []

  return Array.from(
    element.querySelectorAll(
      `
    a[href],
    area[href],
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    iframe,
    object,
    embed,
    *[tabindex],
    *[contenteditable]
    `.trim(),
    ) || [],
  )
}

let onKeyDown: any

const bind = (el: HTMLElement, { value = true }) => {
  if (value && el) {
    onKeyDown = (event: KeyboardEvent) => {
      const focusable: HTMLElement[] = findFocusable(el)
      const currentFocus = document.querySelector(':focus')
      let index = focusable.findIndex((f: Node) => f.isSameNode(currentFocus))
      const length = focusable.length

      if (event.key === 'Tab') {
        event.preventDefault()
        if (!event.shiftKey) {
          ++index
          if (index >= length)
            index = 0
        }
        else {
          --index
          if (index <= 0)
            index = length - 1
        }
        focusable[index].focus()
      }
    }
    el.addEventListener('keydown', onKeyDown)
  }
}

const unbind = (el: HTMLElement) => {
  el?.removeEventListener('keydown', onKeyDown)
}

const directive = {
  beforeMount: bind,
  unMount: unbind,
}

export default directive
