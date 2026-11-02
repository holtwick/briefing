#!/usr/bin/env bash
# Pack and sign the Nextcloud app for the app store (apps.nextcloud.com).
#
# Output: dist/briefing-<version>.tar.gz with the single top folder `briefing/`,
# plus the base64 signature to paste into the store's release form. See README.md.
#
# Key: $BRIEFING_NEXTCLOUD_KEY, default ~/.nextcloud/certificates/briefing.key
set -euo pipefail

here="$(cd "$(dirname "$0")" && pwd)"
app="briefing"
key="${BRIEFING_NEXTCLOUD_KEY:-$HOME/.nextcloud/certificates/$app.key}"

version="$(sed -n 's:.*<version>\(.*\)</version>.*:\1:p' "$here/$app/appinfo/info.xml" | head -1)"
if [ -z "$version" ]; then
  echo "No <version> in appinfo/info.xml" >&2
  exit 1
fi
if ! grep -q "^## $version\$" "$here/$app/CHANGELOG.md"; then
  echo "CHANGELOG.md has no heading '## $version' (the store requires it)" >&2
  exit 1
fi
if [ ! -f "$key" ]; then
  echo "Private key not found: $key (set BRIEFING_NEXTCLOUD_KEY)" >&2
  exit 1
fi

mkdir -p "$here/dist"
tarball="$here/dist/$app-$version.tar.gz"
# COPYFILE_DISABLE keeps macOS tar from adding ._* resource-fork files
COPYFILE_DISABLE=1 tar -C "$here" -czf "$tarball" \
  --exclude '.DS_Store' --exclude '.git' --exclude '*.orig' \
  "$app"

signature="$(openssl dgst -sha512 -sign "$key" "$tarball" | openssl base64 -A)"

echo "Archive:   $tarball"
echo "Version:   $version"
echo
echo "Upload the archive to a public https URL, then add the release at"
echo "https://apps.nextcloud.com/developer/apps/releases/new with this signature:"
echo
echo "$signature"
