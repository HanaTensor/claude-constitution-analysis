# Part III — Recovering those the system drops

*D01 · Reference edition · English*

Part II ended with a structural fault: when AI assigns the work, it also decides who gets
the chance to show ability (§3.3). This part records two safety nets Hanamura proposed
against that fault, and how each must be built so that it does not reproduce the fault
it was meant to fix.

---

## §4 A feedback loop through self-publication

### §4.1 The proposal

Hanamura proposed the following. People advertise what they can do on YouTube, social
media, note.com and similar platforms, and publish their outputs where they have them. The
AI senses these signals, screens them, and tracks each person's ability as close to real
time as possible. **Depending on the rate of change**, it re-hires the person or assigns
harder tasks in a retrial process. This is a feedback mechanism: people who fell out are
recovered.

### §4.2 Why it works

The fault in §3.3 was that the only door to opportunity was on the AI's side. The proposal
**adds a door on the person's side.** In Hirschman's terms, of exit and voice, it gives voice
an institutional channel. And the voice is not a self-description but a published output.
§1.4 argued that documents lose value once an LLM can polish them, and that evidence should
move to costly-to-fake work samples. A published output is exactly such a work sample.

The second strength is that it judges **rate of change rather than level.** Under a
revenue-optimising AI, small initial differences lock in (§3.3). Comparing levels, a late
starter can never catch up. Comparing slopes picks up someone who starts low but is rising
fast. This is the most direct way to break path dependence.

Four places where the design breaks if built carelessly follow.

### §4.3 Weak point ①: the platforms run their own algorithms

YouTube, social media and note.com are themselves attention markets allocated by
recommendation algorithms, and views and likes are extremely skewed. If the AI finds outputs
by their view counts, **the platform's recommender decides who gets the chance to be
measured, and §3.3 reappears nested inside the remedy.**

The countermeasure is to **decouple attention from assessment.**

- The AI reads every registered output directly, whatever its view count.
- Only the content enters the assessment. Popularity is not an input.

A video with zero views must be found exactly as readily as a popular one if its content is
good.

### §4.4 Weak point ②: "real-time rate of change" is fragile to noise

Suppose each month's ability measurement carries noise of standard deviation σ. The standard
error of the least-squares slope depends on the observation window as follows.

| Observation window | Standard error of the monthly slope |
|---|---|
| 3 months | 0.71 σ |
| 6 months | 0.24 σ |
| 12 months | 0.08 σ |

Closed form: σ · √(12 / (n(n² − 1))). ([`sim/reproduce.py`](../../sim/reproduce.py), §4.4.)

Differentiation amplifies noise, just as computing acceleration from a measured velocity field
in fluid measurement makes the error jump. Over three months the slope error is close to the
error in the level itself, and real improvement cannot be told from noise. **If assignments
react to the slope "in real time", the system reacts to noise and oscillates.**

From a control standpoint, two things stabilise it.

- **Smoothing.** Estimate slopes over 6–12-month windows. Levels are read immediately;
  change is read over time.
- **Hysteresis with asymmetric gain.** Raise fast, lower slowly. A wrong upgrade costs
  little, because the next trial reveals it. A wrong downgrade is expensive, because the
  person loses the chance to show ability again. When error costs are asymmetric, response
  speeds should be too.

### §4.5 Weak point ③: a recovery screen identical to the first screen is useless

Not every published output can be sent to a trial, so recovery needs a sieve too. Suppose the
first allocation misses 5% of capable people, half of whom publish and appeal.

| Recovery screen | Rescue rate among appellants | Capable people still lost |
|---|---|---|
| independent of the first (other organisation, other model) | 80% | 3.0% |
| the same model as the first (shares its blind spots) | 20% | 4.5% |

([`sim/reproduce.py`](../../sim/reproduce.py), §4.5.)

Re-examination by the same model rejects the same people for the same reason. This is the
single-sieve problem of §2.2(a) again. **The recovery channel must be run by an organisation
and a model other than the AI that made the original assignment.** It is the AI version of
the principle that a retrial is heard by a different judge.

### §4.6 Weak point ④: some abilities produce no outputs

- **Preventive work.** Averting an accident, or noticing the early sign of a failure and
  stopping it, succeeds precisely when nothing happens. A maintenance engineer who hears an
  abnormal bearing noise in a pump and replaces the bearing leaves no trace except a pump that
  did not fail.
- **Work inside teams.** The contribution of a coordinator cannot be cut out as an
  individual work.
- **Uneven skill at self-promotion.** People who dislike selling themselves, or who have no
  time to publish because of care duties, do not reach the channel even if they are able.

