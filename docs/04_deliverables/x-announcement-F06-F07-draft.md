# Draft X announcement — F06 and F07 (#12)

**Poster**: Satoshi Hanamura (@HanaTensor), in person.
**State**: draft.

A five-post thread for the 280-character tier. Counts are measured with X's weighting (`tools/count_post_chars.py`
treats every character as 1; this draft was also checked with X's weighted rules, under which some symbols such as
`⁻` and `…` count as 2). URLs count 23.

**Links go in the last post, not the first.** X tends to show posts with external links to fewer people, and the
first post carries the thread. The images in posts 1 and 4 do the work a link preview would.

---

## Post 1 — the hook (image: screenshot of issue #12's title and first paragraph)

```
Claude's constitution gives users protections operators can't override.

But when Claude screens applicants or ranks workers, those people are usually not in the conversation at all. Their CVs and logs are just inputs.

I've filed two gaps with Anthropic. 🧵
```

## Post 2 — gap 1 (image, optional: the three-row table in F06 §2)

```
Gap 1: for someone Claude evaluates from outside the conversation, no operator-proof rule gives them reasons, the evaluation's uncertainty, or a way to contest.

Same person, same decision: protected if they happen to be the user, merely weighed if they're the subject.
```

## Post 3 — gap 2

```
Gap 2: the constitution knows Claude's errors can be duplicated across conversations, but only as a reason for caution.

If 200 firms screen with the same model, a misread profile is rejected everywhere. Each firm sees a fine error rate. Nobody sees the concentration.
```

## Post 4 — the arithmetic (image: the illustration table in F07 §2)

```
Why it matters: with a 10% wrongful-rejection rate, 20 independent screens leave a 1-in-10^20 chance of being rejected by all.

If every screen shares the same error, it stays at 10%. Applying more widely protects you against independent errors, not shared ones.
```

## Post 5 — honesty and links

```
Both claims were narrowed after an adversarial review found provisions I had missed. Much of the analysis was drafted by Claude (Opus 5.5), which the issue discloses.

Issue: github.com/anthropics/claude-constitution/issues/12
Full record: github.com/HanaTensor/claude-constitution-analysis
```
