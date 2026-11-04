# Briefing — start here

**New to this repository? Read one of these first.** They are a two-part introduction — the same briefing in English
and in Japanese — explaining both letters this project has sent to Anthropic about *Claude's Constitution*, how each
claim arose, how it was tested and narrowed, and what prior work was searched.

| | English | 日本語 |
|---|---|---|
| Read in the browser (PDF) | [two-letters-to-claudes-constitution.en.pdf](two-letters-to-claudes-constitution.en.pdf) | [two-letters-to-claudes-constitution.ja.pdf](two-letters-to-claudes-constitution.ja.pdf) |
| Download (Word) | [.en.docx](two-letters-to-claudes-constitution.en.docx) | [.ja.docx](two-letters-to-claudes-constitution.ja.docx) |

*Two Letters to Claude's Constitution — Issues #8 and #12: what they claim, how they arose, and what was checked.*
Satoshi Hanamura, 5 November 2026. About 15 pages.

## What it covers

| Chapter | Content |
|---|---|
| 0–1 | The questions the briefing answers, and both letters compared on one page |
| 2 | [#8](https://github.com/anthropics/claude-constitution/issues/8) (F01): responsibility has no end point when Claude directs Claude |
| 3 | Why [#12](https://github.com/anthropics/claude-constitution/issues/12) arose: a dialogue on meritocracy and basic income (D01) that led back to the constitution |
| 4 | What #12 claims: F06 (no operator-proof floor for people Claude evaluates outside the conversation) and F07 (errors concentrated on the same people are seen by no one) |
| 5 | How the claims were tested: a first form, an adversarial review that broke it, and the narrowed claims |
| 6 | Every source searched for prior work, for #8 and for #12, with the limits of the search |
| 7–8 | Results, what comes next, and the whole process as one diagram |

## How it relates to the rest of the repository

The briefing is a **reader's introduction**, not a source of truth. Where it and the records differ, the records
win:

- findings: [`docs/01_findings/`](../docs/01_findings/) (F01, F06, F07)
- prior-art search: [`docs/03_prior_art/verification-log.md`](../docs/03_prior_art/verification-log.md)
- issue texts: [`docs/04_deliverables/`](../docs/04_deliverables/)
- the dialogue behind #12: [`dialogues/D01-allocation-under-ai-management/`](../dialogues/D01-allocation-under-ai-management/)

The Japanese edition is written for Japanese readers in its own right, not as a word-for-word translation; both
editions have the same chapters and tables. Like the rest of the repository, it was drafted with Claude (Opus 5.5).

## Rebuilding

`src/build_en.js` and `src/build_ja.js` regenerate the Word files (`node src/build_en.js`, run inside `src/`; needs
the `docx` npm package). The PDFs were rendered with LibreOffice. The Japanese body is set in MS Mincho (明朝体),
headings in MS Gothic; where those fonts are absent, `src/fonts.conf` maps them to Noto Serif CJK JP and Noto Sans
CJK JP so that the PDF keeps a Mincho-style body.

---

## 日本語の案内

**このリポジトリを初めて訪れた方は、まずこの資料をお読みください。** 同じ内容の英語版と日本語版の二部構成で、
Anthropic の *Claude's Constitution* に宛てた二つの意見書（#8 と #12）について、何を主張したか、どこから生まれたか、
どう試して狭めたか、どの先行研究を調べたかを、順を追って説明しています。

ブラウザで読むなら PDF（上の表）、手元で読むなら Word ファイルが便利です。日本語版は、本文を明朝体、見出しをゴシック体で組んでいます。
この資料は読者のための入口であり、記録の正本ではありません。内容が記録と食い違う場合は、上に挙げた各記録が優先します。
