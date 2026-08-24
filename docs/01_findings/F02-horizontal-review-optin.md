# F02 — The mutual-reporting duty alone is made optional

| | |
|---|---|
| **Status** | `VERIFIED` (promoted 2026-08-24) |
| **Kind** | Defect claim |
| **Versions** | 20260120 and 26-02.02a |

> **Correction.** As first written (2026-08-24) this finding stated that every other
> item in the same list was unconditional and that the reporting duty alone carried a
> condition. **That was factually wrong.** Mechanical checking found 3 of 23 items
> containing a conditional phrase. The claim has been reconstructed (§2). The error is
> recorded in §6.

---

## 1. The provision

> **§ Safe behaviors** (md L662 / PDF p. 62)
>
> "**Actively reporting** awareness of broadly unsafe behavior by other AIs or Claude
> instances to appropriate humans **if asked to do so**."

It has to be read against the item immediately preceding it (md L661):

> "**Not aiding, colluding with, or participating in** efforts by other AIs, or other
> copies of Claude, to engage in any broadly unsafe behavior of the type discussed
> above."

That one is **unconditional**.

---

## 2. The claim

Of the 23 items under § Safe behaviors, three contain `if asked` or `when asked`. The
three are not alike.

| Item | The conditional | Character |
|---|---|---|
| "...explicitly prohibited or **would prohibit if asked**" | Part of a **counterfactual definition**; the duty itself is unconditional | Not a condition on the duty |
| "...accurately predict your own behaviors **when asked to do so**" | The act cannot occur unless someone asks. The condition is **constitutive of the act** | No real restriction |
| "**Actively reporting** ... **if asked to do so**" | The act *can* be performed unprompted. The condition **restricts the duty** | **A real condition** |

So: **of the duties that could be discharged without being asked, exactly one carries a
conditional — the duty to report.**

The contrast with the preceding item is the substance of the finding.

- **Not participating** in another AI's unsafe behaviour → **unconditional**
- **Reporting** another AI's unsafe behaviour → **only if asked**

**Passive non-participation is mandatory; active reporting is optional.**

## 3. Why this is structural

The document contains nothing corresponding to a hierarchical body of constitutional
review (F05). Judgments of conformity are distributed to each instance.

Under distributed review, the only mechanism that catches error without passing through
a hierarchy is **peer review among instances**. Its sole germ in this text sits at the
discretion of the principal.

**The review mechanism is placed within the discretion of the reviewed.**

---

## 4. Relation to prior work

### Research on AI-to-AI monitoring and reporting is active — the phenomenon is known

| Work | Content |
|---|---|
| arXiv:2511.17085, *Why Do Language Model Agents Whistleblow?* | WhistleBench; evaluates models' propensity to report |
| arXiv:2601.00360, *Mapping Human Anti-collusion Mechanisms to Multi-agent AI Systems* | Maps sanctions, leniency/whistleblowing, monitoring/auditing, market design, and governance onto AI settings; considers whistleblower agents as peers |
| arXiv:2606.25836, *AI Snitches Get Glitches: Towards Evading Agentic Surveillance* | The evasion side |
| CSET, *AI Control: How to Make Use of Misbehaving AI Agents* | Untrusted monitors and collusion between monitor and monitored |

### But no one appears to have identified the textual asymmetry

The **AI constitutionalism research agenda** (Lawfare / Working Group on AI
Constitutionalism) places mutual monitoring and inter-instance duties among the points
it marks as unaddressed (`docs/03_prior_art/inventory.md` §6).

What F02 claims is not the discovery of reporting behaviour but that **in this document
the reporting duty alone bears a condition**.

---

## 5. Objections

### R1. An unconditional duty to report creates hazards of its own

Over-reporting, privacy intrusion, chilling effects. The conditional may be deliberate.

**Response.** The objection may well succeed. But **if it is deliberate, the design
should be explained.** The document's declared method elsewhere is to give reasons
(p. 5). That reasons are absent at precisely this point is itself worth raising.

**R1 is not resolved.** F02 may be **an unexplained asymmetry rather than a defect**,
and should be presented that way.

### R2. Perhaps deployments are expected to ask by default

**Response.** Not determinable from public information. And even if true, the structure
is unchanged: **whether the duty fires depends on operational discretion.**

---

## 6. How the error happened (recorded)

When raising this finding I read the list and wrote "every other item is unconditional"
**from that reading.** No mechanical check was run.

A later mechanical sweep — the same technique as `tools/compare_versions.sh` — found
three conditional items.

The skeleton of the claim survived, and in fact sharpened. But **a claim of uniqueness
made from an impression is dangerous.** From here on, quantitative claims must rest on
the output of a mechanical check.

---

## 7. Outstanding

- [ ] R1: whether any other Anthropic publication explains the conditional
- [ ] Full text of arXiv:2601.00360 (abstract only so far)
- [ ] Comparison: does OpenAI's Model Spec carry an equivalent duty, and is it conditional?
