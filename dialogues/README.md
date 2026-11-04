# Dialogues

日本語版: [README.ja.md](README.ja.md)

This directory records extended dialogues between Satoshi Hanamura and Claude that grew out of, or
lean on, the analysis in this repository but **lie outside the scope set in `docs/00_scope.md`.**
They are kept here so that later dialogues can refer back to them, and so that any part that bears on
Claude's Constitution can be traced to its source.

## The thread

The recurring theme is **allocation under AI management**: basic income, merit-based allocation, and
the circulation of the resources a business runs on — money and people — when AI earns revenue and
directs work.

## Index

| ID | Date | Title | Briefing | Reference |
|---|---|---|---|---|
| D01 | 2026-11-05 | Allocating people and income under AI management | [en](D01-allocation-under-ai-management/briefing.en.md) · [ja](D01-allocation-under-ai-management/briefing.ja.md) | [en](D01-allocation-under-ai-management/reference/en/) · [ja](D01-allocation-under-ai-management/reference/ja/) |

Questions left open across dialogues: [open-questions.md](open-questions.md).

## Conventions

- **One directory per dialogue**, named `Dnn-short-slug/`. Inside: `README.md` / `README.ja.md`,
  `briefing.en.md` / `briefing.ja.md`, `reference/en/` and `reference/ja/` with identical file names,
  and `sim/` for any code that reproduces numbers.
- **Both languages are maintained.** Section numbers are identical across editions. Where they differ,
  English is authoritative, as for the rest of the repository.
- **Status discipline carries over.** Each dialogue ends its reference edition with a claims register
  using `RESTATEMENT`, `CANDIDATE` and `PREMISE`. A dialogue record never contains a `VERIFIED` item;
  an idea that is to be submitted anywhere must first be raised as a finding in `docs/01_findings/` and
  pass the procedure in `docs/03_prior_art/verification-log.md`.
- **Numbers are reproduced, not recalled.** Every figure in a dialogue record is printed by its `sim/`
  script.
- **Hanamura is the author.** Contributions are set out per dialogue, following `ACKNOWLEDGEMENTS.md`.
- Dialogues are not included in the PDF built by `tools/build_pdf.sh`.
