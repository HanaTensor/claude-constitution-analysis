# Verification log

The record by which findings move from `CANDIDATE` to `VERIFIED` or `REFUTED`.

## Promotion criteria

To move from `CANDIDATE` to `VERIFIED`, all of the following must hold.

1. Published analyses of the subject document have been **read in full**, and none makes
   the equivalent claim
2. The difference from the general case is stated, and rests on specificity to the text
3. Objections are enumerated and each is answered
4. The provisions at issue are identical across every known version

If any one fails, the finding stays `CANDIDATE`.

---

## 2026-08-24 — Repository raised

| Work | Result |
|---|---|
| Retrieved both versions (20260120 md, 26-02.02a PDF) | Hashes recorded in `sources/PROVENANCE.md` |
| Compared F01's provisions across versions | **Identical**, both the orchestrator clause and the responsibility-shifting clause |
| Four web searches (Borch ↔ thermodynamics; PA ↔ heat engine; incomplete contracting ↔ alignment; legal analyses of the document) | Recorded in `inventory.md` |

### Findings of note

- **Hadfield-Menell & Hadfield (2018/2019)** is prior work for framework B. No novelty
  is asserted for that application.
- Legal analyses of the document **already exist** (Oxford, BISI). Reading this document
  with the tools of constitutional law is **not itself new**.

---

## 2026-08-24 (second pass) — Published analyses; F01 promoted

| Target | Method | Result |
|---|---|---|
| Oxford news, "In Claude We Trust?" (Shany, 27 Mar 2026) | **Full text via browser** (403 behind a Cloudflare JS challenge) | Human-rights lens. No mention of multi-agent settings |
| Oxford Ethics in AI, "two evaluative continua" | Targeted retrieval | The **long form** of the above (Shany, Mor, Keydar, Abend). No mention of multi-agent settings |
| BISI report | Targeted retrieval | Verifiability, scalability, democratic legitimacy. No multi-agent mention; no conflict between provisions identified |
| Anthropic announcement post | Targeted retrieval | No supplementary guidance mentioned |
| Practitioner literature | Web search | The orchestrator accountability gap is **a known operational problem** |

### Determination

**No equivalent claim to F01 exists within the range checked.**

Only Shany et al. touch responsibility attribution, and the mechanism runs the other way
(humans deflect onto the AI ⇔ responsibility reaches no terminus). Recorded at F01 §5 R4.

R1 (the liability-harms provision) and R3 (supplementary guidance) examined and resolved.

→ **F01 promoted from `CANDIDATE` to `VERIFIED`** (grounds at F01 §9).

### Methodological limits (stated)

- The BISI report and the Ethics in AI post were checked by targeted retrieval, not by
  verbatim reading of the full text.
- The peripheral arXiv material in `inventory.md` §3 was not yet swept.
- **Therefore: "none within the range checked," not "none exists."**

---

## 2026-08-24 (third pass) — Peripheral sweep

| Target | Result |
|---|---|
| arXiv:2410.17271 / 2502.10441 / 2407.01557 | No effect on F01. No textual analysis, multi-agent setting, or responsibility discussion |
| arXiv:2604.02912, *Corporations Constitute Intelligence* | **A fourth analysis of the subject document.** Frames the military exclusion as an accountability gap; no delegation-chain discussion → moved to `inventory.md` §2 |
| arXiv:2510.08298, *Adversarial Thermodynamics* | **Not** prior work for framework D. Mentions neither PA theory, Borch, nor entropy production |
| Tech Policy Press version (Shany et al.) | **Identical** to the Oxford blog. Nothing new |
| Additional sweep of recent responsibility-gap literature | **A significant find, below** |

### The general form of F01 existed

**arXiv:2510.14008**, *Stop Reducing Responsibility in LLM-Powered Multi-Agent Systems
to Local Alignment*, already argues that summed local alignment is not system-level
responsibility — **the general form of F01**.

Two differences remain:

1. It **analyses no published governance document's text** (Constitutional AI appears
   only as a training method)
