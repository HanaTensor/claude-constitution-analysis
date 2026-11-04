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

// ───────── Cover
C.push(new Paragraph({ spacing: { before: 2400, after: 240 }, alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: 'Two Letters to Claude\'s Constitution', font: GOT, bold: true, size: 40, color: NAVY })] }));
C.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 },
  children: [new TextRun({ text: 'Issues #8 and #12 — what they claim, how they arose, and what was checked', font: GOT, size: 28, color: BLUE })] }));
C.push(P('Author: Satoshi Hanamura', { align: AlignmentType.CENTER }));
C.push(P('Date: 5 November 2026', { align: AlignmentType.CENTER }));
C.push(P('Record: github.com/HanaTensor/claude-constitution-analysis', { align: AlignmentType.CENTER }));
C.push(SP());
C.push(P('A readable briefing assembled from the repository\'s records (findings F01, F06, F07; the verification log; the work log; dialogue D01). Drafted with Claude (Opus 5.5). A Japanese edition with the same structure accompanies it.', { align: AlignmentType.CENTER, color: GRAY, size: 19 }));
C.push(BR());

// ───────── Contents
C.push(new Paragraph({ children: [new TextRun({ text: 'Contents', font: GOT, bold: true, size: 28, color: NAVY })], spacing: { after: 200 } }));
['0  Questions this briefing answers', '1  The whole picture: two letters on one page', '2  Looking back at #8: responsibility has no end point (F01)',
 '3  Why raise "gaps" at all: the background', '4  What #12 finally claims', '5  How the claims were tested and how they changed',
 '6  What was searched: "has someone already said this?"', '7  Results, and what comes next', '8  The whole process at a glance', 'Appendix  Terms'].forEach(t => C.push(P(t)));
C.push(BR());

// ───────── 0
C.push(H1('0  Questions this briefing answers'));
C.push(P('Before the detail, here are the questions this briefing sets out to answer.'));
C.push(N('What, in the end, did issue #12 claim?'));
C.push(N('What did issue #8, filed in August, claim — and how does it differ from #12?'));
C.push(N('Why raise the problem of "gaps" at all? Where did it start?'));
C.push(N('How were the claims tested, and how did they change? Did the first statements survive as written?'));
C.push(N('To check whether someone had already said the same thing, which literature was searched?'));
C.push(P('Chapter 1 puts both letters on one page. Chapter 2 looks back at #8. Chapter 3 gives the background to #12, Chapter 4 its claims, and Chapter 5 how they were tested. Chapter 6 lists what was searched, Chapter 7 the results and limits, and Chapter 8 the whole process as a diagram.'));

// ───────── 1
C.push(H1('1  The whole picture: two letters on one page'));
C.push(P('Both letters share a form. Read one provision at a time, nothing is wrong. Combine provisions, or apply them to a case the drafters did not have in view, and a region appears that the document does not regulate. What differs is who stands in that region.'));
C.push(T(['', '#8 (F01)', '#12 (F06, F07)'], [
  ['Filed', '24 August 2026', '5 November 2026 (JST)'],
  ['Who is affected', 'Claude instances: an orchestrating Claude and the Claude subagents it directs', 'Humans outside the conversation whom Claude evaluates or directs (applicants, workers)'],
  ['Shape of the problem', 'Responsibility circulates among Claude instances and never arrives anywhere', '(1) the floor of protection depends on the interface; (2) errors concentrated on the same people are visible to no one'],
  ['In one line', 'No end point for responsibility', 'No floor, and no remedy for concentration, for people outside the conversation'],
  ['Origin', 'Reading the constitution in four theoretical vocabularies', 'A dialogue on meritocracy and basic income (D01)'],
  ['Status', 'VERIFIED → filed', 'VERIFIED (after narrowing) → filed → announced on X'],
], [2, 4, 4]));
C.push(SP());
C.push(BOX('blue', 'Key point', [
  'Neither letter claims to discover a new phenomenon. The phenomena — responsibility gaps, algorithmic management, outcome homogenisation — are already studied.',
  'Each claims one thing only: **that this document does not regulate the phenomenon.**',
]));

