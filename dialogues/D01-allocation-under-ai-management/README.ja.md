# D01　AI が経営する世界での人と所得の配分

*2026 年 11 月 5 日の対話・Satoshi Hanamura と Claude（Anthropic、Opus 5.5）*

English: [README.md](README.md)

## 二段の深さ、二つの言語

| | English | 日本語 |
|---|---|---|
| **簡潔版**：短い版（約 3 ページ） | [briefing.en.md](briefing.en.md) | [briefing.ja.md](briefing.ja.md) |
| **詳細版**：数値・出典・図を含む全記録 | [reference/en/](reference/en/) | [reference/ja/](reference/ja/) |

両言語とも保守する。節の番号（§）は両版で同じなので、言語をまたいで箇所を引用できる。両者が食い違う場合は、
このリポジトリの他の部分と同じく英語版を正とする。

## 詳細版の構成

| 部 | 節 | 内容 |
|---|---|---|
| I | §1〜§2 | LLM による選抜：採用、次に能力連動の上乗せ層を持つベーシックインカム制度 |
| II | §3 | AI が経営する経済での配分：測定、探索、所有、抽選 |
| III | §4〜§5 | 制度から落ちた人を拾い直す：自己発信によるフィードバックと競技会場 |
| IV | §6 | 人を癖で組む：宮大工の「癖組み」 |
| V | §7 | 局所最大化と大局的な発展。F01 と F04 の適用 |
| 付録 A | — | 日本の木造の塔と法隆寺大工（日本の外の読者のための基礎知識） |
| 付録 B | — | 主張の台帳、分担、訂正、限界 |
| 付録 C | — | 出典 |

ファイル：`reference/{en,ja}/part-1-screening.md`、`part-2-ai-managed-economy.md`、`part-3-recovery.md`、
`part-4-kusegumi.md`、`part-5-local-and-global.md`、`appendix-a-wooden-pagodas.md`、
`appendix-b-claims-register.md`、`appendix-c-references.md`。

## 数値の再現

```
python3 sim/reproduce.py      # numpy が必要
```

簡潔版と詳細版に出てくる数値の表は、すべて節の番号付きで出力される。

## 本体の分析との関係

D01 は `docs/00_scope.md` が定める範囲の外にある。`docs/01_findings/` のうち二つ、すなわち F01 の一般形と F04 の最適化の行を、
人の選抜と競技の設計に適用している（第 V 部）。どの所見の位置づけも変えない。
