import { join } from 'node:path'
import { defaultStorePath } from './store'

describe('store path', () => {
  it('follows the platform and the override', () => {
    expect(defaultStorePath({ BRIEFING_MCP_DATA: '/x' }, 'darwin')).toBe(join('/x', 'rooms.json'))
    expect(defaultStorePath({}, 'darwin')).toContain(join('Library', 'Application Support', 'briefing-mcp'))
    expect(defaultStorePath({ XDG_DATA_HOME: '/d' }, 'linux')).toBe(join('/d', 'briefing-mcp', 'rooms.json'))
    expect(defaultStorePath({ APPDATA: 'C:\\A' }, 'win32')).toContain('briefing-mcp')
  })
})
