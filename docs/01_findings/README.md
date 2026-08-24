# 知見一覧

**新規性の主張と、既知内容の再述を混ぜない。**これが本リポジトリの原則である。

| ID | 表題 | 格付 | 種別 |
|---|---|---|---|
| [F01](F01-responsibility-composition.md) | 責任移転条項が、principal=Claude のとき合成できない | **`VERIFIED`** | 欠陥 |
| [F02](F02-horizontal-review-optin.md) | 相互報告義務のみが任意化されている | **`VERIFIED`** | 欠陥 |
| [F03](F03-no-transition-provision.md) | 90日同期義務に対応する経過措置が存在しない | **`VERIFIED`** | 欠陥 |
| [F04](F04-nonconvexity-fourfold.md) | hard constraints の非取引性は、凸性の破れの四通りの記述である | `RESTATEMENT` | 方法 |
| [F05](F05-execution-vs-norm-hierarchy.md) | 実行階層の頂点は、規範階層の頂点ではない | `CANDIDATE` | 記述 |

## 格付の現況

- `VERIFIED` : **3 件**（F01 / F02 / F03、いずれも 2026-08-24 昇格）
- `CANDIDATE`: 1 件（F05、記述的観察）
- `RESTATEMENT`: 1 件
- `REFUTED`: 0 件

**F02 は起票時の主張に事実誤認があり、機械照合で発見して再構成した**（F02 §6）。
印象に基づく量的主張をしないこと。

`CANDIDATE` は「先行研究の確認が未了」を意味する。**新規であることを主張していない。**
昇格の条件と手順は `docs/03_prior_art/verification-log.md` に定める。

## 優先順位

F01 / F02 / F03 の 3 件が、条文を特定し、反駁に応答した水準にある。
強度は F01 > F03 > F02 の順。F02 は R1（設計意図の説明不在）が未解消であり、
「欠陥」ではなく「未説明の非対称」に留まる可能性がある。

### 寄与先

Lawfare / Working Group on AI Constitutionalism の研究アジェンダが、
本リポジトリの 4 件すべてに対応する論点を**未着手として明示**している
（`docs/03_prior_art/inventory.md` §6）。

F01 は 2026-08-24 に `VERIFIED` へ昇格した。
Oxford（Shany et al. 短版・長版）、BISI、Anthropic 告知記事のいずれにも
多エージェント設定への言及がなく、責任帰属に触れる Shany et al. とは機序が逆である。

**ただし新規性は「現象の発見」ではなく「当該文書がそれを規律していないこと」に限られる。**
文脈劣化したサブエージェントによる事故は、実務者文献では既知の運用課題である
（`docs/03_prior_art/inventory.md` §5）。この限定を主張から外さないこと。
