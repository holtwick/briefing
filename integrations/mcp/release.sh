#!/usr/bin/env bash
# Pack the Claude Desktop extension: dist/briefing-<version>.mcpb, a zip with
# manifest.json, the bundled server (server/index.mjs), icon, screenshots,
# README, LICENSE.
# Validate before uploading: `npx @anthropic-ai/mcpb validate manifest.json`.
# This script never uploads or publishes anything.
set -euo pipefail

here="$(cd "$(dirname "$0")" && pwd)"
cd "$here"
version="$(node -p 'require("./package.json").version')"
manifest_version="$(node -p 'require("./manifest.json").version')"
if [ "$version" != "$manifest_version" ]; then
  echo "package.json ($version) and manifest.json ($manifest_version) disagree" >&2
  exit 1
fi

pnpm build
stage="$(mktemp -d)"
trap 'rm -rf "$stage"' EXIT
mkdir -p "$stage/server"
cp dist/index.mjs "$stage/server/index.mjs"
cp manifest.json README.md LICENSE "$stage/"
cp icon.png "$stage/icon.png"
mkdir -p "$stage/screenshots"
cp screenshots/*.png "$stage/screenshots/"

out="$here/dist/briefing-$version.mcpb"
rm -f "$out"
(cd "$stage" && zip -qr "$out" .)
echo "$out"
