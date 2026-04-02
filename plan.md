# OmniCore Website v2

```
┌─────────────────────────────────────┐
│ Project: omnicore-website-v2        │
│ Type:    website                    │
│ Effort:  medium                     │
│ Backend: no                         │
│ Archetype: Neo-Tokyo / Cyberpunk    │
└─────────────────────────────────────┘
```

## Goal
Single-page marketing website for OmniCore AI agency. Neo-Tokyo cyberpunk aesthetic with terminal-style animations. Lighter animation approach than v1 — typewriter, glow, count-up only. No GSAP, no 3D.

## Sections
Hero → Client Ticker → Services → How It Works → Case Studies → Stats/About → Contact → Footer

## Stack
- Next.js 15 App Router + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals + counter animations)
- No GSAP, no Three.js
- Contact form: Resend or Formspree

## Tasks
- [ ] Scaffold Next.js 15 project → install deps
- [ ] Set up design tokens (globals.css — brand colors, fonts, dot grid, scanline)
- [ ] Build HUD Nav
- [ ] Build Terminal Hero (typewriter + cursor blink + corner labels)
- [ ] Build Client Ticker (marquee strip)
- [ ] Build Services panel grid
- [ ] Build How It Works numbered rows
- [ ] Build Case Studies card grid
- [ ] Build Stats + About section (count-up animation)
- [ ] Build Contact terminal form
- [ ] Build Status Footer
- [ ] HUD overlay (fixed corner brackets + scroll readout)
- [ ] Scroll reveal animations (Intersection Observer, fade + translate)
- [ ] Responsive polish (mobile)
- [ ] Visual QA — chrome-devtools full-page screenshot
- [ ] Security audit → checklist.py → deploy

## Done When
- [ ] All 9 sections built and visually QA'd
- [ ] Contact form submits successfully
- [ ] No Critical/High security findings
- [ ] Lighthouse 90+
