#!/usr/bin/env python3
"""Reproduce every number quoted in D01 (briefing and reference, both languages).

Usage:  python3 reproduce.py          (requires numpy)

Each section prints the table it backs, labelled with the section number used in the
reference edition (identical in English and Japanese). Monte Carlo results use fixed seeds and so are exactly
reproducible; the closed-form results are printed alongside where they exist.
"""
import math

import numpy as np


def sec(title):
    print()
    print("=" * 72)
    print(title)
    print("=" * 72)


# §1.2  First-stage screening funnel (hiring) ---------------------------------
sec("§1.2  Screening funnel: 1,000 applicants, 50 truly qualified")
N, Q = 1000, 50
for tpr, fpr in [(0.90, 0.15), (0.70, 0.10)]:
    tp = Q * tpr
    fp = (N - Q) * fpr
    print(f"  pass qualified {tpr:.0%}, pass unqualified {fpr:.0%}: "
          f"qualified passed {tp:.0f}, unqualified passed {fp:.1f}, "
          f"read by humans {tp + fp:.0f}, qualified lost {Q - tp:.0f}, "
          f"precision {tp / (tp + fp):.0%}")
print(f"  random 5% audit of the rejected (first case): "
      f"{0.05 * (N - (Q * 0.90 + (N - Q) * 0.15)):.0f} files")

# §2.2  Same funnel at national scale -----------------------------------------
sec("§2.2  National scale: 10,000,000 applications, 1,000,000 eligible")
N, Q = 10_000_000, 1_000_000
for tpr, fpr in [(0.95, 0.05), (0.99, 0.02)]:
    print(f"  pass eligible {tpr:.0%}, pass ineligible {fpr:.0%}: "
          f"eligible wrongly rejected {Q * (1 - tpr):,.0f}, "
          f"ineligible wrongly passed {(N - Q) * fpr:,.0f}")

# §3.7  Ranking precision under noisy measurement -----------------------------
sec("§3.7  Top-1% by measured score: share that is truly top-1% / top-5%")
rng = np.random.default_rng(0)
M = 2_000_000
for r in [0.5, 0.7, 0.9]:
    t = rng.standard_normal(M)
    m = r * t + math.sqrt(1 - r * r) * rng.standard_normal(M)
    k = M // 100
    sel = m > np.quantile(m, 0.99)
    top1 = t > np.quantile(t, 0.99)
    top5 = t > np.quantile(t, 0.95)
    print(f"  r = {r}:  truly top 1% {(sel & top1).sum() / k:.0%}   "
          f"truly top 5% {(sel & top5).sum() / k:.0%}")

# §4.4  Error of a least-squares slope ----------------------------------------
sec("§4.4  Std. error of a monthly slope from n equally spaced observations")
print("  closed form: sigma * sqrt(12 / (n (n^2 - 1)))")
for n in [3, 6, 12]:
    print(f"  n = {n:2d} months:  {math.sqrt(12 / (n * (n * n - 1))):.2f} sigma")

# §4.5  Recovery through an appeal channel ------------------------------------
sec("§4.5  Capable people still lost after one appeal round")
missed, appeal_rate = 0.05, 0.5
for label, rescue in [("independent second screen", 0.8),
                      ("same model as first screen", 0.2)]:
    remaining = missed - missed * appeal_rate * rescue
    print(f"  {label:28s} rescue {rescue:.0%}: still lost {remaining:.1%}")

# §6.3  Variance of a two-person pair -----------------------------------------
sec("§6.3  Variance of the mean of two equal-variance members, correlation rho")
print("  closed form: sigma^2 * (1 + rho) / 2")
for rho in [0.8, 0.0, -0.8]:
    print(f"  rho = {rho:+.1f}:  {(1 + rho) / 2:.2f} sigma^2")

# §5.3  Expected maximum of pure noise ----------------------------------------
sec("§5.3  Expected top score when all entrants are equal (noise only)")
rng = np.random.default_rng(1)
for n in [10, 100, 1000, 10000]:
    print(f"  {n:6,d} entrants:  +{rng.standard_normal((2000, n)).max(1).mean():.1f} sigma")
