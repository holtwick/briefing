import { spawn } from 'node:child_process'

/**
 * The two ways a link reaches the user without passing through the
 * assistant: the default browser and the clipboard. URLs are given as one
 * argument each, never through a shell, so `&` in the fragment stays intact.
 */

export interface SystemActions {
  openUrl: (url: string) => Promise<void>
  copyText: (text: string) => Promise<void>
}

function run(command: string, args: string[], input?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: [input == null ? 'ignore' : 'pipe', 'ignore', 'ignore'],
      detached: input == null,
      windowsHide: true,
    })
    child.once('error', reject)
    if (input == null) {
      // A browser may keep running: done once it started
      child.once('spawn', () => {
        child.unref()
        resolve()
      })
      return
    }
    child.once('exit', code => code === 0
      ? resolve()
      : reject(new Error(`${command} exited with ${code}`)))
    child.stdin!.end(input)
  })
}

/** Commands that open a URL in the default browser, per platform */
export function openCommands(platform: NodeJS.Platform): [string, string[]][] {
  if (platform === 'darwin')
    return [['open', []]]
  if (platform === 'win32')
    // `start` would go through cmd.exe and cut the URL at the first `&`
    return [['rundll32', ['url.dll,FileProtocolHandler']]]
  return [['xdg-open', []], ['gio', ['open']]]
}

/** Commands that put stdin on the clipboard, per platform, tried in order */
export function copyCommands(platform: NodeJS.Platform): [string, string[]][] {
  if (platform === 'darwin')
    return [['pbcopy', []]]
  if (platform === 'win32')
    return [['clip', []]]
  return [['wl-copy', []], ['xclip', ['-selection', 'clipboard']], ['xsel', ['--clipboard', '--input']]]
}

async function firstWorking(commands: [string, string[]][], last: string, input?: string) {
  let error: unknown
  for (const [command, args] of commands) {
    try {
      await run(command, input == null ? [...args, last] : args, input)
      return
    }
    catch (err) {
      error = err
    }
  }
  throw error ?? new Error('no command for this platform')
}

export function createSystemActions(platform: NodeJS.Platform = process.platform): SystemActions {
  return {
    openUrl: url => firstWorking(openCommands(platform), url),
    copyText: text => firstWorking(copyCommands(platform), '', text),
  }
}
