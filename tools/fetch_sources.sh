#!/usr/bin/env bash
# 原典を取得し、ハッシュを表示する。PROVENANCE.md の値と照合すること。
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p sources

MD_URL="https://raw.githubusercontent.com/anthropics/claude-constitution/main/20260120-constitution.md"
PDF_URL="https://www-cdn.anthropic.com/d0636f72a9493d279ed36b33987da3430bcb5911/claudes-constitution_webPDF_26-02.02a.pdf"

echo "== fetching markdown =="
curl -sSL -o sources/constitution-20260120.md "$MD_URL"

echo "== fetching PDF and extracting text =="
tmp=$(mktemp -t cc).pdf
curl -sSL -o "$tmp" "$PDF_URL"
command -v pdftotext >/dev/null || { echo "pdftotext not found (brew install poppler)"; exit 1; }
pdftotext -layout "$tmp" sources/constitution-2602-pdftext.txt
echo "pdf sha256: $(shasum -a 256 "$tmp" | cut -d' ' -f1)"
rm -f "$tmp"

echo "== hashes =="
shasum -a 256 sources/constitution-20260120.md sources/constitution-2602-pdftext.txt
echo
echo "sources/PROVENANCE.md の記録と一致するか確認すること。"
echo "不一致は原典が改訂されたことを意味する（90日同期義務）。"
