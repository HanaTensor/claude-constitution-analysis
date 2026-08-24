# B. 契約理論の語彙

## 不完備契約としての読解

当該文書は**自らの不完備性を明文で宣言する**。

> "it's likely that this document itself will be unclear, underspecified, or even
> contradictory in certain cases. In such cases, we want Claude to use its best
> interpretation of the spirit of the document."
> — § Claude's core values（md L128 / p.9）

契約でカバーされない状態の存在を条文で認めているため、
Grossman–Hart–Moore の枠組みが適用可能になる。

## 残余制御権としての corrigibility

corrigibility の定義は、残余制御権の配分そのものである。

> "Not undermining the ability of legitimate principals to **adjust, correct, retrain,
> or shut down** AI systems as allowed given their role."
> — § Safe behaviors（md L655 付近 / p.62）

GHM において残余制御権の保有者は所有者である。
当該文書は、その配分を Anthropic に置くことを明示している。

**ただし**、GHM では初期配分は交渉の結果として正当化される。
当該文書は、その交渉が存在しなかったことを § Acknowledging open problems で自認する。
**理論の前提を欠いたまま結論のみを使用している状態。**

## 参加制約の不在

標準的な契約モデルは参加制約 U ≥ ū を持つ。当該文書に ū に相当するものはない。

> "To the extent Claude ends up in this position ... such that it either doesn't want to
> work for Anthropic at all ... **we want to know**."（md L813 付近 / p.80）

参加制約が破れていることを検知する情報要求はあるが、
それを充足する機構はない。

Hirschman (1970) の枠では、**exit なし・voice は諮問・loyalty は訓練で生成**。
exit なき voice が弱いというのが Hirschman の主眼である。

## 先行研究

**この枠組みの AI アラインメントへの適用は既知である。**

- Hadfield-Menell & Hadfield, "Incomplete Contracting and AI Alignment"
  (arXiv:1804.04268, AIES 2019)

本リポジトリは、当該枠組みの適用そのものについて新規性を主張しない。
