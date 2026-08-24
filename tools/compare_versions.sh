#!/usr/bin/env bash
# Check that the key provisions agree across both versions. A precondition for F01.
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

echo "=== Presence check for key provisions (20260120 md vs 26-02.02a pdftext) ==="
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
echo "Note: this is a presence check, not a full diff. No full diff has been run."

# Known limitation: pdftotext -layout wraps lines, so a phrase spanning a line break
# (e.g. "liability harms") cannot be matched with grep.
# Always choose needles that fit on a single line.
