# OmniCore Website v2 — Progress

## Project Card
Type:    website
Effort:  medium
Backend: no

## Current Phase
Phase 3: Build — DONE
Phase 4: Ship — in progress

## What's Done
- [x] Intake complete — sections, goal, integrations, ownership confirmed
- [x] Brand guide read — colors, fonts, logo LOCKED
- [x] Design reference captured — wearestokt.com (hero + full-page screenshots)
- [x] Archetype selected — Neo-Tokyo / Cyberpunk
- [x] app-design.md, plan.md, progress.md created
- [x] 21st.dev components identified
- [x] Next.js 16.2.1 scaffolded + Framer Motion installed
- [x] Design tokens — globals.css (Orbitron, Inter, Space Mono, dot grid, scanlines, panel-card, hover-glow, terminal-input, marquee, cursor-blink)
- [x] layout.tsx — brand fonts loaded, metadata set
- [x] HUD Nav — fixed, scroll-aware bg, mobile overlay menu
- [x] Terminal Hero — typewriter, cursor blink, dual CTAs, corner labels, dot grid, stats row
- [x] Client Ticker — infinite marquee with fade edges
- [x] Services — 6-panel asymmetric grid, border-glow hover, corner [ ] decorations
- [x] How It Works — 3 numbered rows, hover border glow, ONLINE indicator
- [x] Case Studies — 2x2 card grid, tags, project metadata
- [x] About — gradient heading, 4 values, count-up stats (IntersectionObserver)
- [x] Contact — terminal form with > prefix labels, success state
- [x] Footer — single-line status bar
- [x] HUD Overlay — fixed scroll % + section name readout
- [x] Visual QA — all 9 sections verified in Chrome DevTools
- [x] /simplify — HudOverlay DOM cache, About.tsx interval cleanup, Services &amp; fix
- [x] /security-audit — 0 Critical, 0 High (security headers + reactStrictMode added)
- [x] Logo fixed — diamond mark + Orbitron wordmark (SVG viewBox was broken)
- [x] Hero — Framer Motion entry animations (eyebrow, subline, CTAs, stats staggered)
- [x] Services — redesigned to numbered horizontal rows (was box grid)
- [x] Case Studies — redesigned to horizontal strips with key metrics (was box grid)
- [x] Services — UIverse accordion (uiverse.io/joe-watson-sbf/rude-shrimp-21), adapted to brand
- [x] Case Studies — 21st.dev skew gradient cards (thanh/gradient-card-showcase), adapted to brand
- [x] Services — larger text (12px/15px/13px), 10px gaps, neon borders (0.38/0.9)
- [x] Case Studies — larger text, reduced hover slide (-10px), wider gradient (60%), neon borders, cards no longer overlap on hover

## What's Next
- [x] Security audit (/security-audit)
- [ ] checklist.py
- [ ] Wire contact form to Resend/Formspree
- [ ] Deploy to Vercel (ask user first)

## Blockers / Notes
- Contact form currently mocked (setTimeout) — wire to Resend/Formspree before production
- Logo SVG from brand-guide/SVG_/1.svg copied to public/logo.svg

## Last Updated
2026-03-31
