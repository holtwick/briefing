import { trackSilentException } from "../bugs"

const replacer = (key, value) =>
  value instanceof Object && !(value instanceof Array)
    ? Object.keys(value)
        .sort()
        .filter((key) => value[key] != null) // Remove null and undefined
        .reduce((sorted, key) => {
          // Sorted copy
          sorted[key] = value[key]
          return sorted
        }, {})
    : value

// https://gist.github.com/davidfurlong/463a83a33b70a3b6618e97ec9679e490
export function JSONSortedStringify(obj, indent = 2) {
  return JSON.stringify(obj, replacer, indent)
}

export function objectSnapshot(obj) {
  return JSON.stringify(obj, replacer)
}

export function cloneObject(obj) {
  try {
    if (typeof obj === "object") {
      return JSON.parse(JSON.stringify(obj))
    }
    return obj
  } catch (err) {
    trackSilentException(err)
    log("cloneObject error:", err)
  }
  return null
}

export function mergeDeep(target, source) {
  const isObject = (obj) => obj && typeof obj === "object"

  if (!isObject(target) || !isObject(source)) {
    return source
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key]
    const sourceValue = source[key]

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue)
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue)
    } else {
      target[key] = sourceValue
    }
  })

  return target
}

export function isTrue(value, dflt = false) {
  if (value == null) return dflt
  return ["1", "true", "yes"].includes(value.toString().toLocaleLowerCase())
}
