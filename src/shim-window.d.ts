export {}

declare global {
  interface Window {
    sentry?: any
    electron?: any
    webkit?: any
    iOS?: any 
    iPhone?: any
  }

  namespace globalThis {
    let sentry: any
    let electron: any
    let webkit: any
    let iOS: any 
    let iPhone: any

    const TEST: boolean
    const DEBUG: boolean
  }
}