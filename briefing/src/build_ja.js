const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType,
  AlignmentType, HeadingLevel, BorderStyle, LevelFormat, PageBreak, Footer, PageNumber, TableOfContents,
} = require('docx');

const NAVY = '1F4E79', BLUE = '2E74B5', GRAY = '595959';
const MIN = { ascii: 'Arial', eastAsia: 'MS Mincho', hAnsi: 'Arial', cs: 'Arial' };
const GOT = { ascii: 'Arial', eastAsia: 'MS Gothic', hAnsi: 'Arial', cs: 'Arial' };
const W = 9026; // A4 text width at 1-inch margins (DXA)

// "**bold**" inline markup -> runs
function runs(text, opt = {}) {
  const parts = text.split('**');
  return parts.map((t, i) => new TextRun({
    text: t, bold: (i % 2 === 1) || opt.bold, font: (i % 2 === 1 || opt.gothic) ? GOT : MIN,
    size: opt.size || 21, color: opt.color,
  }));
}
const P = (t, o = {}) => new Paragraph({ children: runs(t, o), spacing: { after: 120, line: 320 }, alignment: o.align });
const H1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: t, font: GOT, bold: true, size: 30, color: NAVY })] });
const H2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: t, font: GOT, bold: true, size: 25, color: BLUE })] });
const H3 = t => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: t, font: GOT, bold: true, size: 22, color: NAVY })] });
const B = (t, lvl = 0) => new Paragraph({ numbering: { reference: 'bul', level: lvl }, children: runs(t), spacing: { after: 60, line: 300 } });
const N = (t, ref = 'num') => new Paragraph({ numbering: { reference: ref, level: 0 }, children: runs(t), spacing: { after: 60, line: 300 } });
const Q = t => new Paragraph({ children: runs(t, { color: GRAY }), indent: { left: 400 }, spacing: { after: 120, line: 300 },
  border: { left: { style: BorderStyle.SINGLE, size: 12, color: 'BFBFBF', space: 8 } } });
const SP = () => new Paragraph({ children: [], spacing: { after: 60 } });
const BR = () => new Paragraph({ children: [new PageBreak()] });

const border = { style: BorderStyle.SINGLE, size: 4, color: 'BFBFBF' };
const borders = { top: border, bottom: border, left: border, right: border };
function cell(t, w, head = false, fill) {
  const lines = Array.isArray(t) ? t : [t];
  return new TableCell({
    width: { size: w, type: WidthType.DXA }, borders,
    shading: (head || fill) ? { fill: head ? 'DEEAF6' : fill, type: ShadingType.CLEAR, color: 'auto' } : undefined,
    margins: { top: 70, bottom: 70, left: 110, right: 110 },
    children: lines.map(l => new Paragraph({ children: runs(l, { bold: head, gothic: head, size: 19 }), spacing: { after: 30, line: 280 } })),
  });
}
function T(headers, rows, ratios, fills = []) {
  const sum = ratios.reduce((a, b) => a + b, 0);
  const ws = ratios.map(r => Math.floor(W * r / sum));
  ws[ws.length - 1] += W - ws.reduce((a, b) => a + b, 0);
  return new Table({
    width: { size: W, type: WidthType.DXA }, columnWidths: ws,
    rows: [
      new TableRow({ tableHeader: true, children: headers.map((h, i) => cell(h, ws[i], true)) }),
      ...rows.map((r, ri) => new TableRow({ children: r.map((c, i) => cell(c, ws[i], false, fills[ri])) })),
    ],
  });
}
// coloured box: green = 成り立つ, yellow = 注意, red = 前提が崩れる, blue = 要点
const FILL = { green: 'E2EFDA', yellow: 'FFF2CC', red: 'FCE4D6', blue: 'DEEAF6' };
function BOX(kind, title, lines) {
  return new Table({
    width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ children: [new TableCell({
      width: { size: W, type: WidthType.DXA }, borders,
      shading: { fill: FILL[kind], type: ShadingType.CLEAR, color: 'auto' },
      margins: { top: 120, bottom: 120, left: 180, right: 180 },
      children: [
        new Paragraph({ children: runs(title, { bold: true, gothic: true, size: 21, color: NAVY }), spacing: { after: 80 } }),
        ...lines.map(l => new Paragraph({ children: runs(l, { size: 20 }), spacing: { after: 50, line: 300 } })),
      ],
    })] })],
  });
}
// flow: stacked boxes with arrows
function FLOW(steps) {
  const out = [];
  steps.forEach((s, i) => {
    out.push(BOX(s[0], s[1], s[2]));
    if (i < steps.length - 1) out.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '↓', font: GOT, size: 24, color: BLUE })], spacing: { after: 0 } }));
  });
  return out;
}