A channel that relies only on publication risks turning into a measure of self-promotion.
Run three channels.

| Channel | Who triggers it | Whom it catches |
|---|---|---|
| ① active: publishing outputs | the person | those who publish, those with works |
| ② nomination: by colleagues and the shop floor | others | preventive work, work inside teams |
| ③ random: the exploration budget of §3.3 | the institution | those who neither publish nor are nominated |

Channel ① is Hanamura's proposal. Channel ② cross-checks the AI's work logs against testimony
from people on site. Channel ③ is the last net for people no one spoke up for.

### §4.7 A line so that it does not become surveillance

An AI that continuously reads everything people post in order to judge ability is, as it
stands, permanent surveillance of the population. If hobby writing and idle posts become
assessable, people stop posting freely.

The line is **to read only what the person has designated for assessment** — "register this
video and this article as evidence of my ability". Surveillance becomes declaration. The
person submits when they wish and withdraws when they wish.

### §4.8 The feedback mechanism

```
                ┌───────────────────────────────────┐
                │ AI assigns work (first instance)     │
                │ continuous measurement; levels now   │
                └──────────┬────────────────────────┘
                           │ people missed
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
   ① active channel    ② nomination       ③ random channel
   person registers    colleagues and      exploration 5–10%
   outputs (only       site + work-log     (by the institution)
   registered items)   cross-check
   (views ignored)
         └─────────────────┼─────────────────┘
                           ▼
            ┌───────────────────────────────────┐
            │ Recovery review (retrial)            │
            │ different organisation, other model   │
            │ slope estimated on 6–12-month window  │
            └──────────┬────────────────────────┘
                       ▼
            ┌───────────────────────────────────┐
            │ Trial: actually assign harder work   │
            │ results measured under observation   │
            └──────────┬────────────────────────┘
                 success│ failure
          ┌─────────────┴─────────────┐
          ▼                           ▼
   raise assignment at once     lower slowly
   (fast up)                    (slow down; may appeal again)
          └──────→ back into first-instance measurement ←┘
```

**A published output is treated not as grounds for a decision but as a petition for a
trial.** In a world flooded with AI-generated material, an output alone cannot establish that
it reflects the person's own ability. The observed trial that follows does. The output is the
key that opens the door to a retrial, not the verdict. Placed this way, the system is also
partly protected from being led by self-promotion or AI-polished appearance.

---

## §5 Competition arenas

### §5.1 The proposal

Hanamura answered the surveillance concern of §4.7 constructively: set up **competition
venues.** To select candidates for production-management engineering, stand up a sandbox on
the web that reproduces a smart factory. Under given conditions, did the candidate raise
production efficiency? Quantify employee wellbeing — did the candidate raise both in balance?
Collect indicators across many dimensions rather than one, and assess people for all-round
ability, much as role-playing games quantify a character's distinctive statistics. Machine
learning had competitions too. **Because people come to have their own ability measured,
they are not unwilling.**

### §5.2 What it solves

Consent is solved: someone who comes to the venue asking to be measured is sitting an
examination, not being watched.

It also serves Part IV (§6.4). A timber's *kuse* — its habitual twist — shows only when it is
dried or loaded. **The sandbox factory is the drying kiln.** Equipment failures, demand
shocks and absent experts can be injected deliberately, and the direction in which each
candidate deviates can be observed. A real factory cannot be subjected to such shocks; a
virtual one can, as often as needed.

The history of machine-learning competitions supplies three lessons to carry over.

### §5.3 Lesson ①: the top of the leaderboard contains luck

Suppose every entrant has exactly the same ability and each score carries only noise of
standard deviation σ. How far above the mean does the top score land?

| Entrants | Top score above the mean |
|---|---|
| 10 | 1.5 σ |
| 100 | 2.5 σ |
| 1,000 | 3.2 σ |
| 10,000 | 3.9 σ |

([`sim/reproduce.py`](../../sim/reproduce.py), §5.3.)

With 10,000 entrants nationwide, the winner sits about 4σ high even with no differences in
ability at all. The top of a leaderboard is ability and luck together. This is why Kaggle has
repeatedly seen public-leaderboard leaders fall sharply on the final private data.

Countermeasures:

- **Final assessment on hidden scenarios**, separate from the public practice scenarios.
- **No single-shot contests.** Many scenarios under different conditions; examine both mean
  and stability.
- **Judge by threshold, not rank** — continuing §3.7.

### §5.4 Lesson ②: the contest-winning solution differs from the usable one

