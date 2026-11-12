#!/usr/bin/env python3
"""Regenerates the <svg class="streams f"> glyph streams in a landing-mobile html, in place.
usage: python3 gen-streams.py landing-mobile-v1.78.html

One stream per fingertip -> label chip. Each stream is a spindle of rails (centre rail near/big/bright, outer rails far/small/dim = tube in 3D):
starts a gap above the fingertip (small, dim), swells (bigger, brighter, more rails),
then converges to a point on the chip's bottom edge. Coordinates are the svg's 300x170 viewBox.
"""
import math, random, re, sys

CHARS = "ウエオカキクケコシスセソタテトナネハヒフムモヤユヨルレワ"

# (tip x, tip y, chip anchor x, chip anchor y, gap above tip)
STREAMS = {   # anchors = bottom tip of each chip's rhombus
    "story":    (98.4, 101.0, 62.1, 83.7, 4.0),
    "case":     (125.1, 103.0, 102.2, 51.7, 4.0),
    "features": (142.8, 93.8, 194.1, 55.7, 4.0),
    "learning": (178.4, 121.6, 266.1, 89.7, 4.0),
}
RAILS = ((-1.0, .5), (0.0, 1.0), (1.0, .5))   # (offset as fraction of half-width, depth: 1 = near/big/bright)
WMAX = 11.0                             # half-width at the belly (u)
SMIN, SMAX = 3.6, 6.4                   # glyph font-size at the ends / at the belly
PERIOD = 3.6                            # pulse period (s)


def bez(p0, p1, p2, p3, t):
    a, b, c, d = (1 - t) ** 3, 3 * (1 - t) ** 2 * t, 3 * (1 - t) * t * t, t ** 3
    return (a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1])


def stream(tx, ty, ax, ay, gap, rnd):
    S, T = (tx, ty - gap), (ax, ay + 2.5)   # ends just under the rhombus tip
    L = math.hypot(T[0] - S[0], T[1] - S[1])
    # leaves the finger straight up (palm faces up), arrives at the chip from below
    k = (S[0] - T[0]) / (L or 1)
    C1 = (S[0], S[1] - L * .42)
    C2 = (T[0], T[1] + L * .38)   # arrives dead vertical, centred under the rhombus
    # polyline for arc length
    pts = [bez(S, C1, C2, T, i / 200) for i in range(201)]
    cum = [0.0]
    for i in range(1, 201):
        cum.append(cum[-1] + math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]))
    total = cum[-1]

    def at(s):  # point + unit normal at arc length s
        i = max(1, min(200, next((j for j in range(201) if cum[j] >= s), 200)))
        (x0, y0), (x1, y1) = pts[i - 1], pts[i]
        f = (s - cum[i - 1]) / ((cum[i] - cum[i - 1]) or 1)
        dx, dy = x1 - x0, y1 - y0
        n = math.hypot(dx, dy) or 1
        return x0 + dx * f, y0 + dy * f, -dy / n, dx / n

    out = []
    wmax = WMAX * max(.6, min(1.0, L / 70))
    for k, (r, depth) in enumerate(RAILS):
        t = .02
        while t < .985:
            bell = math.sin(math.pi * t) ** .85
            w = wmax * bell
            size = (SMIN + (SMAX - SMIN) * bell) * (.72 + .30 * depth)
            if abs(r) * w >= 5.0 or r == 0:   # outer rails exist only where there is room -> pointy ends
                x, y, nx, ny = at(t * total)
                off = r * w
                o = (.62 + .38 * bell) * (.62 + .38 * depth)
                o = max(.3, min(.95, o))
                d = -PERIOD + 1.5 * t
                ch = CHARS[rnd.randrange(len(CHARS))]
                out.append((t, f'<text class="g" x="{x + nx * off:.1f}" y="{y + ny * off:.1f}" '
                               f'font-size="{size:.1f}" style="--o:{o:.3f};--d:{d:.2f}s;--p:{PERIOD:.2f}s">{ch}</text>'))
            t += size * 1.0 / total      # glyph advance ~ 1.0 em along the stream
    out.sort(key=lambda e: e[0])
    return [e[1] for e in out]


def main(path):
    html = open(path, encoding="utf-8").read()
    rnd = random.Random(7)
    body = "".join("".join(stream(*v, rnd)) for v in STREAMS.values())
    new, n = re.subn(r'(<svg class="streams f" viewBox="0 0 300 170" aria-hidden="true">).*?(</svg>)',
                     lambda m: m.group(1) + body + m.group(2), html, count=1, flags=re.S)
    assert n == 1, "streams svg not found"
    open(path, "w", encoding="utf-8").write(new)
    print(f"{body.count('<text')} glyphs")


if __name__ == "__main__":
    main(sys.argv[1])