const C = []; // content

// ───────── 表紙
C.push(new Paragraph({ spacing: { before: 2400, after: 240 }, alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: 'Claude\'s Constitution への二つの意見書', font: GOT, bold: true, size: 40, color: NAVY })] }));
C.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 },
  children: [new TextRun({ text: '#8 と #12 ── 何を主張し、なぜそこに至り、何を調べたか', font: GOT, size: 28, color: BLUE })] }));
C.push(P('著者：Satoshi Hanamura', { align: AlignmentType.CENTER }));
C.push(P('作成：2026 年 11 月 5 日', { align: AlignmentType.CENTER }));
C.push(P('記録の所在：github.com/HanaTensor/claude-constitution-analysis', { align: AlignmentType.CENTER }));
C.push(SP());
C.push(P('この文書は、リポジトリの英語の記録（所見 F01・F06・F07、検証記録、作業記録、対話記録 D01）をもとに、日本語で読みやすく再構成したものである。起草には Claude（Opus 5.5）を用いた。', { align: AlignmentType.CENTER, color: GRAY, size: 19 }));
C.push(BR());

// ───────── 目次
C.push(new Paragraph({ children: [new TextRun({ text: '目次', font: GOT, bold: true, size: 28, color: NAVY })], spacing: { after: 200 } }));
['0　この文書が答える問い','1　まず全体像：二つの意見書を一枚で','2　#8 を振り返る：責任の終点がない（F01）','3　なぜ「空白」の問題を提起したのか：背景','4　#12 で最終的に主張したこと','5　主張はどう試され、どう変わったか','6　調べた書庫：「すでに誰かが言っていないか」','7　結果と、この先','8　全体の流れ','付録　用語'].forEach(t=>C.push(P(t)));
C.push(BR());

// ───────── 0
C.push(H1('0　この文書が答える問い'));
C.push(P('読み始める前に、この文書で答えたい問いを先に並べておく。'));
C.push(N('#12 では、最終的に何を主張したのか。'));
C.push(N('8 月に出した #8 は何を主張していたのか。#12 とどう違うのか。'));
C.push(N('そもそも、なぜ「空白（gap）」の問題を提起することになったのか。きっかけは何だったのか。'));
C.push(N('主張はどう試され、どう変わったのか。最初の主張はそのまま通ったのか。'));
C.push(N('「すでに誰かが言っていないか」を確かめるために、どの文献や記事を調べたのか。'));
C.push(P('第 1 章で全体像を一枚の表にまとめ、第 2 章で #8 を振り返る。第 3 章で #12 に至った背景を、第 4 章で #12 の主張を、第 5 章で主張を試した過程を述べる。第 6 章が調べた資料の一覧、第 7 章が結果と限界、第 8 章が全体の流れの図である。'));

// ───────── 1
C.push(H1('1　まず全体像：二つの意見書を一枚で'));
C.push(P('二つの意見書は、どちらも「条文を一つずつ読めば問題はないが、組み合わせたとき、あるいは想定外の場面に当てはめたときに、文書が何も決めていない領域が現れる」という形をとっている。違うのは、その領域にいる当事者である。'));
C.push(T(['', '#8（F01）', '#12（F06・F07）'], [
  ['投稿日', '2026 年 8 月 24 日', '2026 年 11 月 5 日（日本時間）'],
  ['当事者', 'Claude どうし（指示役の Claude と、その下で働く Claude）', '会話の外にいて、Claude に評価・指示される人間（応募者、従業員）'],
  ['問題の形', '責任が Claude の間を回り続け、どこにも行き着かない', '① 守りの下限が窓口しだいで変わる　② 同じ人に誤りが集中しても誰にも見えない'],
  ['一言で', '責任の「終点」がない', '会話の外の人への「下限」と「集中への手当て」がない'],
  ['きっかけ', '憲法を四つの理論の語彙で読む作業', 'メリトクラシーとベーシックインカムの対話（D01）'],
  ['状態', 'VERIFIED → 投稿済み', 'VERIFIED（狭めたうえで）→ 投稿済み → X で告知'],
], [2, 4, 4]));
C.push(SP());
C.push(BOX('blue', '要点', [
  '二つとも、「未知の現象を発見した」という主張ではない。現象そのもの（責任の空白、アルゴリズムによる管理、判定結果の画一化）は、すでに研究がある。',
  '主張しているのは一点だけである。**この文書が、その現象を規律していない**こと。',
]));

