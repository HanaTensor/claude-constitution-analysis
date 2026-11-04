# Work log

## 2026-08-24 — Repository raised

### How it started

Out of a conversation reading Anthropic's *Claude's Constitution* (published
21 January 2026) in four vocabularies: constitutional law, contract theory, agency
theory, and linear response theory. A composition failure between provisions (F01)
surfaced, and the work was fixed in a form that could be continued.

### Done

- Retrieved both versions (20260120 md, 26-02.02a PDF); hashes recorded in
  `sources/PROVENANCE.md`
- Raised five findings (F01–F05). **`VERIFIED`: zero**
- Organised four frameworks as method (A–D). **All existing theory; no novelty asserted**
- Inventoried prior art
- Drafted the GitHub issue for F01 (**not posted**)
- Wrote and ran the fetch and comparison scripts

### Established

- **F01's two provisions are identical between 20260120 and 26-02.02a**
- Ten key provisions also agree across versions (`tools/compare_versions.sh`)
- Framework B (the contract-theoretic reading) is preceded by
  Hadfield-Menell & Hadfield (2018/2019)
- Legal analyses of the document already exist (Oxford ×2, BISI)

### Snags

`pdftotext -layout` wraps lines, so a phrase spanning a line break ("liability harms")
produced a false negative under grep. Fixed by choosing needles that fit on one line.
**Choose comparison needles carefully.**

### Working arrangements

- **Hanamura posts** — issues and any deposit
- Nothing is submitted externally until the finding is `VERIFIED`
- Every citation names a version

---

## 2026-08-24 (second) — Published analyses; F01 promoted

Checked the two Oxford items, the BISI report, and Anthropic's announcement post, and
searched the practitioner literature.

- ox.ac.uk returned 403 behind a Cloudflare JS challenge; **resolved by fetching the
  full text through a browser**
- The two Oxford items are **the short and long forms of one argument** (Shany alone;
  Shany, Mor, Keydar, and Abend)
- **None of the three mentions multi-agent settings at all**
- No supplementary guidance for agentic settings in Anthropic's announcement → R3 resolved
- R1 (the liability-harms provision) examined and resolved: the provision is an input to
  weighing, not a rule of attribution
- Shany et al.'s accountability gap runs **the other way** → recorded as R4, resolved

**F01 promoted to `VERIFIED`.**

### The novelty narrowed

In practitioner literature, **accidents caused by context-degraded subagents are a known
operational problem**. So F01 can claim not the discovery of a phenomenon but only that
**this governance document does not regulate it.** That limit is now stated in three
places: the issue draft, the inventory, and the findings index.

### Incidental (as reported by Oxford; not independently verified)

- On 4 March 2026 the US Department of War designated Anthropic a supply-chain risk,
  after it refused Claude's use for mass domestic surveillance and for lethal autonomous
  weapons. The Department contracted with OpenAI.
- Claude is reported to have been used for target selection in the war in Iran; a
  contribution to one strike in error has been suggested, with no hard evidence stated.

Recorded as context: the document is already being tested in high-stakes settings.

---

## 2026-08-24 (third) — Peripheral sweep; the general form of F01 found

### The important part

**arXiv:2510.14008 already argued the general form of F01** — that summed local
alignment is not system-level responsibility. That is the structure of the failure case.

But it analyses no published governance document's text, and formalises no termination
rule. F01 is therefore **an instance, not a refutation**. Status stays `VERIFIED`, but
**a duty to cite arose**, now reflected in the issue draft.

Posting without that citation would have presented a known argument as our own.

### Also

- arXiv:2604.02912 is **a fourth analysis** of the document (criticising the military
  exclusion) → moved to `inventory.md` §2
- arXiv:2510.08298, *Adversarial Thermodynamics*, is **not** prior work for framework D
- The Tech Policy Press version is identical to the Oxford blog
- arXiv:2605.16300 (consent chain degradation) shares the mechanism but **its object is
  consent, not responsibility**

### Three narrowings

Discovery of a phenomenon → statement of the general form → **only the composition
failure between two provisions of this document.**

It narrows on every sweep, and **that direction is correct.** Narrow claims survive.
The issue should go out at this level.

---

## 2026-08-24 (fourth) — Remaining three items; F02 and F03 promoted

### Cleared

1. **"Consent as a runtime safety constraint for LLM agents"** — no work of that title
   located. Neighbouring work (AgentSpec, Consent Integrity) concerns consent integrity,
   not responsibility
2. **MAST's 14 modes** — all reviewed. Nearest are FM-1.4 *Loss of conversation history*
   and FM-2.4 *Information withholding*; neither names orchestrator-to-subagent context
   degradation
3. **F02 and F03** — both promoted to `VERIFIED`

### I found my own error in F02

The finding as raised said the reporting duty alone carried a conditional.
**A mechanical check found three such items.** The cause was reading the list and
writing from the impression.