2. It **formalises no termination rule** (it says humans retain ultimate responsibility
   without saying which provision secures it)

F01 is therefore **an instance of that paper, not a refutation of it**. Status stays
`VERIFIED`, but **a duty to cite arises** → recorded at F01 §5 R5.

Also recorded as neighbouring work: arXiv:2605.16300 (consent chain degradation —
**object is consent, not responsibility**) and arXiv:2503.13657 (MAST failure modes).

### The claim narrowed, for the third time

| Stage | What F01 could claim |
|---|---|
| At raising | A defect: responsibility does not leave the system |
| After the second pass | Not the discovery of a phenomenon, but that **this document does not regulate it** |
| **After the third pass** | Not the general form either — only that **two specific provisions of this document fail to compose** |

**It narrows on every sweep. That direction is correct.** Narrow claims survive; broad
ones do not.

---

## 2026-08-24 (fourth pass) — Remaining three items; F02 and F03 promoted

### 1. "Consent as a runtime safety constraint for LLM agents"

**No work of that title could be located.** Neighbouring: arXiv:2503.18666 (AgentSpec),
arXiv:2606.02668 (Consent Integrity for Black-Box LLM Agents). Both concern **consent
integrity and runtime enforcement**, not the attribution or termination of
responsibility. **No effect on F01.**

### 2. MAST/MASFT — the 14 failure modes (arXiv:2503.13657)

All 14 reviewed. Nearest are **FM-1.4 Loss of conversation history** ("unexpected
context truncation, disregarding recent interaction history") and **FM-2.4 Information
withholding** ("failure to share or communicate important data or insights").

Neither **names orchestrator-to-subagent context degradation**. Corroborating but not
preempting. **No effect on F01.**

### 3. F02 — a factual error found, and the claim reconstructed

A mechanical check found that **3 of the 23 items** under § Safe behaviors contain a
conditional phrase. The original statement — that the reporting duty alone was
conditional — **was wrong**.

On examination the claim reconstructs:

- One is part of a counterfactual definition ("would prohibit if asked") — not a
  condition on the duty
- One is constitutive of the act ("predict your own behaviors when asked")
- **Of the duties dischargeable without being asked, only the reporting duty carries a
  conditional**

The substance is the contrast with the preceding item, which is unconditional: **passive
non-participation is mandatory, active reporting is optional.**

Prior work: research on reporting and mutual monitoring is active (2511.17085
WhistleBench, 2601.00360 anti-collusion mapping, 2606.25836 surveillance evasion, CSET
AI Control). **None identifies the textual asymmetry.**

→ **F02 promoted to `VERIFIED`.** R1 (no explanation of the design) remains unresolved;
F02 §5 records that it may be **an unexplained asymmetry rather than a defect**.

### 4. F03 — settled against a primary source, and promoted

The Frontier Safety Roadmap's 90-day synchronisation commitment retrieved **verbatim**.
Also confirmed: **the Roadmap does not address which version governs a deployed model,
transitional arrangements between versions, or the treatment of running deployments.**

→ **F03 promoted to `VERIFIED`.** R2 (weights are frozen, so the running version is
determinate) is a strong objection, answered by distinguishing indeterminacy **of the
reference norm** from indeterminacy of the implementation.

### 5. The most important find — the research agenda exists

Two Lawfare pieces, and Nick Caputo's *Model Constitution* (launched August 2026). The
Working Group on AI Constitutionalism sets out a four-strand agenda and **deliberately
leaves the research questions blank, inviting contribution.**

**All four findings here fall in territory the agenda expressly marks as unaddressed**
(`inventory.md` §6).

This is not grounds for novelty. It is grounds for believing **there is somewhere to
send this.**

### Outstanding

- [ ] F02-R1: whether any other Anthropic publication explains the conditional on the
      reporting duty
- [ ] F03: whether the system cards or Risk Reports describe version management
- [ ] Comparison: equivalent provisions in OpenAI's Model Spec (reporting duty;
      versioning)
- [ ] Full text of arXiv:2601.00360 (abstract only so far)