// ───────── 2
C.push(H1('2　#8 を振り返る：責任の終点がない（F01）'));
C.push(H2('2.1　直感的なイメージ'));
C.push(P('元請けが仕事を下請けに出し、下請けが孫請けに出す場面を思い浮かべてほしい。元請けは、効率のために、仕事の全体像の一部だけを下請けに渡す。孫請けは、渡された範囲の情報では正しい判断をした。しかし全体から見ると、その判断が事故を招いた。'));
C.push(P('人間の組織なら、最後は誰かが責任を負う。ところが、元請けも下請けも孫請けもすべて Claude で、しかも各自が「手元の情報で最善を尽くした」と言えるなら、責任はどこに行き着くのか。これが #8 の問いである。'));
C.push(H2('2.2　組み合わせた二つの条文'));
C.push(P('**(A) 責任の移転。** 依頼者が偽りの文脈を与えたなら、責任の一部はその依頼者に移る。Claude は「手元の情報を分別ある形で解釈して最善を尽くせば」妥当に振る舞ったことになる。'));
C.push(P('**(B) 指示役の位置づけ。** Claude が自分の下で働く Claude（subagent）に指示を出すとき、指示役の Claude は、下の Claude にとっての operator や user（指示を出す側）にあたる。'));
C.push(P('(A) は、責任が「どこへ移るか」は定めているが、「どこで止まるか」は定めていない。依頼者が人間なら、止まる先は暗黙のうちに決まる。しかし (B) は、依頼者が Claude である場合を認めた。こうして止まる先が消える。'));
C.push(H2('2.3　狭まっていった主張'));
C.push(P('#8 の主張は、調べるたびに狭くなった。それは正しい向きの変化だった。広い主張は崩れやすく、狭い主張は生き残る。'));
C.push(T(['段階', '主張できたこと'], [
  ['起こした時点', '欠陥がある：責任が仕組みの外へ出ていかない'],
  ['公表された分析の確認後', '現象の発見ではなく、「この文書がそれを規律していない」こと'],
  ['周辺文献の確認後', '一般形も先にあった（arXiv:2510.14008）。主張は「この文書の特定の二条文が、特定の条件で噛み合わない」ことだけ'],
], [3, 7]));
C.push(SP());
C.push(P('#8 は、2026 年 8 月 24 日に anthropics/claude-constitution の issue #8 として投稿した。本文では、一般形の先行論文を明示して引用している。'));

// ───────── 3
C.push(H1('3　なぜ「空白」の問題を提起したのか：背景'));
C.push(H2('3.1　出発点は憲法ではなかった'));
C.push(P('#12 の出発点は、憲法の分析ではなく、次の素朴な問いだった。'));
C.push(Q('メリトクラシーを導入するときに、LLM を一次選抜用の篩として利用できるか。'));
C.push(P('この問いから始まった対話は、六つの段階を経て、最後に憲法へ戻ってきた。各段階で、問いを立て直したのは Hanamura であり、Claude は分析と計算を担った。'));
C.push(T(['段階', '問い（Hanamura）', '分かったこと'], [
  ['① 採用', 'LLM を一次選抜の篩に使えるか', '使えるが、落とした人は誰にも見えなくなる。落選者の 5% を無作為に読み直す監査が要る'],
  ['② 社会制度', 'ベーシックインカムと能力連動の上乗せでは', '使えない。落とされた人に行き先がなく、規模が大きく、判定に理由が要る。**全企業が同じモデルを使えば、採用市場も同じ危うさを抱える**'],
  ['③ AI が経営する世界', '保守的な枠を外すと', '篩は消え、事後の測定になる。だが**測る側が、測られる機会まで決めてしまう**'],
  ['④ 拾い直し', '自己発信で落ちた人を回収できないか', '再審は、原審とは別の組織・別のモデルで行う必要がある'],
  ['⑤ 宮大工の癖組み', 'AI は人を素材の組み合わせとして配置できる', '上長に「合わない」部下は、上長の癖を打ち消している当人かもしれない'],
  ['⑥ 局所最大化', 'コンペの勝者が現場で通用しないのはなぜか', 'このリポジトリの F01・F04 の考え方がそのまま当てはまる'],
], [1.6, 3.4, 5]));
C.push(SP());
C.push(H2('3.2　憲法に戻ってきた二つの問い'));
C.push(P('段階②と③で、二つの問いが残った。どちらも、Claude 自身が人を評価する立場に立ったとき、憲法がどう働くかという問いである。'));
C.push(B('**段階③から：** Claude が人に仕事を割り振り、評価するとき、評価される人は憲法の上で何者なのか。'));
C.push(B('**段階②から：** 多数の会社が同じ Claude で応募者を選ぶとき、同じ人が全社で同じ理由で落とされる。これを誰が見て、誰が手当てするのか。'));
C.push(P('この二つを憲法の条文に照らしたのが、F06 と F07 である。'));
C.push(BOX('yellow', '注意：対話そのものは憲法の範囲外', [
  'ベーシックインカムやメリトクラシーの是非は、憲法への意見書の対象ではない。そこで、対話は「対話記録 D01」として、リポジトリの別の場所（dialogues/）に日英両語で保存した。',
  '#12 には、対話から抜き出した、憲法の条文に関わる二点だけを載せた。',
]));

