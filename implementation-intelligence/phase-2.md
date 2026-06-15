Signature element — diamond image

T-05
Increase image brightness / contrast to match design
Critical

The live image renders much darker than the mockup. The design shows a clearly illuminated diamond with visible blue tint on the face and legible character rain. Live version has near-invisible content on the diamond face.

Locate the canvas or SVG image component. Increase the brightness of the diamond face, the edge glow, and the character/equation rain opacity. The edge definition should be clearly visible — the diamond should read as a lit object against the dark background, not a dark shape.

Target: matches the blue-tinted, illuminated appearance in the design mockup

T-06
Scale up the image container to match design proportions
High

The image appears smaller in the live version — it's underscaled relative to the mockup where it nearly fills its column. It should read as a visual centrepiece of equal visual weight to the headline.

Increase the image container size so it fills the right column. The diamond should appear large and commanding, not a small ornament. Ensure the container has no unnecessary padding shrinking the canvas.

T-07
Restore precision corner bracket marks around image container
High

The design shows clean rectangular corner bracket marks (L-shaped precision engineering marks) at the four corners of the image container. These are either absent or invisible in the live version.

Find corner bracket elements — likely SVG or CSS pseudo-element overlays on the image container. Fix: ensure they render at a visible opacity. If missing, add them. They should appear as thin, precise L-shaped marks at each corner, at a low-mid opacity against the dark background.

T-08
Remove visible background rectangle behind image
High

A subtly lighter background rectangle is visible behind the diamond in the live version, creating an unintended box that breaks the seamless integration with the page background.

The image container background should be transparent or exactly match the page background colour. Remove any explicit background colour set on the container div.