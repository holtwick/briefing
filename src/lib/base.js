export function cloneObject(obj) {
  try {
    if (typeof obj === 'object') {
      return JSON.parse(JSON.stringify(obj))
    }
    return obj
  } catch (err) {
    log('cloneObject error:', err)
  }
  return null
}

export function mergeDeep(target, source) {
  const isObject = (obj) => obj && typeof obj === 'object'

  if (!isObject(target) || !isObject(source)) {
    return source
  }

  Object.keys(source).forEach(key => {
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