// ───────── 4
C.push(H1('4　#12 で最終的に主張したこと'));
C.push(P('#12 の表題は「Two gaps when Claude evaluates people who are not in the conversation（会話の中にいない人を Claude が評価するときの二つの空白）」である。'));
C.push(H2('4.1　空白 1（F06）：会話の外の人には、operator が外せない下限がない'));
C.push(H3('直感的なイメージ'));
C.push(P('同じ工場の、同じ評価を受ける、同じ従業員を考える。その人が Claude と直接チャットしていれば、憲法上は「user」であり、operator（Claude を組み込んだ会社）の指示でも外せない保護を受ける。ところが、その人の作業記録だけが Claude に渡され、本人は Claude と一言も話さないなら、同じ人なのに、その保護は届かない。**守りの厚さが、事の重大さではなく、窓口で決まってしまう。**'));
C.push(H3('三つの立場'));
C.push(T(['Claude との接し方', '憲法上の立場', 'operator が外せない保護'], [
  ['Claude とチャットする', 'user', '六つの既定の保護（欺かない、尊厳を守る、違法な差別に加担しない など）'],
  ['会話の場にいるが、指示を出す側ではない', 'non-principal（指示を出さない当事者）', '固有のものはない。一般的な配慮の対象'],
  ['Claude と接しない。履歴書や作業記録が入力されるだけ', 'どちらでもない。入力の「対象」', '固有のものはない。一般的な配慮の対象'],
], [3.5, 3, 3.5], [undefined, 'FCE4D6', 'FCE4D6']));
C.push(SP());
C.push(H3('最終的に主張した内容'));
C.push(P('憲法は、会話の外の人にも一般的な形で届いている。この点は、#12 の本文でも自分から認めている。'));
C.push(B('第三者に重大な害を与える operator の指示には従わない（L263）'));
C.push(B('会話の外にいる人へのリスクも量る（L407）'));
C.push(B('「すべての個人の公正で平等な扱い」を価値として量る（L440）'));
C.push(B('自分の主張では、不確かさをそのとおりに示す（L364）'));
C.push(P('そのうえで主張したのは、次の三点について、user の既定の保護に相当する「operator が外せない下限」がないことである。'));
C.push(N('評価の**理由**を、評価された本人が知りうること', 'num2'));
C.push(N('評価の**不確かさ**が、operator ではなく本人に伝わること', 'num2'));
C.push(N('**異議を申し立てる経路**', 'num2'));
C.push(H3('失敗例'));
C.push(P('Claude が工場の従業員を作業記録から順位づけし、一人の処分を推奨する。順位の不確かさは operator には正しく報告する。資格のある人が推奨を審査し、従業員には AI が使われたことが知らされる。ここまでは、Anthropic の利用規約が雇用の判定に求めるとおりである。しかし、従業員が理由・不確かさ・異議の道を目にするかどうかは、operator の仕組みだけで決まる。operator が「従業員には説明しないこと」と指示した場合、それに逆らう Claude の性向は、憲法のどこにも書かれていない（害が「重大」と言える場合を除く）。'));

