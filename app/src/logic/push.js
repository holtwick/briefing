import { urlBase64ToUint8Array } from '../lib/base64'

export async function subscribeRoom(room) {
  let registration = navigator.serviceWorker.getRegistration()
  let subscription = await registration.pushManager.getSubscription()
  // if (!subscription) {

  //   const response = await fetch(')
  //   const vapidPublicKey = await response.text()
  //   log('vapidPublicKey', vapidPublicKey)
  //   if (vapidPublicKey) {
  //     const applicationServerKey = urlBase64ToUint8Array(vapidPublicKey)
  //     subscription = registration.pushManager.subscribe({
  //       userVisibleOnly: true,
  //       applicationServerKey,
  //     })
  //   } else {
  //     log('subscription failed')
  //   }
  // }
  //
  //
  // await fetch('./register', {
  //   method: 'post',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     subscription,
  //   }),
  // })

  // await fetch('./sendNotification', {
  //   method: 'post',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     subscription,
  //     payload: 'Hello',
  //     delay: 1,
  //     ttl: 2,
  //   }),
  // })
  //
  // navigator.serviceWorker.controller.postMessage(JSON.stringify({
  //   action: 'subscribe',
  //   room
  // }))
}

// export function unsubscribeRoom(room) {
//   navigator.serviceWorker.controller.postMessage(JSON.stringify({
//     action: 'unsubscribe',
//     room,
//   }))
// }
