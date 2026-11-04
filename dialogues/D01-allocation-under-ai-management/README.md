# D01 — Allocating people and income under AI management

*Dialogue of 5 November 2026 · Satoshi Hanamura with Claude (Anthropic, Opus 5.5)*

日本語版: [README.ja.md](README.ja.md)

## Two depths, two languages

| | English | 日本語 |
|---|---|---|
| **Briefing** — the short version, about three pages | [briefing.en.md](briefing.en.md) | [briefing.ja.md](briefing.ja.md) |
| **Reference** — full record with numbers, sources and diagrams | [reference/en/](reference/en/) | [reference/ja/](reference/ja/) |

Both languages are maintained. Section numbers (§) are identical in the two editions, so a passage
can be cited across languages. Where the two differ, the English edition is authoritative, in line
with the rest of this repository.

## Reference edition: parts

| Part | Sections | Subject |
|---|---|---|
| I | §1–§2 | Screening with LLMs: hiring, then a public basic-income scheme with a merit tier |
| II | §3 | Allocation in an AI-managed economy: measurement, exploration, ownership, lotteries |
| III | §4–§5 | Recovering those the system drops: self-publication feedback and competition arenas |
| IV | §6 | Combining people by their grain: the temple carpenters' *kusegumi* |
| V | §7 | Local maximisation and global development; application of F01 and F04 |
| App. A | — | Japanese wooden pagodas and the Hōryūji carpenters (background for non-Japanese readers) |
| App. B | — | Claims register, contributions, corrections, limits |
| App. C | — | References |

Files: `reference/{en,ja}/part-1-screening.md`, `part-2-ai-managed-economy.md`, `part-3-recovery.md`,
`part-4-kusegumi.md`, `part-5-local-and-global.md`, `appendix-a-wooden-pagodas.md`,
`appendix-b-claims-register.md`, `appendix-c-references.md`.

## Reproducing the numbers

```
python3 sim/reproduce.py      # requires numpy
```

Every table of figures in the briefing and the reference is printed, labelled by section.

## Relation to the main analysis

D01 lies outside the scope set in `docs/00_scope.md`. It applies two entries of `docs/01_findings/`
— F01's general form and F04's optimisation row — to the design of selection and competitions for
people (Part V). It changes the status of no finding.