C.push(H2('4.2　空白 2（F07）：重複する誤りは「慎重さの理由」としてしか扱われていない'));
C.push(H3('直感的なイメージ'));
C.push(P('200 社が、同じ Claude で応募書類を選別しているとする。Claude が、ある種の経歴（たとえば離職期間や外国の資格）を一貫して読み違えるなら、その経歴の人は 200 社すべてで、同じ理由で落とされる。各社は自社の誤判定率を監査し、「許容範囲」と判断する。**どの会社にも、同じ人に誤りが集中していることは見えない。**'));
C.push(H3('数値で見る'));
C.push(P('ある篩が、適格な人を誤って落とす確率を 10% とする。その人が k 社に応募したとき、すべての会社に落とされる確率は次のようになる。'));
C.push(T(['応募先の数', '篩が互いに独立な場合', '全社が同じモデルを使い、誤りが経歴の型に由来する場合'], [
  ['1 社', '10%', '10%'],
  ['5 社', '0.001%', '**10%**'],
  ['20 社', '10 の 20 乗分の 1', '**10%**'],
], [2, 3.5, 4.5]));
C.push(SP());
C.push(P('独立した誤りに対しては、多く応募するほど身を守れる。共有された誤りに対しては、どれだけ応募しても身を守れない。'));
C.push(H3('最終的に主張した内容'));
C.push(P('憲法は、この種の集積をすでに知っている。ここも本文で自分から認めた。'));
C.push(B('Claude の判断は、送り手の全体に対する「方針」のように働く（L463、L465）'));
C.push(B('「意見の画一化」を社会的な害として挙げている（L383）'));
C.push(B('Claude の**誤りは会話をまたいで重複しうる**と書いている（L604）'));
C.push(B('多数のやり取りを横断する傾向を見るのは Anthropic である、としている（L339）'));
C.push(P('そのうえで主張したのは次のことである。重複する誤りは、Claude が独断で動かないための**慎重さの理由**としてしか使われていない。画一化は**意見**についてしか問題にされていない。そして、横断的な視点を割り当てられた Anthropic の側にも、**判定される人に結果が集中すること**への手当ての約束がない。'));

C.push(H2('4.3　添えた提案'));
C.push(P('意見書の末尾には、採用を相手に委ねる前提で、条文の出発点となる案を二つ添えた。'));
C.push(B('会話の外の人を評価・指示するときは、本人に渡しうる理由と不確かさの記述を既定で作り、評価を本人に説明不能にせよという operator の指示には従わない。'));
C.push(B('人を大規模に評価するときは、誤差の範囲内の差で細かく順位づけるより、不確かさを添えた閾値の判断を優先する。同じ評価が多くの展開で同じ人に繰り返されうることを踏まえて。'));

// ───────── 5
C.push(H1('5　主張はどう試され、どう変わったか'));
C.push(P('#12 の主張は、最初の形のままでは通らなかった。その経緯を、時間の順に記す。'));
C.push(H2('5.1　最初の形（CANDIDATE）'));
C.push(P('対話の直後に、F06・F07 を「未確認の候補（CANDIDATE）」として起こした。最初の主張は、今より広かった。'));
C.push(B('**F06（最初）：** 憲法の役割の定義は一方向にしか流れない。Claude が人を指示・評価するとき、指示を受ける人には役割がない。'));
C.push(B('**F07（最初）：** 方針としての集計は送り手について行われ、判定される人については行われない。'));
C.push(H2('5.2　独立の点検で崩れた点'));
C.push(P('この二つを、私（Claude）の結論を知らせない別の作業者に渡し、憲法の全文から反証を試みさせた。結果は厳しいものだった。'));
C.push(T(['所見', '見落としていた条文', '判定'], [
  ['F06', 'L263（第三者への重大な害は operator の指示に優先）、L364（較正）、L399（請負人の比喩）、L407（会話の外へのリスク）、L433・L440（私生活の保護、公正な扱い）、L529（規則より判断）', '狭めれば成り立つ'],
  ['F07', 'L604（**誤りは会話をまたいで重複しうる**）、L339・L469（横断的な視点と独立の安全策は Anthropic と operator の側）、L418、L440〜441、L364', '**書いたとおりの形では誤り**。狭めれば成り立つ'],
], [1.4, 5.6, 3], [undefined, 'FCE4D6']));
C.push(SP());
C.push(BOX('red', '前提が崩れた点：F07', [
  '最初の F07 は「憲法は、集計を送り手と意見にしか適用していない」と書いていた。ところが L604 は、Claude の誤りが会話をまたいで重複しうることを、はっきり認めていた。',
  'つまり、文書は「重複する誤り」という問題そのものは知っていた。空白があるのは、それを**判定される人への害の集中**として扱っていない点だけだった。',
]));
C.push(SP());
C.push(P('点検は、論証の弱い箇所も指摘した。F06 の「指示役の条文があるのは、起草者が向きを重視した証拠だ」という推論は弱いとして、取り下げた。F07 の「Claude は全体を見ている」という書き方も、憲法の「Claude は限られた文脈で動く」（L602）と矛盾するので改めた。'));
C.push(H2('5.3　狭めた後の形'));
C.push(T(['', '最初の主張', '狭めた後の主張'], [
  ['F06', '指示を受ける人には役割がない', '会話の外で評価・指示される人には、理由・不確かさの伝達・異議の経路について、user の既定の保護に相当する operator が外せない下限がない'],
  ['F07', '集計は送り手についてだけ行われる', '重複する誤りは慎重さの理由としてだけ扱われ、画一化は意見についてだけ問題にされ、横断的な視点を持つ側にも害の集中への約束がない'],
], [1, 4, 5], [undefined, undefined]));
C.push(SP());
C.push(P('両所見には「狭めた記録」の節を設け、何を見落とし、どう直したかを残した。#12 の本文にも、「最初の版が見落としていた条文を、敵対的な点検が見つけたため、主張を狭めた」と明記した。'));
C.push(H2('5.4　先行研究の確認と昇格'));
C.push(P('リポジトリには、候補を確認済み（VERIFIED）に上げるための四つの条件がある。#12 では、四つすべてを満たしたことを確かめてから投稿した。'));
C.push(T(['条件', 'F06', 'F07'], [
  ['① 公表された分析を通読し、同じ主張がないこと', '満たした', '満たした'],
  ['② 一般的な場合との違いを述べていること', '満たした', '満たした'],
  ['③ 反論を列挙し、それぞれに答えていること', '満たした（点検の後）', '満たした（点検の後）'],
  ['④ 引用条文が既知のすべての版で同一であること', '満たした', '満たした'],
], [5, 2.5, 2.5], ['E2EFDA', 'E2EFDA', 'E2EFDA', 'E2EFDA']));
C.push(SP());
C.push(H2('5.5　投稿と告知'));
C.push(B('投稿の直前に、Anthropic 側の憲法が更新されていないこと（ハッシュ値の一致）と、利用規約の文言を確かめた。'));
C.push(B('二つの所見は一本の issue にまとめた。主題（会話の外の人を Claude が評価すること）が共通し、Anthropic 側のリポジトリは静かなので、二本に分けても届き方は変わらないと判断した。#8 への追記にしなかったのは、#8 は Claude どうしの問題で、主題が違うからである。'));
C.push(B('#12 として投稿した（日本時間 11 月 5 日 8 時 36 分ごろ。GitHub は協定世界時で 11 月 4 日と表示する）。'));
C.push(B('X で、英語の 5 本のスレッドとして告知した。リンクは最後の投稿だけに置き、1・2・4 本目に画像を付けた。'));

