# sim — reproducing D01's numbers

```
python3 reproduce.py      # requires numpy; runs in a few seconds
```

| Section | What is printed | Method |
|---|---|---|
| §1.2 | Screening funnel, 1,000 applicants | arithmetic |
| §2.2 | Same funnel at national scale | arithmetic |
| §3.7 | Share of a measured top 1% that is truly top 1% / top 5% | Monte Carlo, 2,000,000 draws, seed 0 |
| §4.4 | Standard error of a least-squares monthly slope | closed form σ√(12 / (n(n² − 1))) |
| §4.5 | Capable people still lost after one appeal round | arithmetic |
| §5.3 | Expected top score when all entrants are equal | Monte Carlo, 2,000 contests, seed 1 |
| §6.3 | Variance of a two-person average with correlation ρ | closed form σ²(1 + ρ)/2 |

The file is named `reproduce.py`, not `numbers.py`: a script called `numbers.py` shadows Python's standard
library module of that name and breaks `numpy`'s import (Appendix B, B.4).

---

数値の再現：`python3 reproduce.py`（numpy が必要）。各節の表を節の番号付きで出力する。乱数の種は固定してあるので、結果は毎回同じになる。
