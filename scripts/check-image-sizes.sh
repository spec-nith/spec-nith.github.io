#!/usr/bin/env bash
# check-image-sizes.sh: fail if any given image exceeds the size/dimension budget.
set -euo pipefail

MAX_BYTES=$((800 * 1024))
MAX_EDGE=2200

fail=0

for f in "$@"; do
  [ -f "$f" ] || continue
  case "$f" in
    *.jpg|*.jpeg|*.png|*.webp|*.JPG|*.JPEG|*.PNG|*.WEBP) ;;
    *) continue ;;
  esac

  size=$(stat -c%s "$f")
  if [ "$size" -gt "$MAX_BYTES" ]; then
    echo "FAIL $f: ${size} bytes exceeds ${MAX_BYTES} byte limit (run scripts/compress-images.sh $f)"
    fail=1
  fi

  dims=$(identify -format "%w %h" "$f" 2>/dev/null | head -1) || continue
  w=$(echo "$dims" | cut -d' ' -f1)
  h=$(echo "$dims" | cut -d' ' -f2)
  if [ "$w" -gt "$MAX_EDGE" ] || [ "$h" -gt "$MAX_EDGE" ]; then
    echo "FAIL $f: ${w}x${h} exceeds ${MAX_EDGE}px longest-edge limit (run scripts/compress-images.sh $f)"
    fail=1
  fi
done

exit "$fail"