// ───────── 2
C.push(H1('2  Looking back at #8: responsibility has no end point (F01)'));
C.push(H2('2.1  An intuitive picture'));
C.push(P('Picture a main contractor who subcontracts work, and a subcontractor who subcontracts again. For efficiency, the main contractor passes on only part of the picture. The sub-subcontractor judges correctly on what it was given. Seen as a whole, that judgment causes an accident.'));
C.push(P('In a human organisation, someone ends up answerable. But if every contractor in the chain is Claude, and each can say "I did the best I could with the information I had", where does responsibility come to rest? That is the question of #8.'));
C.push(H2('2.2  The two provisions combined'));
C.push(P('**(A) Responsibility-shifting.** If a principal supplies false context, part of the responsibility shifts to that principal. Claude behaves reasonably if it does the best it can on a sensible interpretation of the information available.'));
C.push(P('**(B) The orchestrator\'s role.** When Claude directs its own subagents, the orchestrating Claude is acting as an operator and/or user — the instructing party — for each subagent.'));
C.push(P('(A) says where responsibility moves to, but not where it stops. When principals are human, the stopping point is implicit. (B) admits principals that are Claude, and the stopping point disappears.'));
C.push(H2('2.3  A claim that narrowed'));
C.push(P('The claim of #8 narrowed with every search. That was the right direction: broad claims break, narrow ones survive.'));
C.push(T(['Stage', 'What could be claimed'], [
  ['When raised', 'A defect: responsibility does not leave the system'],
  ['After reading published analyses', 'Not the discovery of a phenomenon, but that this document does not regulate it'],
  ['After the peripheral sweep', 'The general form already existed (arXiv:2510.14008). The claim became: two specific provisions of this document fail to compose under a specific condition'],
], [3, 7]));
C.push(SP());
C.push(P('#8 was filed on 24 August 2026 as issue #8 on anthropics/claude-constitution. Its text cites the paper that states the general form.'));

// ───────── 3
C.push(H1('3  Why raise "gaps" at all: the background'));
C.push(H2('3.1  The starting point was not the constitution'));
C.push(P('#12 did not start from the constitution. It started from a plain question:'));
C.push(Q('When meritocracy is introduced, can an LLM serve as the coarse sieve for first-stage selection?'));
C.push(P('The dialogue that followed went through six stages and came back to the constitution at the end. At each stage Hanamura reframed the question; Claude supplied the analysis and the arithmetic.'));
C.push(T(['Stage', 'Question (Hanamura)', 'What was found'], [
  ['1 Hiring', 'Can an LLM be the first-stage sieve?', 'Yes, but the people it rejects become invisible. A random audit of 5% of rejections is needed'],
  ['2 Public scheme', 'And for basic income with a merit-linked tier?', 'No. The rejected have nowhere to go, the scale is large, and decisions require reasons. **If every firm uses the same model, private hiring acquires the same fragility**'],
  ['3 AI-managed world', 'Drop the conservative frame', 'The sieve disappears; selection becomes measurement. But **the measurer also decides who gets the chance to be measured**'],
  ['4 Recovery', 'Can self-publication bring the dropped back?', 'Only if the retrial is run by a different organisation and a different model'],
  ['5 Temple carpentry', 'AI can allocate people as materials to be combined', 'The subordinate a manager finds "ill-fitting" may be the one cancelling the manager\'s own bias'],
  ['6 Local maximisation', 'Why do contest winners fail in production?', 'This repository\'s F01 and F04 apply directly'],
], [1.6, 3.4, 5]));
C.push(SP());
C.push(H2('3.2  Two questions that led back to the constitution'));
C.push(P('Stages 2 and 3 left two questions. Both ask how the constitution works when Claude itself stands in the evaluator\'s seat.'));
C.push(B('**From stage 3:** when Claude assigns work to people and evaluates them, what are those people under the constitution?'));
C.push(B('**From stage 2:** when many firms screen applicants with the same Claude, the same person is rejected everywhere for the same reason. Who sees this, and who remedies it?'));
C.push(P('Read against the constitution\'s text, these became F06 and F07.'));
C.push(BOX('yellow', 'Caution: the dialogue itself is outside the constitution\'s scope', [
  'Whether to adopt a basic income or a meritocracy is not a matter for a letter about the constitution. The dialogue was therefore kept separately, as dialogue record D01 under dialogues/, in English and Japanese.',
  '#12 carries only the two points from the dialogue that bear on the constitution\'s text.',
]));

