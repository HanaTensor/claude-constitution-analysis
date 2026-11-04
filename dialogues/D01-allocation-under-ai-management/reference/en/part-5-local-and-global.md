# Part V — Local maximisation and global development

*D01 · Reference edition · English*

This part connects D01 to the main analysis in this repository. It is the only place where
D01 touches the findings in `docs/01_findings/`, and it does so by applying them, not by
extending them.

---

## §7 Why contest solutions fail, and what follows

### §7.1 Hanamura's diagnosis

On §5.4 (the contest-winning solution differs from the usable one), Hanamura gave the reason:
**the themes of machine-learning competitions were local maximisation.** He pointed to the
analysis of Claude's Constitution in this repository, which examined in four vocabularies how
local maximisation fails to become global optimisation. His conclusion: the local-optimisation
problem of competitions should be addressed developmentally, by **generating global tasks that
increase resources**, and it will not be solved overnight.

### §7.2 Two findings that apply

Two entries in `docs/01_findings/` bear directly on the competition problem.

- **F01**, in its general form (stated in `docs/01_findings/README.md`): summed local alignment
  is not system-level responsibility.
- **F04** (`RESTATEMENT`): the non-tradeability of hard constraints, described in four
  vocabularies — constitutional law, decision theory, optimisation, linear response. Its
  optimisation row reads: **weighted-sum scalarisation cannot reach a non-convex Pareto frontier;
  the ε-constraint method is required.**

### §7.3 F04's optimisation row justifies the scoring design of §5.7

Contest leaderboards almost always collapse to one number. Even with several indicators, the
ranking is a weighted sum. Entrants' solutions then cluster on the convex hull of the frontier.
Solutions in a concave region — reasonably high on both efficiency and wellbeing, extreme on
neither — never rank first under any choice of weights. **They become structurally invisible on
the leaderboard.**

In §5.7 the individual division was designed to "judge whether every axis clears its threshold,
without summing the indicators into one score". That is the ε-constraint method. The design was
reached by intuition in the dialogue; F04's row supplies the reason. **Under a summed score,
balanced people sink into the non-convex region and are never picked up.**

### §7.4 Why contests become local maximisation

Restating Hanamura's point: a machine-learning competition fixes the data and the evaluation
formula, so it asks for the maximum inside a **closed feasible region.** Entrants compete in the
craft of squeezing the last few per cent out of that region, and that craft is worthless outside
it.

The Netflix case adds a second factor. When the contest began, Netflix's main business was DVD
rental by mail; streaming then became the main business. While the contest held the problem
fixed, the world moved. The weakness of local maximisation is double: the region is fixed, and
the fixed region drifts away from reality unnoticed.

There is a counter-example. The deep convolutional network that won the ImageNet competition in
2012 transferred widely beyond the contest and changed the following decade. Under the same
contest format, **whether the winning solution transfers to other problems** decides whether it
remains a local win or becomes global progress.

### §7.5 Scoring tasks that "increase resources"

Hanamura's direction — enlarging the region rather than squeezing it — translates into scoring
as follows.

| | Local-maximisation task | Global task |
|---|---|---|
| Field of play | fixed factory, fixed formula | factory that changes and expands each round |
| What is contested | maximum with given resources | whether the usable resources themselves grew |
| Scoring | score in that round | score others gained by using the solution |
| Life of the solution | that round only | folded into the next round's baseline |

Two mechanisms carry it.

**First, ratcheting the baseline.** §5.6 defined the score as (human + AI) − (AI alone). Add one
step: fold each round's effective solutions into the next round's AI-alone baseline. A trick that
scored this round becomes a shared premise next round and scores nothing. Only those who enlarge
the region keep scoring. Like a ratchet, local tweaks are absorbed and only global progress
remains in the assessment.

**Second, scoring by contribution to others.** The lesson of F01 applies directly. If summed
local scores do not make global progress, measure the global progress and attribute it back to
individuals. When others adopt someone's solution and raise their scores, part of that rise is
credited to its originator, as with citations of papers or reuse of open-source code. Attribution
can use a contribution-allocation calculation such as the Shapley value.

Work in reinforcement learning on **co-evolving environments and solvers** is also relevant: as
solvers grow stronger, environments grow harder and broader, and a solution found in one
environment becomes a stepping stone to another. If the sandbox factory is not fixed but the AI
generates new tasks in response to entrants' solutions, the venue itself becomes a generator of
global tasks.

### §7.6 Why it will not be solved overnight

Hanamura's assessment holds, for three reasons.

- **Effects arrive late.** The value of work that increases resources is known only when others
  use it, perhaps years later. §4.4 showed that rates of change are buried in noise over short
  windows; global contribution can be measured only over longer ones still.
- **The task generator must know what is globally valuable.** This returns to the question left at
  §3.9: what the AI is told to optimise. If the task-generating AI's objective is local, the tasks it
  generates will be local too.
- **F04's property applies.** Non-negotiable constraints — worker safety, the analogues of hard
  constraints — must not be dissolved into a summed score even in global tasks. The more a task
  enlarges the region, the more the boundary of permissible enlargement must be fixed in advance.

### §7.7 Staging

```
 Local maximisation (contests as they are)
   fixed field → summed score → only convex-hull solutions survive → useless outside the field
                                   │
                                   ▼  developmental resolution, in stages
 ┌─────────────────────────────────────────────────────────────┐
 │ ① Scoring: drop the sum; judge by per-axis thresholds (ε-constraint, F04) │
 │ ② Ratchet: fold last round's effective solutions into the AI-alone baseline │
 │ ③ Credit by contribution to others: attribute reuse-driven gains (F01)      │
 │ ④ Task generation: expand the field with the solvers (co-evolution)         │
 │ ⑤ Non-negotiable constraints stay outside the sum while the field expands   │
 └─────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
   Remaining question: who sets the task generator's objective, and how
```

① and ② can enter the venue's rules immediately. ③ and ④ need long observation windows and a mature
task-generation mechanism. ⑤ holds from first to last. Separating the stages makes clear where to
start on a problem that "will not be solved overnight".

### §7.8 What this part does and does not claim

D01 **applies** F01 and F04; it does not extend them. Nothing here changes the status of any finding in
`docs/01_findings/`. The use of F04's optimisation row is a restatement of textbook multi-objective
optimisation (as F04 itself says), applied to a new object: the design of competitions for people.

---

Previous: [Part IV](part-4-kusegumi.md) · Appendices: [A](appendix-a-wooden-pagodas.md) · [B](appendix-b-claims-register.md) · [C](appendix-c-references.md)
