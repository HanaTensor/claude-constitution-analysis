#!/usr/bin/env bash
# 主要条文が両版で一致するかを照合する。F01 の前提条件。
set -euo pipefail
cd "$(dirname "$0")/.."

MD=sources/constitution-20260120.md
TXT=sources/constitution-2602-pdftext.txt

check () {
  local label="$1" needle="$2"
  local a b
  a=$(grep -c -- "$needle" "$MD"  || true)
  b=$(grep -c -- "$needle" "$TXT" || true)
  printf '%-34s md=%s  pdftext=%s  %s\n' "$label" "$a" "$b" \
    "$( [ "$a" -ge 1 ] && [ "$b" -ge 1 ] && echo OK || echo '*** MISMATCH ***' )"
}

echo "=== 主要条文の存否照合（20260120 md ↔ 26-02.02a pdftext）==="
check "orchestrator clause"        "orchestrator of its own subagents"
check "orchestrator = operator"    "acting as an operator and/or user"
check "outputs as conv. inputs"    "treated as conversational inputs"
check "responsibility shift"       "shift the responsibility for outcomes"
check "reasonable-belief excuse"   "sensible interpretation of the information"
check "liability harms"            "harms that accrue to Anthropic"
check "horizontal reporting"       "reporting awareness of broadly unsafe"
check "variance over expectation"  "reduction in variance"
check "future guidance promised"   "more detailed guidance about these settings"
check "self-declared incompleteness" "underspecified"
echo
echo "注: 存否の照合であって全文 diff ではない。全文 diff は未実施。"

# 既知の制約: pdftotext -layout の出力は行折返しを含むため、
# 行をまたぐ語句（例 "liability harms"）は grep で照合できない。
# 照合語は必ず 1 行に収まるものを選ぶこと。
