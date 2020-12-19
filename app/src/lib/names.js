// Thanks to Thomas Konings for this wonderful name generator
// See https://gist.github.com/tkon99/4c98af713acc73bed74c

import { deburr } from "lodash"
import { ADJECTIVES, NOUNS } from "./names-const"

// Alternative solutions https://stackoverflow.com/a/37511463/140927
export function normalizeName(name) {
  return deburr(name)
    .toLowerCase()
    .split(/[^a-z0-9]+/gim)
    .filter((s) => s.length > 0)
    .join("-")
}

export function generateName() {
  // function capFirst(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1)
  // }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  return (
    ADJECTIVES[getRandomInt(0, ADJECTIVES.length + 1)] +
    "-" +
    NOUNS[getRandomInt(0, NOUNS.length + 1)] +
    "-" +
    getRandomInt(1, 99)
  )
}
