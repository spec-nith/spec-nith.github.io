#!/usr/bin/env bash
# compress-images.sh: resize-cap and recompress images in place.
set -euo pipefail

MAX_EDGE=2200
JPEG_QUALITY=82
WEBP_QUALITY=82

process_one() {
  local f="$1"
  local before after ext
  before=$(stat -c%s "$f")
  ext="${f##*.}"
  ext="$(echo "$ext" | tr '[:upper:]' '[:lower:]')"

  local dims
  dims=$(identify -format "%w %h" "$f" 2>/dev/null | head -1) || return 0
  local w h
  read -r w h <<< "$dims"
  if [ "$w" -gt "$MAX_EDGE" ] || [ "$h" -gt "$MAX_EDGE" ]; then
    convert "$f" -resize "${MAX_EDGE}x${MAX_EDGE}>" "$f"
  fi

  case "$ext" in
    jpg|jpeg) jpegoptim --max="$JPEG_QUALITY" --strip-all -q "$f" ;;
    png) optipng -o2 -quiet "$f" ;;
    webp)
      convert "$f" -quality "$WEBP_QUALITY" "$f"
      ;;
  esac

  after=$(stat -c%s "$f")
  printf '%s: %d -> %d bytes\n' "$f" "$before" "$after"
}

for target in "$@"; do
  if [ -d "$target" ]; then
    find "$target" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' \) -print0 |
      while IFS= read -r -d '' f; do process_one "$f"; done
  elif [ -f "$target" ]; then
    process_one "$target"
  fi
done
