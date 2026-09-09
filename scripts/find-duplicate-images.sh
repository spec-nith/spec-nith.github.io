#!/usr/bin/env bash
# find-duplicate-images.sh: report byte-identical images under a directory.
set -euo pipefail

root="${1:-.}"
tmpfile="$(mktemp)"
trap 'rm -f "$tmpfile"' EXIT

find "$root" \( -path '*/.git' -o -path '*/node_modules' \) -prune -o \
  -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' -o -iname '*.gif' \) -print0 |
  xargs -0r md5sum > "$tmpfile"

sort "$tmpfile" | awk '{print $1}' | uniq -d | while read -r h; do
  echo "== $h =="
  grep "^$h " "$tmpfile"
  echo
done