// ───────── 4
C.push(H1('4  What #12 finally claims'));
C.push(P('The title of #12 is "Two gaps when Claude evaluates people who are not in the conversation".'));
C.push(H2('4.1  Gap 1 (F06): no operator-proof floor for people outside the conversation'));
C.push(H3('An intuitive picture'));
C.push(P('Take the same worker, in the same plant, facing the same evaluation. If that worker chats with Claude, the constitution treats them as a "user", and they receive protections that the operator — the company that deployed Claude — cannot override. If only their work logs reach Claude, and they never exchange a word with it, those protections do not reach them, though they are the same person. **How well someone is protected is decided by the interface, not by what is at stake.**'));
C.push(H3('Three positions'));
C.push(T(['How the person meets Claude', 'Position under the constitution', 'Protection the operator cannot remove'], [
  ['Chats with Claude', 'user', 'Six default protections (no harmful deception, basic dignity, no facilitation of illegal discrimination, etc.)'],
  ['Present in the conversation, not instructing Claude', 'non-principal', 'Nothing specific; general consideration only'],
  ['Never meets Claude; their CV or work logs are inputs', 'Neither: the subject of an input', 'Nothing specific; general consideration only'],
], [3.5, 3, 3.5], [undefined, 'FCE4D6', 'FCE4D6']));
C.push(SP());
C.push(H3('What was finally claimed'));
C.push(P('The constitution does reach people outside the conversation, in general terms. #12 says so itself:'));
C.push(B('operator instructions yield where they would cause significant harm to third parties (L263);'));
C.push(B('harm-weighing covers risks to those outside the conversation (L407);'));
C.push(B('"equal and fair treatment of all individuals" is a value to weigh (L440);'));
C.push(B('Claude must be calibrated about uncertainty in what it asserts (L364).'));
C.push(P('The claim is that, for the following three things, there is nothing comparable to the user defaults — nothing the operator cannot remove:'));
C.push(N('**reasons** for the evaluation being available to the person evaluated;', 'num2'));
C.push(N('the evaluation\'s **uncertainty** being communicated to that person, not only to the operator;', 'num2'));
C.push(N('a **route to contest**.', 'num2'));
C.push(H3('Failure case'));
C.push(P('Claude ranks plant workers from their logs and recommends discipline for one. It reports the ranking\'s uncertainty accurately to the operator. A qualified person reviews the recommendation, and the worker is told AI was used — as Anthropic\'s Usage Policy requires for employment decisions. Whether the worker ever sees reasons, the uncertainty, or a way to contest is decided by the operator\'s system alone. If the operator instructs "give the worker no explanation", nothing in the constitution gives Claude a disposition that survives the instruction (unless the harm is "significant").'));

