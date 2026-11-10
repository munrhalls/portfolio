Core goal
     • Sell two things at once: Sanglogium (the product) and you (software + AI engineer)
     • Optimize for conversion — a coherent, unique, high-level experience
     • Mobile-first

This document is meant to be built little by little as we develop the project. We will turn to designing the system fully once we have sufficient critical information. 


Update 1 
Here's how I understand this step: we're not designing pixels or components yet — we're mapping the mobile experience as
 a sequence of places a visitor can actually be, from first open through every scroll position and navigation target,
 using the real constraint of a phone screen (roughly 390px wide, one content chunk ≈ one screenful). The deliverable is
 a first-guess structure of those places — deliberately rough, so we have something concrete to poke at and revise. Not
 solving, just starting.

 First guess — the mobile structure

 Space we're working with

   • ~390px wide viewport, ~660–850px of usable height per screen (browser chrome eats the rest)
   • Content column = full width minus ~20px side gutters
   • One "chunk" = what fits in roughly one screenful or one coherent beat

 The places a user can be, in order of first encounter:

   1. The movie — auto-playing on open
     • Full-bleed, muted, ~50s, dedicated to Sanglogium
     • Minimal chrome: small amber diamond mark + a skip control
     • The user is either watching it or has skipped it — both are valid entry states
   2. Hero — the landing beat after the movie (or skip)
     • One breath of identity: name, amber diamond, one line — "I built Sanglogium, alone, in production"
     • Two exits only: watch the movie if skipped, or scroll down
   3. Case studies — the center of gravity
     • Sanglogium first and deepest; each case study is its own chapter
     • On mobile, one case study = a sequence of one-screen beats, advanced by swipe or tap (like stories), because a
     desktop case-study layout cannot survive at 390px
     • Each beat answers one thing: what it is → the problem → what I built → the proof (numbers, screenshots) → the live
     link
   4. Skills — grouped, scannable
     • Four clusters: frontend, backend, AI engineering, other
     • Not a wall — group headers with compact chips under each
   5. Journey — 20+ months as a timeline
     • Vertical line, a handful of milestones, one line each
     • Purely scrollable, no interaction needed
   6. Story — the personal close
     • Text-forward, low decoration: origin (weight skins), the art of learning
     • This is the emotional finish, placed after the proof, not before
   7. The terminal — contact / CTA
     • Every path through the page ends here: live Sanglogium link, GitHub, CV download, contact
     • Nothing sits below it

 Navigation assumption for now

   • One page, one scroll, with the case-study chapters as horizontal steppers inside the vertical flow
   • A minimal sticky affordance (diamond → jump menu or section dots) so any of the seven places is reachable without
   re-scrolling everything




Original update 0 - start:

 CONTEXT:  We need to have a learning conversation. The only objective is to learn how the portfolio actually should be
  in terms
    of end outcome product. That is the portfolio app. We need to just determine only and only what should be in terms of
    what the end user sees. I believe we should start from mobile. And I believe it's vital you understand the core goal
  is
    to sell Sunglogium and my professional level skills as web, as software engineer and AI engineer. /// My initial
    speculation is that I think it's best if it will be amber color theme, and the code diamond graphic is excellent. It
    will be preserved but turned to amber diamond color. But this is trivial. What matters is really the entities. Visual
    UX entities. I think there will be movie. We need to make a movie that plays when the user opens the portfolio page,
    and this movie is wholly dedicated to Sunglogium. Fifty seconds sells Sunglogium biggest value points. However, next
    there should actually be the under it should be case studies, which are central to the entire portfolio. This is the
    biggest selling point. Case studies are about sanglogium. We will need a replicable organizational pattern for case
    study. Next, there will be skills, which are manifold, technological like Next and React and so on, front end, back
    end, AI engineering skills, and other skills. There are quite a lot of skills. Next will be journey. Twenty plus
  months
    developing sanglogium. And after it will be my story, where I come from, how I started from just weight skins, the
  art
    of learning, and so on. Do you see how these are like puzzles that we can assemble in various ways, and that the core
    goal is to actually figure out what is the optimal way we can achieve conversions in terms of user experience, so
  they
    actually experience all this as very unique and high-level coherence.

    So, with this in mind, I would like you to purely look at what I've shared with you, and for now, just organize it
    thematically.

    Then present to me as simple bullet list, simple, clear and concise, that represents your mind map of how you see it.

   Here's my mind map of what you've described:

   Core goal

     • Sell two things at once: Sanglogium (the product) and you (software + AI engineer)
     • Optimize for conversion — a coherent, unique, high-level experience
     • Mobile-first

   Visual language

     • Amber color theme
     • Code-diamond graphic preserved, recolored amber — the brand mark

   UX entities (the puzzle pieces)

     1. Movie — plays on page open, ~50s, dedicated entirely to Sanglogium's biggest value points
     2. Case studies — the central and biggest selling point; Sanglogium-focused; needs a replicable organizational
  pattern
     (a repeatable case-study template)
     3. Skills — manifold: frontend (Next, React, ...), backend, AI engineering, other
     4. Journey — the 20+ months of building Sanglogium
     5. Story — where you come from; starting from weight skins; the art of learning

   The open question

     • These entities are modular — the work is finding the ordering/assembly that produces maximum conversion and
     coherence, not just stacking sections top-to-bottom

   One thing that stands out already: the movie, case studies, and journey are all Sanglogium — so three of five entities
   are really one story told at three depths (50s pitch → proof/evidence → process/time). Skills and story are the "you"
   half. That split will likely matter for ordering.

   What do you want to drill into first? ///// Please summarize essential understanding of the core intent and context,
  and share it with me, 1 paragraph, pure english.

 The portfolio is, at its core, a conversion machine with a single job: sell two things at once — Sanglogium as a product
 and you as a web, software, and AI engineer — where Sanglogium itself is the proof of professional skill. What the end
 user sees is a mobile-first, coherently crafted experience in an amber visual theme anchored by the amber code-diamond
 mark, assembled from five modular entities: a roughly fifty-second auto-playing movie that pitches Sanglogium's biggest
 value points; case studies as the central, largest selling point, documenting the Sanglogium work through one replicable
 organizational pattern; a broad skills section spanning frontend, backend, AI engineering, and more; a journey section
 narrating the twenty-plus months of building Sanglogium; and a personal story covering your origins — starting from
 weight skins — and the art of learning. The essential structural insight is that three of the five entities (movie, case
 studies, journey) are really one Sanglogium story told at three depths — pitch, proof, and process — while skills and
 story form the personal half, so the open design question is how to order and assemble these puzzle pieces into the
 optimal path that converts a visitor into someone convinced of both the product and the engineer behind it, with mobile
 as the first and hardest frame.
