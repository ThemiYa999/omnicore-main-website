# OmniCore Website v2 — App Design

## Archetype
- Selected: Neo-Tokyo / Cyberpunk
- Signature element: Live HUD overlay — fixed-position corner brackets `[ ]` on key sections + small monospace readout showing scroll % and current section name at low opacity
- Anti-sameness check:
  - Last 3 builds: omnicore-website → Dark Cinematic
  - Diversity rules: all passed (different archetype from last build)
  - Why this archetype: OmniCore is an AI agency — dense, terminal-inspired, data-rich UI directly matches brand personality (Intelligence, Precision). Target audience (tech companies, SaaS, enterprises) responds to a control-panel/HUD aesthetic. Purple neon replaces typical cyan/green for brand alignment.

---

## Brand — LOCKED (from brand-guide)

| Token | Value | Status |
|---|---|---|
| Primary Purple | `#8F00FF` | LOCKED |
| Light Purple | `#9457EB` | LOCKED |
| Deep Purple | `#6B1FAD` | LOCKED |
| Background | `#000000` | LOCKED |
| Text | `#FFFFFF` | LOCKED |
| Gradient | `linear-gradient(135deg, #8F00FF, #9457EB, #6B1FAD)` | LOCKED |
| Display Font | Orbitron Medium / Bold | LOCKED |
| Body Font | Inter Regular / Medium / SemiBold | LOCKED |
| Description Font | Space Mono 400 / 700 | LOCKED |
| Logo | Geometric AI icon + "OmniCore" wordmark | LOCKED |
| Voice | Professional, technical, forward-thinking, precise | LOCKED |

---

## Layout DNA (Neo-Tokyo / Cyberpunk)

- Grid: Multi-panel asymmetric dashboard-style layouts
- Alignment: Left-aligned primary content, right-aligned metadata/stats
- Section labels: `[ SECTION_NAME ]` Space Mono, uppercase, `#9457EB`, above every H2
- Borders: Thin `rgba(143,0,255,0.2)` borders between panels and sections
- Hero: Terminal-style — headline types in character-by-character, cursor blinks after
- HUD overlay: Fixed corner brackets + scroll readout, monospace, `#9457EB` at 20% opacity
- No wasted space — dense, information-rich layouts

---

## Spacing System

- Density: Dense — compact, information-rich
- Section padding: `py-10 lg:py-16`
- Element gap: `gap-3 lg:gap-5`
- Container: `max-w-7xl` — use full screen
- Panel padding: `p-4 lg:p-6`
- Base unit: 4px

---

## Animation Rules (lighter than v1 — user preference)

- **Typewriter** on hero headline: character-by-character, 40ms/char, Orbitron Bold
- **Cursor blink** after typewriter completes: `|` in `#8F00FF`, CSS animation
- **Count-up** on stats: numbers tick up on scroll into view (Intersection Observer)
- **Border glow** on card/button hover: `box-shadow: 0 0 12px rgba(143,0,255,0.7)`
- **Glitch flash** on section labels: 1–2 flickers on scroll into view (CSS clip-path)
- **Fade + translate-up** on content blocks: `opacity 0→1, translateY 20px→0` on scroll (no GSAP needed — CSS + Intersection Observer)
- Easing: `steps(4)` for typewriter, `linear` for blink, `ease-out` for reveals
- **NOT doing:** Heavy GSAP timelines, 3D, parallax, spring physics, particles

---

## Background & Texture

- Base: `#000000` (brand-locked)
- Panel surfaces: `#0A0A0F` for slight contrast on cards/panels
- Dot grid overlay: 4px repeating dot pattern, `rgba(143,0,255,0.04)` — like graph paper
- Scanline on hero only: `repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)`
- Neon glow accents: `box-shadow` and `text-shadow` using `#8F00FF` at various opacities
- No grain, no warmth, no organic textures

---

## Component Style

- Border-radius: `rounded-none` everywhere — sharp, technical edges
- Buttons: Thin border `#8F00FF`, uppercase Orbitron, compact padding. Glow on hover.
- Cards: `bg-[#0A0A0F]` surface, `border border-[rgba(143,0,255,0.2)]`, corner `[` `]` text decorations
- Inputs: Space Mono, thin border, purple focus glow, `> ` prefix label
- Section labels: `[ LABEL ]` Space Mono 10px, uppercase, `tracking-[0.2em]`, `#9457EB`
- Nav: HUD-style fixed bar, logo left, links right, thin `border-b border-[rgba(143,0,255,0.2)]`

---

## Section Flow

1. **HUD Nav** — Fixed. Logo left + wordmark. Nav links right. Space Mono links. Thin purple border-bottom.
2. **Terminal Hero** — Typewriter headline in Orbitron Bold. Subline in Space Mono. Two CTA buttons. Corner labels: `[ AI AGENCY ]` `[ EST. 2024 ]`. Scanline overlay. Dot grid bg.
3. **Client Ticker** — `[ TRUSTED BY ]` label. Infinite marquee of client/partner names. Space Mono. Purple dividers.
4. **Services** — `[ SERVICES ]` label. Asymmetric 3-panel grid. Each panel: title Orbitron, description Space Mono, thin border, corner `[ ]` decorations.
5. **How It Works** — `[ PROCESS ]` label. 3 numbered steps (01, 02, 03) in Orbitron. Row layout separated by thin borders. Step description in Space Mono.
6. **Case Studies** — `[ WORK ]` label. Card grid, visible borders, project name + tags. Border glow on hover.
7. **Stats + About** — `[ ABOUT ]` label. Left: mission text Inter. Right: 3 large Orbitron stat numbers with Space Mono labels. Count-up on scroll.
8. **Contact Terminal** — `[ CONTACT ]` label. Terminal form: `> name_`, `> email_`, `> message_`. Space Mono inputs. Submit: `[ SEND_MESSAGE_ ]`
9. **Status Footer** — Single line: `OMNICORE © 2026 | STATUS: ONLINE | AI_AGENCY | GLOBAL` + social icons.

---

## 21st.dev Components

- [x] **Animated Glitch Text** — RGB channel-split glitch. Used for section label flicker on scroll reveal.
- [x] **BlurredInfiniteSlider / Logo Cloud** — Smooth marquee with fade edges. Used for client ticker strip.
- [x] **Animated Counter** — Digit-by-digit count-up with spring animation. Used for stats section.

---

## Design References

- `design-refs/stokt-hero.png` — Extracted: dark bg, bold all-caps headings, section labels above H2, dual CTA buttons layout
- `design-refs/stokt-fullpage.png` — Extracted: marquee strip placement, card grid structure, stats row layout, CTA section with giant text, minimal footer
- Source: https://wearestokt.com — Layout + small animations (user reference, not design style)