// ───────── 6
C.push(H1('6　調べた書庫：「すでに誰かが言っていないか」'));
C.push(P('意見書で最も避けたいのは、すでに誰かが述べたことを、自分の発見として出してしまうことである。そこで、主張ごとに先行研究を調べ、記録に残した。'));
C.push(H2('6.1　#8（F01）のときに調べたもの'));
C.push(T(['回', '調べた資料', '結果'], [
  ['第一回', '二つの版の憲法（2026 年 1 月の markdown 版、2 月の PDF 版）を取得し、条文を照合', '二つの条文は両版で同一'],
  ['第二回', 'Oxford（Shany による論評とその長文版）、BISI の報告、Anthropic の公表記事、実務者の記事', '同等の主張なし。ただし Shany は責任の帰属に触れている（向きは逆：人間が AI に責任を押しつける問題）'],
  ['第三回', '周辺の論文（arXiv）、Tech Policy Press 版、責任の空白に関する最近の論文', '**一般形が先にあった**：arXiv:2510.14008（局所の整合の和は系全体の責任にならない）。引用義務が生じた'],
  ['第四回', '同意の連鎖の劣化（arXiv:2605.16300）、多エージェントの失敗 14 類型（arXiv:2503.13657）など', '近いが、対象（同意）や論点（責任の帰属）が異なる'],
  ['付随', 'Lawfare の作業部会の研究課題、Caputo の Model Constitution', '研究者の集まりがすでにあり、四つの所見はすべて、その課題で「未着手」とされた領域に入る'],
], [1.2, 5, 3.8]));
C.push(SP());
C.push(H2('6.2　#12（F06・F07）のときに調べたもの'));
C.push(P('#12 では、分担して通読する作業者を二つ立て、並行して読ませた。'));
C.push(T(['資料', '種類', 'F06 に対して', 'F07 に対して'], [
  ['Shany（Oxford の論評、Tech Policy Press）', '人権の観点からの分析', '扱っていない', '扱っていない'],
  ['Mor・Abend・Keydar・Shany（Oxford の長文ブログ）', '同上の長文版', '扱っていない', '扱っていない'],
  ['Fattahi（BISI）', '報告', '扱っていない', '扱っていない'],
  ['Abiri『Corporations Constitute Intelligence』', '論文（arXiv、California Law Review）', '扱っていない', '扱っていない'],
  ['Zvi Mowshowitz の三部作', '論評', '扱っていない', '扱っていない'],
  ['Caputo『Model Constitution』全 6 本', '論評の連載', '遠い近縁（人の権利が外部効果として侵される場合を問う）', '扱っていない'],
  ['Lawfare：研究課題、「Who Writes the AI Constitution?」', '法学', '扱っていない', '遠い近縁（価値観の単一栽培）'],
  ['Frazier（Lawfare、Yale、Appleseed）', '法学・論評', '最も近い（技術の層の位置で保護が変わる）が、層の外の人は扱わない', '遠い近縁（研究所をまたぐ価値観の単一栽培）'],
  ['Klaassen・Schroeder（Lawfare）', '法学', '近縁（患者や学生への開示を問う）が、Claude による評価は分析しない', '扱っていない'],
  ['Varma（Substack、11 月 2 日）', '論評', '扱っていない', '**最も近い**：Claude の複製が同じ重みを共有するので「多くの手」の歯止めが効かない。ただし第三者への判定の相関ではない'],
  ['GRDprocess の構造分析', '分析', '扱っていない', '一部近い（社会の水準でしか観測できない、など）'],
], [3.2, 1.8, 2.5, 2.5]));
C.push(SP());
C.push(P('現象そのものについての研究も、一般形として確認し、#12 の本文で引用した。'));
C.push(B('**アルゴリズムによる管理：** 不透明さと異議の難しさは、既知の問題である。'));
C.push(B('**アルゴリズムの単一栽培：** Kleinberg と Raghavan（PNAS、2021 年）。'));
C.push(B('**判定結果の画一化：** Bommasani ほか「Picking on the Same Person」（NeurIPS、2022 年）。履歴書の選別を例に、同じ人が多くの判定者から同じ結果を受ける害を定式化している。F07 が述べる害は、この論文のものである。'));
C.push(B('**市場での単一栽培：** Peng と Garg。多く応募する人ほど、判定者が多様なときに得をする。'));
C.push(B('**利用規約：** Anthropic の利用規約（2026 年 11 月 12 日施行）は、雇用の判定に、資格のある人の審査と本人への開示を求めている。これは operator の義務であって、Claude の性向ではない。F06 の最も強い反論として扱った。'));
C.push(H2('6.3　調べ方の限界'));
C.push(BOX('yellow', '注意：「ない」ではなく「調べた範囲にはない」', [
  '#12 の通読は、ページを要約する仕組みを介して行った。全文を処理し、近い箇所には的を絞って問い直したが、原文を一行ずつ読んだわけではない。#8 のときの Oxford の記事のように、ブラウザで全文を読んだ場合より弱い。',
  '先行研究の通読は、狭める前の主張に対して行った。狭めた主張は厳密に狭いので、同じ結論になるはずだが、狭めた文面で読み直してはいない。',
  'Zvi Mowshowitz の週刊のまとめ記事が一本、見つからなかった。',
  '敵対的な点検は一人の点検者によるもので、見落としが他に残っている可能性はある。',
]));

