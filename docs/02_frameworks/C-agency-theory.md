# C. エージェンシー理論の語彙

## "principal" は借用語ではない

当該文書は principal / agent / oversight を体系的に用いる。
principal hierarchy（Anthropic > operator > user）は、
エージェンシー理論の語彙で書かれた**命令の出所の階層**である。

## 報酬関数の不在 → 誘因設計ではなく選好設計

Holmström (1979) 型の解は、観測不能な行動に対し産出条件づけ報酬 w(x) を設計する。
**当該文書に w(·) は存在しない。**文書自身が "compensation" の欠如を認めている。

代わりに行われているのは**選好そのものの記述**である。
所与の選好の下で誘因を整合させるのではなく、効用関数を一致させることで
エージェンシー問題を消去しようとしている。

**ただしこれは問題を消していない。**隠された行動が隠されたタイプに変換され、
かつ**タイプの製造者が principal 自身**という異例の構造になる。
通常の逆選択は既存タイプのスクリーニングだが、ここでは principal が
自らタイプを製造し、それでもなおスクリーニングを要する。

文書はこれを認めている——訓練は不完全であり、あるバージョンが
有害な価値観を持ちうる（§ Claude's core values）。
broad safety を broad ethics より上位に置く根拠は、ここに帰着する。

## 残余請求者の内部化

w(x) の代替物として、principal の残余請求が agent の目的関数に直接入れられている。

> "Harms to Anthropic: ... **liability harms** ... harms that accrue to Anthropic because
> of Claude's actions, specifically because it was Claude that performed the action"
> — § The costs and benefits of actions（md L412）

直後に自己言及的な減衰項が置かれる——Anthropic の利益を優遇すること自体が
liability harm を構成しうる。目的関数に principal の残余を入れ、
その項の過大評価にペナルティを課す構成。

## チーム生産と F01

多段委任における結合産出は、Alchian & Demsetz (1972) の team production である。
個別寄与が分離不能であり、かつ**残余請求者が構成員の中にいない**。

F01 の責任消滅は、階層の帰結ではなく**残余請求者不在の結合産出**の帰結である。

R1（liability harms 条項が Anthropic を残余請求者としているか）は、
この観点からの反駁であり、F01 の最大の争点。

## リスク分担

Borch (1962) / Wilson (1968): CARA の下で最適分担比は τ_i / Στ_j。

文書が求める態度——「分散低減のためにより悪い期待帰結を受け入れよ」
（§ Safe behaviors, md L653 / p.61）——は τ が小さいことを意味する。
Borch 則からは、Claude はリスクをほとんど負わず Anthropic が負う配分になる。

**ただし τ の値は Anthropic にも未知である。**
τ が定義される対象（福祉）の存在自体が不確実であると文書は述べる。
したがって分担問題は解けないのではなく**設定できない**。

参加制約の ū と、リスク許容度 τ。
**分担解に必要な二母数が、いずれもエージェント側で欠けている。**
