# Provenance of source texts

These are the files this repository treats as authority for quotation.
**Always name the version when citing.**

| File | Version | Retrieved from | Date | SHA-256 |
|---|---|---|---|---|
| `constitution-20260120.md` | 20260120 | `raw.githubusercontent.com/anthropics/claude-constitution/main/20260120-constitution.md` | 2026-08-24 | `251440a71a9068dd43bfaab2b8694d6e2a4f519c403f1b9a70785f830d05f327` |
| `constitution-2602-pdftext.txt` | 26-02.02a | `www-cdn.anthropic.com/d0636f72a9493d279ed36b33987da3430bcb5911/claudes-constitution_webPDF_26-02.02a.pdf` | 2026-08-24 | `e66d42615fbd7b6093a68e14fd0d207d958f291e2e5e9a75243ea04a182097e1` |

## Notes

- SHA-256 of the source PDF: `1094cc400ffb69becc6d765692e4b8d8efc2808ddc5aff8a0f0967837d0b70d7` (982,113 bytes)
- `constitution-2602-pdftext.txt` was extracted from that PDF with `pdftotext -layout`.
  **Page numbers follow the PDF footer** (body pages 1–82, then Acknowledgements).
- `constitution-20260120.md` has no page numbers. **Cite it by line number.**
- Licence: the original is CC0 1.0. Its preface states it "can be freely used by anyone
  for any purpose without asking for permission."

## Differences between versions (checked so far)

| Provision | 20260120 | 26-02.02a | Result |
|---|---|---|---|
| Orchestrator clause | L192 | pp. 15–16 | **Identical** |
| Responsibility-shifting clause | L459 | pp. 40–41 | **Identical** |

Ten key provisions are checked mechanically by `tools/compare_versions.sh`.
**A full diff of the two versions has not been performed.**
