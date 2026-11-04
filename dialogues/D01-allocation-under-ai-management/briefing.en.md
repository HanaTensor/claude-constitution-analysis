# D01 Briefing — Allocating people and income under AI management

*Satoshi Hanamura with Claude (Opus 5.5) · dialogue of 5 November 2026 · English*

**Read this first.** This is the short version. Every point below is developed, with numbers,
sources and diagrams, in the reference edition (`reference/en/`). Section marks (§) point there.

---

## The question

Can a large language model (LLM) act as the first-stage screen when merit-based selection is
introduced — first in hiring, then in a society-wide scheme of basic income plus a merit-linked
income tier? The dialogue then removed its own conservative limits and asked what selection means
when AI and robots earn the revenue and AI manages people.

## Seven conclusions

**1. In hiring, yes — as a sieve whose rejections can be recovered (§1).** A screen's defining risk is
that the people it rejects become invisible. Audit a random 5% of rejections. Confine the model to
checking stated requirements against evidence, not judging "excellence", where documented name,
position and proxy biases enter. Because applicants now polish documents with LLMs, documents are
losing their signalling value; move the first stage to work samples that are costly to fake.

**2. In a public scheme, no — the model belongs on the applicant's side (§2).** Three conditions
break the sieve: the rejected have nowhere else to go, scale turns small error rates into tens of
thousands of people, and administrative decisions require reasons. Australia's Robodebt and the Dutch
childcare benefits scandal show the failure modes, including a "human in the loop" who is given no
reasons. Use the model for applicant support, statements of reasons, anomaly flags and appeals. A
side effect: if every firm uses the same model, private hiring loses the independence of its many
sieves too.

**3. Under AI management the sieve disappears, and a deeper fault appears (§3).** An AI that both
assigns work and observes outcomes removes the information asymmetry that screening exists to solve;
selection becomes continuous measurement. But the measurer now decides who gets the chance to be
measured. Counter it with an audited exploration budget: a fixed share of stretch assignments made at
random.

**4. Income follows ownership, not ability; merit moves toward esteem (§3.5–§3.6).** An AI economy needs
buyers, so a basic income becomes demand-side infrastructure. As human marginal contribution shrinks,
distribution is decided by who owns the AI and robots. Merit persists, as in human chess after machines
surpassed it, but it is paid in attention and regard. For scarce seats that must be held by people,
select by threshold plus lottery: with measurement correlation 0.9, nearly half of a top-1% ranking is
noise.

**5. Recovery channels must not repeat the original fault (§4–§5).** Hanamura proposed that people publish
their work, the AI track their rate of improvement, and those who fell out be retried on harder tasks.
To work, it must decouple attention from assessment (ignore view counts), estimate slopes over 6–12
months and move "up fast, down slowly", route appeals to an independent organisation and model, add
nomination and random channels for abilities that leave no artefact, and read only what the person
registers. Hanamura's competition sandbox — a virtual smart factory scored on several axes — resolves
consent and serves as a kiln that reveals how people deviate under shocks. Score the increment over AI
alone, hide final scenarios, and randomise the simulated employees.

**6. Combine people by their grain, as temple carpenters combine timber (§6).** Japanese temple carpenters
assemble a pagoda "not by dimensions but by the twist of each timber", setting right-twisting members
against left-twisting ones (Appendix A explains the tradition). A manager judging one-to-one
compatibility tends to remove precisely the subordinate who cancels his own tendencies; in a portfolio
model the opposite-tendency pair has one-ninth the variability of the like-minded pair. An AI that sees
the whole organisation can solve this as a combinatorial problem. The tradition's last line — the master's
consideration for his craftsmen — belongs in the AI's objective.

**7. Contests reward local maximisation; the remedy is developmental (§7).** Following this repository's F04,
a summed leaderboard cannot reach non-convex parts of the frontier, so per-axis thresholds (the
ε-constraint method) are required. Following F01's general form, summed local scores are not global
progress; ratchet each round's best solutions into the next baseline, and credit people for gains others
make with their work. This will not be solved overnight.

## What remains open

Who sets the objective of the AI that allocates resources and generates tasks, and by what procedure. That
is a question of governance, and people must still decide it politically. See `../open-questions.md`.

## Status

D01 is a dialogue record. Its ideas are catalogued as `RESTATEMENT`, `CANDIDATE` or `PREMISE` in
Appendix B; none is `VERIFIED`. Numbers are illustrative and reproducible with `sim/reproduce.py`.