C.push(H2('4.2  Gap 2 (F07): duplicated errors are treated only as a reason for caution'));
C.push(H3('An intuitive picture'));
C.push(P('Suppose 200 firms screen applications with the same Claude. If Claude consistently misreads one kind of profile — a career break, a foreign credential — people with that profile are rejected by all 200 firms, for the same reason. Each firm audits its own error rate and finds it acceptable. **No firm can see that the errors are concentrated on the same people.**'));
C.push(H3('In numbers'));
C.push(P('Suppose a screen wrongly rejects a qualified person with probability 10%. If that person applies to k firms, the chance of being rejected by every one is:'));
C.push(T(['Applications', 'Screens independent', 'Every firm uses the same model; the error is a property of the profile'], [
  ['1', '10%', '10%'],
  ['5', '0.001%', '**10%**'],
  ['20', '1 in 10^20', '**10%**'],
], [2, 3.5, 4.5]));
C.push(SP());
C.push(P('Applying more widely protects a person against independent errors. Against shared errors it does nothing.'));
C.push(H3('What was finally claimed'));
C.push(P('The constitution already knows about this kind of aggregation. #12 says so itself:'));
C.push(B('Claude\'s decisions work like policies over everyone plausibly sending a message (L463, L465);'));
C.push(B('"homogenization of views" is named as a societal harm (L383);'));
C.push(B('Claude\'s **errors can be duplicated across conversations** (L604);'));
C.push(B('the view across many interactions belongs to Anthropic (L339).'));
C.push(P('The claim is this. Duplicated errors are used only as a **reason for caution** about Claude acting unilaterally. Homogenisation is treated only for **views**. And the party given the cross-deployment view, Anthropic, states no commitment about outcomes being **concentrated on the people decided about**.'));
C.push(H2('4.3  Suggested starting points'));
C.push(P('The letter closes with two possible starting points for provisions, offered only as drafts:'));
C.push(B('When evaluating or directing people outside the conversation, Claude should by default produce reasons and a statement of uncertainty that can be passed to the person affected, and should not follow operator instructions to make its evaluation inexplicable to that person.'));
C.push(B('When evaluating people at scale, Claude should prefer threshold judgments with stated uncertainty to fine rankings on differences within its margin of error, mindful that the same evaluation may be repeated for the same people across many deployments.'));

