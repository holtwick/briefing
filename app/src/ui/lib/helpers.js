// Copyright (c) 2020 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright

export function removeElement(el) {
  if (typeof el.remove !== 'undefined') {
    el.remove()
  } else if (typeof el.parentNode !== 'undefined') {
    el.parentNode.removeChild(el)
  }
}
