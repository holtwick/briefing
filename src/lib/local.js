export function getLocal(name, dflt) {
  let value = localStorage?.getItem(name)
  if (value == null) {
    if (dflt instanceof Function) {
      value = dflt(name)
    } else if (dflt != null) {
      value = dflt
    }
    if (value != null) {
      localStorage?.setItem(name, value)
    }
  }
  return value
}

export function setLocal(name, value) {
  localStorage?.setItem(name, value)
}

export function clearLocal() {
  localStorage?.clear()
}