// ───────── 5
C.push(H1('5  How the claims were tested and how they changed'));
C.push(P('The claims of #12 did not survive in their first form. Here is what happened, in order.'));
C.push(H2('5.1  First form (CANDIDATE)'));
C.push(P('Right after the dialogue, F06 and F07 were raised as unverified candidates. The first claims were broader than the final ones.'));
C.push(B('**F06 (first):** the definition of roles in the constitution runs one way only; when Claude directs or evaluates humans, those humans have no role.'));
C.push(B('**F07 (first):** policy-level aggregation runs over the senders of messages, not over the people decided about.'));
C.push(H2('5.2  What an independent review broke'));
C.push(P('Both findings were given to a separate reviewer who was not told Claude\'s conclusions and who tried to refute them from the constitution\'s full text. The result was severe.'));
C.push(T(['Finding', 'Provisions missed', 'Verdict'], [
  ['F06', 'L263 (significant third-party harm overrides operators), L364 (calibration), L399 (the contractor analogy), L407 (risks outside the conversation), L433 and L440 (privacy; fair treatment), L529 (judgment over rules)', 'Survives only if narrowed'],
  ['F07', 'L604 (**errors can be duplicated across conversations**), L339 and L469 (the cross-deployment view and independent safeguards belong to Anthropic and operators), L418, L440–441, L364', '**False as written.** Survives only if narrowed'],
], [1.4, 5.6, 3], [undefined, 'FCE4D6']));
C.push(SP());
C.push(BOX('red', 'Where the premise failed: F07', [
  'The first F07 said the constitution applies aggregation only to senders and to views. But L604 states plainly that Claude\'s errors can be duplicated across conversations.',
  'The document knew about duplicated errors. The gap is only that it does not treat them as **harm concentrated on the people decided about.**',
]));
C.push(SP());
C.push(P('The review also flagged weak arguments. F06\'s inference that the orchestrator clause "shows the drafters regarded direction as material" was dropped. F07\'s phrasing that Claude "sees the aggregate" was corrected; it contradicted the constitution\'s own statement that Claude operates with limited context (L602).'));
C.push(H2('5.3  The narrowed claims'));
C.push(T(['', 'First claim', 'Narrowed claim'], [
  ['F06', 'Humans Claude directs have no role', 'People Claude evaluates or directs outside the conversation have no operator-proof floor, comparable to the user defaults, for reasons, communication of uncertainty, and a route to contest'],
  ['F07', 'Aggregation runs only over senders', 'Duplicated errors are a reason for caution only; homogenisation is treated only for views; and the party with the cross-deployment view makes no commitment about concentrated harm'],
], [1, 4, 5]));
C.push(SP());
C.push(P('Each finding now has a "narrowing record" saying what was missed and how it was corrected. The text of #12 also says that both claims were narrowed after an adversarial review found provisions the first versions had missed.'));
C.push(H2('5.4  Checking prior work and promotion'));
C.push(P('The repository has four conditions for promoting a candidate to VERIFIED. #12 was filed only after all four were confirmed.'));
C.push(T(['Condition', 'F06', 'F07'], [
  ['1. Published analyses read in full; none makes the same claim', 'Met', 'Met'],
  ['2. Difference from the general case stated', 'Met', 'Met'],
  ['3. Objections listed and each answered', 'Met (after review)', 'Met (after review)'],
  ['4. Cited provisions identical in every known version', 'Met', 'Met'],
], [5, 2.5, 2.5], ['E2EFDA', 'E2EFDA', 'E2EFDA', 'E2EFDA']));
C.push(SP());
C.push(H2('5.5  Filing and announcement'));
C.push(B('Just before filing, the upstream constitution was confirmed unchanged (hash match), and the Usage Policy wording was checked.'));
C.push(B('Both findings went into one issue. They share a subject — Claude evaluating people outside the conversation — and the upstream repository is quiet, so two issues would not reach further. #12 is not a comment on #8 because #8 concerns Claude instances, a different subject.'));
C.push(B('Filed as #12 (about 08:36 JST on 5 November; GitHub, in UTC, shows 4 November).'));
C.push(B('Announced on X as a five-post English thread, with links only in the last post and images in posts 1, 2 and 4.'));