The claim reconstructed, and sharpened: **of the duties dischargeable without being
asked, only the reporting duty carries a conditional** — and the contrast with the
preceding item, which is unconditional, is the substance. **Passive non-participation is
mandatory; active reporting is optional.**

The lesson is recorded in F02 §6 and in the findings index. **Quantitative claims must
rest on a mechanical check.**

### F03 settled against a primary source

The Frontier Safety Roadmap's 90-day synchronisation commitment retrieved verbatim, and
**the Roadmap likewise carries no transitional provision.** F03's factual premise now
rests on a primary source.

### The most important find — there is somewhere to send this

**A research agenda for AI constitutionalism exists**: two Lawfare pieces, and Nick
Caputo's *Model Constitution* (Johns Hopkins, launched August 2026). The Working Group
on AI Constitutionalism sets out four strands and **deliberately leaves the research
questions blank, inviting contribution.**

All four findings here fall in territory the agenda expressly marks as unaddressed.

- F03 → Strand Two (Process and Authority)
- F01, F02 → Strand Four (Enforcement)
- F05 → Strands Two and Four (interpretive authority; adjudication)

Not grounds for novelty. Grounds for believing there is a destination.

---

## 2026-08-24 (fifth) — Converted to English

At Hanamura's direction the repository was converted to English as its single working
language, in preparation for going public, producing a PDF, and announcing on X.

**The Japanese edition is not maintained.** It remains in the git history from commit
`bd03724`; any document can be recovered with, for example,
`git show bd03724:docs/01_findings/F01-responsibility-composition.md`.

Conversion was by rewriting rather than translation; content is unchanged. The record of
the F02 error is preserved deliberately.

### Next

- [ ] Switch the repository to public
- [ ] Produce the PDF
- [ ] Draft the X announcement (**Hanamura posts**)
- [ ] Decide whether to post the F01 issue

---

## 2026-08-24 (sixth) — Channel assessment. Earlier advice reversed

Hanamura asked how an issue would actually reach Anthropic. The assumption had not been
checked. It was checked, and it fails.

`anthropics/claude-constitution`: **no commit since 2026-01-29**, all 4 commits by
`aaskell`, **zero Anthropic comments on any external issue**, a direct @-mention of the
lead author unanswered since 2026-02-16, two one-character typo PRs unmerged, a
broken-internal-links report unactioned, and the one PR proposing better editorial
collaboration closed without merging.

The constitution names **no feedback channel for humans**; its "we want to know" passages
are addressed to Claude, and the stated mechanism is feedback from Claude models.

**It is a publication channel, not a feedback channel.**

Recorded in `docs/04_deliverables/channel-assessment.md`.

### Sequencing reversed

Previously advised: issue first, then public. **Now: public → PDF → issue →
announcement.** The channels that are actually attended (the AI constitutionalism
community, Tech Policy Press, X) all require a public, linkable artefact first. The
issue remains worth filing as a timestamped record, but not as delivery.

---

## 2026-08-24 (seventh) — Published

### Done

- Repository switched to **public**: `github.com/HanaTensor/claude-constitution-analysis`
- **Release v1.0** cut, with the 32-page PDF attached
- **X thread posted** by Hanamura — all three parts: the claim, the scope limitation,
  and the disclosure

**This is publication.** The repository will not record it on its own; future readers of
this log should not infer from its silence that the work is unreleased.

### Pre-posting check for the issue (run on the day)

| Check | Result |
|---|---|
| Both sources re-fetched | Digests **match** `sources/PROVENANCE.md` exactly — no upstream revision |
| Ten key provisions across both versions | **All present in both** |
| Upstream repository | Unchanged: last push still 2026-01-29, still 5 open issues |

**The F01 issue draft is cleared to post.**

### A drafting lesson for next time

The fenced blocks in `x-announcement-draft.md` carry hard line breaks for readability in
markdown, and **X preserves them**. Reply 1 posted with a break mid-sentence. Harmless,
but future post drafts should be written as single unbroken paragraphs, with wrapping
left to the client.

### Next

- [ ] File the F01 issue (Hanamura; **do not link the X post from it**)
- [ ] Watch for a response — but see `docs/04_deliverables/channel-assessment.md`;
      none is expected
- [ ] Then decide: write-up and deposit, and/or approach the AI constitutionalism
      community (`docs/03_prior_art/inventory.md` §6)

---

## 2026-08-24 (eighth) — F01 filed

