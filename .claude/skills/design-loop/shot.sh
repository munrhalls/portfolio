#!/usr/bin/env bash
# shot.sh <html-file> [height] [out.png] — 390px-wide headless render of a static mockup.
set -euo pipefail

in="${1:?usage: shot.sh <html-file> [height] [out.png]}"
h="${2:-3000}"
abs="$(readlink -f "$in")"
out="$(readlink -f "${3:-${abs%.*}.shot.png}")"

google-chrome --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=390,"$h" \
  --virtual-time-budget=4000 \
  --screenshot="$out" "file://$abs" >/dev/null 2>&1

echo "$out"
