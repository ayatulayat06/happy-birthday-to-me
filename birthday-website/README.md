# 🎂 Premium Interactive Birthday Website

A cinematic, fully interactive, mobile-first birthday experience built with **HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step, no dependencies.

```
Open index.html in your browser → everything works.
```

---

## 📂 Project Structure

```
birthday-website/
│
├── index.html              ← All page markup (9 sections)
├── style.css               ← All styling (themes, animations, responsive)
├── script.js               ← birthdayConfig + all interaction logic
│
├── assets/
│   ├── images/
│   │   ├── profile.jpg         ← Your profile photo (square looks best)
│   │   ├── memory-01.jpg …     ← Gallery photos (full size)
│   │   └── thumbs/             ← Small versions of the same photos
│   ├── music/
│   │   └── birthday.mp3        ← Background music (a music-box track ships by default)
│   └── icons/
│       └── favicon.svg         ← Browser tab icon
│
└── README.md
```

> **Tip:** want a live preview while you edit? Run `python3 -m http.server 8000` inside this folder and open `http://localhost:8000`. Opening `index.html` directly also works fine.

---

## ⚙️ Customization — Everything Is In One Place

Open **`script.js`**. The first ~120 lines are a single object called **`birthdayConfig`**. Change it and the whole website updates automatically — hero text, countdown, timeline, gallery, goals, footer, page title, everything.

```js
const birthdayConfig = {
  name: 'Alex Rivera',
  birthday: '2026-09-20',
  profileImage: 'assets/images/profile.jpg',
  music: 'assets/music/birthday.mp3',
  ...
};
```

### 1. Your name

```js
name: 'Alex Rivera',
```
Used in the surprise card, the footer and the browser tab. The first word (`Alex`) is used in the navbar and page title.

### 2. Your birthday date

```js
birthday: '2026-09-20',   // ⚠️ format MUST be YYYY-MM-DD
```
The countdown calculates everything from this.
- **Before the day** → counts down to the next occurrence.
- **After this year's date** → automatically rolls over to next year.
- **On the day itself** → the countdown switches to "🎉 Today is the day" and throws welcome confetti.

```js
birthYear: 2001,          // optional — adds "Turning 25" to the hero badge. Set to null to hide.
```

### 3. Your profile photo

```js
profileImage: 'assets/images/profile.jpg',
```
Replace the file with your own (a square image, ~600×600 or larger, is ideal — it is cropped to a circle). It appears in the final section and the footer. Set `profileImage: ..` to hide it.

### 4. Gallery photos

Each entry is one card in the "Moments Worth Remembering" masonry wall:

```js
gallery: [
  {
    src:     'assets/images/memory-01.jpg',        // full-size image (lightbox)
    thumb:   'assets/images/thumbs/memory-01.jpg', // small version (grid) — optional
    caption: 'Candles, wishes & warm light',
    alt:     'Birthday candles glowing in a dark room',   // screen-reader text
    aspect:  '4 / 3'                                       // crop shape
  },
  ...
]
```

**To add your own photos (easiest way):**
1. Drop your images into `assets/images/` and name them `memory-01.jpg`, `memory-02.jpg`, …
2. Make a smaller copy of each in `assets/images/thumbs/` with the **same filename** (about 640 px wide).
3. Edit the `caption` and `alt` for each one — nothing else to change.

**To add more photos:** just add another `{ ... }` block. The masonry layout, the lightbox, next/prev arrows and swipe gestures adapt automatically.
**To remove one:** delete its block.

*Recommended size: 1200–1600 px wide JPG. Anything missing or broken falls back to a tasteful placeholder instead of a blank box.*

### 5. Birthday music

```js
music: 'assets/music/birthday.mp3',
autoMusicOnSurprise: false,   // true = music starts when the gift box is opened
```

- A soft **music-box "Happy Birthday" loop is already included** (16 s, 225 KB), so the button works out of the box.
- **To use your own song:** put any `.mp3`/`.ogg` at `assets/music/birthday.mp3` (or change the path). It loops automatically at 45 % volume.
- **No audio file?** If the file can't be loaded, the site generates a "Happy Birthday" melody with the Web Audio API instead — the music button never breaks.
- Audio **never autoplays**; it only starts when the visitor taps the 🎵 button (bottom-right) or the 🎵 icon in the navbar.

### 6. Journey timeline

```js
timeline: [
  { year: 'The Beginning', icon: '🌱', title: 'Where It Started', text: '…' },
  ...
]
```
Add, remove or reorder freely — the cards alternate left/right by themselves and animate in on scroll.

### 7. Goals

```js
goals: [
  { icon: '💻', title: 'Build Amazing Projects', text: '…' },
  ...
]
```

### 8. Thoughts (the typing animation)

