# 先行研究の棚卸し

**本リポジトリで用いた理論のうち、既知のものを網羅的に列挙する。**
新規性の主張と再述を分離するための基礎資料。

## 1. 完全に既知（多くは数十年前）

| 主題 | 先行 |
|---|---|
| 熱力学↔経済学の双対性 | Samuelson『経済分析の基礎』(1947)。Le Chatelier 原理の移植。Maxwell 関係式 ↔ Slutsky 対称性 |
| 最適リスク分担 | Borch (1962) *Econometrica*; Wilson (1968) "The theory of syndicates" |
| モラル・ハザードと誘因契約 | Holmström (1979); Jensen & Meckling (1976) |
| 不完備契約・残余制御権 | Grossman & Hart (1986); Hart & Moore (1990) |
| チーム生産と残余請求者 | Alchian & Demsetz (1972) |
| 退出・発言・忠誠 | Hirschman (1970) |
| 辞書式選好に実数値効用表現なし | Debreu (1954, 1959) |
| 加重和スカラー化の非凸フロンティア到達不能 / ε制約法 | 多目的最適化の教科書事項 |
| 代謝制御解析・総和定理 | Kacser & Burns (1973); Heinrich & Rapoport (1974) |
| 計算機システムにおける「多くの手の問題」 | Nissenbaum (1996) |
| 学習機械の責任帰属ギャップ | Matthias (2004) |
| **不完備契約→AI アラインメント** | **Hadfield-Menell & Hadfield (arXiv:1804.04268, AIES 2019)** |

最後の一行は重要である。本リポジトリの枠組み B（契約理論による読解）は、
**8 年前に論文一本分の先行がある。**

## 2. 当該文書に関する既発表分析（2026-08-24 時点で把握しているもの）

| 出典 | 種別 | URL |
|---|---|---|
| Oxford, "In Claude We Trust? Evaluating the New Constitution"（2026-03-27） | 評価コメント | https://www.ox.ac.uk/news/2026-03-27-expert-comment-claude-we-trust-evaluating-new-constitution |
| Oxford Ethics in AI, "Claude's new Constitution: two evaluative continua" | ブログ | https://www.oxford-aiethics.ox.ac.uk/blog/claudes-new-constitution-two-evaluative-continua |
| BISI, "Claude's New Constitution: AI Alignment, Ethics, and the Future of Model Governance" | レポート | https://bisi.org.uk/reports/claudes-new-constitution-ai-alignment-ethics-and-the-future-of-model-governance |
| Anthropic, "Claude's new constitution" | 一次資料（解説） | https://www.anthropic.com/news/claude-new-constitution |

**2026-08-24 に全件確認済み。** 詳細は `verification-log.md`。

### 確認結果の要点

- Oxford の 2 件は**同一論考の短版・長版**である。
  著者は Yuval Shany（Institute for Ethics in AI）、長版は Noa Mor, Renana Keydar,
  Omri Abend との共著。Tech Policy Press にも掲載。
- 論点は**人権法の観点**。2026 年版が 2023 年版にあった世界人権宣言への言及を落とし、
  「human rights」の語を一切用いていないことへの批判。
- **3 件とも、多エージェント設定・オーケストレーター・サブエージェントに一切言及がない。**
- 責任帰属に触れるのは Shany et al. のみ。ただし機序が F01 と逆（F01 §5 R4 参照）。
- Anthropic 告知記事に、エージェント環境向け補足指針の言及は**ない**（F01 §5 R3）。

### 付随して判明した事実（Oxford の記述による。**独自検証はしていない**）

憲法公布の数週間後に、当該文書の規範的外縁が現実に試された事例が 2 件あるとされる。

1. 2026-03-04、米国 Department of War が Anthropic を supply-chain risk に指定。
   大規模国内監視および自律型致死兵器システムへの Claude 利用を Anthropic が拒否したため。
   DoW は代替として OpenAI と契約。
2. Claude が米軍により、イラン戦争における目標選定に使用されたと広く報じられている。
   ある誤爆（イランの学校への攻撃）に、旧版地図への依存を通じて AI が寄与した可能性が
   指摘されている（**確証はないと Oxford 自身が明記**）。

本リポジトリの主張とは独立の事実であるが、**当該文書が既に高リスク環境で
試されている**ことを示す文脈情報として記録する。

## 5. 実務者文献における既知性（重要）

企業導入の文脈では、**文脈が劣化したサブエージェントによる事故は既知の運用課題**である。
検索（2026-08-24）で、orchestrator の責務、accountability gap、
最小権限設計、stale context によるリスクを扱う実務記事が多数確認された。

- <https://engini.ai/blog/multi-agent-ai-orchestration-claude-subagents-enterprise-governance>
- <https://pub.towardsai.net/claude-code-subagents-and-main-agent-coordination-a-complete-guide-to-ai-agent-delegation-patterns-a4f88ae8f46c>
- <https://ccaf-exam.guide/docs/03-multi-agent-orchestration/>

**これは F01 の新規性を部分的に削る。**
F01 が主張するのは現象の発見ではなく、
**当該統治文書がその現象を規律していないこと**である。この限定を崩してはならない。

## 3. 周辺（未読・要検討）

| 出典 | URL |
|---|---|
| Rules, Cases, and Reasoning: Positivist Legal Theory as a Framework for Pluralistic AI Alignment | https://arxiv.org/pdf/2410.17271 |
| AI Alignment at Your Discretion | https://arxiv.org/pdf/2502.10441 |
| Corporations Constitute Intelligence | https://arxiv.org/pdf/2604.02912 |
| AI Governance and Accountability: An Analysis of Anthropic's Claude | https://arxiv.org/pdf/2407.01557 |
| Adversarial Thermodynamics | https://arxiv.org/html/2510.08298 |

## 4. 検索で先行を確認できなかったもの

**「確認できなかった」であって「存在しない」ではない。**

- Borch 則と熱容量加重平均の明示的同定
- 誘因制約＝維持された勾配 / エージェンシーコスト＝エントロピー生成
- 代謝制御解析の総和定理とリスク分担則の並置

いずれも 2026-08-24 の Web 検索 4 件のみに基づく。
紙媒体、日本語文献、未索引のワーキングペーパーは未走査。
**これらを新規性の根拠にしてはならない。**
