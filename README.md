# claude-constitution-analysis

A structural analysis of Anthropic's **Claude's Constitution** (published 21 January 2026).

The document is read through four independent vocabularies — constitutional law,
contract theory, agency theory, and linear response theory — in order to locate
**composition failures between provisions** and **unregulated territory**.

- Subject document: <https://www.anthropic.com/constitution> ·
  <https://github.com/anthropics/claude-constitution> (CC0 1.0)
- Author: Satoshi Hanamura (HanaTensor)
- Analysis in this repository: CC BY 4.0 (see `LICENSE`). `sources/` reproduces the
  original document, which is CC0.

## The central claim

This repository makes **one** central claim.

> The responsibility-shifting provision (*The role of intentions and context*)
> presupposes that principals are human. But the principal-role provision
> (*Claude's three types of principals*) designates a Claude orchestrator as the
> operator/user of its own subagents. Compose the two and **responsibility never
> leaves the system**.

→ [`docs/01_findings/F01-responsibility-composition.md`](docs/01_findings/F01-responsibility-composition.md)

Every other finding — including the parts that are restatements of known results —
is listed with an explicit **Status** in
[`docs/01_findings/README.md`](docs/01_findings/README.md).
Keeping novelty claims separate from restatement is the governing principle here.

## Layout

| Path | Contents |
|---|---|
| `docs/00_scope.md` | Scope, questions, method, boundaries |
| `docs/01_findings/` | Findings, one per file. Each opens with its **Status** |
| `docs/02_frameworks/` | The four reading frameworks. **Method, not claim** |
| `docs/03_prior_art/` | Prior-art inventory and the verification log |
| `docs/04_deliverables/` | Draft GitHub issue, X announcement, and the channel assessment |
| `sources/` | The original document, versioned, with provenance and hashes |
| `tools/` | Fetch and comparison scripts (for reproduction) |
| `log/worklog.md` | Work log |

## Status vocabulary

| Status | Meaning |
|---|---|
| `CANDIDATE` | Appears to be our own, but **prior art has not been checked** |
| `VERIFIED` | Prior art checked; judged to remain our own within the stated scope |
| `RESTATEMENT` | **Known.** Cited to prior work and used as method |
| `REFUTED` | Prior art found, or the claim turned out to be wrong |

Current state: `VERIFIED` 3 (F01, F02, F03) · `CANDIDATE` 1 · `RESTATEMENT` 1 · `REFUTED` 0.

In every case the novelty claimed is **not the discovery of a phenomenon** but the
observation that **this document does not regulate it**. See
[`docs/01_findings/README.md`](docs/01_findings/README.md).

## Where this is meant to go

A research agenda for **AI constitutionalism** already exists — the Working Group on
AI Constitutionalism (Lawfare), and Nick Caputo's *Model Constitution*. That agenda
sets out four strands and **deliberately leaves its research questions blank as an
invitation**. All four findings here fall inside territory the agenda explicitly marks
as unaddressed (`docs/03_prior_art/inventory.md` §6).

That is not evidence of novelty. It is evidence that there is somewhere to send this.

## Process

1. Raise a finding in `docs/01_findings/` as `CANDIDATE`
2. Clear prior art in `docs/03_prior_art/verification-log.md` → `VERIFIED` / `REFUTED`
3. Only `VERIFIED` findings become drafts in `docs/04_deliverables/`
4. **Hanamura posts.** Nothing here is submitted automatically
5. Whether to write this up and deposit it is decided after the issue draws a response

F01 completed step 4 on 2026-08-24 and was filed as
[anthropics/claude-constitution#8](https://github.com/anthropics/claude-constitution/issues/8).
The filed text is in
[`docs/04_deliverables/issue-F01-draft.md`](docs/04_deliverables/issue-F01-draft.md).

## A note on versions

The subject document **is revised**. In its Frontier Safety Roadmap (10 July 2026)
Anthropic commits to keeping the public constitution in sync with the most recent
trained-on version **within 90 days**.

Every citation here therefore names a version. Retrieval dates, URLs, and SHA-256
digests are recorded in `sources/PROVENANCE.md`. Run `tools/compare_versions.sh`
before relying on any quotation.

## PDF

A single-file build of everything here is attached to
[release v1.0](https://github.com/HanaTensor/claude-constitution-analysis/releases/tag/v1.0)
(32 pp, A4). Rebuild with `tools/build_pdf.sh` (requires pandoc and tectonic).

## Authorship

This analysis was produced in collaboration between Satoshi Hanamura and Claude
(Anthropic, Opus 5). **The subject of the analysis is Claude's own constitution, and much
of the analysis was performed by Claude.** The division of work, the disclosure that
follows from it, and the safeguards used are set out in
[`ACKNOWLEDGEMENTS.md`](ACKNOWLEDGEMENTS.md).

## Language

English is the source of truth. An earlier Japanese edition of every document remains
in the git history (commit `bd03724` onward) and is not maintained.
