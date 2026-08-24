# 原典の来歴

本リポジトリが引用の根拠とする原典ファイル。**引用時は必ず版を特定すること。**

| ファイル | 版 | 取得元 | 取得日 | SHA-256 |
|---|---|---|---|---|
| `constitution-20260120.md` | 20260120 | `raw.githubusercontent.com/anthropics/claude-constitution/main/20260120-constitution.md` | 2026-08-24 | `251440a71a9068dd43bfaab2b8694d6e2a4f519c403f1b9a70785f830d05f327` |
| `constitution-2602-pdftext.txt` | 26-02.02a | `www-cdn.anthropic.com/d0636f72a9493d279ed36b33987da3430bcb5911/claudes-constitution_webPDF_26-02.02a.pdf` | 2026-08-24 | `e66d42615fbd7b6093a68e14fd0d207d958f291e2e5e9a75243ea04a182097e1` |

## 補足

- PDF 原本の SHA-256: `1094cc400ffb69becc6d765692e4b8d8efc2808ddc5aff8a0f0967837d0b70d7` (982,113 bytes)
- `constitution-2602-pdftext.txt` は上記 PDF を `pdftotext -layout` で抽出したもの。
  **ページ番号は PDF フッタの表記に従う**（本文 1〜82、以降 Acknowledgements）。
- `constitution-20260120.md` にはページ番号が存在しない。**行番号で参照する**。
- ライセンス: 原典は CC0 1.0。前文に「誰でも許可を求めることなく、いかなる目的にも
  自由に利用できる」と明記されている。

## 版間の異同（既確認分）

| 対象 | 20260120 | 26-02.02a | 判定 |
|---|---|---|---|
| オーケストレーター条項 | L192 | p.15–16 | **完全一致** |
| 責任移転条項 | L459 | p.41 | **完全一致** |

照合手順は `tools/compare_versions.sh` に置く。**全文の網羅的 diff は未実施。**
