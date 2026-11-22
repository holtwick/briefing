import { copyCommands, openCommands } from './system'

describe('system actions', () => {
  it('never opens a URL through a shell', () => {
    for (const platform of ['darwin', 'win32', 'linux'] as const) {
      for (const [command] of openCommands(platform))
        expect(['cmd', 'cmd.exe', 'sh', 'bash', 'powershell']).not.toContain(command)
      expect(copyCommands(platform).length).toBeGreaterThan(0)
    }
  })
})
