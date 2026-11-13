---
name: video-loop
description: Direct edit loop for the Sanglogium montage video recorded in /home/jan/work/movie. Use when the user invokes /video-loop, sends annotated screenshots of the movie, or asks for changes to the video.
triggers:
  - user
  - model
---

# video-loop

Annotated screenshots of the movie in, script edited, movie re-recorded, one short reply out. Nothing else.

## Objective

One muted, looping ~30–40s webm of the live store, wired into `src/components/MovieHero.astro`. Spec: the Sanglogium montage brief (wins, order, end slate are locked, never re-litigate).

## Setup (once)

1. Script = a short text list in `/home/jan/work/movie/SCRIPT.md`: one line per beat (seconds, what is on screen, claim line, proof line). The user edits the text, then says "go".
2. One montage script `/home/jan/work/movie/movie.mjs`, one section per beat. Reuse `shoot.mjs` INIT and `point()`. Captions: claim line + proof line. The two filtering callouts are reused verbatim.

## Player size

The player shows the movie at the real smallest-phone size: 282 px wide, 16:9 (264u of the 300u landing frame at a 320 px viewport). Never larger. Judge legibility at that size.

## The round

1. Add the next beat (or apply the user's fixes). Re-record the **whole movie so far** to `out/review.webm`. No chunks, no freezing.
2. The movie is watched in the annotation player, which shows the exact timecode on the frame. No timecode is burned into the video.
3. Run `/home/jan/work/movie/annotate/annotate-movie.sh` (own port 4401, never touches the design-loop canvas on 4400). Reply: what changed, plus the link it prints. Nothing more.
4. The user watches in the player, pauses, screenshots the frame (timecode is in it), pastes it onto the canvas, draws, Ctrl+S, repeats as often as they like, then says "Done".
5. On "Done", read `/home/jan/work/movie/annotate/data/annotated.png` + `notes.txt`. Trust marks over prose. The timecode in each pasted shot says where. Fix everything in one pass.
6. Do not wait for "go" between beats unless the user asks for one.

## Hard rules

- Production site is read-only except checkout: Stripe is in test mode, so a full test checkout with fake data and the Stripe test card is allowed (user-granted 2026-11-11). No accounts.
- Never run `npm build`, `astro check`, the dev server or tests. No new dependencies, no commits, no pushes.
- `ffmpeg` is not installed and is not to be installed. Output is webm. One continuous take is the single-file route (Playwright writes one webm per page). Do not stitch.
- Fixes are direct edits by you, not Devin tasks. Use the architect to Devin flow only for a large, independent build.
- Keep SKIP and the identity block in `MovieHero.astro` untouched.

## Finish

Final take: all beats, one session, no timecode. Poster = first frame, taken with a Playwright screenshot, chosen without a review round. Wire `<video muted autoplay loop playsinline preload="metadata" poster="...">` into the existing 16:9 frame. The ▶ button becomes a pause toggle, and the "50S" label shows the real runtime.

Report: what shipped, runtime, file sizes, and what is left for the human.

## Unverified

- Whether the annotation canvas accepts PNGs. If not, the user pastes annotated screenshots into chat.
- Whether each beat can start from its own URL. Filter state is expected to live in the URL.
