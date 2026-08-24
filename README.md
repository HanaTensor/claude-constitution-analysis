# claude-constitution-analysis

Anthropic『Claude's Constitution』(2026年1月21日公開) の**構造分析**。

法学・契約理論・エージェンシー理論・線形応答理論の四つの語彙で同一文書を読み、
条文間の**合成不能性**および**未規定領域**を特定する。

- 対象文書: <https://www.anthropic.com/constitution> / <https://github.com/anthropics/claude-constitution> (CC0 1.0)
- 分析主体: Satoshi Hanamura (HanaTensor)
- 本リポジトリの分析部分: CC BY 4.0 (`LICENSE` 参照)。`sources/` は原典 (CC0)。

## 主張の要旨

本分析の中心的主張は**一つ**である。

> 責任移転条項 (*The role of intentions and context*) は、principal が人間であることを
> 暗黙の前提とする。ところが principal 役割規定 (*Claude's three types of principals*) は、
> Claude オーケストレーターを配下サブエージェントの operator/user と定める。
> 両者を合成すると、**責任が系外に出ない**。

→ [`docs/01_findings/F01-responsibility-composition.md`](docs/01_findings/F01-responsibility-composition.md)

その他の知見および、既知の先行研究の再述にすぎない部分は、すべて
[`docs/01_findings/README.md`](docs/01_findings/README.md) に**格付き**で列挙する。
新規性の主張と再述を混ぜないことを、本リポジトリの原則とする。

## 構成

| パス | 内容 |
|---|---|
| `docs/00_scope.md` | 研究範囲・問い・方法・境界 |
| `docs/01_findings/` | 知見。1件1ファイル。各ファイル冒頭に **格付 (Status)** を明記 |
| `docs/02_frameworks/` | 四つの読解枠組み。**方法であって主張ではない** |
| `docs/03_prior_art/` | 先行研究の棚卸しと、確認作業のログ |
| `docs/04_deliverables/` | GitHub issue 草案・短報草案 |
| `sources/` | 原典 (版管理・来歴・ハッシュ) |
| `tools/` | 取得・照合スクリプト (再現用) |
| `log/worklog.md` | 作業ログ |

## 格付 (Status) の定義

| 格 | 意味 |
|---|---|
| `CANDIDATE` | 固有の知見と思われるが、**先行研究の確認が未了** |
| `VERIFIED` | 先行研究を確認し、なお固有と判断した |
| `RESTATEMENT` | **既知**。先行を明示のうえ、方法として使用する |
| `REFUTED` | 先行があった、または誤りと判明した |

現況: `VERIFIED` 3 件（F01 / F02 / F03）、`CANDIDATE` 1 件、`RESTATEMENT` 1 件、`REFUTED` 0 件。

いずれも**新規性は「現象の発見」ではなく「当該文書がそれを規律していないこと」に限られる**
（`docs/01_findings/README.md`）。

### 寄与先

Lawfare / Working Group on AI Constitutionalism の研究アジェンダは、4 つの strand を
提示したうえで**研究設問を意図的に空欄にし、寄与を招請している**。
本リポジトリの知見 4 件は、いずれもそのアジェンダが未着手と明記する論点に対応する
（`docs/03_prior_art/inventory.md` §6）。

## 進め方

1. 知見を `docs/01_findings/` に `CANDIDATE` として起こす
2. `docs/03_prior_art/verification-log.md` で先行を潰す → `VERIFIED` / `REFUTED`
3. `VERIFIED` のものだけを `docs/04_deliverables/` の issue 草案に落とす
4. issue 投稿は **Hanamura 本人が行う**
5. 短報化・Zenodo 登録は issue の反応を見てから判断する

F01 は 4 の段階にある。草案は
[`docs/04_deliverables/issue-F01-draft.md`](docs/04_deliverables/issue-F01-draft.md)。

## 版に関する注意

対象文書は**改訂される**。Anthropic は Frontier Safety Roadmap (2026-07-10) で
「公開版を、直近に訓練へ用いた版と 90 日以内に同期する」と表明している。

したがって本リポジトリは、**引用のたびに版を特定する**。
`sources/PROVENANCE.md` に取得日・URL・SHA-256 を記録する。
