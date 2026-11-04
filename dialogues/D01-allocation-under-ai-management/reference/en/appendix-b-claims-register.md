# Appendix B — Claims register, contributions and corrections

*D01 · Reference edition · English*

This repository keeps novelty claims and restatements apart (`docs/01_findings/README.md`). D01 is
a dialogue record, not a set of findings, but the same discipline applies. Every idea of
substance is listed below with a status.

## B.1 Status vocabulary for dialogue records

The repository's vocabulary is reused, with one addition.

| Status | Meaning in a dialogue record |
|---|---|
| `RESTATEMENT` | Known theory or a documented fact, cited and used as a tool |
| `CANDIDATE` | A design idea or argument that appears to be our own; **prior art has not been checked** |
| `PREMISE` | An assumption set for the sake of argument; not asserted to be true |

No item in D01 is `VERIFIED`. Promotion would follow the procedure in
`docs/03_prior_art/verification-log.md`.

## B.2 Register

| # | Item | Where | Status | Origin |
|---|---|---|---|---|
| 1 | The defining risk of a first-stage screen is that rejections become invisible; audit a random 5% of rejections | §1.2 | `RESTATEMENT` (standard audit sampling) | Claude |
| 2 | Documented name, position and proxy biases of LLM screens | §1.3 | `RESTATEMENT` | literature |
| 3 | LLM-polished documents collapse the separating equilibrium; move to costly-to-fake work samples | §1.4 | `CANDIDATE` (application of Spence; likely discussed elsewhere) | Claude |
| 4 | When all firms use the same model, the labour market loses the independence of its many sieves | §2.2(a) | `CANDIDATE` (related to "algorithmic monoculture" literature, not yet checked) | Claude |
| 5 | A human in the loop without reasons decays into endorsement (Dutch benefits case) | §2.2(c) | `RESTATEMENT` | documented case |
| 6 | Place the LLM on the applicant, explanation and remedy side, not the deciding side | §2.3 | `CANDIDATE` | Claude |
| 7 | Premises: AI + robots earn revenue; AI manages people and allocation | §3.1 | `PREMISE` | Hanamura |
| 8 | Full observation by an AI principal removes adverse selection and moral hazard; selection becomes measurement | §3.2 | `RESTATEMENT` (agency theory) applied to a new setting | Claude |
| 9 | The measurer controls the opportunity to be measured; counter with an audited random exploration budget | §3.3 | `CANDIDATE` | Claude |
| 10 | In an AI economy, basic income is demand-side infrastructure; ownership, not ability, drives distribution | §3.5 | `CANDIDATE` (close to underconsumption and AI-dividend arguments; not checked) | Claude |
| 11 | Merit migrates from income to esteem (chess precedent) | §3.6 | `CANDIDATE` | Claude |
| 12 | For scarce human seats, threshold plus lottery beats ranking, and more so as measurement improves | §3.7 | `CANDIDATE` (selection-by-lottery literature exists; the "more precise → stronger case" framing not checked) | Claude |
| 13 | Self-publication as a recovery channel, judged by rate of change, with retrial | §4.1 | `CANDIDATE` | **Hanamura** |
| 14 | Decouple attention from assessment | §4.3 | `CANDIDATE` | Claude; endorsed by Hanamura as essential |
| 15 | Slope estimates need 6–12-month windows; raise fast, lower slowly | §4.4 | `RESTATEMENT` (least-squares error; control hysteresis) applied | Claude |
| 16 | The recovery screen must be independent of the first | §4.5 | `CANDIDATE` | Claude |
| 17 | Three channels: active, nomination, random | §4.6 | `CANDIDATE` | Claude, extending Hanamura's #13 |
| 18 | Read only what the person registers for assessment | §4.7 | `CANDIDATE` | Claude |
| 19 | Competition sandboxes with multi-dimensional, RPG-like indicators; voluntary entry resolves consent | §5.1 | `CANDIDATE` | **Hanamura** |
| 20 | Hidden scenarios, randomised employee models, real-world final gate | §5.3–5.5 | `RESTATEMENT` (ML competition and sim-to-real practice) applied | Claude |
| 21 | Score = (human + AI) − (AI alone) | §5.6 | `CANDIDATE` | Claude |
| 22 | Individual and team divisions; the team division finds counter-twisted members | §5.7 | `CANDIDATE` | Claude, from Hanamura's RPG analogy |
| 23 | AI can allocate people as materials to be combined, as temple carpenters combine timber by orientation | §6.1 | `CANDIDATE` | **Hanamura** |
| 24 | Demotion of "ill-fitting" subordinates removes the counterweight to the manager's own *kuse* (portfolio argument) | §6.3 | `CANDIDATE` | Claude, on Hanamura's #23 |
| 25 | Measure *kuse* as direction of deviation under load | §6.4 | `CANDIDATE` | Claude |
| 26 | The transmission's final line as a term in the AI's objective | §6.7 | `CANDIDATE` | Claude |
| 27 | Contest failure in production is due to local maximisation; resolve developmentally by generating resource-increasing global tasks | §7.1 | `CANDIDATE` | **Hanamura** |
| 28 | Per-axis thresholds are the ε-constraint method (F04 row) | §7.3 | `RESTATEMENT` | F04 |
| 29 | Ratcheting baseline; credit by contribution to others (F01 general form) | §7.5 | `CANDIDATE` | Claude, on Hanamura's #27 |

## B.3 Contributions

The dialogue took place on 5 November 2026 between **Satoshi Hanamura** and **Claude (Anthropic,
Opus 5.5)**.

**Hanamura** set every turn of direction: the original question (an LLM as first-stage screen); the move from hiring to society-wide basic income and a merit-linked tier; the four premises
of Part II and the request to drop the conservative frame; the self-publication feedback loop (#13);
the competition arena (#19); the temple-carpentry analogy (#23); the diagnosis of contests as local
maximisation and its link to this repository's F01 and F04 (#27); and the decision to record the
dialogue in two languages and two depths.

**Claude** supplied the analysis within each turn: the quantitative tables and the script that
reproduces them, the web searches behind the documented cases and regulations, the design
countermeasures, and the drafting of this record.

## B.4 Corrections made in the course of the dialogue

1. **Pagoda storeys.** Hanamura's message referred to a five-storey pagoda at Yakushiji. The pagodas
   rebuilt under Nishioka (Yakushiji West Pagoda, Hōrinji) are three-storey; Yakushiji's look
   six-storeyed because of the *mokoshi*. Recorded in §6.1 and Appendix A.
2. **Audit size.** In the dialogue the random 5% audit of rejected files in §1.2 was given as about 48
   files. The correct figure, 5% of the 812 rejected files, is about 41. The record uses 41.
3. **Script.** The reproduction script was first named `numbers.py`, which shadows Python's standard
   library module `numbers` and breaks `numpy`'s import. It is named `reproduce.py`.

## B.5 Limits

- All numbers are illustrative. They show the shape of an effect under stated assumptions, not
  estimates for any real institution.
- Facts about regulation and documented cases are as of 5 November 2026 and should be rechecked
  before reuse.
- Political questions — whether to adopt a basic income or a merit tier — are presented with arguments
  on both sides and are not decided here.