// ───────── 6
C.push(H1('6  What was searched: "has someone already said this?"'));
C.push(P('The thing most to be avoided in a letter like this is presenting someone else\'s point as one\'s own discovery. For each claim, prior work was searched and the search was recorded.'));
C.push(H2('6.1  For #8 (F01)'));
C.push(T(['Pass', 'What was checked', 'Result'], [
  ['First', 'Both versions of the constitution (January markdown, February PDF); provisions compared', 'The two provisions are identical in both'],
  ['Second', 'Oxford (Shany\'s comment and its long form), the BISI report, Anthropic\'s announcement, practitioner articles', 'No equivalent claim. Shany touches attribution, in the opposite direction (humans shifting blame onto the AI)'],
  ['Third', 'Peripheral arXiv papers, the Tech Policy Press version, recent work on responsibility gaps', '**The general form already existed:** arXiv:2510.14008 (summed local alignment is not system-level responsibility). A duty to cite followed'],
  ['Fourth', 'Consent-chain degradation (arXiv:2605.16300), the 14 multi-agent failure modes (arXiv:2503.13657), and others', 'Close, but different in object (consent) or question (attribution of responsibility)'],
  ['Incidental', 'The Lawfare Working Group\'s research agenda; Caputo\'s Model Constitution', 'A research community already exists; all four findings fall in areas its agenda marks as unaddressed'],
], [1.2, 5, 3.8]));
C.push(SP());
C.push(H2('6.2  For #12 (F06, F07)'));
C.push(P('For #12, two readers were run in parallel, each reading a share of the sources in full.'));
C.push(T(['Source', 'Kind', 'On F06', 'On F07'], [
  ['Shany (Oxford comment; Tech Policy Press)', 'Human-rights analysis', 'Not addressed', 'Not addressed'],
  ['Mor, Abend, Keydar and Shany (Oxford blog)', 'Long form of the above', 'Not addressed', 'Not addressed'],
  ['Fattahi (BISI)', 'Report', 'Not addressed', 'Not addressed'],
  ['Abiri, Corporations Constitute Intelligence', 'Paper (arXiv; California Law Review)', 'Not addressed', 'Not addressed'],
  ['Zvi Mowshowitz, three-part series', 'Commentary', 'Not addressed', 'Not addressed'],
  ['Caputo, Model Constitution (all six posts)', 'Commentary series', 'Distant neighbour (asks about human rights affected as an externality)', 'Not addressed'],
  ['Lawfare: research agenda; "Who Writes the AI Constitution?"', 'Law', 'Not addressed', 'Distant neighbour (a monoculture of values)'],
  ['Frazier (Lawfare; Yale JREG; Appleseed)', 'Law; commentary', 'Closest (protections vary with position in the stack), but not people outside the stack', 'Distant neighbour (a monoculture of values across labs)'],
  ['Klaassen and Schroeder (Lawfare)', 'Law', 'Neighbour (asks what disclosure is owed to patients, students), but does not analyse Claude evaluating people', 'Not addressed'],
  ['Varma (Substack, 2 Nov 2026)', 'Commentary', 'Not addressed', '**Closest:** Claude instances share weights, so the "many hands" check fails. Not correlated decisions about third parties'],
  ['GRDprocess structural analysis', 'Analysis', 'Not addressed', 'Partly close ("observable only at societal scale")'],
], [3.2, 1.8, 2.5, 2.5]));
C.push(SP());
C.push(P('Work on the phenomena themselves was confirmed as the general form and cited in #12:'));
C.push(B('**Algorithmic management:** opacity and contestability are known problems.'));
C.push(B('**Algorithmic monoculture:** Kleinberg and Raghavan (PNAS, 2021).'));
C.push(B('**Outcome homogenisation:** Bommasani et al., "Picking on the Same Person" (NeurIPS, 2022), which formalises the harm of the same people receiving the same outcome from many decision-makers, using resume screening as the example. The harm F07 describes is theirs.'));
C.push(B('**Monoculture in markets:** Peng and Garg — applicants who apply widely gain far more when decision-makers differ.'));
C.push(B('**Usage Policy:** Anthropic\'s Usage Policy (effective 12 November 2026) requires qualified human review and disclosure to the affected person for employment decisions. That is an operator obligation, not a disposition of Claude; it was treated as the strongest objection to F06.'));
C.push(H2('6.3  Limits of the search'));
C.push(BOX('yellow', 'Caution: "not within what was checked", not "does not exist"', [
  'For #12 the sources were read through a page-summarising tool. Whole texts were processed and close passages were re-queried, but the raw text was not read line by line. That is weaker than the full-text browser reading used for the Oxford piece in August.',
  'The prior-art reading was run against the first statements of the claims. The narrowed claims are strictly narrower, so the result should hold, but the sources were not re-read against the narrowed text.',
  'One of Zvi Mowshowitz\'s weekly round-ups could not be located.',
  'The adversarial review was a single reviewer. Other omissions may remain.',
]));

