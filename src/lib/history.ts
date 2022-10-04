import { Logger, arrayRemoveElement } from 'zeed'
const log = Logger('history')

const storageKeyHistory = 'briefingHistory'

/** Get all previously visited rooms */
export function historyAllRooms(): string[] {
  let rooms = []
  try {
    const roomsString = localStorage.getItem(storageKeyHistory)
    if (roomsString)
      rooms = JSON.parse(roomsString)
  }
  catch (err) {
    log.warn('Failed to get room history')
  }
  return rooms
}

/** Add room to history */
export function historyAddRoom(room: string) {
  let rooms = historyAllRooms()
  rooms = arrayRemoveElement(rooms, room)
  rooms.unshift(room)
  localStorage.setItem(storageKeyHistory, JSON.stringify(rooms))
}

export function historyClearRooms() {
  localStorage.removeItem(storageKeyHistory)
}
