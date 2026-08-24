# Channel assessment — does an issue actually reach Anthropic?

**Checked 2026-08-24 against the GitHub API. The answer is: probably not.**

This document exists because an earlier working assumption — that filing an issue on
`anthropics/claude-constitution` would put the finding in front of its authors — was
asserted without evidence. The evidence contradicts it.

## Observed state of `anthropics/claude-constitution`

| Fact | Value |
|---|---|
| Created | 2026-01-21 |
| **Last commit** | **2026-01-29** (nothing since) |
| Total commits | 4, **all by `aaskell`** (Amanda Askell, lead author) |
| Open issues | 5 |
| **Comments by anyone at Anthropic on any external issue** | **0** |

### The individual signals

- **Issue #2 / PR #2** (`mounta11n`) — a one-character typo fix in a link. The author
  commented "@aaskell" on **2026-02-16**. That direct mention of the lead author has gone
  **unanswered for over six months**. The PR is still open.
- **PR #3** (`jacobwood27`) — "Correct single small typo." Open, unmerged.
- **Issue #4** (`Butanium`) — reports that the constitution **links to two internal Google
  Docs rather than public documents**. A concrete, trivially fixable defect. Open, no
  response.
- **Issue #5** (`reubenbijl`) — "Claude's moral status." Open, no response.
- **Issue #7** (`giuempi`) — on the cost of holistic prioritisation in determinacy. Open,
  no response.
- **PR #6** (`jordanrule`) — "Improve collaboration on editorial." **Closed without
  merging.**

Unmerged one-character typo fixes and an unactioned broken-link report are the strongest
available signal. Anyone watching the repository would clear those in minutes.

## The constitution names no feedback channel for humans

A search of the text for contact addresses or feedback routes returns nothing addressed
to the public. The "we want to know" passages are addressed **to Claude**, and the stated
mechanism is feedback **from Claude models**:

> "Right now, we do this by getting feedback from current Claude models on our framework
> and on documents like this one, but over time we would like to **develop more formal
> mechanisms** for eliciting Claude's perspective..." (md L796)

The formal mechanisms are aspirational. None is published.

## Conclusion

`anthropics/claude-constitution` is **a publication channel, not a feedback channel.**
Anthropic released the text there under CC0 and has not staffed it.

A benign reading is available — the repository may be a mirror, with feedback handled by
internal routes — but it does not change the operational conclusion.

## Consequences for this repository's plan

**File the issue anyway.** It costs almost nothing and produces a public, timestamped,
permanently linkable record attached to the canonical artefact. But **do not expect a
reply, and do not sequence anything behind one.**

Channels that are demonstrably attended:

| Channel | Why |
|---|---|
| **The AI constitutionalism research community** | Lawfare's Working Group publishes an agenda that **deliberately leaves its research questions blank as an invitation**. Nick Caputo's *Model Constitution* launched August 2026 and is actively seeking material (`docs/03_prior_art/inventory.md` §6) |
| **Tech Policy Press** | Where Shany et al. published. Accepts submissions; read by AI policy staff |
| **X** | The document's authors are public there. A citable artefact plus a short thread is a real route |

All three require the artefact to be **public and linkable first**. That reverses the
earlier sequencing: **public repository → PDF → issue → announcement**, not issue first.
