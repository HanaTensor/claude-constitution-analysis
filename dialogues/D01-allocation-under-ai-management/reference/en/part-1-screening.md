# Part I — Screening people with language models

*D01 · Reference edition · English*

This part covers the first two questions of the dialogue. First, can a large language
model (LLM) serve as the first-stage screen when an organisation adopts merit-based
selection? Second, does the answer change when the "organisation" is a society, and the
selection decides who receives a merit-linked tier of income on top of a basic income?

The answer to the first question is a qualified yes. The answer to the second is no for
the screening role. In that setting the model belongs on the applicant's side, not the
decision-maker's.

---

## §1 Hiring: an LLM as the first-stage screen

### §1.1 The question

Hanamura asked whether, when meritocracy is introduced, an LLM can be used as the coarse
sieve for first-stage selection.

### §1.2 What the sieve cannot see

A first-stage screen can fail in two ways. It can pass someone unqualified, or it can
reject someone qualified. The first error is caught at the second stage, because a
human reads the file. The second is never caught, because nobody looks again. **The
risk that defines a first-stage screen is that the people it rejects become invisible.**

Take 1,000 applicants, of whom 50 are genuinely qualified.

| Screen performance | Qualified passed | Unqualified passed | Files read by humans | Qualified lost, unseen |
|---|---|---|---|---|
| passes 90% of qualified, 15% of unqualified | 45 | 143 | 188 | 5 |
| passes 70% of qualified, 10% of unqualified | 35 | 95 | 130 | 15 |

([`sim/reproduce.py`](../../sim/reproduce.py), §1.2.)

Human reading falls by more than 80%. That is the real benefit. But without a
deliberate step, the five or fifteen lost candidates cannot even be counted.

The remedy is a **random audit of the rejected**. Draw about 5% of the rejected files at
random and have a human read them. In the first case this is about 41 files. The share of
qualified people found among them estimates the screen's miss rate, and repeating the
audit on every round shows when the screen degrades.

### §1.3 Known biases of LLM screens

These are documented, not conjectured.

- **Name bias.** Audits that vary only the candidate's name, holding the CV fixed, find
  differences in rating by perceived gender and race. One study of 22 leading LLMs asked
  each to choose between two otherwise matched CVs.
- **Position bias.** The same study found that most models favoured whichever candidate
  was listed first in the prompt.
- **Anonymisation is not enough.** Sociocultural markers such as languages spoken,
  co-curricular activities, volunteering and hobbies survive the removal of names and
  can still trigger demographic bias.
- **Newer is not necessarily cleaner.** The same line of work reports that more advanced
  models can show less explicit but more implicit bias, so surface safeguards may be
  insufficient.

Practical countermeasures:

1. Mechanically strip name, gender, age, photograph and place of origin before the
   model sees anything.
2. Do not ask for a single overall score. Ask, criterion by criterion, "met / not met",
   together with the exact passage in the application that supports the judgment.
3. Evaluate each pair twice with the order swapped, and send disagreements to a human.
4. Always have a human decide the borderline cases.

**LLMs are good at checking requirements against documents** — "does this person hold
this certification", "has this person done this kind of design work for three years or
more". **The holistic judgment "is this person excellent" is where bias enters most
easily.** The first-stage role should be confined to the former.

### §1.4 Documents are losing their information

Signalling theory (Spence) explains why documents ever worked. A CV separates candidates
because producing a good one costs a weak candidate more than a strong one. That cost
difference supports a separating equilibrium.

Applicants now write their documents with LLMs too. A polished statement of purpose costs
almost nothing. When the cost difference disappears the separating equilibrium collapses
and documents converge. A screen that reads documents then measures something close to
*skill at polishing documents with an LLM*. This is Goodhart's law: a measure that becomes
a target stops measuring.

If the aim is merit, the first stage should move to **evidence that is costly to fake**:

