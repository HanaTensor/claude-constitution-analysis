#!/usr/bin/env bash
# Assemble the repository into a single PDF. Requires pandoc and tectonic.
set -euo pipefail
cd "$(dirname "$0")/.."

command -v pandoc   >/dev/null || { echo "pandoc not found (brew install pandoc)";   exit 1; }
command -v tectonic >/dev/null || { echo "tectonic not found (brew install tectonic)"; exit 1; }

OUT=build
mkdir -p "$OUT"
SRC="$OUT/combined.md"
DATE=$(date +%Y-%m-%d)

# Front matter -------------------------------------------------------------
cat > "$SRC" <<'FM'
# Overview

This document assembles the contents of the repository
`github.com/HanaTensor/claude-constitution-analysis` into a single file. The repository
is authoritative; this is a snapshot.

**Subject.** Anthropic's *Claude's Constitution*, published 21 January 2026 under CC0 1.0.

**Question.** Do the document's provisions survive *composition*? Provisions sound in
isolation can, applied together, lose the effect each was written to produce. The
document declares its own incompleteness (p. 9), and a declaration of incompleteness is
an argument for composition review rather than provision-by-provision review.

**Method.** One text read in four independent vocabularies — constitutional law,
contract theory, agency theory, and linear response theory. All four are existing
theory and no novelty is claimed in any of them. The reason for proceeding this way is
robustness: if independent frameworks break at the same point, that point is a property
of the object rather than an artefact of the description.

**The central claim.** One claim carries this work.

> The responsibility-shifting provision (*The role of intentions and context*)
> presupposes that principals are human. The principal-role provision (*Claude's three
> types of principals*) designates a Claude orchestrator as the operator/user of its own
> subagents. Compose the two and responsibility never leaves the system.

**What is *not* claimed.** Not the discovery of a phenomenon — context-degraded
subagents are a known operational problem, and the general form of the argument exists
in the literature (arXiv:2510.14008). Only this: two specific provisions of this
governance document fail to compose under a specific condition. Every finding below
carries an explicit status, and restatements of known results are marked as such.

**Versions.** The subject document is revised; Anthropic commits to synchronising the
public text with the trained-on text within 90 days. Every citation names a version.
Digests and retrieval dates are in the repository under `sources/PROVENANCE.md`.

\newpage
FM

add () {           # add <file>
  printf '\n\n' >> "$SRC"
  # 1. drop links to internal .md files, keep their text; keep http(s) links
  # 2. arrows Latin Modern lacks -> math mode
  sed -E 's/\[([^]]*)\]\(([^)]*\.md)(#[^)]*)?\)/\1/g' "$1" \
    | sed -e 's/⇔/$\\Leftrightarrow$/g' \
          -e 's/↔/$\\leftrightarrow$/g' \
          -e 's/→/$\\rightarrow$/g' \
          -e 's/τ/$\\tau$/g' \
          -e 's/Σ/$\\Sigma$/g' \
          -e 's/ε/$\\varepsilon$/g' \
          -e 's/Δ/$\\Delta$/g' \
          -e 's/≥/$\\geq$/g' \
          -e 's/≫/$\\gg$/g' \
          -e 's/∝/$\\propto$/g' \
          -e 's/×/$\\times$/g' \
          -e 's/ū/$\\bar{u}$/g' \
    >> "$SRC"
  printf '\n\n\\newpage\n' >> "$SRC"
}

add docs/00_scope.md
add docs/01_findings/README.md
for f in docs/01_findings/F0*.md; do add "$f"; done
add docs/02_frameworks/README.md
for f in docs/02_frameworks/[A-D]-*.md; do add "$f"; done
add docs/03_prior_art/inventory.md
add docs/03_prior_art/verification-log.md
add docs/04_deliverables/channel-assessment.md
add docs/04_deliverables/issue-F01-draft.md
add sources/PROVENANCE.md
add ACKNOWLEDGEMENTS.md

pandoc "$SRC" \
  -o "$OUT/claude-constitution-analysis.pdf" \
  --pdf-engine=tectonic \
  -H tools/pdf-header.tex \
  --toc --toc-depth=2 \
  -V documentclass=article \
  -V geometry:a4paper \
  -V geometry:margin=22mm \
  -V fontsize=10pt \
  -V linkcolor=black -V urlcolor=RoyalBlue -V toccolor=black \
  -V colorlinks=true \
  -V title="Composition Failures in Claude's Constitution" \
  -V subtitle="A structural analysis of Anthropic's constitution of 21 January 2026" \
  -V author="Satoshi Hanamura, with Claude (Anthropic, Opus 5)" \
  -V date="$DATE" \
  --metadata lang=en-GB

echo "built: $OUT/claude-constitution-analysis.pdf"
