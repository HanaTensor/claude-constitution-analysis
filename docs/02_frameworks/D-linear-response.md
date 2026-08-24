# D. The vocabulary of linear response theory

## The shared structure

All of the following instantiate one structure: linear response of a convex potential.

| System | Additive quantity | Share |
|---|---|---|
| Thermal equilibration (parallel) | Heat capacity C | T_f = ΣC_iT_i / ΣC_i; ΔT_i ∝ 1/C_i |
| Risk sharing (parallel) | Risk tolerance τ | τ_i / Στ_j |
| Metabolic control analysis (series) | Resistance R | C_i = R_i / ΣR_j, with ΣC_i = 1 |
| Diffusion-influenced reaction (series) | 1/k | 1/k_obs = 1/k_D + 1/k_chem |

Capacities add in parallel; resistances add in series. That is the whole of it.
Maxwell relations, Slutsky symmetry, and Onsager reciprocity coincide because each
reduces to the commutation of mixed partial derivatives of a potential.

## Lineage (known)

Samuelson's *Foundations of Economic Analysis* (1947) was written under the influence of
E. B. Wilson, a student of Gibbs. The transplant of the Le Chatelier principle into
economics, and the isomorphism between duality results (Shephard, Hotelling, Roy) and
the Maxwell relations, belong to that lineage. **No novelty.**

On the metabolic side: Kacser & Burns (1973); Heinrich & Rapoport (1974). Kacser and
Burns themselves explained control distribution by analogy with resistances in series.

## Where it stops working

**Only in the linear regime.**

The Michaelis–Menten form v = V_max[S]/(K_m + [S]) is not a weighted average but a
saturating hyperbola; for [S] ≫ K_m the response goes to zero and the sharing expression
is undefined. On the thermal side, heat capacity diverges at a phase transition and the
weighted average fails through the two-phase region.

**Hard constraints live in that saturated regime** (F04). The document's statement that
they function as boundaries rather than as weights is the normative expression of the
same fact.

## Caveat

The content of this section is **formal isomorphism, not metaphor** — but the
isomorphism is **known**, and this repository claims no discovery of it.

One related formulation — reading the incentive constraint as a sustained gradient and
agency cost as entropy production — was not found in a search on 2026-08-24. **Failure
to find is not absence.** No survey of the econophysics literature has been performed
(`docs/03_prior_art/verification-log.md`). arXiv:2510.08298, *Adversarial
Thermodynamics*, runs in the opposite direction (thermodynamics cast as decision theory)
and mentions neither principal–agent theory, nor Borch's theorem, nor agency cost.
