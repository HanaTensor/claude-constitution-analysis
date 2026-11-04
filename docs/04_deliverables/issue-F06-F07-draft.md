# Draft GitHub issue — F06 and F07

**Destination**: https://github.com/anthropics/claude-constitution/issues
**Poster**: Satoshi Hanamura, in person
**State**: **POSTED 2026-11-05 JST (2026-11-04 UTC, as GitHub displays it)** as
[anthropics/claude-constitution#12](https://github.com/anthropics/claude-constitution/issues/12).
The filed text is `build/issue-body-F06-F07.md` (first line is the title). It differs from the draft below only in
layout: each paragraph was joined onto one line, because GitHub renders single line breaks in issues literally,
and the closing rule was dropped. No wording changed.

> **Expectations.** See [`channel-assessment.md`](channel-assessment.md). The upstream repository has had no
> commit since 2026-01-28 and no Anthropic comment on any external issue. This is filed as a public,
> timestamped record, **not as delivery**. Nothing is sequenced behind a reply.

## Rules for this draft

- One issue for both findings. They share a subject — Claude evaluating people — and the upstream repository
  is quiet; two issues would add noise, not reach.
- A separate issue rather than a comment on #8. #8 concerns responsibility among Claude instances; this
  concerns people outside the conversation. Mixing them would blur both.
- No theoretical apparatus beyond what the claim needs. The basic-income dialogue (D01) that produced these
  findings stays out; it is linked only through the repository.
- Quote verbatim and locate. State the narrowing honestly: name the provisions that already reach the case.
- Cite the general form (algorithmic management; Bommasani et al. 2022) and claim only the textual gap.
- Disclose the authorship.

---

## Draft body

**Title:** Two gaps when Claude evaluates people who are not in the conversation

---

When Claude screens applicants or evaluates workers, the people decided about are usually not in the
conversation: their CVs and work logs arrive as documents and tool results. The document reaches them through
general provisions, but two things appear to be missing.

### 1. No operator-proof floor for people Claude evaluates or directs outside the conversation

Principals are defined by the flow of instructions to Claude:

> "those whose instructions Claude should give weight to and who it should act on behalf of … This is distinct
> from those whose *interests* Claude should give weight to, such as third parties in the conversation."
> (§ What constitutes genuine helpfulness)

Users receive defaults that hold "Regardless of operator instructions", because they "are primarily there to
maintain the trust, wellbeing, and interests of the user" (§ Handling conflicts between operators and users).

A person who is evaluated but never talks to Claude receives real but general protection: operator
instructions yield where they would cause "significant harm to third parties"; harm-weighing covers "those
inside or outside of the conversation"; "Equal and fair treatment of all individuals" is a value to weigh;
and Claude must be calibrated in what it asserts.

What has no counterpart to the user defaults is anything the operator cannot remove and that concerns the
evaluated person specifically: **reasons** available to them, the evaluation's **uncertainty communicated to
them** (as opposed to reported accurately to the operator), and a **route to contest**. The same person facing
the same evaluation gets operator-proof protection if they happen to be the user, and weighable protection if
they are the subject.

*Failure case.* Claude ranks plant workers from their logs and recommends discipline for one. It reports the
ranking's uncertainty accurately to the operator. A qualified human reviews it and the worker is told AI was
used, as Anthropic's Usage Policy requires for employment decisions. Whether the worker ever sees reasons, the
uncertainty, or a way to contest is decided by the operator alone. Unless the harm reaches "significant harm to
third parties", nothing gives Claude a disposition that survives an instruction to give the worker no
explanation.

### 2. Duplicated errors are a reason for caution, not a harm concentrated on the people decided about

The document already says that Claude's "errors can compound or be duplicated across conversations"
(§ Having broadly good values and judgment), uses it as a reason for "a strong prior toward conventional,
expected behavior", and names "a homogenization of views" as a societal harm (§ Being honest). It also assigns
the view across interactions to Anthropic: "Anthropic has visibility into patterns across many interactions …
that individual conversations may not reveal."

None of this is applied to the **distribution of outcomes over the people Claude evaluates**. When many
operators screen the same pool of applicants with Claude, an error about a particular kind of profile is
repeated by every operator: the same person is rejected everywhere, for the same reason. Each operator sees an
acceptable error rate. The values Claude weighs apply case by case, and the concentration is visible in no
single case. (With a 10% wrongful-rejection rate, applying to 20 independent screens leaves a 10⁻²⁰ chance of
rejection by all; if every screen shares the error, it stays at 10%.)

So duplicated errors appear only as a reason for caution about unilateral action, homogenisation only for
views, and the side that holds the cross-deployment view states no commitment about outcome concentration.

### Relation to existing work

Both phenomena are known: opacity and contestability under algorithmic management, and outcome homogenisation
under algorithmic monoculture (Kleinberg & Raghavan, *PNAS* 2021; Bommasani et al., NeurIPS 2022,
arXiv:2211.13972). The nearest readings of this document — Varma (Substack, 2 Nov 2026) on correlated Claude
instances and the "many hands" provision, and Frazier (*Lawfare*, 21 Jan 2026) on protections varying with
position in the technology stack — address neither gap. This report claims only that the text does not
regulate these cases.

### Possible starting points (offered only as drafts)

> Where Claude evaluates, ranks, or directs people who are not parties to the conversation, it should by
> default produce reasons and a statement of uncertainty that can be passed to the person affected, and should
> not follow operator instructions to make its evaluation inexplicable to that person.

> When evaluating people at scale, Claude should prefer threshold judgments with stated uncertainty to fine
> rankings on differences within its margin of error, mindful that the same evaluation may be repeated for the
> same people across many deployments.

Checked against the `20260120` markdown and the `26-02.02a` PDF; every provision cited is identical in both.

**Disclosure.** This report comes out of a longer structural analysis, and much of it — including this text —
was drafted by Claude (Opus 5.5). Both claims were narrowed after an adversarial review found provisions the
first versions had missed. The full record, including the limits of its prior-art checking, is at
https://github.com/HanaTensor/claude-constitution-analysis (findings F06 and F07).

---

## Pre-posting checklist

- [x] F06 and F07 have reached `VERIFIED` (2026-11-05)
- [x] Narrowed after adversarial review; provisions that already reach the case named in the body
- [x] Published analyses swept (sets A and B, `verification-log.md`, 2026-11-05)
- [x] General forms cited (algorithmic management; Bommasani et al.; Kleinberg & Raghavan)
- [x] Nearest readings (Varma; Frazier) distinguished in the body
- [x] **On the day:** upstream unchanged — last commit 2026-01-28, SHA-256 `251440a7…` matches `sources/PROVENANCE.md`
- [x] **On the day:** Usage Policy employment requirements checked the same morning (review; disclosure)
- [x] Body length: 5,425 characters (`wc -m`), against ~4,200 for #8. The paste-ready body is `build/issue-body-F06-F07.md`
- [x] Recorded: #12, here and in `log/worklog.md`