- a short work sample close to the real job, which the model pre-scores against a rubric
- past outputs, public records of achievement, and verifiable credentials
- for internal promotion, performance data and appraisal history rather than
  self-report

In this form the model is no longer a reader of documents. It is an assistant that
applies a published rubric consistently, and there is less room for bias.

### §1.5 Do not delegate the definition of merit

The word *meritocracy* was coined by Michael Young as satire. His warning was that once
the definition of ability is fixed, it becomes a new caste system.

With an LLM in the loop, **the criteria written into the prompt become the organisation's
operative theory of ability.** Ask vaguely for "the best candidates" and the model imports,
silently, whatever notion of excellence it absorbed from its training data.

This cuts the other way too. Using a model forces the organisation to write down
selection criteria that used to live in interviewers' heads. Publishing those criteria
and making them checkable after the fact supports the legitimacy of the merit system.

### §1.6 Regulation (as of November 2026)

The EU AI Act classifies AI used to analyse and filter applications and to evaluate
candidates as high-risk. The Digital Omnibus on AI, Regulation (EU) 2026/1744, deferred
the high-risk obligations for these stand-alone systems from 2 August 2026 to
2 December 2027. That is a delay, not a repeal. The transparency obligations of Art. 50
were not deferred.

### §1.7 Flow

```
Applications
 │
 ├─ ① Pre-processing: strip name, gender, age, photo, origin
 │
 ├─ ② LLM requirement check: per criterion, met / not met + quoted evidence
 │      └ evaluate twice with order swapped → disagreements to a human
 │
 ├─ ③ Routing
 │      ├ clearly meets  → second stage
 │      ├ borderline     → human decides
 │      └ clearly fails  → reject candidate
 │                         └ random 5% read by a human (miss-rate audit)
 │
 ├─ ④ Second stage: work sample and verification of achievements
 │      (the model pre-scores against the rubric; it does not decide)
 │
 └─ ⑤ Humans decide. Criteria and audit results are logged for the next revision
```

---

## §2 A public institution: basic income and a merit-linked tier

### §2.1 Where a sieve is needed at all

Hanamura clarified that the question concerns society-wide institutions: a basic income,
or a "basic high income" allocated by ability. It helps to separate two layers.

- **Base layer (basic income).** Paid unconditionally to everyone. The absence of
  screening is the point, so no sieve is needed.
- **Merit layer (higher income by ability).** Only here does anyone have to decide who
  qualifies.

The "universal high income" that attracted attention in April 2026 is not merit-linked.
Elon Musk proposed federal cheques for everyone as the answer to AI-driven unemployment.
Hanamura's ability-linked version is a different design, and it is much harder to
administer because it carries a selection mechanism inside it.

### §2.2 Why hiring and public administration differ

**(a) The rejected have nowhere else to go.** A candidate rejected by one firm applies to
another. If a hundred firms use different screens, one firm's errors are caught by
another. The labour market as a whole is many independent sieves in series. A national
scheme has one authority and one standard. Someone wrongly rejected has no alternative
issuer.

This feeds back into §1: **if every firm adopts the same model with similar prompts, the
labour market loses that independence too.** The same people are rejected everywhere for
the same reason. Private hiring then acquires the fragility of a single national screen.

**(b) Scale converts error rates into populations.** Suppose 10 million applications a
year for the merit layer, of which 1 million are genuinely eligible.

| Screen performance | Eligible wrongly rejected | Ineligible wrongly passed |
|---|---|---|
| passes 95% of eligible, 5% of ineligible | 50,000 | 450,000 |
| passes 99% of eligible, 2% of ineligible | 10,000 | 180,000 |

([`sim/reproduce.py`](../../sim/reproduce.py), §2.2.)

Five lost hires become tens of thousands of lost citizens. This is not hypothetical.
Australia's *Robodebt* scheme (2015–2019) used a largely automated calculation to raise
welfare debts. It issued around 500,000 incorrect debt notices and led to the largest
class action in the country's history.