**[anthropics/claude-constitution#8](https://github.com/anthropics/claude-constitution/issues/8)**,
opened by HanaTensor at 10:49 UTC. Body 4,198 characters, verified complete through the
closing disclosure and its URL.

The version-check required before posting was run the same day and passed: both source
digests match `PROVENANCE.md`, all ten key provisions present in both versions, upstream
unchanged since 2026-01-29.

### The submission failed once first

The web form returned a bare "Unable to create issue." Diagnosis, read-only: issue #7 had
been opened by an external user three days earlier, so external filing was not blocked;
the API rate limit was untouched; interaction limits were unreadable without admin. The
leading hypothesis was a stale form token — the page had been open across a long
exchange. **Reloading and re-pasting worked on the first attempt**, which confirms it.

Worth remembering: GitHub returns the same generic error for expired forms, spam
heuristics, and interaction limits. `gh issue create` returns the specific reason and is
the faster diagnostic if it recurs.

### State

Everything planned is now done: repository public, release v1.0 with the PDF, X thread
posted, issue filed.

### What is left, and it is a decision rather than a task

- **Do not wait for a reply.** `channel-assessment.md` gives the reasons.
- The live question is whether to approach the AI constitutionalism community — the
  Working Group's agenda (Lawfare) and Nick Caputo's *Model Constitution* — which is
  where the four findings correspond to explicitly unaddressed points
  (`docs/03_prior_art/inventory.md` §6).
- A write-up and a Zenodo deposit remain optional and secondary to that.
- F02 and F03 are `VERIFIED` but unfiled. Whether they warrant separate issues, given the
  channel assessment, is undecided.

## 2026-11-05 — D01 recorded under `dialogues/`

### What happened

A dialogue that began with "can an LLM serve as the first-stage screen when meritocracy is
introduced?" ran through basic income with a merit tier, an AI-managed economy, recovery
channels, competition arenas, temple carpentry (*kusegumi*), and back to F01 and F04 via the
question of why contest solutions fail in production. Hanamura asked for it to be kept for
reference, in English and Japanese, as a short briefing and a full reference.

### Done

- New top-level `dialogues/`, explicitly outside `docs/00_scope.md`, with its own conventions
  (`dialogues/README.md`) and a cross-dialogue register of open questions.
- `dialogues/D01-allocation-under-ai-management/`: briefing (en, ja), reference in five parts and
  three appendices (en, ja, identical section numbers), and `sim/reproduce.py`, which prints every
  figure quoted.
- Appendix A explains Japanese wooden pagodas, Nishioka Tsunekazu and the Hōryūji oral
  transmissions for readers outside Japan.
- Appendix B registers each idea as `RESTATEMENT`, `CANDIDATE` or `PREMISE`, sets out who
  contributed what, and records three corrections (pagoda storeys; audit size 41, not 48; script
  name).

### Not changed

No finding's status. D01 applies F01's general form and F04's optimisation row; it does not extend
them.

### Next

OQ6 in `dialogues/open-questions.md`: raise two `CANDIDATE` findings for the constitution itself —
Claude as the de facto principal of humans, and errors aggregated across operators using the same
model. Check the current constitution version first (`tools/compare_versions.sh`), then prior art.
Hanamura posts; nothing is submitted automatically.

## 2026-11-05 (second) — F06 and F07 raised as `CANDIDATE`

### Done

- From D01, two claims about the constitution itself:
  - **F06** — the principal roles are defined by the flow of instructions *to* Claude; when Claude directs
    or evaluates humans, the person on the receiving end has no role, and their protection depends on
    the interface (user, non-principal in a conversation, or subject of a conversational input).
  - **F07** — policy-level reasoning (md L463, L465) aggregates over the people *sending* a context, and
    the homogenisation concern (md L383) covers *views*; neither covers correlated decisions about the
    same people across operators.
- Upstream re-checked: unchanged since 2026-01-28, hash matches. Provisions identical across both pinned
  versions. Every quotation matched to its line.
- First prior-art sweep recorded. Closest: Varma (2 Nov 2026) for F07; Frazier (21 Jan 2026) for F06.

### Not done, deliberately

No issue draft. Criterion 1 (published analyses re-read in full for these claims) is not met. Process
step 3 drafts only `VERIFIED` findings.

### Next

Re-read the `inventory.md` §2 analyses, Zvi Mowshowitz's series, Caputo's *Model Constitution* and the
Lawfare Working Group pieces against F06 and F07. Then promote or refute, and only then draft — most
likely as one combined issue or as an addendum to #8, decided with `channel-assessment.md`.

## 2026-11-05 (third) — F06 and F07 narrowed, verified, and drafted as one issue

### What happened

- An adversarial reviewer, given only the findings and the full text, found provisions both had missed. **F07 was
  false as written** (md L604 recognises duplicated errors). Both were rewritten to narrower claims, each with a
  narrowing record (§7).
- Two agents read the published analyses for criterion 1 (sets A and B). None makes either claim.
- Both promoted to `VERIFIED`, with limits stated in `verification-log.md`: readings were model-summarised, not
  line by line; prior-art reads were run against the first statements; one weekly roundup not located.
- One combined issue drafted: `docs/04_deliverables/issue-F06-F07-draft.md`; paste-ready body in
  `build/issue-body-F06-F07.md` (5,425 characters). A separate issue, not a comment on #8.
- Inventory corrected: the Tech Policy Press piece is by Shany alone.

### Next

Hanamura posts, after the on-the-day checks in the draft's checklist. Then record the issue number. Consider the
channels in `channel-assessment.md` (Lawfare Working Group; *Model Constitution*; Tech Policy Press; X).
