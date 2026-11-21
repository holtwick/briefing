#!/usr/bin/env bash
# Pack the Moodle plugin for Moodle Marketplace (marketplace.moodle.com).
#
# Output: dist/mod_briefing-<release>.zip with the single top folder `briefing/`,
# the layout "Install plugins" in Moodle and the Marketplace expect.
set -euo pipefail

here="$(cd "$(dirname "$0")" && pwd)"
release="$(sed -n "s:^\$plugin->release = '\(.*\)';:\1:p" "$here/briefing/version.php")"
if [ -z "$release" ]; then
  echo "No \$plugin->release in version.php" >&2
  exit 1
fi
if [ -d "$here/briefing/lang" ] && [ "$(ls "$here/briefing/lang")" != "en" ]; then
  echo "briefing/lang must hold only 'en' (translations go through AMOS, see README.md)" >&2
  exit 1
fi

mkdir -p "$here/dist"
zipfile="$here/dist/mod_briefing-$release.zip"
rm -f "$zipfile"
(cd "$here" && zip -qr "$zipfile" briefing -x '*.DS_Store')

echo "Archive: $zipfile"
echo "Release: $release"