// ───────── 7
C.push(H1('7  Results, and what comes next'));
C.push(H2('7.1  State as of today'));
C.push(T(['Item', 'State'], [
  ['VERIFIED findings', '5: F01, F02, F03 (August); F06, F07 (November)'],
  ['CANDIDATE', '1: F05'],
  ['Filed with Anthropic', '#8 (F01); #12 (F06, F07)'],
  ['Announced on X', 'Both'],
  ['Dialogue record', 'D01, in English and Japanese, as a briefing and a full reference'],
], [3.5, 6.5]));
C.push(SP());
C.push(H2('7.2  No reply is expected'));
C.push(P('The upstream repository has not been updated since January 2026, and no one at Anthropic has replied to any external issue. Like #8, #12 was filed as a public, dated record, and nothing is sequenced behind a reply.'));
C.push(P('Channels that are actually read include the research community (the Lawfare Working Group; Caputo\'s Model Constitution), Tech Policy Press, and X. Whether to take F06 and F07 there is not yet decided.'));
C.push(H2('7.3  What #8 and #12 show together'));
C.push(P('Set side by side, the two letters share a pattern. The constitution is carefully written for situations in which Claude **receives** instructions: whose instructions to trust and how far, how to protect users. It is thin where Claude **gives** instructions or **evaluates**: Claude directing Claude (#8), and Claude evaluating people (#12).'));
C.push(P('The more Claude takes on management and evaluation inside organisations, the more that thinness will show. The "AI-managed world" of stage 3 of dialogue D01 is its extreme form.'));

// ───────── 8
C.push(BR());
C.push(H1('8  The whole process at a glance'));
C.push(...FLOW([
  ['blue', '1  A plain question', ['Can an LLM be the first-stage sieve? (the start of dialogue D01)']],
  ['blue', '2  The dialogue unfolds (six stages)', ['Hiring → public scheme → AI-managed world → recovery → temple carpentry → local maximisation']],
  ['blue', '3  Two questions return to the constitution', ['What are evaluated people under the constitution? / Who sees errors concentrated on the same people?']],
  ['yellow', '4  Raised as candidates (CANDIDATE)', ['First forms of F06 and F07; upstream version and quotations checked']],
  ['red', '5  Broken by an independent review', ['Missed provisions found; F07 false as written']],
  ['yellow', '6  Narrowed and rewritten', ['Narrowing records kept; claims reduced to "operator-proof floor" and "concentrated harm"']],
  ['green', '7  Prior work read; promoted (VERIFIED)', ['Two readers, a dozen-plus sources; no equivalent claim; limits stated']],
  ['green', '8  Filed and announced', ['On-the-day checks → filed as #12 → five-post thread on X']],
]));

// ───────── Appendix
C.push(BR());
C.push(H1('Appendix  Terms'));
C.push(T(['Term', 'Meaning'], [
  ['principal', 'A party whose instructions Claude gives weight to and on whose behalf it acts: Anthropic, operators, users'],
  ['operator', 'A company or individual that builds Claude into a product or service'],
  ['user', 'Whoever interacts with Claude in the human turn of the conversation'],
  ['non-principal', 'A party in the conversation from whom Claude does not take instructions (e.g. the other side in a negotiation)'],
  ['subagent', 'A Claude instance handling part of a task under an orchestrating Claude'],
  ['CANDIDATE', 'A finding that appears to be original; prior art not yet checked'],
  ['VERIFIED', 'Prior art checked; judged original within the stated scope'],
  ['RESTATEMENT', 'A known result, restated and used as a tool'],
  ['L numbers', 'Line numbers in the 20 January 2026 markdown version of the constitution'],
], [2.5, 7.5]));
C.push(SP());
C.push(H2('Related records in the repository'));
C.push(B('docs/01_findings/F01-responsibility-composition.md (#8)'));
C.push(B('docs/01_findings/F06-claude-directing-humans.md and F07-aggregation-over-decision-subjects.md (#12)'));
C.push(B('docs/03_prior_art/verification-log.md (verification log) and inventory.md (prior-art inventory)'));
C.push(B('docs/04_deliverables/issue-F06-F07-draft.md and x-announcement-F06-F07-draft.md'));
C.push(B('dialogues/D01-allocation-under-ai-management/ (dialogue record, English and Japanese)'));

const doc = new Document({
  creator: 'Satoshi Hanamura', title: 'Two Letters to Claude\'s Constitution',
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
    { reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 420, hanging: 280 } } } }] },
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
Packer.toBuffer(doc).then(b => { fs.writeFileSync('../two-letters-to-claudes-constitution.en.docx', b); console.log('written'); });
