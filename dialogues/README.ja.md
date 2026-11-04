# 対話記録

English: [README.md](README.md)

このディレクトリには、Satoshi Hanamura と Claude の長い対話のうち、このリポジトリの分析から生まれたもの、または
それに拠っているものの、**`docs/00_scope.md` の定める範囲の外にあるもの**を記録する。後の対話から参照できるようにするため、
また Claude's Constitution にかかわる部分があれば、その出どころをたどれるようにするためである。

## 主題の系列

繰り返し現れる主題は、**AI が経営する世界での配分**である。ベーシックインカム、能力主義による配分、そして AI が収益を上げ
仕事を指示するときの、マネーと人材を基盤とする経営資源の循環である。

## 一覧

| ID | 日付 | 表題 | 簡潔版 | 詳細版 |
|---|---|---|---|---|
| D01 | 2026-11-05 | AI が経営する世界での人と所得の配分 | [en](D01-allocation-under-ai-management/briefing.en.md)・[ja](D01-allocation-under-ai-management/briefing.ja.md) | [en](D01-allocation-under-ai-management/reference/en/)・[ja](D01-allocation-under-ai-management/reference/ja/) |

対話をまたいで残っている問い：[open-questions.ja.md](open-questions.ja.md)。

## 取り決め

- **対話ごとに一つのディレクトリ**を作り、`Dnn-短い名前/` と名付ける。中には `README.md`／`README.ja.md`、
  `briefing.en.md`／`briefing.ja.md`、同じファイル名を持つ `reference/en/` と `reference/ja/`、数値を再現するコードを入れる `sim/` を置く。
- **両言語とも保守する。** 節の番号は両版で同じにする。食い違う場合は、リポジトリの他の部分と同じく英語版を正とする。
- **位置づけの規律を引き継ぐ。** 各対話の詳細版は、`RESTATEMENT`、`CANDIDATE`、`PREMISE` を用いた主張の台帳で終える。対話記録に
  `VERIFIED` の項目は置かない。どこかへ提出する考えは、まず `docs/01_findings/` に所見として起こし、`docs/03_prior_art/verification-log.md`
  の手順を通す。
- **数値は記憶ではなく再現で示す。** 対話記録の数値はすべて、その `sim/` のスクリプトが出力する。
- **著者は Hanamura である。** 分担は `ACKNOWLEDGEMENTS.md` にならい、対話ごとに記す。
- 対話記録は `tools/build_pdf.sh` で作る PDF には含めない。
