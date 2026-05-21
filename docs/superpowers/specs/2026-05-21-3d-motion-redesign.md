# Portfolio 3D Motion Redesign — Design Spec
**Date:** 2026-05-21  
**Stack:** React 18, Framer Motion 12, CSS (no new deps except Google Font)

---

## 1. Hero Section — Lo-fi Rain Scene

**Replace** `mainVid.mp4` background with a pure CSS + Canvas animated lo-fi rain scene.

### Visual composition (layered, back → front):
1. **Base layer** — dark gradient background (`#0D0A08` → `#1A1510`), warm-toned
2. **Room silhouette layer** — CSS-drawn desk, window frame, bookshelf as dark silhouettes
3. **Window glow layer** — soft amber radial gradient (`rgba(255,180,60,0.18)`) simulating lamp light spilling onto desk
4. **Rain canvas layer** — `<canvas>` with animated diagonal rain streaks; 80–120 drops, varying opacity/speed/thickness; subtle blue-grey tint (`rgba(160,180,220,0.6)`)
5. **Window fog layer** — slight blur + condensation CSS effect on window pane
6. **Existing intro text** — unchanged, sits on top at z-index 10+

### Animation:
- Rain drops: `requestAnimationFrame` loop, drops reset at top when off-screen
- Lamp flicker: subtle CSS `@keyframes` opacity pulse on amber glow (0.18 → 0.22 → 0.18), 4s loop
- Existing Framer Motion scroll parallax (`yBg`, `opacityBg`) retained on the scene container
- Existing pointer parallax on name text retained

### Remove:
- `<video>` element and `loginVid` import
- `home__video-wrap` div → replaced with `home__lofi-scene` div

---

## 2. Navbar Logo — Pokemon "Kishor" Style

**Replace** current `<kishor/>` code bracket logo with Pokemon-style "Kishor" text.

### Implementation:
- Import `Luckiest Guy` from Google Fonts (one `<link>` in `public/index.html`)
- CSS class `.logo-pokemon`:
  - `font-family: 'Luckiest Guy', cursive`
  - `color: #FFD700` (Pokemon yellow)
  - `-webkit-text-stroke: 3px #1B4FC4` (blue outline)
  - `text-shadow`: layered downward offsets in dark blue to create 3D depth:
    ```
    2px 2px 0 #1B4FC4,
    4px 4px 0 #0D2E80,
    6px 6px 0 #06194A
    ```
  - `font-size: 1.8rem`, `letter-spacing: 2px`
- Hover: scale 1.05 + drop-shadow intensifies (Framer Motion `whileHover`)
- Remove `logo-bracket` spans

---

## 3. Section Visual Themes — Pixel Art Parallax

Each section gets a CSS pixel art background + Framer Motion `useScroll` parallax depth layers.

### Color dual-theme rule:
- **Hero**: warm amber palette (`#0D0A08`, amber `#FFB732`, lamp glow)
- **All other sections**: cool blue-cyan palette (existing `#080C16`, `#5DD4FF` accents) — unchanged

### Section-by-section biomes:

| Section | Biome | Key CSS technique |
|---------|-------|-------------------|
| About | Pixeltrue sky gradient | Deep purple→cyan radial gradient bg + floating geometric low-poly triangles (CSS clip-path) |
| Work | Crystal cave (muted) | Dark teal bg + stalactite/stalagmite shapes via CSS borders |
| Skills | Pixel forest | Dark green bg + repeating pixel-tree pattern (CSS `image-rendering: pixelated` SVG) |
| Projects | Pixel cave (image 4) | Near-black bg + crystal pillar shapes via CSS borders + glowing teal inner shadow |
| Hobbies | Existing (no change) | Retain current |
| Contact | Night sky pixel art | Deep navy + CSS star field (tiny box-shadows on pseudo-element) |

### Parallax implementation:
- Each section: `useScroll({ target: sectionRef })` + `useTransform` on Y position for bg layer (moves 20–30% speed of scroll)
- 2 depth layers max per section: bg shape layer (slow) + foreground detail layer (medium)
- `will-change: transform` on animated layers for GPU compositing

---

## 4. Freelance Section

**New section**: `<Freelance />` component, placed after `<Contact />`, before `<Footer />`.

### Content:
- **Headline**: "Available for Freelance Work"
- **Subheading**: "Let's build something great together"
- **3 service cards** (pixel-art style icons, CSS drawn):
  1. Landing Page — "Fast, modern landing pages that convert"
  2. Portfolio Site — "Showcase your work with style"
  3. Web Application — "Full-stack web apps tailored to your needs"
- **Pricing note**: "Prices are negotiable — reach out and we'll figure it out"
- **CTA button**: "Get in Touch →" scrolls to `#contact`
- **Note**: No past clients shown (section does not include testimonials or case studies)

### Design:
- Background: pixel cave biome (matches Projects section, creates visual bookend)
- Cards: Tilt3D wrapper (existing component), pixel-art border via `box-shadow` staircase
- Framer Motion: stagger entrance on cards, `whileHover` scale 1.03

### Routing:
- Add `{ href: '#freelance', label: 'Freelance' }` to `NAV` array in `Navbar.js`
- Add `'freelance'` to `SECTIONS` array in `App.js`
- Section id: `id="freelance"`

---

## 5. Unchanged

- All existing components (Skills, Work, Hobbies, Contact, Footer) — no structural changes
- Framer Motion variants (`fadeUp`, `stagger`, `cardPop`, etc.)
- AnimCursor, ScrollIndicator, PokemonFollower, Glare
- Section titles, content, data

---

## 6. New Dependencies

| Package | Purpose |
|---------|---------|
| Google Font: Luckiest Guy | Pokemon-style logo |

No npm installs needed — font loaded via `<link>` tag.

---

## 7. Files to Create / Modify

| File | Action |
|------|--------|
| `public/index.html` | Add Luckiest Guy Google Fonts link |
| `src/components/Home/Home.js` | Remove video, add LofiRainScene component |
| `src/components/Home/Home.css` | Update hero styles |
| `src/components/Home/LofiRainScene.jsx` | **NEW** — canvas rain + CSS room |
| `src/components/Navbar/Navbar.js` | Pokemon logo + add Freelance nav item |
| `src/components/Navbar/Navbar.css` | Pokemon logo styles |
| `src/components/About/About.js` | Add pixeltrue sky parallax bg |
| `src/components/About/About.css` | Sky biome styles |
| `src/components/Projects/Projects.js` | Add pixel cave parallax bg |
| `src/components/Projects/Projects.css` | Cave biome styles |
| `src/components/Skills/Skills.js` | Add pixel forest parallax bg |
| `src/components/Skills/Skills.css` | Forest biome styles |
| `src/components/Contact/Contact.js` | Add night sky parallax bg |
| `src/components/Contact/Contact.css` | Night sky biome styles |
| `src/components/Freelance/Freelance.jsx` | **NEW** — full freelance section |
| `src/components/Freelance/Freelance.css` | **NEW** — freelance styles |
| `src/App.js` | Import Freelance, add to SECTIONS + POKEMON_ZONES |
