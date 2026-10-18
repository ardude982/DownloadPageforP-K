# P K — Download Site

A self-contained, bilingual (Persian / English) download landing page for **P K**, a social media app. Built as a static scroll site with no framework and no build step — just HTML, CSS, and JS.

## Features

- **Bilingual, RTL-first** — Persian is the default language (`dir="rtl"`), with a header toggle that switches the whole UI to English (`dir="ltr"`) instantly, no page reload.
- **Light / dark theme toggle** — manual switch independent of system preference, remembered across visits via `localStorage`.
- **Scroll-animated sections** — hero, a laptop + phone device showcase, dedicated PWA/iOS and Android preview sections, a QR download card, a security/blockchain section, an FAQ, and a live-status page, each revealing on scroll via `IntersectionObserver`.
- **Interactive device mockups** — the laptop/phone mockups tilt in 3D following the cursor; clicking an item in the "Choose how you connect" list smooth-scrolls to the matching platform section.
- **Real, scannable QR code** — generated client-side at error-correction level `H` with the app logo overlaid in the center (via [QRious](https://github.com/neocotic/qrious), vendored locally).
- **Cursor particle trail** — a lightweight canvas-based spark emitter that follows the mouse, automatically disabled when the visitor has `prefers-reduced-motion` on.
- **Zero external requests** — fonts (Vazirmatn, self-hosted as WOFF2) and the QR library are vendored locally. The only non-local reference in the whole project is the placeholder `https://p-k.me` used in the QR code value and a couple of CTA buttons (see **Before you launch** below).
- **Fully responsive** — tested down to small phone widths; horizontal overflow is explicitly locked down so tilted/rotated mockups never cause side-scroll on mobile.
- **Accessible basics** — keyboard-operable clickable rows (`tabindex`, `Enter`/`Space` support), `aria-label`s on icon-only buttons, `prefers-reduced-motion` respected everywhere animation is used.

## Project structure

```
.
├── index.html              # markup only
├── styles.css              # all styling (minified)
├── script.js                # all behavior: routing, theme/lang, particles, tilt, QR (minified)
├── vendor/
│   └── qrious.min.js       # QR code generation library (MIT, vendored)
└── assets/
    ├── pk-icon.png          # logo / favicon
    ├── bazaar-icon.png       # Cafe Bazaar mark
    ├── myket-icon.png        # Myket mark
    ├── app-screenshot.webp   # phone screenshot (hero / QR section)
    ├── laptop-screenshot.webp
    ├── phone-screenshot-a.webp
    ├── phone-screenshot-b.webp
    ├── globe-banner.webp
    └── fonts/
        └── vazirmatn-*.woff2 # Vazirmatn, 400/500/600/700, Arabic + Latin subsets
```

No `node_modules`, no bundler, no package.json required to run it.

## Running locally

Any static file server works — the page is pure HTML/CSS/JS.

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then open `http://localhost:8080`. Opening `index.html` directly via `file://` also works, since nothing depends on a server-side route.

## Deploying

Upload the five items in this folder (`index.html`, `styles.css`, `script.js`, `vendor/`, `assets/`) to any static host — Nginx, Caddy, GitHub Pages, Cloudflare Pages, Netlify, S3 — as-is. No environment variables, no build command.

## Before you launch

A few things are intentionally left as placeholders and are marked with `// TODO` comments near the top of `script.js`:

| What | Where | Replace with |
|---|---|---|
| QR code target | `script.js`, `QRious({ value: "https://p-k.me" ... })` | your real domain |
| "Go to the site" button in the iOS modal | same placeholder | your real domain |
| Cafe Bazaar download link | `#btnBazaar`, `#btnBazaar2` (`href="#"`) | your Cafe Bazaar listing URL |
| Myket download link | `#btnMyket`, `#btnMyket2` (`href="#"`) | your Myket listing URL |
| Social links in the footer | `href="#"` on the Telegram/LinkedIn/Instagram icons | your real profile URLs |
| Status page | `#view-status` | wire up to real uptime monitoring once you have it — it currently shows a static "Operational" state |

## Browser support

Targets evergreen browsers (Chrome, Safari, Firefox, Edge — last 2 versions). Uses `aspect-ratio`, `:focus-visible`, CSS custom properties, and `IntersectionObserver`, all broadly supported. No polyfills included.

## License

The vendored QR library ([QRious](https://github.com/neocotic/qrious)) is MIT-licensed 
the vendored Vazirmatn font is licensed under the [SIL Open Font License 1.1](https://openfontlicense.org/).
