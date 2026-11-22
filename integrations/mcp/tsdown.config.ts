import { defineConfig } from 'tsdown'

// One self-contained file for `npx briefing-video-chat-mcp` and the Claude Desktop
// extension (.mcpb): the workspace sources (@briefing/sdk, @zeed/zeed) are
// inlined, so the package has no runtime dependencies at all.
export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outDir: 'dist',
  clean: true,
  dts: false,
  external: [/^node:/],
  noExternal: [/^@briefing\/sdk/, /^@zeed\/zeed/],
})
