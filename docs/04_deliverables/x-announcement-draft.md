# Draft X announcement

**Poster**: Satoshi Hanamura (@HanaTensor), in person. **Not posted.**

Short by design: the post carries the claim, the PDF carries the argument.

All three fit the 280-character tier. **Counts are measured, not estimated** — run
`tools/count_post_chars.py`. X counts any URL as 23 characters however long it is, and
counts newlines; the script handles both.

---

## Main post

```
Claude's Constitution says an orchestrating Claude is the *operator* of its own
subagents. It also says responsibility shifts to whoever supplied the context.

Compose the two and responsibility never leaves the system.

32pp, CC BY:
github.com/HanaTensor/claude-constitution-analysis
```

## Reply 1 — scope

```
To be clear on scope: the phenomenon isn't new. Context-degraded subagents are a known
operational hazard, and the general argument already exists (arXiv:2510.14008).

The claim is narrower — these two provisions, in this text, don't compose.

PDF: github.com/HanaTensor/claude-constitution-analysis/releases/download/v1.0/claude-constitution-analysis.pdf
```

## Reply 2 — disclosure

```
Disclosure, since it should change how you weigh this: the document analysed is Claude's
own constitution, and much of the analysis was done by Claude (Opus 5).

Anthropic's constitution was itself written with Claude's participation, and says so.

Acknowledgements in the repo.
```

`<RELEASE_URL>` =
`github.com/HanaTensor/claude-constitution-analysis/releases/download/v1.0/claude-constitution-analysis.pdf`

---

## Notes on the drafting

**Why the scope reply is not optional.** Brevity is where this work is most likely to be
overclaimed. The main post states a composition failure and nothing else; without reply
1, a reader can reasonably take it as the discovery of a phenomenon. Every narrowing in
`docs/03_prior_art/verification-log.md` exists to prevent exactly that, and it would be
undone by a post that omits it.

**Why the disclosure reply earns its place.** It is the most interesting thing about the
artefact for a general audience, and it is also the thing a reader most needs in order to
discount appropriately. Stating it voluntarily is stronger than having it noticed.

**What was deliberately left out.**

- F02 and F03. One claim per announcement; the rest are in the PDF.
- The four frameworks. Interesting, but they are method, and naming them invites the
  reading that the theory is the contribution.
- Any suggestion that Anthropic will respond. See `channel-assessment.md`.

**Ordering.** Post to X before filing the GitHub issue, and **do not link the X post from
the issue**. The issue should stand as an independent defect report.

**On the character counts.** The first version of this file carried counts written from
estimation, and all three were over the limit. This is the same failure as F02 §6:
a quantitative claim made without measuring. `tools/count_post_chars.py` exists so that
it cannot recur.
