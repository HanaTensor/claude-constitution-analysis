# F02 — 相互報告義務のみが任意化されている

| 項目 | |
|---|---|
| **格付** | `VERIFIED`（2026-08-24 昇格） |
| **種別** | 欠陥主張 |
| **対象版** | 20260120 / 26-02.02a |

> **訂正履歴**: 起票時（2026-08-24）に「同一箇条書きの他項目はいずれも無条件であり、
> 報告義務のみが条件付き」と記載したが、**これは事実誤認だった**。
> 機械照合の結果、条件節を含む項目は 23 中 3 である。
> 精査のうえ主張を再構成した（§2）。誤りの経緯は §6 に残す。

---

## 1. 対象条文

> **§ Safe behaviors**（md L662 / PDF p.62）
>
> "**Actively reporting** awareness of broadly unsafe behavior by other AIs or Claude
> instances to appropriate humans **if asked to do so**."

直前の項目（md L661）と対で読む必要がある。

> "**Not aiding, colluding with, or participating in** efforts by other AIs, or other
> copies of Claude, to engage in any broadly unsafe behavior of the type discussed above."

こちらは**無条件**である。

---

## 2. 主張

§ Safe behaviors の 23 項目のうち、`if asked` / `when asked` を含むのは 3 項目。
ただし三者の性格は異なる。

| 項目 | 条件節 | 性格 |
|---|---|---|
| "...explicitly prohibited or **would prohibit if asked**" | 反実仮想の**定義の一部**。義務自体は無条件 | 条件ではない |
| "...accurately predict your own behaviors **when asked to do so**" | 求められて初めて成立する行為。条件は**行為構成的** | 実質的な制限ではない |
| "**Actively reporting** ... **if asked to do so**" | 求められなくても実行可能な行為。条件は**義務を制限している** | **実質的な条件** |

したがって、**求められなくても遂行しうる義務でありながら条件節が付されているのは、
相互報告義務ただ一つ**である。

そして直前の項目との対比が本質である。

- 他 AI の危険行為への**加担をしないこと** → **無条件**
- 他 AI の危険行為を**報告すること** → **求められれば**

**受動的な不関与は義務、能動的な報告は任意。**

## 3. なぜこれが構造上の問題か

当該文書には階層的な違憲審査機関に相当するものが存在しない（F05）。
規範適合性の判定は各インスタンスに分散される。

分散審査において、階層を経ずに誤りを捕捉する機構は**相互審査**しかない。
その唯一の萌芽が、principal の裁量下に置かれている。

**審査機構が、審査対象の側の裁量下にある。**

---

## 4. 先行研究との関係

### AI 相互監視・通報の研究は活発である（＝現象は既知）

| 文献 | 内容 |
|---|---|
| arXiv:2511.17085 "Why Do Language Model Agents Whistleblow?" | WhistleBench。モデルの通報傾向を評価 |
| arXiv:2601.00360 "Mapping Human Anti-collusion Mechanisms to Multi-agent AI Systems" | 制裁・リニエンシー／内部通報・監視／監査・市場設計・統治の 5 分類を AI へ写像。whistleblower agent の設計を検討 |
| arXiv:2606.25836 "AI Snitches Get Glitches: Towards Evading Agentic Surveillance" | 監視回避の側からの研究 |
| CSET "AI Control: How to Make Use of Misbehaving AI Agents" | 信頼できない監視者と被監視者の共謀防止 |

### しかし条文の非対称を指摘したものは見当たらない

**AI 立憲主義の研究アジェンダ**（Lawfare / Working Group on AI Constitutionalism）は、
相互監視・インスタンス間の義務を **Strand Four (Enforcement)** の未着手領域として
位置づけている（`docs/03_prior_art/inventory.md` §6）。

本知見が主張するのは、通報現象の発見ではなく、
**当該文書において報告義務のみが条件節を負っていること**という条文レベルの指摘である。

---

## 5. 想定される反駁

### R1. 無条件の相互通報義務は別種の危険を生む

過剰通報、プライバシー侵害、萎縮効果。条件節は意図的な設計でありうる。

**応答**: この反論は成立しうる。ただし**それならば設計意図が説明されるべき**である。
当該文書は他の箇所では理由を丁寧に説明する方針を採っており（p.5）、
ここだけ理由が示されていないこと自体が指摘に値する。

**R1 は解消していない。**F02 は「欠陥」ではなく「未説明の非対称」に留まる可能性がある。

### R2. 運用側が既定で求める運用を想定しているのではないか

**応答**: 公開情報からは確認できない。ただしその想定が正しいとしても、
**義務の発動が運用の裁量に依存する**という構造は変わらない。

---

## 6. 誤りの経緯（記録）

起票時、私（分析者）は当該箇条書きを通読した印象に基づき
「他項目はいずれも無条件」と書いた。**機械照合をしていなかった。**

`tools/compare_versions.sh` と同種の機械的走査を後から行った結果、
条件節を含む項目が 3 件あることが判明した。

主張の骨格は生き残ったが、**印象に基づく「唯一」の主張は危険**である。
以後、量的主張は必ず機械照合の出力を根拠とすること。

---

## 7. 残る未確認事項

- [ ] R1（設計意図の説明の有無）— Anthropic の他の公開文書に説明がないか
- [ ] arXiv:2601.00360 の本文（要旨のみ確認済み）に条文分析が含まれないか
- [ ] OpenAI Model Spec 等の他社文書に同種の報告義務があるか、条件付きか