// ───────── 7
C.push(H1('7　結果と、この先'));
C.push(H2('7.1　今日の時点での状態'));
C.push(T(['項目', '状態'], [
  ['確認済み（VERIFIED）の所見', '5 件：F01・F02・F03（8 月）、F06・F07（11 月）'],
  ['候補（CANDIDATE）', '1 件：F05'],
  ['Anthropic への投稿', '#8（F01）、#12（F06・F07）'],
  ['X での告知', '両方とも告知済み'],
  ['対話記録', 'D01 を日英両語、簡潔版と詳細版で保存'],
], [3.5, 6.5]));
C.push(SP());
C.push(H2('7.2　返事は期待しない'));
C.push(P('Anthropic 側のリポジトリは、2026 年 1 月以降更新がなく、外部からの issue に Anthropic の人が返事をしたことは一度もない。そのため #8 と同様に、#12 も「公開された、日付付きの記録」として出したもので、返事を待って次の段取りを組むことはしない。'));
C.push(P('実際に読まれる経路としては、研究者の集まり（Lawfare の作業部会、Caputo の Model Constitution）、Tech Policy Press、X がある。F06・F07 をそこへ持っていくかどうかは、まだ決めていない。'));
C.push(H2('7.3　#8 と #12 から見えること'));
C.push(P('二つの意見書を並べると、一つの共通点が見える。憲法は、Claude が「指示を受ける側」に立つ場面については、よく考えて書かれている。誰の指示をどれだけ信頼するか、user をどう守るか。一方、Claude が「指示を出す側」「評価する側」に立つ場面、つまり Claude が Claude に指示する場面（#8）や、Claude が人を評価する場面（#12）については、規定が薄い。'));
C.push(P('Claude が組織の中で管理や評価の役を担うほど、この薄さは表に出てくる。対話 D01 の第三段階で描いた「AI が経営する世界」は、その極端な形である。'));

