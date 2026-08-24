# Prior-art inventory

**An exhaustive listing of the existing work this repository relies on**, kept so that
novelty claims and restatements stay separable.

## 1. Established, much of it decades old

| Topic | Prior work |
|---|---|
| Thermodynamics–economics duality | Samuelson, *Foundations of Economic Analysis* (1947); the Le Chatelier transplant; Maxwell relations ↔ Slutsky symmetry |
| Optimal risk sharing | Borch (1962), *Econometrica*; Wilson (1968), "The theory of syndicates" |
| Moral hazard and incentive contracts | Holmström (1979); Jensen & Meckling (1976) |
| Incomplete contracts, residual control rights | Grossman & Hart (1986); Hart & Moore (1990) |
| Team production and the residual claimant | Alchian & Demsetz (1972) |
| Exit, voice, and loyalty | Hirschman (1970) |
| No real-valued utility for lexicographic preference | Debreu (1954, 1959) |
| Weighted-sum scalarisation cannot reach non-convex frontiers; ε-constraint | Textbook multi-objective optimisation |
| Metabolic control analysis; summation theorem | Kacser & Burns (1973); Heinrich & Rapoport (1974) |
| The problem of many hands in computing | Nissenbaum (1996) |
| Responsibility gaps for learning automata | Matthias (2004) |
| **Incomplete contracting → AI alignment** | **Hadfield-Menell & Hadfield (arXiv:1804.04268; AIES 2019)** |

The last line matters. Framework B — the contract-theoretic reading — **is preceded by a
full paper, eight years old.**

## 2. Published analyses of the subject document

| Source | Kind | URL |
|---|---|---|
| Oxford, "In Claude We Trust? Evaluating the New Constitution" (Shany, 27 Mar 2026) | Expert comment | https://www.ox.ac.uk/news/2026-03-27-expert-comment-claude-we-trust-evaluating-new-constitution |
| Oxford Ethics in AI, "Claude's new Constitution: two evaluative continua" | Blog; the long form of the above, with Mor, Keydar, and Abend | https://www.oxford-aiethics.ox.ac.uk/blog/claudes-new-constitution-two-evaluative-continua |
| Shany et al., "In Claude We Trust? Stress Testing the AI Model's Constitution" | **Tech Policy Press version; textually the same argument** | https://www.techpolicy.press/in-claude-we-trust-stress-testing-the-ai-models-constitution/ |
| BISI, "Claude's New Constitution: AI Alignment, Ethics, and the Future of Model Governance" | Report | https://bisi.org.uk/reports/claudes-new-constitution-ai-alignment-ethics-and-the-future-of-model-governance |
| Anthropic, "Claude's new constitution" | Primary (announcement) | https://www.anthropic.com/news/claude-new-constitution |
| arXiv:2604.02912, *Corporations Constitute Intelligence* | Calls the January 2026 constitution the most comprehensive corporate AI governance document yet released, while criticising the exclusion of military contexts and the absence of democratic deliberation | https://arxiv.org/abs/2604.02912 |

**All checked 2026-08-24.** Details in `verification-log.md`.

### What the check found

- The two Oxford items are **the short and long forms of one argument**, by Yuval Shany
  (Institute for Ethics in AI), the long form with Noa Mor, Renana Keydar, and Omri
  Abend. The Tech Policy Press version is the same text.
- The argument is **a human-rights one**: the 2026 version drops the reference to the
  Universal Declaration that the 2023 version carried, and never uses the phrase "human
  rights."
- **None of them mentions multi-agent settings, orchestrators, or subagents at all.**
- Only Shany et al. touch responsibility attribution, and in the opposite direction from
  F01 (see F01 §5 R4).
- Anthropic's announcement post mentions **no** supplementary guidance for agentic
  settings (F01 §5 R3).

### Incidental findings (as reported by Oxford; **not independently verified**)

Two occasions are said to have tested the document's outer limits within weeks of
publication.

1. On 4 March 2026 the US Department of War designated Anthropic a supply-chain risk,
   after Anthropic declined to permit Claude's use for mass domestic surveillance and
   for lethal autonomous weapon systems. The Department contracted with OpenAI instead.
2. Claude systems are widely reported to have been used by the US military for target
   selection in the war in Iran. A contribution to one strike in error (an Iranian
   school), by way of reliance on out-of-date maps, has been suggested — **Oxford states
   explicitly that there is no hard evidence.**

Independent of this repository's claims, but recorded because it shows **the document is
already being tested in high-stakes settings**.

## 3. Peripheral literature (swept 2026-08-24)

| Source | Content | Effect on F01 |
|---|---|---|
| arXiv:2410.17271, *Rules, Cases, and Reasoning* | Positivist legal theory (general rules interacting with cases) as an alignment framework | No analysis of constitutional text. **None** |
| arXiv:2502.10441, *AI Alignment at Your Discretion* | Measurement of annotator discretion | No multi-agent or responsibility discussion. **None** |
| arXiv:2604.02912, *Corporations Constitute Intelligence* | Analysis of the January 2026 constitution; military exclusion framed as an accountability gap | **Moved to §2** as an analysis of the subject document. No delegation-chain discussion |
| arXiv:2407.01557, *AI Governance and Accountability* | NIST AI RMF and EU AI Act lens; submitted May 2024 | **Subject is an earlier version.** No multi-agent or responsibility discussion. None |
| arXiv:2510.08298, *Adversarial Thermodynamics* | Work extraction as an adversarial game (thermodynamics → decision theory) | Mentions **neither** principal–agent theory, **nor** Borch's theorem, **nor** agency cost as entropy production. Not prior work for framework D |

