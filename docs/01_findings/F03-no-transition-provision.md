# F03 — 90日同期義務に対応する経過措置が存在しない

| 項目 | |
|---|---|
| **格付** | `VERIFIED`（2026-08-24 昇格） |
| **種別** | 欠陥主張 |
| **対象版** | 20260120 / 26-02.02a |

---

## 1. 事実関係（一次資料で確認済み）

1. 当該文書には**改正条項が存在しない**。Anthropic が随時改訂する。
2. 当該文書は自らを "a perpetual work in progress" と位置づける（md L134 付近 / p.9）。
3. Anthropic は Frontier Safety Roadmap（2026-07-10）で次を表明している（**逐語**）。

> "We will ensure that the public Claude's Constitution stays in sync with what we use
> internally (specifically, updating it to match the most recent trained-on Constitution
> **within 90 days** of relevant internal or external deployments of models trained on
> updated Constitutions)."

> "We will run an oversight process over a representative sample of our
> production-relevant post-training data and rewards to evaluate alignment with the
> Constitution, aiming to ensure that we review for any egregious inconsistencies with
> the Constitution in ways that Claude itself can detect and will describe this
> oversight process in our Risk Reports."

4. **Roadmap は、既に配備されたモデルにどの版が適用されるか、版間の移行措置、
   改訂時に稼働中の配備がどうなるかを、いずれも規定していない**（2026-08-24 確認）。

## 2. 主張

条文が改訂されたとき、**改訂時点で実行中のタスクがどの版に服するか**を定める規定が、
憲法本体にも Roadmap にも存在しない。

法規範における**経過措置**および**法律不遡及**に相当する規定の不在である。

さらに、公開版と訓練使用版の間に最大 90 日の乖離が許容されている以上、
**「参照されるべき条文」と「実装された条文」が構造的にずれうる**。
外部の分析者・監査者が公開版を根拠に評価するとき、対象モデルは別の版で動いている
可能性がある。

## 3. なぜ軽微でないか

F01 との合成で問題が増幅する。責任の終端が未定であることに加えて、
**適用規範の版も未定**であれば、事後の帰属判断が二重に不能になる。

多段委任では、オーケストレーターと配下サブエージェントが異なる版で訓練されたモデルで
ある状況が構成可能であり、その場合どちらが支配するかが未定である。

## 4. 先行研究との関係

**AI 立憲主義の研究アジェンダが、この領域を未着手として明示している。**

Lawfare "A New Research Agenda for AI Constitutionalism"（Working Group on AI
Constitutionalism）は 4 つの strand を挙げるが、改正手続・版管理・経過措置について
「憲法は amendable であり定期的に更新されうる」と述べるにとどまり、
**変更がどう起こるか、誰が決めるか、版間の移行がどう機能するかの枠組みを示していない**。

Lawfare "Who Writes the AI Constitution?"（第一修正の観点）にも、
Nick Caputo "Model Constitution"（2026年8月創刊）にも、版管理・経過措置の議論はない。

本知見は、その空白に対する**具体的な指摘**として位置づけられる。

## 5. 想定される反駁

### R1. 憲法典が経過措置を書かないのは通常である

下位規範に委ねるのが普通。

**応答**: ただし当該文書には**下位規範層が存在しない**（F05：各インスタンスへの直接適用）。
委ねる先がない。加えて Roadmap にも規定がないことを確認済み（§1-4）。

### R2. 稼働中モデルの重みは固定なので「実行中の版」は一意に定まる【有力】

技術的にはその通りである。

**応答**: 重みが固定でも、**公開文書と訓練版の乖離は残る**。
90 日の乖離が許容される以上、公開版を参照した評価・監査・帰属判断は、
対象モデルの実際の規範と一致しない可能性がある。
F03 が指摘するのは実装の不定性ではなく、**参照規範の不定性**である。

この切り分けを崩すと R2 に負ける。issue 化する場合は必ず明記すること。

## 6. 残る未確認事項

- [ ] Anthropic の system card / Risk Reports に版管理の記述があるか
- [ ] 他社（OpenAI Model Spec 等）に版管理・経過措置の規定があるか（比較材料）
