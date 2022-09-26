export function urlBase64ToUint8Array(base64String) {
  try {
    let padding = "=".repeat((4 - (base64String.length % 4)) % 4)
    let base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/")

    let rawData = window.atob(base64)
    let outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  } catch (err) {
    console.error("Exception:", err, base64String)
  }
}