## 4. Recent responsibility-gap literature (swept 2026-08-24 — **the general form of F01 existed**)

| Work | Content | Relation to F01 |
|---|---|---|
| **arXiv:2510.14008**, *Stop Reducing Responsibility in LLM-Powered Multi-Agent Systems to Local Alignment* | Argues for a shift from local agent-level alignment to system-level agreement | **The general form of F01. Must be cited.** But analyses no published governance document's text and formalises no termination rule |
| arXiv:2605.16300, *Consent Chain Degradation in Embodied Multi-Agent Systems* | Consent chain degradation and delegation drift | Structurally parallel mechanism, but **its object is consent, not responsibility** (the authors expressly distinguish the responsibility gap). Confined to embodied robots |
| arXiv:2503.13657, *Why Do Multi-Agent LLM Systems Fail?* | MAST/MASFT: 14 failure modes in 3 categories | Empirical corroboration. Nearest are FM-1.4 *Loss of conversation history* and FM-2.4 *Information withholding*; neither names orchestrator-to-subagent context degradation. No responsibility or governance discussion |

### Neighbouring work on AI-to-AI reporting (relevant to F02)

| Work | Content |
|---|---|
| arXiv:2511.17085, *Why Do Language Model Agents Whistleblow?* | WhistleBench |
| arXiv:2601.00360, *Mapping Human Anti-collusion Mechanisms to Multi-agent AI Systems* | Sanctions, leniency/whistleblowing, monitoring/auditing, market design, governance mapped onto AI; whistleblower agents as peers |
| arXiv:2606.25836, *AI Snitches Get Glitches* | Evading agentic surveillance |
| CSET, *AI Control: How to Make Use of Misbehaving AI Agents* | Untrusted monitors; collusion between monitor and monitored |

**None analyses the text of a published constitution's reporting provision.**

### Not swept

- "Consent as a runtime safety constraint for LLM agents" — **no work of that title
  located.** Neighbouring: arXiv:2503.18666 (AgentSpec), arXiv:2606.02668 (Consent
  Integrity for Black-Box LLM Agents). Both concern consent integrity and runtime
  enforcement, not responsibility
- Full text of arXiv:2601.00360 (abstract only)

## 5. Prior knowledge in practitioner literature (important)

In enterprise deployment, **accidents caused by context-degraded subagents are a known
operational problem.** A search on 2026-08-24 returned numerous practitioner articles on
orchestrator responsibilities, the accountability gap, least-privilege design, and stale
context.

- <https://engini.ai/blog/multi-agent-ai-orchestration-claude-subagents-enterprise-governance>
- <https://pub.towardsai.net/claude-code-subagents-and-main-agent-coordination-a-complete-guide-to-ai-agent-delegation-patterns-a4f88ae8f46c>
- <https://ccaf-exam.guide/docs/03-multi-agent-orchestration/>

**This cuts into F01's novelty**, and §4 shows that an academic statement of the general
form also exists.

What F01 may claim is only this: **two specific provisions of this governance document
fail to compose under a specific condition.** Do not relax that limit.

## 6. The AI constitutionalism research agenda

**Found 2026-08-24. The most important context for this project.**

A research community is already forming around this subject.

| Source | Content |
|---|---|
| Lawfare, *A New Research Agenda for AI Constitutionalism* (Working Group on AI Constitutionalism) | Argues AI constitutions are too consequential to remain the property of a few developers; sets out four strands, and **deliberately leaves the research questions blank as an invitation to contribute** |
| Lawfare, *Who Writes the AI Constitution?* | A First Amendment treatment: AI constitutions are protected speech, which raises constitutional obstacles to regulation |
| Nick Caputo, *Model Constitution* (Substack, launched August 2026) | "Toward a Philadelphia Project for AI." Johns Hopkins School of Government and Policy. Treats Claude's Constitution and OpenAI's Model Spec as constitutional texts |

### The four strands

1. **Values** — which values belong, and how conflicts among them are resolved
2. **Process and Authority** — how values are legitimately chosen, and what binds
   private developers
3. **Technical** — how values are designed into and verified within models
4. **Enforcement** — detection of and response to divergence

### Correspondence with the findings here

Points the agenda **expressly marks as unaddressed**:

| Unaddressed point | This repository |
|---|---|
| Amendment, versioning, transitional arrangements | **F03** → Strand Two |
| Responsibility attribution; multi-agent delegation | **F01** → Strand Four |
| Mutual monitoring and inter-instance duties | **F02** → Strand Four |
| Constitutional review; who interprets (the agenda concedes it "proposes no mechanism" for adjudicating conflicts) | **F05** → Strands Two and Four |

**All four correspond to gaps in the agenda.**

This is not evidence of novelty. It is evidence that **there is somewhere to send this.**
Where an agenda has deliberately left its questions blank, "no one has answered yet"
does not mean "no one has asked."
