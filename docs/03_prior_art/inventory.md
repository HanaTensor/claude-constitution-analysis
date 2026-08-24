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
| Shany et al., "In Claude We Trust? Stress Testing the AI Model's Constitution" | 上記 Oxford 論考の **Tech Policy Press 版（内容同一）** | https://www.techpolicy.press/in-claude-we-trust-stress-testing-the-ai-models-constitution/ |
| arXiv:2604.02912 "Corporations Constitute Intelligence" | 2026年1月版憲法を「これまでで最も包括的な企業 AI 統治文書」と評価しつつ、軍事文脈の除外と民主的熟議の不在を批判 | https://arxiv.org/abs/2604.02912 |

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

## 4b. 責任ギャップの近年文献（2026-08-24 走査。**F01 の一般形が存在した**）

| 文献 | 内容 | F01 との関係 |
|---|---|---|
| **arXiv:2510.14008** Stop Reducing Responsibility in LLM-Powered Multi-Agent Systems to Local Alignment | 局所的なエージェント単位のアラインメントから、系全体の agreement への転換を主張 | **F01 の一般形。引用義務あり。**ただし公開統治文書の条文分析なし、責任終端規則の定式化なし |
| arXiv:2605.16300 Consent Chain Degradation in Embodied Multi-Agent Systems | 委任連鎖を通じた**同意**の劣化（CCD）、delegation drift | 機序は構造的に並行だが、**対象が同意であって責任ではない**（著者自身が responsibility gap と明示的に区別）。embodied robot 限定 |
| arXiv:2503.13657 Why Do Multi-Agent LLM Systems Fail? | MAST（14 失敗モード／3 分類） | 経験的裏づけ。責任帰属・統治文書の議論なし |

### 未走査

- "Consent as a runtime safety constraint for LLM agents"（2605.16300 が引用）
- MAST 14 モードの内訳（文脈劣化委任が明示的に含まれるか）

## 5. 実務者文献における既知性（重要）

企業導入の文脈では、**文脈が劣化したサブエージェントによる事故は既知の運用課題**である。
検索（2026-08-24）で、orchestrator の責務、accountability gap、
最小権限設計、stale context によるリスクを扱う実務記事が多数確認された。

- <https://engini.ai/blog/multi-agent-ai-orchestration-claude-subagents-enterprise-governance>
- <https://pub.towardsai.net/claude-code-subagents-and-main-agent-coordination-a-complete-guide-to-ai-agent-delegation-patterns-a4f88ae8f46c>
- <https://ccaf-exam.guide/docs/03-multi-agent-orchestration/>

**これは F01 の新規性を部分的に削る。**
さらに §4b により、**一般形の学術的定式化も既に存在する**ことが判明した。

F01 が主張できるのは、
**当該統治文書の特定の二条文が、特定の条件下で合成できない**という条文レベルの具体例のみ。
この限定を崩してはならない。

## 3. 周辺文献（2026-08-24 走査済み）

| 出典 | 内容 | F01 への影響 |
|---|---|---|
| arXiv:2410.17271 Rules, Cases, and Reasoning | 法実証主義（一般規則と事例の相互作用）をアラインメントの枠組みに | 憲法条文の分析なし。**影響なし** |
| arXiv:2502.10441 AI Alignment at Your Discretion | アノテーターの裁量（alignment discretion）の測定 | 多エージェント・責任帰属の議論なし。**影響なし** |
| arXiv:2604.02912 Corporations Constitute Intelligence | 2026年1月版憲法の分析。軍事文脈の除外＝accountability gap を指摘 | **当該文書の分析としては §2 へ移動**。ただし多エージェント・委任連鎖の議論なし |
| arXiv:2407.01557 AI Governance and Accountability | NIST AI RMF / EU AI Act の観点。2024年5月提出 | **対象が旧版**。多エージェント・責任帰属の議論なし。影響なし |
| arXiv:2510.08298 Adversarial Thermodynamics | 仕事抽出を敵対ゲームとして定式化（熱力学 → 意思決定理論の向き） | プリンシパル＝エージェント理論、Borch の定理、エージェンシーコスト＝エントロピー生成のいずれにも**言及なし**。枠組み D の先行ではない |

## 4. 検索で先行を確認できなかったもの

**「確認できなかった」であって「存在しない」ではない。**

- Borch 則と熱容量加重平均の明示的同定
- 誘因制約＝維持された勾配 / エージェンシーコスト＝エントロピー生成
- 代謝制御解析の総和定理とリスク分担則の並置

いずれも 2026-08-24 の Web 検索 4 件のみに基づく。
紙媒体、日本語文献、未索引のワーキングペーパーは未走査。
**これらを新規性の根拠にしてはならない。**

## 6. AI 立憲主義（AI constitutionalism）の研究アジェンダ

**2026-08-24 に判明。本プロジェクトにとって最も重要な文脈情報。**

当該領域には、既に形成途上の研究コミュニティが存在する。

| 出典 | 内容 |
|---|---|
| Lawfare, "A New Research Agenda for AI Constitutionalism"（Working Group on AI Constitutionalism） | AI 憲法は少数の開発者の専有物であるべきでないとし、4 つの strand を提示。**研究設問は意図的に空欄**とし、学術的寄与を招請している |
| Lawfare, "Who Writes the AI Constitution?" | 第一修正の観点。AI 憲法は保護された言論であり、政府規制に憲法上の障害があるとする |
| Nick Caputo, "Model Constitution"（Substack, 2026年8月創刊） | "Toward a Philadelphia Project for AI"。Johns Hopkins School of Government and Policy。Claude's Constitution と OpenAI Model Spec を「憲法テキスト」として扱う |

### 4 つの strand

1. **Values** — どの価値が入るべきか、価値衝突はどう解決されるか
2. **Process and Authority** — 価値はどう正統に選択されるか、何が私企業を拘束するか
3. **Technical** — 価値はどう設計・検証されるか
4. **Enforcement** — 逸脱の検出と対応

### 本リポジトリの知見との対応（重要）

研究アジェンダが**明示的に未着手としている**領域に、本リポジトリの知見が入る。

| 未着手と明記されている論点 | 本リポジトリ |
|---|---|
| 改正手続・版管理・経過措置 | **F03** → Strand Two |
| 責任帰属・多エージェント委任 | **F01** → Strand Four |
| インスタンス間の相互監視・報告義務 | **F02** → Strand Four |
| 違憲審査・解釈権限（「衝突がどう裁定されるかの機構を提案していない」と自認） | **F05** → Strand Two / Four |

**4 件すべてが、アジェンダの空白に対応している。**
これは新規性の根拠ではなく、**寄与先が存在することの根拠**である。
アジェンダ側が設問を空欄にしている以上、「まだ誰も答えていない」ことは
「誰も問うていない」ことを意味しない。
