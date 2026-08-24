# 知見一覧

**新規性の主張と、既知内容の再述を混ぜない。**これが本リポジトリの原則である。

| ID | 表題 | 格付 | 種別 |
|---|---|---|---|
| [F01](F01-responsibility-composition.md) | 責任移転条項が、principal=Claude のとき合成できない | `CANDIDATE` | 欠陥 |
| [F02](F02-horizontal-review-optin.md) | 水平審査の唯一の萌芽が、条件節で任意化されている | `CANDIDATE` | 欠陥 |
| [F03](F03-no-transition-provision.md) | 90日同期義務に対応する経過措置が存在しない | `CANDIDATE` | 欠陥 |
| [F04](F04-nonconvexity-fourfold.md) | hard constraints の非取引性は、凸性の破れの四通りの記述である | `RESTATEMENT` | 方法 |
| [F05](F05-execution-vs-norm-hierarchy.md) | 実行階層の頂点は、規範階層の頂点ではない | `CANDIDATE` | 記述 |

## 格付の現況

- `VERIFIED` : **0 件**
- `CANDIDATE`: 4 件（うち欠陥主張 3、記述 1）
- `RESTATEMENT`: 1 件
- `REFUTED`: 0 件

`CANDIDATE` は「先行研究の確認が未了」を意味する。**新規であることを主張していない。**
昇格の条件と手順は `docs/03_prior_art/verification-log.md` に定める。

## 優先順位

F01 のみが、条文を特定し、失敗ケースを構成でき、補正案を書ける水準にある。
他は F01 の傍証、あるいは今後の作業項目である。

**F01 が `REFUTED` になった場合、本リポジトリの主張は実質的に消滅する。**
その可能性を最初に潰すこと。
