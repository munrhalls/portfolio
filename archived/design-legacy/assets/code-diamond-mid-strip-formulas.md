# Code-diamond: formulas on the mid strips

Read from the original, now `design/code-diamond-black-bg.original.png` (1024×1024). The same text sits in the layered source `assets/code-diamond/outer-ring.png`.
"Mid strips" = the black bands between the outer frame and the inner frame.

| Mid strip                            | Formulas, in reading order             |
| ------------------------------------ | -------------------------------------- |
| Upper left (left tip → top tip)      | iħ ∂ψ/∂t = Ĥψ, then ∇·E = ρ/ε₀ = 0     |
| Upper right (top tip → right tip)    | ∇·E = ρ/ε₀ = ρ/ε₀, then e^(iπ) + 1 = 0 |
| Lower right (right tip → bottom tip) | e^(iπ) + 1 = 0, then e^(iπ) + 1 = 0    |
| Lower left (left tip → bottom tip)   | iħ ∂ψ/∂t = Ĥψ, then ∇·E = ρ/ε₀ = 0     |

## What they are

- iħ ∂ψ/∂t = Ĥψ — time-dependent Schrödinger equation
- ∇·E = ρ/ε₀ — Gauss's law for electricity (Maxwell)
- e^(iπ) + 1 = 0 — Euler's identity

## Defects in the asset

- The Gauss's law lines on the upper-left and lower-left strips end in an extra "= 0".
- The upper-right Gauss's law line repeats "= ρ/ε₀".
- Schrödinger and Euler lines are correct.

## Replacement set in use: Pattern B (now the canonical `code-diamond-black-bg.png`)

Typeset in KaTeX (Computer Modern), same colour and weight as the originals. Words upright, single-letter variables italic.

| Mid strip | In reading order |
| --- | --- |
| Upper left | impact = P·S·A , cost = tok·turns |
| Upper right | ΔQ ∝ Δctx , S/N ∝ 1/ctx (stacked) |
| Lower right (reads bottom tip → right tip) | ε ∝ turns² , verify ∝ stakes |
| Lower left (most visible in the mockup, so the most plain-English pair) | pri = impact/cost (stacked) , acc ∝ 1/scope (stacked) |

Glosses: impact = precision·scope·accuracy; cost = tokens·turns; pri = impact/cost; acc ∝ 1/scope: accuracy falls as scope widens; ε ∝ turns²: error compounds; verify ∝ stakes; ΔQ ∝ Δctx: quality tracks context; S/N ∝ 1/ctx: context rot.

Files (design/): `code-diamond-black-bg.png` = Pattern B (canonical, used by the mockups) · `code-diamond-black-bg.original.png` = the original with the math formulas (also in git history) · `code-diamond-black-bg.laws-v1.png` = previous arrangement (UR/LL pairs swapped; v1.45 uses it) · `code-diamond-black-bg-empty.png` = bands empty, verified base for any future text · `code-diamond-black-bg-laws.png` = identical copy of the canonical, left in place while an editor swap file exists. Live site assets (`public/images/`, `assets/code-diamond/`) are unchanged.
