# D. 線形応答理論の語彙

## 共通構造

以下はすべて、凸ポテンシャルの線形応答という同一の構造の実例である。

| 系 | 加法的な量 | シェアの式 |
|---|---|---|
| 熱平衡（並列） | 熱容量 C | T_f = ΣC_iT_i / ΣC_i、ΔT_i ∝ 1/C_i |
| リスク分担（並列） | リスク許容度 τ | τ_i / Στ_j |
| 代謝制御解析（直列） | 抵抗 R | C_i = R_i / ΣR_j、ΣC_i = 1 |
| 拡散律速反応（直列） | 1/k | 1/k_obs = 1/k_D + 1/k_chem |

並列結合では容量が加算され、直列結合では抵抗が加算される。
Maxwell 関係式・Slutsky 対称性・Onsager 相反定理が一致するのは、
いずれもポテンシャルの混合偏微分の可換性に帰着するためである。

## 系譜（既知）

Samuelson『経済分析の基礎』(1947) は E. B. Wilson（Gibbs の弟子）の影響下にあり、
Le Chatelier 原理の経済学への移植、双対性（Shephard, Hotelling, Roy）と
Maxwell 関係式の同型性は、この系譜に属する。**新規性はない。**

代謝制御解析側は Kacser & Burns (1973), Heinrich & Rapoport (1974)。
Kacser & Burns 自身が電気抵抗の直列接続による説明を用いている。

## 適用限界

**線形領域でのみ成立する。**

Michaelis–Menten 式 v = V_max[S]/(K_m + [S]) は加重平均ではなく飽和曲線であり、
[S] ≫ K_m では応答がゼロになりシェアの式が定義できない。
熱力学側では相転移点で比熱が発散し、二相共存領域で加重平均が使えない。

**hard constraints はこの飽和領域にある**（F04）。
文書が「重み付けではなく境界として機能する」と述べるのは、
この事実の規範的表現と読める。

> "Rather than being weighed against other considerations, they act more like
> **boundaries or filters** on the space of acceptable actions."
> — § Hard constraints（md L520 付近 / p.47）

## 注意

本節の内容は**比喩ではなく形式的同型**であるが、
**同型であることは既知**であり、本リポジトリはその発見を主張しない。

なお、誘因制約を「維持された勾配」、エージェンシーコストを「エントロピー生成」と
読む定式化については、2026-08-24 の検索では先行を確認できなかった。
**確認できなかったことは、存在しないことを意味しない。**
econophysics の文献調査は未実施（`docs/03_prior_art/verification-log.md`）。