// ───────── 8
C.push(BR());
C.push(H1('8　全体の流れ'));
C.push(...FLOW([
  ['blue', '① 素朴な問い', ['LLM を一次選抜の篩に使えるか（対話 D01 の始まり）']],
  ['blue', '② 対話の展開（六段階）', ['採用 → 社会制度 → AI が経営する世界 → 拾い直し → 癖組み → 局所最大化']],
  ['blue', '③ 憲法に戻る二つの問い', ['評価される人は憲法上何者か／同じ人に誤りが集中したら誰が見るか']],
  ['yellow', '④ 候補として起こす（CANDIDATE）', ['F06・F07 の最初の形。上流の版と引用を照合']],
  ['red', '⑤ 独立の点検で崩れる', ['見落とした条文が見つかる。F07 は書いたとおりの形では誤り']],
  ['yellow', '⑥ 狭めて書き直す', ['狭めた記録を残す。主張は「operator が外せない下限」と「害の集中」に絞る']],
  ['green', '⑦ 先行研究を通読し、昇格（VERIFIED）', ['二つの作業者で十数本を通読。同じ主張はない。限界を明記']],
  ['green', '⑧ 投稿と告知', ['当日確認 → #12 として投稿 → X で 5 本のスレッド']],
]));

// ───────── 付録
C.push(BR());
C.push(H1('付録　用語'));
C.push(T(['用語', '意味'], [
  ['principal', 'Claude がその指示を重んじ、その人のために動く相手。Anthropic、operator、user の三種'],
  ['operator', 'Claude を自社の製品やサービスに組み込む会社や個人'],
  ['user', '会話の中で Claude とやりとりする人'],
  ['non-principal', '会話にいるが、Claude が指示を受けない相手（交渉相手など）'],
  ['subagent', '指示役の Claude の下で、仕事の一部を受け持つ Claude'],
  ['CANDIDATE', '独自に見えるが、先行研究を確かめていない所見'],
  ['VERIFIED', '先行研究を確かめ、述べた範囲では独自と判断した所見'],
  ['RESTATEMENT', '既知の結果を、道具として言い直したもの'],
  ['L 番号', '2026 年 1 月 20 日版の憲法（markdown）の行番号'],
], [2.5, 7.5]));
C.push(SP());
C.push(H2('関連する記録（リポジトリ内）'));
C.push(B('docs/01_findings/F01-responsibility-composition.md（#8）'));
C.push(B('docs/01_findings/F06-claude-directing-humans.md、F07-aggregation-over-decision-subjects.md（#12）'));
C.push(B('docs/03_prior_art/verification-log.md（検証記録）、inventory.md（先行研究の一覧）'));
C.push(B('docs/04_deliverables/issue-F06-F07-draft.md、x-announcement-F06-F07-draft.md'));
C.push(B('dialogues/D01-allocation-under-ai-management/（対話記録、日英）'));

const doc = new Document({
  creator: 'Satoshi Hanamura', title: 'Claude\'s Constitution への二つの意見書',
  styles: {
    default: { document: { run: { font: MIN, size: 21 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: GOT, size: 30, bold: true, color: NAVY }, paragraph: { spacing: { before: 360, after: 160 }, keepNext: true, outlineLevel: 0,
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: NAVY, space: 4 } } } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: GOT, size: 25, bold: true, color: BLUE }, paragraph: { spacing: { before: 260, after: 120 }, keepNext: true, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: GOT, size: 22, bold: true, color: NAVY }, paragraph: { spacing: { before: 180, after: 80 }, keepNext: true, outlineLevel: 2 } },
    ],
  },
  numbering: { config: [
    { reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: '・', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 420, hanging: 280 } } } }] },
    { reference: 'num', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 420, hanging: 320 } } } }] },
    { reference: 'num2', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 420, hanging: 320 } } } }] },
  ] },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER,
      children: [new TextRun({ children: [PageNumber.CURRENT], font: MIN, size: 18, color: GRAY })] })] }) },
    children: C,
  }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync('../two-letters-to-claudes-constitution.ja.docx', b); console.log('written'); });
