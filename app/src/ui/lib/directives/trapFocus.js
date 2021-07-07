// Copyright (c) 2020-2021 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright

import { Logger } from "../../../lib/logger"
const log = Logger("app:trapFocus")

const findFocusable = (element) => {
  if (!element) {
    return null
  }
  return element.querySelectorAll(
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
    `.trim()
  )
  //     .sea-button,
  //     .sea-link,
}

let onKeyDown

const bind = (el, { value = true }) => {
  if (value && el) {
    onKeyDown = (event) => {
      log("trapped")
      const focusable = Array.from(findFocusable(el))
      let currentFocus = document.querySelector(":focus")
      let index = focusable.findIndex((f) => f.isSameNode(currentFocus))
      let length = focusable.length
      log("dic", focusable, currentFocus, index)

      if (event.key === "Tab") {
        event.preventDefault()
        if (!event.shiftKey) {
          ++index
          if (index >= length) index = 0
        } else {
          --index
          if (index <= 0) index = length - 1
        }
        log("index", index, length)
        focusable[index].focus()
      }
    }
    el.addEventListener("keydown", onKeyDown)
  }
}

const unbind = (el) => {
  el?.removeEventListener("keydown", onKeyDown)
}

const directive = {
  bind,
  unbind,
}

export default directive
