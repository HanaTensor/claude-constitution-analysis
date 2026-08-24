# F03 — No transitional provision answers the 90-day synchronisation commitment

| | |
|---|---|
| **Status** | `VERIFIED` (promoted 2026-08-24) |
| **Kind** | Defect claim |
| **Versions** | 20260120 and 26-02.02a |

---

## 1. The facts (confirmed against primary sources)

1. The document contains **no amendment provision**. Anthropic revises it at will.
2. It describes itself as "a perpetual work in progress" (md L134 area / p. 9).
3. In its Frontier Safety Roadmap (10 July 2026) Anthropic states, **verbatim**:

> "We will ensure that the public Claude's Constitution stays in sync with what we use
> internally (specifically, updating it to match the most recent trained-on Constitution
> **within 90 days** of relevant internal or external deployments of models trained on
> updated Constitutions)."

> "We will run an oversight process over a representative sample of our
> production-relevant post-training data and rewards to evaluate alignment with the
> Constitution, aiming to ensure that we review for any egregious inconsistencies with
> the Constitution in ways that Claude itself can detect and will describe this
> oversight process in our Risk Reports."

4. **The Roadmap does not address which version governs an already-deployed model, any
   transitional arrangement between versions, or what becomes of running deployments
   when the constitution changes** (confirmed 2026-08-24).

## 2. The claim

When the text is revised, nothing — in the constitution or in the Roadmap — determines
**which version governs a task already in flight**.

This is the absence of the analogue of **transitional provisions** and of
**non-retroactivity**.

There is a second consequence. Because up to 90 days of divergence between the public
text and the trained-on text is permitted, **the provision that ought to be cited and
the provision that was actually implemented can come apart by construction.** An
external analyst or auditor reasoning from the public version may be reasoning about a
model that runs on another.

## 3. Why this is not minor

It compounds with F01. If the terminus of responsibility is undetermined **and** the
governing version is undetermined, after-the-fact attribution fails twice over.

In multi-step delegation it is constructible that an orchestrator and its subagents are
models trained on different versions. Which governs is unspecified.

## 4. Relation to prior work

**The AI constitutionalism research agenda names this territory as unaddressed.**

Lawfare's *A New Research Agenda for AI Constitutionalism* (Working Group on AI
Constitutionalism) sets out four strands. On amendment, versioning, and transition it
notes only that constitutions are "amendable and able to be regularly updated," and
**offers no framework for how changes occur, who decides, or how transitions between
versions function.**

Neither Lawfare's *Who Writes the AI Constitution?* (a First Amendment treatment) nor
Nick Caputo's *Model Constitution* (launched August 2026) discusses versioning or
transition.

F03 is a **concrete instance** placed in that gap.

## 5. Objections

### R1. Constitutions ordinarily do not carry transitional provisions

They are left to subordinate norms.

**Response.** This document **has no subordinate layer** (F05: direct application to
every instance). There is nothing to leave them to. And the Roadmap does not supply
them either (§1.4).

### R2. Weights are frozen, so the governing version is determinate *(strong)*

Technically true.

**Response.** Frozen weights do not close **the divergence between the published text
and the trained-on text**. With 90 days permitted, any evaluation, audit, or attribution
reasoning from the public version may not match the model's actual norms. F03 claims
indeterminacy **of the reference norm**, not of the implementation.

Collapse that distinction and R2 wins. It must be stated explicitly in any issue text.

## 6. Outstanding

- [ ] Whether Anthropic's system cards or Risk Reports describe version management
- [ ] Comparison: do other published specifications (e.g. OpenAI's Model Spec) carry
      versioning or transitional provisions?
