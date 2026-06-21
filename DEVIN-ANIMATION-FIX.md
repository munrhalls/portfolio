# Devin Fix Task — Code Diamond Animation

## What is wrong and why

**Bug 1 — Wrong direction:** The animation goes bottom-to-top. The keyframe moves `translateY(0 → -50%)`, which slides the element upward. It needs to go `translateY(-50% → 0)` to move the element downward and produce top-to-bottom flow.

**Bug 2 — Two visible diamond shapes:** The clip area (~1230px tall) always shows approximately two sprite tiles at once (each scaled tile is ~616px). Every tile has the original diamond's gradient background baked in as a solid shape. This creates two visible gradient blobs scrolling through the clip instead of a seamless code rain. Fix: regenerate the sprite as RGBA — background pixels become transparent, only the text characters carry color. Two tiles of transparent-background text = continuous rain with no shape artifacts.

**Bug 3 — Too fast:** Duration is `8s`. Must be `50s`.

---

## Two-step fix

### Step 1 — Regenerate the sprite (run once, from project root)

Run this Python script from the **project root directory** (same level as `assets/` and `public/`):

```bash
python3 - <<'PYEOF'
from PIL import Image
import numpy as np

img = Image.open('assets/code-diamond-inside.png')
arr = np.array(img).astype(np.float32)

r, g, b, orig_alpha = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
brightness = (r + g + b) / 3

# Threshold: background pixels transparent, text pixels opaque, smooth anti-aliasing
LOW, HIGH = 20.0, 55.0
new_alpha = np.clip((brightness - LOW) / (HIGH - LOW), 0.0, 1.0) * 255.0
new_alpha[orig_alpha == 0] = 0.0   # preserve transparency outside the diamond

out = np.zeros((arr.shape[0], arr.shape[1], 4), dtype=np.uint8)
out[:,:,:3] = arr[:,:,:3].astype(np.uint8)
out[:,:,3] = new_alpha.astype(np.uint8)

# Crop to content rows and stack 2x for seamless loop
content = out[247:779, :, :]       # 532 rows × 1024 cols × RGBA
sprite  = np.vstack([content, content])  # 1064 rows × 1024 cols × RGBA

Image.fromarray(sprite, 'RGBA').save('public/images/code-diamond-scroll-sprite.png')
print('Sprite saved:', sprite.shape, '— mode RGBA')
PYEOF
```

If `Pillow` is not installed: `pip install Pillow` first.

The script overwrites `public/images/code-diamond-scroll-sprite.png` in place. No other files are touched.

---

### Step 2 — Update `src/components/CodeDiamond.astro`

Replace the entire `<style>` block in `src/components/CodeDiamond.astro` with this:

```css
<style>
  .cd-clip {
    position: absolute;
    inset: 0;
    overflow: hidden;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }

  .cd-scroll {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 200%;
    background-image: url('/images/code-diamond-scroll-sprite.png');
    background-size: 100% 50%;
    background-repeat: repeat-y;
    animation: code-rain 50s linear infinite;
  }

  @keyframes code-rain {
    from { transform: translateY(-50%); }
    to   { transform: translateY(0); }
  }
</style>
```

The three changes from the current version:
- `animation` duration: `8s` → `50s`
- `@keyframes from`: `translateY(0)` → `translateY(-50%)`
- `@keyframes to`: `translateY(-50%)` → `translateY(0)`

The rest of `CodeDiamond.astro` (the HTML) stays exactly as-is. Do not change `index.astro` or any other file.

---

## Verify

### Build check
```
npm run build
```
Must complete with zero errors.

### Visual check
Run `npm run dev`, open the homepage.

Confirm all of the following:
- [ ] Code streams inside the diamond flow **top to bottom**
- [ ] Animation is **very slow** (one full cycle ≈ 50 seconds)
- [ ] The interior of the diamond shows **only text characters scrolling** — no distinct diamond-shaped background blob visible
- [ ] The loop is smooth — no visible jump or flash when it repeats
- [ ] The overall diamond opacity and position are unchanged from before
- [ ] No browser console errors

---

## Do Not Touch

- `index.astro`
- `tailwind.config.mjs`
- `src/styles/global.css`
- `public/images/code-diamond-outer-ring.png`
- Any other file not listed above