```js
thoughts: [
  'Another year older.',
  'Another year wiser.',
  ...
],
thoughtsFinal: 'This year, I choose growth. 🚀',
```
One array item = one line. It types out character by character when the section scrolls into view.

### 9. Hero + surprise text

```js
heroTitle: "It's My Birthday!",
heroSubtitle: 'Another Chapter Begins…',
heroMessage: [
  "Today isn't just another day.",
  "It's the beginning of another beautiful chapter of my life."
],
surpriseMessage: 'Thank you for being part of my journey ❤️',
celebrationMessage: 'Thank you for celebrating with me.',
```

### 10. Social links

```js
socials: [
  { label: 'Instagram', icon: '📸', url: 'https://instagram.com/yourhandle' },
  { label: 'GitHub',    icon: '💻', url: 'https://github.com/yourhandle' }
]
```
Delete any line you don't need.

### 11. Birthday wish wall

```js
seedDemoWishes: true,   // 3 example wishes on a visitor's first visit — set false for an empty wall
```
Wishes are stored in the visitor's own browser (`localStorage`), so they survive refreshes.

---

## ✨ What's Inside

| Section | Highlights |
|---|---|
| **1 · Hero** | Animated SVG cake with flickering candles, floating balloons, sparkles, live countdown, parallax on desktop |
| **2 · Surprise** | Click-to-open 3D gift box → confetti burst, fireworks, particle boost, message reveal |
| **3 · Journey** | Alternating glass timeline with scroll-reveal animation |
| **4 · Memories** | Masonry gallery, lazy-loaded images, hover zoom, fullscreen lightbox (arrows, keyboard ←/→, Esc, swipe, counter) |
| **5 · Thoughts** | Cinematic typing animation + floating particles |
| **6 · Goals** | Hover-reactive glass cards with cursor glow |
| **7 · Wishes** | Validated form + animated wish wall saved to `localStorage` (add & delete) |
| **8 · Celebrate** | Full-screen confetti rain, fireworks, balloons, screen glow — auto-closes after 14 s or on Esc |
| **9 · Finale** | "Here's To Another Beautiful Year! 🥂", animated cake, fireworks on scroll |

**Plus:** sticky glassmorphism navbar with active-section indicator + animated hamburger menu, ☀️/🌙 theme toggle (dark by default, remembered), floating music button, toast notifications, preloader.

---

## 📱 Responsive

Tested at 360 px, 390 px, 768 px, 1440 px. Mobile gets a drawer menu, single-column layouts, a 4-across countdown grid, full-width buttons, larger touch targets and safe-area padding for iPhone home bars.

---

## ♿ Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`, `figure`), labelled sections
- Every button has an accessible name; the lightbox is a proper `role="dialog"` with focus return + tab trap
- Full keyboard support: `Tab`, `Enter`, `Esc`, `←`/`→` in the lightbox
- Visible `:focus-visible` rings, AA colour contrast in both themes, alt text on all images
- **`prefers-reduced-motion: reduce`** → particles, confetti, parallax and the typing animation are disabled or replaced with instant text; everything stays readable
- Live regions announce toasts, form errors and the countdown (once a minute, not every second)

---

## ⚡ Performance

- Zero libraries — ~25 KB of CSS + ~40 KB of JS, uncompressed
- One shared canvas for confetti + fireworks that **stops its animation loop when empty** (0 % CPU when idle)
- Background particles pause on tab blur; particle count scales to screen size
- Images: `loading="lazy"`, `decoding="async"`, reserved `aspect-ratio` (no layout shift), small thumbnails in the grid
- `transform`/`opacity`-only animations, throttled scroll handling via `requestAnimationFrame`

---

## 🧪 Quality Check

Verified in headless Chromium: **0 console errors, 0 failed requests**, countdown ticking, gift animation, gallery + lightbox (arrows/keyboard/Esc), typing animation, wish add/delete/persist-after-reload, theme persistence, celebration overlay, mobile menu, no horizontal overflow at 360–1440 px, reduced-motion mode.

---

## 🛟 Troubleshooting

| Problem | Fix |
|---|---|
| Photos show a placeholder | Check the path/extension in `gallery` — filenames are case-sensitive. |
| Countdown shows `--:--` | Your `birthday` string isn't `YYYY-MM-DD`. Watch for the exact format. |
| Music button does nothing | Some browsers block audio until a real click; tap the 🎵 button (not the keyboard). |
| Wishes disappear | They live in that browser only (private mode may block storage). |
| Want dark mode always first | In `script.js` find `this.current = (saved === 'light' ...) ? saved : 'dark'` and change `'dark'`. |

---

Made with ❤️ and a little confetti. **Happy Birthday! 🎂🎉**
