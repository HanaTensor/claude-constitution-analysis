# Part IV — Combining people by their grain

*D01 · Reference edition · English*

Readers unfamiliar with Japanese temple carpentry should read
[Appendix A](appendix-a-wooden-pagodas.md) first. It explains what a Japanese wooden pagoda
is, how it is built, who Nishioka Tsunekazu was, and what the oral transmissions of the
Hōryūji carpenters say. This part assumes that background.

---

## §6 *Kusegumi*: allocation as combining materials

### §6.1 Hanamura's claim

Hanamura agreed that decoupling attention from assessment (§4.3) is essential, and then
moved the argument somewhere new.

Human organisations have always produced demotions of capable people whose temperament
did not suit their superior. AI can treat this "personality problem" not as a matter of a
boss's likes and dislikes but as **a problem of combining materials**, which it has the
capacity to allocate. The temple carpenters who rebuilt Yakushiji knew that if timber that
grew on the north side of the mountain is set on the north face of a pagoda, and timber
from the south side on the south face, the tower better withstands wind, snow and changes
of temperature.

*(A factual note recorded in the dialogue: the pagodas Nishioka built — the West Pagoda of
Yakushiji and the pagoda of Hōrinji — are both three-storey pagodas. Yakushiji's look
six-storeyed because each storey carries an auxiliary pent roof, the* mokoshi*. See
Appendix A.)*

### §6.2 The transmission in brief

The Hōryūji carpenters' oral teaching runs in three steps (details in Appendix A §A.4):

- **"Do not buy timber; buy the mountain."** Build one hall or tower from the trees of one
  mountain, rather than choosing logs one by one at market.
- **"Use timber in the orientation in which it grew."** Trees from the south of the mountain
  go on the south of the tower, trees from the north on the north. Trees from ridges and upper
  slopes, beaten by sun, wind and storm, are dense and strongly twisted; they become structural
  members — columns, beams, purlins. Trees from valleys become finish carpentry.
- **"Assemble a tower not by dimensions but by the twist (*kuse*) of each timber."** A timber
  that tends to twist right is set against one that tends to twist left, so that the two lock
  each other and the whole does not warp. This is *kusegumi*, "assembly by twist".

The transmission then continues: the assembly of timbers by their twist is the assembly of the
craftsmen's hearts, and the assembly of the craftsmen's hearts rests on the master carpenter's
consideration for his craftsmen. **The teaching was about people from the start.**

### §6.3 Why demotions happen: compatibility judged one-to-one

A superior judges a subordinate by one-to-one compatibility — "does this person suit me" — and
only the superior does the judging. People tend to prefer those like themselves (homophily), so
a subordinate whose *kuse* runs the same way as the boss's is rated well, and one whose *kuse*
runs the other way is kept at a distance as difficult.

The carpenters' criterion is different. The question is whether adding *this* timber **cancels
the warp of the whole tower.** To a right-twisting timber, a left-twisting one is not a difficult
partner but an indispensable one.

Portfolio theory (Markowitz), which asks how to combine assets, puts numbers on this. Let two
members have equal variability σ² in their performance and let ρ be the correlation of their
deviations. The variability of their average is:

| Relation of the two *kuse* | Correlation ρ | Variability of the pair |
|---|---|---|
| same direction (alike) | +0.8 | 0.90 σ² |
| unrelated | 0 | 0.50 σ² |
| opposite (right twist with left twist) | −0.8 | 0.10 σ² |

Closed form: σ²(1 + ρ)/2. ([`sim/reproduce.py`](../../sim/reproduce.py), §6.3.)

The alike pair and the opposite pair differ ninefold.

Applied to demotions, the conclusion is severe. **The subordinate a superior finds "not a good
fit" is quite likely the very person cancelling the superior's own *kuse*.** A demotion pulls the
counter-twisted pillar out of the tower. In calm weather nothing shows. When wind and snow —
unforeseen shocks — arrive, the organisation twists in one direction and goes out of true.

### §6.4 How to measure a person's *kuse*

A timber's *kuse* shows only when it is dried or loaded. A person's *kuse* likewise shows not in
a personality test score but in **which way they deviate under load**: when a deadline closes in,
when an unforeseen failure occurs, when opinions split — do they lean toward caution or toward
boldness? An AI that assigns the work holds records of these reactions under real load. It does
not attach personality labels; it measures the direction of deviation. The competition sandbox
of §5.2 is the kiln in which this direction can be observed safely.

The "orientation of growth" also has a counterpart. Setting people who grew up in harsh
conditions as structural members and those from gentler conditions as finish carpentry is not a
hierarchy. A tower needs both columns and joinery. **Abandoning the question "is this a good or a
bad timber" and asking instead "where does it go so the whole stands"** is the decisive shift away
from selection-as-sieve.

### §6.5 AI can "buy the mountain"

A human master carpenter can read the *kuse* of only so many trees, and a manager can know the
character of a few dozen subordinates at most. So personnel decisions drift toward buying one
excellent log at market — hiring stars.

Under the premises of Part II, the AI assigns everyone's work and **can survey the whole
mountain.** Who twists which way, and with whom a combination reduces overall variability, can be
solved as a combinatorial optimisation over the entire organisation. A human manager could not do
this even in principle; this is the substance of Hanamura's proposal. The objective moves from
*maximising average ability* to *minimising the warp of the whole under shocks*.

### §6.6 Where wood and people differ

Two differences deepen the design.

- **People's *kuse* changes.** Timber keeps its direction of twist for a thousand years; people
  change where they are placed. Allocation is not decided once. It is reassembled periodically
  through the feedback mechanism of Part III.
- **People have wills.** A timber does not refuse its place; a person can. The person's own
  wishes must be one of the constraints of the combination from the start.

### §6.7 The last line of the transmission: the AI's objective function

The transmission ends with "the master carpenter's consideration for his craftsmen". This answers
the question left at the end of Part II (§3.9): what should the AI optimise?

An AI optimising revenue alone can also combine *kuse* to reduce variability, but it treats people
merely as materials of differing properties. Nishioka held that using a tree, as material, for as
many years as it lived as a tree is the natural duty of human beings toward nature. Translated to
people, the AI's objective must contain, beyond revenue and structural stability, a term for
**whether each person is able to use fully the strength they have in that place.**

### §6.8 Summary

```
Personnel decided by a manager           Kusegumi by AI
──────────────────────────────          ──────────────────────────────
buy one excellent log at market    →    survey the whole mountain
one-to-one compatibility           →    cancel the warp of the whole
  (judged by the manager)
gather the alike (ρ > 0)           →    combine opposite kuse (ρ < 0)
judge by impression of character   →    measure direction of deviation under load
fixed once decided                 →    reassemble as kuse changes
objective: ease of management      →    objective: structural stability
                                         + each person's strength used fully
```

---

Previous: [Part III](part-3-recovery.md) · Next: [Part V — Local maximisation and global development](part-5-local-and-global.md)
