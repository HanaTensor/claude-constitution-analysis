#!/usr/bin/env python3
"""Measure the fenced blocks in the X announcement draft against X's 280 limit.

X counts any URL as 23 characters regardless of its length (t.co wrapping),
and counts newlines. Both are handled here.
"""
import re, sys, pathlib

LIMIT = 280
URL_WEIGHT = 23
URL_RE = re.compile(r'(?:https?://)?(?:github\.com|arxiv\.org|[\w.-]+\.\w{2,})/\S+')

path = pathlib.Path(sys.argv[1] if len(sys.argv) > 1
                    else "docs/04_deliverables/x-announcement-draft.md")
text = path.read_text(encoding="utf-8")
blocks = re.findall(r"```\n(.*?)\n```", text, re.S)

fail = 0
for i, b in enumerate(blocks, 1):
    urls = URL_RE.findall(b)
    effective = len(b) - sum(len(u) for u in urls) + URL_WEIGHT * len(urls)
    ok = effective <= LIMIT
    fail += not ok
    print(f"block {i}: raw={len(b):4d}  urls={len(urls)}  "
          f"effective={effective:4d}  {'OK' if ok else f'OVER by {effective - LIMIT}'}")
sys.exit(1 if fail else 0)