In 2009 Netflix paid $1 million to a team that improved its recommendation accuracy by 10%.
The winning entry blended more than 800 models from four teams; it was engineered to win a
contest and was unsuited to production. Netflix judged that the additional accuracy did not
justify the engineering effort needed to put it into production. Meanwhile the business had
shifted from DVDs by mail to streaming, so the problem itself had changed.

In the production-management arena, a candidate could push the sandbox score to its limit with
a plan nobody can operate in a real factory. So **legibility of the plan, operating effort,
and ease of revision when conditions change** become scoring axes. Changing the factory's
conditions mid-contest — a new product mix, one more machine — measures adaptability.

(Hanamura's diagnosis of *why* contest winners fail in production is taken up in Part V.)

### §5.5 Lesson ③: simulated "wellbeing" is not wellbeing

The wellbeing indicator is the most fragile part of the venue. The simulated employees are a
model built by the organiser. Candidates optimise *the model of wellbeing*, not human wellbeing.
A candidate who discovers the model's quirks — "breaks every so many minutes make wellbeing
spike" — scores highly with moves that would fail with real people. Goodhart's law again.

Methods used in robotics to transfer from simulation to reality help.

- **Randomise the employee model each time.** Not one wellbeing formula but employees of
  differing fatigue, preferences and relationships, combined at random per scenario. Solutions
  tuned to a particular model's quirks break when conditions change.
- **Hide part of the scoring formula.** Do not reveal everything that drives wellbeing.
  Candidates must infer it by observing the employees — the same condition a real supervisor
  works under.
- **Check the final stage with real people.** Candidates above the threshold run a small real
  process for a period. The observed trial of §4.8 becomes the last gate.

### §5.6 Measure the human-plus-AI increment

Under the premises, candidates will use AI as a tool, and there is no reason to forbid it. What
matters in that world is what a person adds working with AI.

Run every scenario with **AI alone** as the baseline:

> candidate's score = (result of candidate using AI) − (result of AI alone)

Part II (§3.4) placed human value in relieving the bottlenecks of AI production. This difference
measures exactly that. A high score on a problem AI solves alone adds nothing. Scenarios are
designed so that differences arise where AI gets stuck: exception handling, reconciling
interests, reframing the problem.

### §5.7 Taking the RPG analogy one step further

Quantifying ability across dimensions, RPG-style, works:

| Indicator | Measured in the sandbox by |
|---|---|
| Production efficiency | uptime, lead time, inventory turnover |
| Employee wellbeing | satisfaction and attrition signs in randomised employee models |
| Resilience to shocks | recovery speed after injected failures or demand shocks |
| Operability of the plan | plan complexity, amount of revision when conditions change |
| Increment over AI | difference from the AI-alone result |

But RPGs teach something else: **it is a party that fights, not a single all-round hero.**
Warrior, mage and priest each have lopsided abilities, and they are strong because combined.
This is the same idea as the temple carpenters' *kusegumi* in Part IV.

So run the venue in two divisions.

- **Individual division.** For integrating roles such as production management. These need
  balanced ability, so the indicators are not summed. The judgment is whether every axis clears
  its threshold. (Part V shows this is the ε-constraint method.)
- **Team division.** Strangers are grouped and solve scenarios together. What is recorded is not
  individual balance but whether the team's variance fell with a given person in it. Some people
  score unremarkably alone yet lift every team they join. Those are the counter-twisted pillars of
  Part IV, and an individual division alone will never find them.

### §5.8 Flow

```
Person enters voluntarily (consent resolved)
 │
 ├─ Practice: unlimited attempts on public scenarios (leaderboard for reference only)
 │
 ├─ Individual division (candidates for integrating roles)
 │    ├ several hidden scenarios
 │    ├ inject shocks → observe direction of deviation and recovery speed
 │    ├ employee model randomised each time; part of the scoring formula hidden
 │    └ judgment: every axis above threshold (no sum, no ranking)
 │
 ├─ Team division (groups of strangers)
 │    └ record: did team variance fall when this person joined
 │
 ├─ Baseline: the same scenario run by AI alone
 │    └ score = (human + AI) − (AI alone)
 │
 ├─ Final gate: run a small real factory process for a period
 │
 └─ Results feed the reassignment (kusegumi, Part IV)
       └ failing is not final: retry on the next round under new conditions
```

"Retry as often as needed" is what makes the venue part of the feedback mechanism of §4. A single
examination does not decide a life; the door opens as far as the person has grown. The
slope-based recovery of §4 runs most naturally with this venue as its entrance.

---

Previous: [Part II](part-2-ai-managed-economy.md) · Next: [Part IV — Combining people by their grain](part-4-kusegumi.md)