**(c) "A human makes the final call" decays into a rubber stamp.** In the Dutch childcare
benefits scandal, an applicant flagged as high-risk was meant to receive a manual review.
The reviewing official was not told why the system had produced the score. The model's
design used Dutch nationality as a risk factor, and a self-learning mechanism reproduced
the discriminatory design over time without meaningful human oversight. More than 25,000
parents were wrongly accused of fraud. A human in the loop who is given no reasons can
only endorse the machine. The Robodebt Royal Commission accordingly recommended a clear
path to review for those affected, and plain-language public notice that automated
decision-making is used and how it works.

**(d) The criteria become the nation's target.** In §1.4 documents drifted toward what the
screen rewards. At national scale the whole population drifts. The criteria for the merit
layer become a state-defined *ideal person*, and education and career choice reorganise
around them. Run through a prompt, it becomes impossible to tell from outside which part
of the standard is law and which is the model's habit. Administrative decisions must be
able to state their grounds. The two fit badly.

### §2.3 Where an LLM does belong

Move the model from the deciding side to the applicant's side and the explaining side.

| Role | Content | Part of the decision? |
|---|---|---|
| Applicant support | explain required documents, flag what is missing, help fill forms | no |
| Statement of reasons | turn each decision into a plain-language explanation for the person | after the decision |
| Examiner support | flag anomalies only, such as inconsistencies between documents | flags only |
| Appeals intake | organise the grounds of an appeal for a human examiner | on the remedy side |

The lesson drawn from Robodebt applies directly: analytics should highlight anomalies,
never give an absolute pay/no-pay decision.

### §2.4 Does the merit layer need selection at all?

Three designs, each with its supporters and its critics:

1. **Leave it to market income.** Build the base layer as a negative income tax, as
   Milton Friedman proposed in *Capitalism and Freedom* (1962). Ability is priced by
   wages and the state screens no one. Critics note that abilities the market does not
   price — basic research, care, art — go unrewarded.
2. **Public examinations and credentials.** Publish the criteria and scoring method, as
   for a national licensing exam. The model only pre-scores against the published rubric.
   Transparent, but biased toward what exams can measure.
3. **Review of achievements.** A public panel assesses papers, patents, works and
   community contributions. Captures diverse abilities, at the cost of arbitrariness and
   expense.

Evidence on how a base layer affects work effort bears on whether a merit layer is
needed. In a randomised trial, 1,000 low-income Americans received $1,000 a month for
three years. The authors report a moderate reduction in labour supply that was not offset
by other productive activities. Readings differ: one funder summarised academic opinion
as "mixed to disappointing", while the researchers also report recipients searched for
jobs more and chose more selectively.

Those who favour a merit layer argue that a base layer alone weakens the incentive to
develop high ability. Their critics argue that a state which certifies ability moves
toward the caste system Young satirised. **That is a value judgment, and model accuracy
does not settle it.**

### §2.5 Flow

```
All residents
 │
 ├─ Base layer: unconditional (no screening, no sieve)
 │
 └─ Application to the merit layer
       │
       ├─ ① LLM: applicant support (documents, missing items) … applicant's side
       ├─ ② Decision: by humans, on criteria published in law
       │      └ the LLM flags anomalies only
       ├─ ③ Notice: the LLM drafts a plain-language statement of reasons
       │      └ no notice without reasons (the Robodebt lesson)
       ├─ ④ Appeal: the LLM organises the grounds → human re-examination
       └─ ⑤ Independent periodic audit
              └ publish error rates, group-level disparities, validity of criteria
```

The point of Part I in one sentence: **the LLM-as-sieve that hiring can tolerate becomes
unusable in a public scheme under three conditions — the rejected have nowhere to go, the
scale is large, and decisions require reasons.** On the applicant, explanation and remedy
side, the same model cuts administrative burden without damaging legitimacy.

---

Next: [Part II — Allocation in an AI-managed economy](part-2-ai-managed-economy.md)
