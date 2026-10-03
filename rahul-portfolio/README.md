# Rahul Portfolio

Personal portfolio of Vamasamudram Rahul, a B.Sc Computer Science student.

## Project Overview

A static, vanilla HTML/CSS/JS portfolio built for GitHub Pages. It presents Rahul
professionally and demonstrates his ability to learn, design, build, and iterate on
real projects — without relying on frameworks or heavy libraries.

## Problem / Purpose

Most student portfolios default to generic templates or card-heavy dashboards. This
site is built as an editorial, intentional digital product: minimal, premium, and
technical, with only the three projects that genuinely represent Rahul's work: Bikergram, Urban Tray, and MeeSeva Dashboard.

## Portfolio Structure

```
rahul---portfolio/
├── index.html
├── style.css
├── script.js
├── projects/
│   ├── bikergram.html
│   ├── urban-tray.html
│   └── meeseva-dashboard.html
├── assets/
│   ├── images/     (profile photo — see assets/images/README.md)
│   ├── projects/   (project evidence — currently empty, see README.md there)
│   └── resume/     (resume PDF — currently empty, see README.md there)
└── README.md
```

## Featured Projects

1. **Bikergram Andhra Pradesh** — Telugu biker community; Rahul's real-world
   experience as founder and community administrator. Case study: `projects/bikergram.html`.
2. **Urban Tray** — Food-delivery platform prototype, grown from an FOE assignment
   into independent development. Case study: `projects/urban-tray.html`.

3. **MeeSeva Dashboard** — Owner-side management dashboard concept for a single
   MeeSeva center. Case study: `projects/meeseva-dashboard.html`.

Bikers Hub and the Bikergram website are documented as part of the Bikergram
ecosystem, not as separate projects.

## Technologies

- HTML5, CSS3 (custom properties / design tokens, no framework)
- Vanilla JavaScript (no build step, no dependencies)
- Google Fonts: Lexend, Space Grotesk, Sora

## Design Approach

- Light theme: Alabaster Cream background, Obsidian Black text, Sage Green accent
  used sparingly for interaction states.
- Dark theme: a distinct set of tokens (not an inversion of the light palette).
- Typography: Lexend for the hero name, Space Grotesk for headings, Sora for body/UI.
- Motion: subtle (150/250/400ms), respects `prefers-reduced-motion`.
- Work section is an editorial, expandable list — not a permanent card grid.

## Features

- Responsive layout (mobile, tablet, desktop, large desktop breakpoints)
- Light/dark theme toggle, persisted via `localStorage`, respecting system
  preference on first visit
- Accessible mobile navigation (opens, closes, closes on Escape and on link click)
- Keyboard-operable Work-section reveal (same interaction as hover/tap)
- Active-section indicator in the primary nav
- Sticky header that subtly compacts on scroll
- Two full case-study pages with truthful, conservative status language

## Project Structure Notes

- `index.html` is the homepage; case studies live under `projects/`.
- All internal links are relative and verified to work from both the root and
  `/projects/`, so the site works unmodified on GitHub Pages.

## Local Development

No build step. Open `index.html` directly in a browser, or serve the folder with
any static server, e.g.:

```
npx serve .
```

## Deployment

Push to the `main` branch and enable GitHub Pages (Settings → Pages → Deploy from
branch → `main` / root). No server-side requirements.

## Future Improvements

- Add the real resume PDF and activate the two Resume links.
- Add real project screenshots / Figma evidence for both case studies.
- Verify Bikergram and Urban Tray technology lists against the live repositories
  before treating them as final.
