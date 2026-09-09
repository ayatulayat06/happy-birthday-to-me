/* ══════════════════════════════════════════════════════════════════════════
   PREMIUM CINEMATIC BIRTHDAY EXPERIENCE — script.js
   Vanilla JS · No dependencies · Everything you can edit lives in
   `birthdayConfig` right below (see README.md for the full guide).
   ══════════════════════════════════════════════════════════════════════════ */

/* ╔════════════════════════════════════════════════════════════════════════╗
   ║  ⚙️  CONFIGURATION — EDIT EVERYTHING HERE  ⚙️                            ║
   ╚════════════════════════════════════════════════════════════════════════╝ */
const birthdayConfig = {

  /* ── Who is this for? ───────────────────────────────────────────────── */
  name: 'Ayat',                 // Used in the surprise card + footer
  birthYear: 2008,                     // Optional: shows "Turning 25". Set null to hide.
  birthday: '2026-10-02',              // ⚠️ YOUR BIRTHDAY — format: YYYY-MM-DD
  profileImage: 'assets/images/profile.jpg', // Optional: used in the finale + footer. 1:1 ratio recommended.

  /* ── Hero words ─────────────────────────────────────────────────────── */
  heroTitle: "It's My Birthday!",
  heroSubtitle: 'Another Chapter Begins…',
  heroMessage: [
    "Today isn't just another day.",
    "It's the beginning of another beautiful chapter of my life."
  ],

  /* ── Surprise + celebration copy ────────────────────────────────────── */
  surpriseMessage: 'Thank you for being part of my journey ❤️',
  celebrationMessage: 'Thank you for celebrating with me.',

  /* ── Music ──────────────────────────────────────────────────────────── */
  // Drop any mp3/ogg file at this path and it will be used.
  // If the file is missing, a "Happy Birthday" melody is generated with the
  // Web Audio API — so the music button always works, even offline.
  music: 'assets/music/birthday.mp3',
  autoMusicOnSurprise: false,          // true = start music when the gift opens
  seedDemoWishes: true,                // 3 example wishes on the first visit (set false for an empty wall)

  /* ── Section 3 · Journey timeline ───────────────────────────────────── */
  timeline: [
    { year: 'The Beginning', icon: '🌱', title: 'Where It Started',
      text: 'A small town, a loud laugh and a head full of questions. Every story has a first page — this one started with curiosity.' },
    { year: 'Growing Years', icon: '🚀', title: 'Growing Up',
      text: 'School days, scraped knees and friendships that still feel like home. I learned that growing up is mostly just collecting moments.' },
    { year: 'Discovery', icon: '💻', title: 'Discovering Technology',
      text: 'The first time I made something appear on a screen, I was hooked. Technology became the paintbrush I never knew I wanted.' },
    { year: 'Craft', icon: '🎨', title: 'Learning & Creating',
      text: 'Late nights, half-finished projects and a stubborn belief that I could always make it a little better. Craft is just love with patience.' },
    { year: 'Resilience', icon: '🔥', title: 'Challenges & Growth',
      text: 'Some chapters were hard. But every setback quietly taught me something I needed for the next one. I would not trade those lessons.' },
    { year: 'Today', icon: '🌟', title: 'Where I Am Today',
      text: 'Still learning, still building, still chasing the feeling of making something that matters. Grateful for everyone walking beside me.' },
    { year: 'Next', icon: '🚀', title: "What's Coming Next",
      text: 'Bigger dreams, braver decisions and a few things I have not told anyone about yet. The best pages are still unwritten.' }
  ],

  /* ── Section 4 · Memories gallery ───────────────────────────────────────
     Replace `src` / `thumb` with your own photos (same folder = easiest).
     Recommended: 1200–1600px wide JPGs. `thumb` = small version, optional.
     `aspect` keeps the layout stable while images load (no layout shift). */
  gallery: [
    { src: 'assets/images/memory-01.jpg', thumb: 'assets/images/memory-01.jpg', caption: 'Candles, wishes & warm light', alt: 'Birthday candles glowing in a dark room', aspect: '4 / 3' },
    { src: 'assets/images/memory-02.jpg', thumb: 'assets/images/memory-02.jpg', caption: 'Friends and smiles', alt: 'Group photo of friends standing together', aspect: '4 / 3' },
    { src: 'assets/images/memory-03.jpg', thumb: 'assets/images/memory-03.jpg', caption: 'A meaningful moment', alt: 'Memorable photo from a special day', aspect: '4 / 3' },
    { src: 'assets/images/memory-04.jpg', thumb: 'assets/images/memory-04.jpg', caption: 'Moments worth remembering', alt: 'Another special memory photo', aspect: '4 / 3' },
    { src: 'assets/images/memory-07.jpg', thumb: 'assets/images/memory-07.jpg', caption: 'Smiles shared together', alt: 'Another special memory photo', aspect: '4 / 3' },
    { src: 'assets/images/memory-06.jpg', thumb: 'assets/images/memory-06.jpg', caption: 'A day to treasure', alt: 'Another special memory photo', aspect: '4 / 3' },
  ],  

  /* ── Section 5 · Birthday thoughts (typed out line by line) ─────────── */
  thoughts: [
    'Another year older.',
    'Another year wiser.',
    'Another year of learning,',
    'creating,',
    'failing,',
    'growing,',
    'and becoming a better version of myself.'
  ],
  thoughtsFinal: 'This year, I choose growth. 🚀',

  /* ── Section 6 · Goals ──────────────────────────────────────────────── */
  goals: [
    { icon: '💻', title: 'Build Amazing Projects', text: 'Ship things that make me proud — and that actually help someone.' },
    { icon: '📚', title: 'Learn More', text: 'Read deeper, study harder, stay endlessly curious about how things work.' },
    { icon: '🚀', title: 'Grow My Career', text: 'Take on work that stretches me and surrounds me with people better than me.' },
    { icon: '🎨', title: 'Create Something Beautiful', text: 'Design with feeling. Make at least one thing this year that outlives the year.' },
    { icon: '🌍', title: 'Explore The World', text: 'New cities, new foods, new skies. Collect places instead of things.' },
    { icon: '❤️', title: 'Stay Happy', text: 'Protect my peace, rest without guilt, and laugh far more than is reasonable.' },
    { icon: '🔥', title: 'Become Better Every Day', text: 'One percent at a time. Consistency beats intensity, every single time.' }
  ],

  /* ── Social links (footer) — delete items you don't want ────────────── */
  socials: [
    { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/turbo_ayat/' },
    { label: 'GitHub',    icon: 'github',    url: 'https://github.com/ayatulayat06' },
    { label: 'LinkedIn',  icon: 'linkedin',  url: 'https://www.linkedin.com/in/ayatul-ayat-a115313b1/' }
  ]
};
/* ╔════════════════════════════════════════════════════════════════════════╗
   ║  ⚙️  END OF CONFIGURATION — code below, no need to edit  ⚙️             ║
   ╚════════════════════════════════════════════════════════════════════════╝ */


(function () {
  'use strict';

  /* ═══════════════ UTILITIES ═══════════════ */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reduceMotion = () => reduceMotionQuery.matches;

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); return true; }
      catch (e) { return false; }
    },
    remove(key) { try { localStorage.removeItem(key); } catch (e) {} }
  };

  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const rand  = (min, max) => Math.random() * (max - min) + min;
  const pick  = arr => arr[Math.floor(Math.random() * arr.length)];
  const pad2  = n => String(n).padStart(2, '0');

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  function ordinal(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  /* Parse the birthday → a Date at local midnight */
  function parseBirthday(str) {
    if (typeof str !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(str.trim())) return null;
    const [y, m, d] = str.trim().split('-').map(Number);
    if (m < 1 || m > 12 || d < 1 || d > 31) return null;
    const date = new Date(y, m - 1, d, 0, 0, 0, 0);
    return isNaN(date.getTime()) ? null : date;
  }

  function nextBirthday(from = new Date()) {
    const bday = parseBirthday(birthdayConfig.birthday);
    if (!bday) return null;
    let year = from.getFullYear();
    let target = new Date(year, bday.getMonth(), bday.getDate(), 0, 0, 0, 0);
    const today = new Date(from.getFullYear(), from.getMonth(), from.getDate(), 0, 0, 0, 0);
    if (target.getTime() < today.getTime()) {
      target = new Date(year + 1, bday.getMonth(), bday.getDate(), 0, 0, 0, 0);
    }
    return target;
  }

  function isBirthdayToday() {
    const target = nextBirthday();
    if (!target) return false;
    const today = new Date();
    return target.getDate() === today.getDate() &&
           target.getMonth() === today.getMonth() &&
           target.getFullYear() === today.getFullYear();
  }

  function longBirthday() {
    const target = nextBirthday();
    if (!target) return 'Set your date in script.js';
    const base = `${MONTHS[target.getMonth()]} ${ordinal(target.getDate())}, ${target.getFullYear()}`;
    if (birthdayConfig.birthYear) {
      const age = target.getFullYear() - Number(birthdayConfig.birthYear);
      if (age > 0 && age < 130) return `${base} · Turning ${age}`;
    }
    return base;
  }

  /* ═══════════════ CONFIG → DOM BINDING ═══════════════ */
  function applyConfig() {
    const cfg = birthdayConfig;
    cfg.firstName = (cfg.name || '').trim().split(/\s+/)[0] || 'My';

    $$('[data-config]').forEach(el => {
      const key = el.getAttribute('data-config');
      let value = cfg[key];

      if (key === 'firstName') value = cfg.firstName;
      if (key === 'birthdayLong') value = longBirthday();

      if (value === undefined || value === null || value === '') return;
      if (Array.isArray(value)) el.innerHTML = value.map(line => escapeHTML(line)).join('<br />');
      else el.textContent = String(value);
    });

    // Title + year
    document.title = `${cfg.firstName}'s Birthday 🎂 — ${cfg.heroTitle || "It's My Birthday!"}`;
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Profile photo (finale avatar + footer avatar)
    if (cfg.profileImage) {
      ['#finaleAvatar', '#footerAvatar'].forEach(selector => {
        const el = $(selector);
        if (!el) return;
        el.src = cfg.profileImage;
        el.alt = `${cfg.name || 'Birthday'} profile photo`;
        el.hidden = false;
        el.addEventListener('error', () => { el.hidden = true; }, { once: true });
      });
    }
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  /* ═══════════════ TOASTS ═══════════════ */
  const toastStack = $('#toastStack');
  function toast(message, duration = 3200) {
    if (!toastStack) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    toastStack.appendChild(el);
    setTimeout(() => {
      el.classList.add('is-out');
      el.addEventListener('animationend', () => el.remove(), { once: true });
      setTimeout(() => el.remove(), 600);
    }, duration);
  }

  /* ═══════════════ THEME ═══════════════ */
  const THEME_KEY = 'bw-theme';
  const themeToggle = $('#themeToggle');

  const theme = {
    current: 'dark',
    init() {
      const saved = store.get(THEME_KEY, null);
      this.current = (saved === 'light' || saved === 'dark') ? saved : 'dark';
      this.apply(this.current, false);

      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          this.apply(this.current === 'dark' ? 'light' : 'dark', true);
        });
      }
    },
    apply(next, animate) {
      this.current = next;
      document.documentElement.setAttribute('data-theme', next);
      store.set(THEME_KEY, next);

      if (animate && !reduceMotion()) {
        document.body.classList.add('theme-anim');
        setTimeout(() => document.body.classList.remove('theme-anim'), 520);
      }
      const meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'dark' ? '#080614' : '#f7f5ff');
      if (themeToggle) {
        themeToggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        themeToggle.setAttribute('title', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      }
    }
  };

  /* ═══════════════ LOADER ═══════════════ */
  function initLoader() {
    const loader = $('#loader');
    if (!loader) return;
    let done = false;
    const hide = () => {
      if (done) return;
      done = true;
      loader.classList.add('is-done');
      setTimeout(() => { loader.style.display = 'none'; }, 800);
      document.dispatchEvent(new CustomEvent('bw:loaded'));
    };
    if (document.readyState === 'complete') setTimeout(hide, 500);
    else window.addEventListener('load', () => setTimeout(hide, 550));
    setTimeout(hide, 4000); // safety net
  }

  /* ═══════════════ NAVBAR ═══════════════ */
  function initNav() {
    const navbar = $('#navbar');
    const hamburger = $('#hamburger');
    const menu = $('#navMenu');
    const progress = $('#navProgress');
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || document.documentElement.scrollTop;
        if (navbar) navbar.classList.toggle('is-stuck', y > 24);
        if (progress) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          progress.style.width = (max > 0 ? clamp((y / max) * 100, 0, 100) : 0) + '%';
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const closeMenu = () => {
      if (!menu || !hamburger) return;
      menu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
    };

    if (hamburger && menu) {
      hamburger.addEventListener('click', () => {
        const open = menu.classList.toggle('is-open');
        hamburger.setAttribute('aria-expanded', String(open));
        hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
    }

    // Close on link click, outside click, Escape and on resize to desktop
    $$('a[data-scroll]').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', e => {
      if (!menu || !menu.classList.contains('is-open')) return;
      if (!menu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 860) closeMenu(); });

    // Active section indicator
    const links = $$('.nav-link');
    const sections = links
      .map(l => document.querySelector(l.getAttribute('href')))
      .filter(Boolean);

    if ('IntersectionObserver' in window && sections.length) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const id = '#' + entry.target.id;
          links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === id));
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      sections.forEach(s => observer.observe(s));
    }
  }

  /* ═══════════════ SCROLL REVEAL ═══════════════ */
  function initReveal() {
    const items = $$('[data-reveal]');
    if (!items.length) return;

    items.forEach(el => {
      const siblings = Array.from(el.parentElement ? el.parentElement.children : []).filter(c => c.hasAttribute('data-reveal'));
      const i = siblings.indexOf(el);
      if (i > 0) el.style.setProperty('--reveal-delay', Math.min(i * 90, 450) + 'ms');
    });

    if (!('IntersectionObserver' in window) || reduceMotion()) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    items.forEach(el => io.observe(el));
  }

  /* ═══════════════ HERO PARALLAX ═══════════════ */
  function initParallax() {
    const layers = $$('[data-parallax]');
    if (!layers.length || reduceMotion()) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let mx = 0, my = 0, cx = 0, cy = 0, raf = null;

    const loop = () => {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      layers.forEach(layer => {
        const depth = parseFloat(layer.getAttribute('data-parallax')) || 0.05;
        layer.style.transform = `translate3d(${(cx * depth * 60).toFixed(2)}px, ${(cy * depth * 40).toFixed(2)}px, 0)`;
      });
      raf = (Math.abs(mx - cx) > 0.001 || Math.abs(my - cy) > 0.001) ? requestAnimationFrame(loop) : null;
    };

    window.addEventListener('mousemove', e => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
  }

  /* ═══════════════ BACKGROUND PARTICLES ═══════════════ */
  const particles = (function () {
    const canvas = document.getElementById('particles');
    if (!canvas) return { boost() {} };
    const ctx = canvas.getContext('2d');

    let w = 0, h = 0, dpr = 1, points = [], raf = null, boostLevel = 0;
    const COLORS = ['255,255,255', '246,199,106', '199,168,255', '255,160,210'];

    function make(fromTop) {
      return {
        x: rand(0, w),
        y: fromTop ? rand(-40, 0) : rand(0, h),
        r: rand(0.5, 1.9),
        base: rand(0.15, 0.7),
        vx: rand(-0.1, 0.1),
        vy: rand(-0.28, -0.05),
        tw: rand(0, Math.PI * 2),
        ts: rand(0.006, 0.03),
        color: pick(COLORS),
        up: Math.random() > 0.6
      };
    }

    function seed() {
      const count = reduceMotion() ? 0 : clamp(Math.round((w * h) / 16000), 24, 110);
      points = Array.from({ length: count }, () => make(false));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const speed = 1 + boostLevel * 2.2;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.tw += p.ts;
        p.x += p.vx;
        p.y += p.vy * speed;
        if (p.y < -10) { points[i] = make(true); continue; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const alpha = clamp(p.base * (0.45 + 0.55 * Math.sin(p.tw)), 0, 1) * (1 + boostLevel * 0.6);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${alpha.toFixed(3)})`;
        ctx.fill();

        if (p.r > 1.4) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color},${(alpha * 0.06).toFixed(3)})`;
          ctx.fill();
        }
      }

      if (boostLevel > 0) boostLevel = Math.max(0, boostLevel - 0.0016);
      raf = requestAnimationFrame(draw);
    }

    function start() { if (!raf) raf = requestAnimationFrame(draw); }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

    window.addEventListener('resize', () => {
      clearTimeout(resize._t);
      resize._t = setTimeout(() => { resize(); }, 180);
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else if (!reduceMotion()) start();
    });

    resize();
    if (!reduceMotion()) start();

    return {
      boost(amount = 1) { boostLevel = clamp(boostLevel + amount, 0, 1.4); start(); },
      add(n) {
        if (reduceMotion()) return;
        for (let i = 0; i < n; i++) points.push(make(true));
        if (points.length > 220) points.splice(0, points.length - 220);
      }
    };
  })();

  /* ═══════════════ COUNTDOWN ═══════════════ */
  function initCountdown() {
    const root = $('#countdown');
    if (!root) return;

    const values = {
      days: root.querySelector('[data-unit="days"]'),
      hours: root.querySelector('[data-unit="hours"]'),
      minutes: root.querySelector('[data-unit="minutes"]'),
      seconds: root.querySelector('[data-unit="seconds"]')
    };
    const caption = $('#countdownCaption');
    const party = isBirthdayToday();

    if (party) root.classList.add('is-party');

    function set(key, val) {
      const el = values[key];
      if (!el || el.textContent === val) return;
      el.textContent = val;
      if (!reduceMotion()) {
        el.classList.remove('is-tick');
        void el.offsetWidth; // restart animation
        el.classList.add('is-tick');
      }
    }

    let lastMinuteLabel = -1;

    function tick() {
      const target = nextBirthday();
      if (!target) {
        set('days', '--'); set('hours', '--'); set('minutes', '--'); set('seconds', '--');
        if (caption) caption.textContent = 'Add your birthday date in script.js';
        return;
      }

      let diff = target.getTime() - Date.now();

      // On the big day itself: count the celebration hours left (never negative)
      if (party) {
        const end = new Date(target.getFullYear(), target.getMonth(), target.getDate(), 23, 59, 59, 999);
        diff = Math.max(0, end.getTime() - Date.now());
      }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      set('days', pad2(d));
      set('hours', pad2(h));
      set('minutes', pad2(m));
      set('seconds', pad2(s));

      // Caption (only touched when it actually changes)
      const nextCaption = party
        ? "🎉 Today is the day — let's celebrate!"
        : diff <= 0
          ? '🎉 It is happening right now!'
          : d > 0
            ? `Counting down to the big day · ${d} day${d === 1 ? '' : 's'} to go`
            : 'Counting down to the big day';
      if (caption && caption.textContent !== nextCaption) caption.textContent = nextCaption;

      // Accessible summary, refreshed once a minute
      if (m !== lastMinuteLabel) {
        lastMinuteLabel = m;
        const label = party
          ? `It is my birthday today! ${h} hours and ${m} minutes of celebration left.`
          : `${d} days, ${h} hours and ${m} minutes until the birthday.`;
        root.setAttribute('aria-label', label);
      }
    }

    tick();
    setInterval(tick, 1000);

    // Birthday today? A little welcome confetti once the page has loaded.
    if (party) {
      document.addEventListener('bw:loaded', () => {
        setTimeout(() => { fx.confetti({ count: 90, spread: 1.2 }); }, 700);
      });
    }
  }

  /* ═══════════════ FX ENGINE — CONFETTI + FIREWORKS ═══════════════ */
  const fx = (function () {
    const canvas = $('#fx');
    if (!canvas) return { confetti() {}, firework() {}, fireworksShow() {}, rain() {}, clear() {} };
    const ctx = canvas.getContext('2d');

    let w = 0, h = 0, dpr = 1, raf = null;
    let confetti = [], rockets = [], sparks = [];
    let rainTimer = null;

    const PALETTE = ['#f6c76a', '#ff5fa2', '#a855f7', '#5b8cff', '#ffffff', '#6ee7b7', '#ff8f5a'];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function ensure() { if (!raf) raf = requestAnimationFrame(loop); }

    /* ── Confetti ── */
    function spawnConfetti(opts) {
      const o = Object.assign({ count: 90, x: w / 2, y: h / 2, spread: 1, power: 1, gravity: 0.16 }, opts);
      for (let i = 0; i < o.count; i++) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(3, 11) * o.power;
        confetti.push({
          x: o.x + rand(-20, 20),
          y: o.y + rand(-20, 20),
          vx: Math.cos(angle) * speed * o.spread,
          vy: Math.sin(angle) * speed - rand(2, 8) * o.power,
          size: rand(6, 13),
          rot: rand(0, Math.PI * 2),
          vr: rand(-0.22, 0.22),
          color: pick(PALETTE),
          shape: pick(['rect', 'circle', 'stroke']),
          life: rand(90, 170),
          wobble: rand(0, Math.PI * 2)
        });
      }
      ensure();
    }

    /* ── Fireworks ── */
    function spawnRocket(x, y) {
      const tx = x !== undefined ? x : rand(w * 0.1, w * 0.9);
      const ty = y !== undefined ? y : rand(h * 0.12, h * 0.46);
      rockets.push({
        x: tx, y: h + 12, py: h + 12,
        vy: -rand(12, 16),
        tx, ty,
        color: pick(PALETTE)
      });
      ensure();
    }

    function explode(x, y, color) {
      const count = reduceMotion() ? 18 : rand(46, 76);
      const speed = rand(2.4, 7);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + rand(-0.12, 0.12);
        const s = speed * rand(0.45, 1);
        sparks.push({
          x, y, px: x, py: y,
          vx: Math.cos(angle) * s,
          vy: Math.sin(angle) * s,
          life: rand(40, 82),
          max: 82,
          color: Math.random() > 0.72 ? pick(PALETTE) : color
        });
      }
    }

    function fireworksShow(n = 5) {
      if (reduceMotion()) return;
      for (let i = 0; i < n; i++) {
        setTimeout(() => spawnRocket(), i * rand(260, 520));
      }
    }

    function rain(duration = 6000) {
      if (reduceMotion()) return;
      const stopAt = Date.now() + duration;
      clearInterval(rainTimer);
      rainTimer = setInterval(() => {
        if (Date.now() > stopAt) { clearInterval(rainTimer); rainTimer = null; return; }
        for (let i = 0; i < 6; i++) {
          confetti.push({
            x: rand(-20, w + 20), y: rand(-120, -10),
            vx: rand(-1.6, 1.6), vy: rand(2, 5.5),
            size: rand(6, 12), rot: rand(0, 6.28), vr: rand(-0.2, 0.2),
            color: pick(PALETTE), shape: pick(['rect', 'circle']),
            life: rand(160, 300), wobble: rand(0, 6.28)
          });
        }
        ensure();
      }, 90);
    }

    /* ── Loop ── */
    function loop() {
      ctx.clearRect(0, 0, w, h);

      // Confetti
      for (let i = confetti.length - 1; i >= 0; i--) {
        const p = confetti[i];
        p.vy += 0.16;
        p.vx *= 0.992;
        p.wobble += 0.06;
        p.x += p.vx + Math.sin(p.wobble) * 0.5;
        p.y += p.vy;
        p.rot += p.vr;
        p.life--;

        if (p.y > h + 40 || p.life <= 0) { confetti.splice(i, 1); continue; }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = clamp(p.life / 40, 0, 1);
        ctx.fillStyle = p.color;
        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'stroke') {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 2;
          ctx.strokeRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2 * (0.6 + Math.abs(Math.sin(p.wobble)) * 0.7));
        }
        ctx.restore();
      }

      // Rockets
      ctx.lineCap = 'round';
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.py = r.y;
        r.y += r.vy;
        r.vy += 0.22;

        ctx.beginPath();
        ctx.strokeStyle = r.color;
        ctx.lineWidth = 2.4;
        ctx.globalAlpha = 0.9;
        ctx.moveTo(r.x, r.py);
        ctx.lineTo(r.x, r.y);
        ctx.stroke();

        if (r.vy >= -1.2 || r.y <= r.ty) {
          explode(r.x, r.y, r.color);
          rockets.splice(i, 1);
        }
      }

      // Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.px = s.x; s.py = s.y;
        s.vy += 0.045;
        s.vx *= 0.975;
        s.vy *= 0.975;
        s.x += s.vx;
        s.y += s.vy;
        s.life--;

        if (s.life <= 0) { sparks.splice(i, 1); continue; }

        const a = clamp(s.life / s.max, 0, 1);
        ctx.beginPath();
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = a;
        ctx.lineWidth = 1.8;
        ctx.moveTo(s.px, s.py);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;

      if (confetti.length || rockets.length || sparks.length) {
        raf = requestAnimationFrame(loop);
      } else {
        ctx.clearRect(0, 0, w, h);
        raf = null;
      }
    }

    function clear() {
      confetti = []; rockets = []; sparks = [];
      clearInterval(rainTimer); rainTimer = null;
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      ctx.clearRect(0, 0, w, h);
    }

    window.addEventListener('resize', () => {
      clearTimeout(resize._t);
      resize._t = setTimeout(resize, 180);
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clear();
    });

    resize();

    return {
      confetti: spawnConfetti,
      firework: spawnRocket,
      fireworksShow,
      rain,
      clear
    };
  })();

  /* ═══════════════ MUSIC PLAYER ═══════════════ */
  const music = (function () {
    const fab = $('#musicFab');
    const navBtn = $('#navMusic');

    let audio = null;
    let playing = false;
    let mode = null;              // 'file' | 'synth' | null
    let actx = null, master = null, timer = null, nextTime = 0, idx = 0;

    const BEAT = 0.42;
    const FREQ = {
      C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
      C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99
    };
    const MELODY = [
      ['G4', .75], ['G4', .25], ['A4', 1], ['G4', 1], ['C5', 1], ['B4', 2],
      ['G4', .75], ['G4', .25], ['A4', 1], ['G4', 1], ['D5', 1], ['C5', 2],
      ['G4', .75], ['G4', .25], ['G5', 1], ['E5', 1], ['C5', 1], ['B4', 1], ['A4', 2],
      ['F5', .75], ['F5', .25], ['E5', 1], ['C5', 1], ['D5', 1], ['C5', 2]
    ];

    function ensureFile() {
      if (audio || !birthdayConfig.music) return audio;
      audio = new Audio(birthdayConfig.music);
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = 0.45;
      audio.addEventListener('error', () => { mode = 'synth'; });
      audio.addEventListener('canplay', () => { if (mode !== 'file') mode = 'file'; });
      return audio;
    }

    function ensureCtx() {
      if (actx) return actx;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      actx = new AC();
      master = actx.createGain();
      master.gain.value = 0.22;
      master.connect(actx.destination);
      return actx;
    }

    function playNote(note, when) {
      const [name, beats] = note;
      const freq = FREQ[name];
      if (!freq) return;
      const dur = beats * BEAT;

      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;

      gain.gain.setValueAtTime(0.0001, when);
      gain.gain.exponentialRampToValueAtTime(0.9, when + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, when + dur * 0.92);

      osc.connect(gain);
      gain.connect(master);
      osc.start(when);
      osc.stop(when + dur);

      // soft bell overtone
      const osc2 = actx.createOscillator();
      const gain2 = actx.createGain();
      osc2.type = 'sine';
      osc2.frequency.value = freq * 2;
      gain2.gain.setValueAtTime(0.0001, when);
      gain2.gain.exponentialRampToValueAtTime(0.22, when + 0.02);
      gain2.gain.exponentialRampToValueAtTime(0.0001, when + dur * 0.6);
      osc2.connect(gain2);
      gain2.connect(master);
      osc2.start(when);
      osc2.stop(when + dur);
    }

    function scheduler() {
      if (!actx) return;
      while (nextTime < actx.currentTime + 0.7) {
        playNote(MELODY[idx], nextTime);
        nextTime += MELODY[idx][1] * BEAT;
        idx++;
        if (idx >= MELODY.length) { idx = 0; nextTime += BEAT * 2; }
      }
    }

    function startSynth() {
      if (!ensureCtx()) { toast('Audio is not supported in this browser.'); return false; }
      if (actx.state === 'suspended') actx.resume();
      master.gain.cancelScheduledValues(actx.currentTime);
      master.gain.setValueAtTime(0.0001, actx.currentTime);
      master.gain.exponentialRampToValueAtTime(0.22, actx.currentTime + 0.4);
      nextTime = actx.currentTime + 0.1;
      clearInterval(timer);
      timer = setInterval(scheduler, 120);
      scheduler();
      return true;
    }

    function stopSynth() {
      clearInterval(timer);
      timer = null;
      if (actx && master) {
        master.gain.cancelScheduledValues(actx.currentTime);
        master.gain.setValueAtTime(master.gain.value, actx.currentTime);
        master.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + 0.35);
      }
    }

    function setUI(state) {
      playing = state;
      [fab, navBtn].forEach(btn => {
        if (!btn) return;
        btn.setAttribute('aria-pressed', String(state));
        btn.setAttribute('aria-label', state ? 'Pause birthday music' : 'Play birthday music');
        btn.setAttribute('title', state ? 'Pause birthday music' : 'Play birthday music');
      });
    }

    function play() {
      const el = ensureFile();

      if (el && mode !== 'synth') {
        el.play().then(() => {
          mode = 'file';
          setUI(true);
          toast('🎵 Music on — happy birthday to me!');
        }).catch(() => {
          mode = 'synth';
          if (startSynth()) { setUI(true); toast('🎵 Playing a birthday melody.'); }
        });
        return;
      }

      if (startSynth()) { setUI(true); toast('🎵 Playing a birthday melody.'); }
    }

    function pause() {
      if (audio && mode === 'file') audio.pause();
      stopSynth();
      setUI(false);
    }

    function toggle() { playing ? pause() : play(); }

    if (fab) fab.addEventListener('click', toggle);
    if (navBtn) navBtn.addEventListener('click', toggle);

    // Pause when the tab is hidden, keep state consistent
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && playing && mode === 'file' && audio) audio.pause();
      else if (!document.hidden && playing && mode === 'file' && audio) audio.play().catch(() => {});
    });

    return { toggle, play, pause, isPlaying: () => playing };
  })();

  /* ═══════════════ SECTION 2 · GIFT BOX ═══════════════ */
  function initGift() {
    const gift = $('#gift');
    const stage = gift && gift.closest('.gift-stage');
    const message = $('#surpriseMessage');
    if (!gift) return;

    let opened = false;

    gift.addEventListener('click', () => {
      if (opened) return;
      opened = true;

      gift.classList.add('is-open');
      gift.setAttribute('aria-disabled', 'true');
      if (stage) stage.classList.add('is-open');

      // Confetti straight out of the box
      const rect = gift.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height * 0.45;

      if (!reduceMotion()) {
        fx.confetti({ count: 110, x, y, spread: 1.15, power: 1.1 });
        setTimeout(() => fx.confetti({ count: 60, x, y, spread: 1.5, power: .8 }), 220);
        fx.fireworksShow(3);
      }
      particles.boost(1.2);
      particles.add(45);

      setTimeout(() => {
        if (message) {
          message.hidden = false;
          message.setAttribute('tabindex', '-1');
          message.focus({ preventScroll: true });
        }
      }, 620);

      if (birthdayConfig.autoMusicOnSurprise) music.play();
      else if (!music.isPlaying()) toast('🎵 Tip: tap the music button for a birthday tune.');
    });
  }

  /* ═══════════════ SECTION 3 · TIMELINE ═══════════════ */
  function renderTimeline() {
    const wrap = $('#timeline');
    if (!wrap || !Array.isArray(birthdayConfig.timeline)) return;

    const frag = document.createDocumentFragment();

    birthdayConfig.timeline.forEach((item, i) => {
      const li = document.createElement('li');
      li.className = 'tl-item';
      li.setAttribute('data-side', i % 2 === 0 ? 'left' : 'right');
      li.setAttribute('data-reveal', '');
      li.innerHTML =
        `<div class="tl-dot" aria-hidden="true">${escapeHTML(item.icon || '✨')}</div>` +
        `<article class="tl-card glass-card">` +
          `<span class="tl-year">${escapeHTML(item.year || '')}</span>` +
          `<h3 class="tl-title">${escapeHTML(item.title || '')}</h3>` +
          `<p class="tl-desc">${escapeHTML(item.text || '')}</p>` +
        `</article>`;
      frag.appendChild(li);
    });

    wrap.appendChild(frag);
  }

  /* ═══════════════ SECTION 4 · GALLERY ═══════════════ */
  const galleryItems = [];

  function placeholderSVG(label) {
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">` +
      `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
      `<stop offset="0%" stop-color="#2a1b52"/><stop offset="50%" stop-color="#4c2a7a"/><stop offset="100%" stop-color="#1b1140"/>` +
      `</linearGradient></defs>` +
      `<rect width="1200" height="800" fill="url(%23g)"/>` +
      `<text x="600" y="380" font-size="120" text-anchor="middle">%F0%9F%93%B7</text>` +
      `<text x="600" y="470" font-size="38" text-anchor="middle" fill="%23cfc6f5" font-family="sans-serif">${encodeURIComponent(label || 'Add your photo')}</text>` +
      `</svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + svg;
  }

  function renderGallery() {
    const wrap = $('#gallery');
    if (!wrap || !Array.isArray(birthdayConfig.gallery)) return;

    const frag = document.createDocumentFragment();

    birthdayConfig.gallery.forEach((item, i) => {
      if (!item || (!item.src && !item.thumb)) return;

      const src = item.src || item.thumb;
      const thumb = item.thumb || item.src;
      const caption = item.caption || `Memory ${i + 1}`;
      const alt = item.alt || caption;
      const index = galleryItems.length;

      galleryItems.push({ src, thumb, caption, alt });

      const figure = document.createElement('figure');
      figure.className = 'g-item';
      figure.setAttribute('data-reveal', '');

      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'g-card';
      card.setAttribute('aria-label', `Open memory: ${caption}`);
      card.setAttribute('data-index', String(index));

      card.innerHTML =
        `<span class="g-media is-loading" style="--ar:${escapeHTML(item.aspect || '4 / 3')}">` +
          `<img src="${escapeHTML(thumb)}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async" width="800" height="600" />` +
          `<span class="g-caption">` +
            `<span>${escapeHTML(caption)}</span>` +
            `<span class="g-zoom" aria-hidden="true">⤢</span>` +
          `</span>` +
        `</span>`;

      const media = card.querySelector('.g-media');
      const img = card.querySelector('img');

      const onLoad = () => {
        img.classList.add('is-loaded');
        media.classList.remove('is-loading');
      };
      const onError = () => {
        media.classList.remove('is-loading');
        media.classList.add('is-error');
        img.src = placeholderSVG('Add your photo');
        img.classList.add('is-loaded');
      };

      img.addEventListener('load', onLoad, { once: true });
      img.addEventListener('error', onError, { once: true });
      if (img.complete && img.naturalWidth > 0) onLoad();

      card.addEventListener('click', () => lightbox.open(index, card));

      figure.appendChild(card);
      frag.appendChild(figure);
    });

    wrap.appendChild(frag);
  }

  /* ── Lightbox ── */
  const lightbox = (function () {
    const el = $('#lightbox');
    const img = $('#lbImage');
    const cap = $('#lbCaption');
    const idxEl = $('#lbIndex');
    const wrapEl = $('.lb-image-wrap');
    const btnClose = $('#lbClose');
    const btnPrev = $('#lbPrev');
    const btnNext = $('#lbNext');

    let index = 0;
    let lastFocus = null;
    let touchX = 0;

    function show(i) {
      if (!galleryItems.length) return;
      index = (i + galleryItems.length) % galleryItems.length;
      const item = galleryItems[index];

      if (wrapEl) wrapEl.classList.add('is-loading');
      img.classList.add('is-swapping');
      img.alt = item.alt || item.caption || '';
      cap.textContent = item.caption || '';
      idxEl.textContent = `${index + 1} / ${galleryItems.length}`;

      const pre = new Image();
      pre.onload = () => {
        img.src = item.src;
        img.classList.remove('is-swapping');
        if (wrapEl) wrapEl.classList.remove('is-loading');
      };
      pre.onerror = () => {
        img.src = placeholderSVG(item.caption || 'Memory');
        img.classList.remove('is-swapping');
        if (wrapEl) wrapEl.classList.remove('is-loading');
      };
      pre.src = item.src;
    }

    function open(i, trigger) {
      if (!el || !galleryItems.length) return;
      lastFocus = trigger || document.activeElement;
      el.hidden = false;
      requestAnimationFrame(() => el.classList.add('is-open'));
      document.body.classList.add('is-locked');
      show(i);
      if (btnClose) btnClose.focus();
    }

    function close() {
      if (!el || el.hidden) return;
      el.classList.remove('is-open');
      document.body.classList.remove('is-locked');
      setTimeout(() => { el.hidden = true; img.removeAttribute('src'); }, 320);
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus({ preventScroll: true });
    }

    if (btnClose) btnClose.addEventListener('click', close);
    if (btnPrev) btnPrev.addEventListener('click', () => show(index - 1));
    if (btnNext) btnNext.addEventListener('click', () => show(index + 1));

    $$('[data-close]').forEach(n => n.addEventListener('click', close));

    document.addEventListener('keydown', e => {
      if (!el || el.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowLeft') show(index - 1);
      else if (e.key === 'ArrowRight') show(index + 1);
      else if (e.key === 'Tab') {
        // keep focus inside the dialog
        const focusables = [btnClose, btnPrev, btnNext].filter(Boolean);
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    if (el) {
      el.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, { passive: true });
      el.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) show(dx < 0 ? index + 1 : index - 1);
      }, { passive: true });
    }

    return { open, close, show, isOpen: () => !!el && !el.hidden };
  })();

  /* ═══════════════ SECTION 5 · TYPING THOUGHTS ═══════════════ */
  function initTyping() {
    const el = $('#typing');
    const finalEl = $('#thoughtsFinal');
    if (!el) return;

    const lines = Array.isArray(birthdayConfig.thoughts) ? birthdayConfig.thoughts : [];

    if (reduceMotion()) {
      el.innerHTML = lines.map(escapeHTML).join('<br />');
      if (finalEl) finalEl.hidden = false;
      return;
    }

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    async function type() {
      el.setAttribute('aria-live', 'off');
      el.classList.add('is-typing');

      for (let i = 0; i < lines.length; i++) {
        const text = lines[i];
        const span = document.createElement('span');
        el.appendChild(span);
        for (const char of text) {
          span.textContent += char;
          await sleep(rand(22, 55));
        }
        if (i < lines.length - 1) {
          el.appendChild(document.createElement('br'));
          await sleep(220);
        }
      }

      el.classList.remove('is-typing');
      if (finalEl) setTimeout(() => { finalEl.hidden = false; }, 600);
    }

    if (!('IntersectionObserver' in window)) { type(); return; }

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        setTimeout(type, 250);
      });
    }, { threshold: 0.3 });

    io.observe(el);
  }

  /* ═══════════════ FLOATING THOUGHT PARTICLES ═══════════════ */
  function renderThoughtsParticles() {
    const wrap = $('#thoughtsParticles');
    if (!wrap || reduceMotion()) return;
    const glyphs = ['✨', '❤️', '⭐', '🎈', '💫', '🕯️', '🎊'];
    const count = window.innerWidth < 700 ? 8 : 16;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const s = document.createElement('i');
      s.textContent = pick(glyphs);
      s.style.left = rand(2, 96).toFixed(2) + '%';
      s.style.fontSize = rand(0.7, 1.5).toFixed(2) + 'rem';
      s.style.animationDuration = rand(11, 22).toFixed(1) + 's';
      s.style.animationDelay = rand(0, 14).toFixed(1) + 's';
      frag.appendChild(s);
    }
    wrap.appendChild(frag);
  }

  /* ═══════════════ SECTION 6 · GOALS ═══════════════ */
  function renderGoals() {
    const wrap = $('#goalsGrid');
    if (!wrap || !Array.isArray(birthdayConfig.goals)) return;

    const frag = document.createDocumentFragment();

    birthdayConfig.goals.forEach((goal, i) => {
      const card = document.createElement('article');
      card.className = 'goal-card glass-card';
      card.setAttribute('data-reveal', '');
      card.innerHTML =
        `<span class="goal-index" aria-hidden="true">${pad2(i + 1)}</span>` +
        `<span class="goal-icon" aria-hidden="true">${escapeHTML(goal.icon || '⭐')}</span>` +
        `<h3 class="goal-title">${escapeHTML(goal.title || '')}</h3>` +
        `<p class="goal-desc">${escapeHTML(goal.text || '')}</p>`;

      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });

      frag.appendChild(card);
    });

    wrap.appendChild(frag);
  }

  /* ═══════════════ SECTION 7 · WISHES (localStorage) ═══════════════ */
  const WISH_KEY = 'bw-wishes';

  function loadWishes() {
    const list = store.get(WISH_KEY, null);
    if (Array.isArray(list)) return list.filter(w => w && typeof w === 'object');
    return null;
  }

  function saveWishes(list) {
    const ok = store.set(WISH_KEY, list.slice(0, 200));
    if (!ok) toast('⚠️ Your browser blocked saving (private mode?).');
    return ok;
  }

  function seedWishes() {
    if (birthdayConfig.seedDemoWishes === false) return [];
    const now = Date.now();
    return [
      { id: 'demo-1', name: 'Mum', text: 'So proud of the person you are becoming. Happy birthday! ❤️', date: now - 86400000 },
      { id: 'demo-2', name: 'Rafi', text: 'Another year, another level. Go build something incredible this year 🚀', date: now - 172800000 },
      { id: 'demo-3', name: 'Nusrat', text: 'May this chapter be your kindest and wildest one yet. Cheers! 🥂', date: now - 259200000 }
    ];
  }

  function formatDate(ts) {
    try {
      return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) { return ''; }
  }

  let wishes = [];

  function renderWishes() {
    const wall = $('#wishWall');
    const empty = $('#wallEmpty');
    const count = $('#wallCount');
    if (!wall) return;

    wall.textContent = '';

    if (count) count.textContent = `${wishes.length} wish${wishes.length === 1 ? '' : 'es'}`;
    if (empty) empty.hidden = wishes.length > 0;

    wishes.forEach((w, i) => {
      const card = document.createElement('article');
      card.className = 'wish-card glass-card';
      card.style.animationDelay = Math.min(i * 60, 400) + 'ms';

      const top = document.createElement('div');
      top.className = 'wish-top';

      const avatar = document.createElement('span');
      avatar.className = 'wish-avatar';
      avatar.setAttribute('aria-hidden', 'true');
      avatar.textContent = (String(w.name || '?').trim()[0] || '?').toUpperCase();

      const meta = document.createElement('div');
      const name = document.createElement('p');
      name.className = 'wish-name';
      name.textContent = w.name || 'Anonymous';
      const date = document.createElement('p');
      date.className = 'wish-date';
      date.textContent = formatDate(w.date) || '';
      meta.appendChild(name);
      meta.appendChild(date);

      top.appendChild(avatar);
      top.appendChild(meta);

      const body = document.createElement('p');
      body.className = 'wish-body';
      body.textContent = w.text || '';

      const del = document.createElement('button');
      del.type = 'button';
      del.className = 'wish-delete';
      del.setAttribute('aria-label', `Delete wish from ${w.name || 'Anonymous'}`);
      del.textContent = '✕';
      del.addEventListener('click', () => {
        wishes = wishes.filter(x => x.id !== w.id);
        saveWishes(wishes);
        renderWishes();
        toast('Wish removed.');
      });

      card.appendChild(top);
      card.appendChild(body);
      card.appendChild(del);
      wall.appendChild(card);
    });
  }

  function initWishes() {
    const form = $('#wishForm');
    const nameInput = $('#wishName');
    const textInput = $('#wishText');
    const success = $('#formSuccess');
    const counter = $('#wishCount');

    const stored = loadWishes();
    wishes = stored === null ? seedWishes() : stored;
    if (stored === null) saveWishes(wishes);
    renderWishes();

    if (!form) return;

    if (textInput && counter) {
      const update = () => { counter.textContent = `${textInput.value.length} / 240`; };
      textInput.addEventListener('input', update);
      update();
    }

    const setError = (input, msgEl, message) => {
      const field = input.closest('.field');
      if (field) field.classList.toggle('has-error', !!message);
      if (msgEl) msgEl.textContent = message || '';
    };

    [nameInput, textInput].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        const field = input.closest('.field');
        if (field) field.classList.remove('has-error');
        const msg = field && field.querySelector('.error');
        if (msg) msg.textContent = '';
      });
    });

    form.addEventListener('submit', e => {
      e.preventDefault();

      const name = (nameInput.value || '').trim();
      const text = (textInput.value || '').trim();
      let valid = true;

      if (name.length < 1) { setError(nameInput, $('#nameError'), 'Please add your name (or a nickname).'); valid = false; }
      else if (name.length > 40) { setError(nameInput, $('#nameError'), 'Keep it under 40 characters.'); valid = false; }
      else setError(nameInput, $('#nameError'), '');

      if (text.length < 3) { setError(textInput, $('#wishError'), 'Write at least a few words 💌'); valid = false; }
      else setError(textInput, $('#wishError'), '');

      if (!valid) {
        (name.length < 1 ? nameInput : textInput).focus();
        return;
      }

      wishes.unshift({
        id: 'w-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
        name, text, date: Date.now()
      });
      saveWishes(wishes);
      renderWishes();

      form.reset();
      if (counter) counter.textContent = '0 / 240';

      if (success) {
        success.hidden = false;
        success.textContent = '✨ Your wish has been added to my birthday wall!';
        setTimeout(() => { success.hidden = true; }, 6000);
      }

      const rect = form.getBoundingClientRect();
      if (!reduceMotion()) {
        fx.confetti({ count: 45, x: rect.left + rect.width / 2, y: rect.top + rect.height * 0.4, spread: .9, power: .8 });
      }
      toast('✨ Wish added — thank you!');
      particles.boost(.4);
    });
  }

  /* ═══════════════ SECTION 8 · CELEBRATION MODE ═══════════════ */
  function initCelebration() {
    const btn = $('#celebrateBtn');
    const overlay = $('#celebration');
    const closeBtn = $('#celebrationClose');
    const field = $('#balloonField');
    if (!btn || !overlay) return;

    let active = false;
    let timers = [];
    let autoClose = null;

    function balloons(n = 18) {
      if (!field || reduceMotion()) return;
      const colors = [
        'radial-gradient(circle at 32% 28%, #ffb3d9, #ff4d94)',
        'radial-gradient(circle at 32% 28%, #c9b6ff, #7c3aed)',
        'radial-gradient(circle at 32% 28%, #b6e0ff, #3b82f6)',
        'radial-gradient(circle at 32% 28%, #ffe1a8, #f59e0b)',
        'radial-gradient(circle at 32% 28%, #b8f5d0, #22c55e)'
      ];
      for (let i = 0; i < n; i++) {
        const b = document.createElement('span');
        b.className = 'celeb-balloon';
        b.style.left = rand(2, 94).toFixed(2) + '%';
        b.style.background = pick(colors);
        b.style.setProperty('--drift', rand(-70, 70).toFixed(0) + 'px');
        b.style.setProperty('--spin', rand(-25, 25).toFixed(0) + 'deg');
        b.style.animationDuration = rand(6, 12).toFixed(1) + 's';
        b.style.animationDelay = rand(0, 3).toFixed(1) + 's';
        b.style.transform = `scale(${rand(.7, 1.3).toFixed(2)})`;
        field.appendChild(b);
        b.addEventListener('animationend', () => b.remove(), { once: true });
      }
    }

    function start() {
      if (active) return;
      active = true;
      overlay.classList.add('is-active');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-locked');

      fx.rain(10000);
      fx.fireworksShow(6);
      timers.push(setTimeout(() => balloons(20), 300));
      timers.push(setTimeout(() => balloons(14), 2200));
      timers.push(setTimeout(() => fx.confetti({ count: 80, x: innerWidth / 2, y: innerHeight * .55, spread: 1.6, power: 1.2 }), 500));
      particles.boost(1.4);

      if (closeBtn) closeBtn.focus({ preventScroll: true });
      autoClose = setTimeout(stop, 14000);
    }

    function stop() {
      if (!active) return;
      active = false;
      overlay.classList.remove('is-active');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-locked');
      timers.forEach(clearTimeout);
      timers = [];
      clearTimeout(autoClose);
      if (field) field.textContent = '';
      fx.clear();
      btn.focus({ preventScroll: true });
    }

    btn.addEventListener('click', start);
    if (closeBtn) closeBtn.addEventListener('click', stop);
    overlay.addEventListener('click', e => { if (e.target === overlay || e.target.classList.contains('celebration-glow')) stop(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && active) stop(); });

    return { start, stop };
  }

  /* ═══════════════ SECTION 9 · FINALE ═══════════════ */
  function initFinale() {
    const btn = $('#finaleFireworks');
    if (btn) {
      btn.addEventListener('click', () => {
        fx.fireworksShow(6);
        fx.confetti({ count: 70, x: innerWidth / 2, y: innerHeight * .6, spread: 1.4, power: 1 });
        toast('🎆 To another beautiful year!');
      });
    }

    const section = $('#finale');
    if (!section || !('IntersectionObserver' in window) || reduceMotion()) return;

    let done = false;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || done) return;
        done = true;
        io.disconnect();
        fx.fireworksShow(3);
        particles.boost(.8);
      });
    }, { threshold: 0.35 });
    io.observe(section);
  }

  /* ═══════════════ SOCIALS ═══════════════ */
  function socialIconSVG(name) {
    const icons = {
      instagram: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
      github: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.98c.85 0 1.71.12 2.51.36 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.58c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.7H3.3V9Zm6.1 0h3.6v1.6h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75v6.3h-3.8v-5.59c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.68H9.4V9Z"/></svg>'
    };
    return icons[name] || '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4 4h16v16H4z"/></svg>';
  }

  function renderSocials() {
    const wrap = $('#socials');
    if (!wrap || !Array.isArray(birthdayConfig.socials)) return;

    const frag = document.createDocumentFragment();
    birthdayConfig.socials.forEach(s => {
      if (!s || !s.url) return;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'social-link';
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `<span class="social-icon">${socialIconSVG(s.icon)}</span> ${escapeHTML(s.label || 'Link')}`;
      li.appendChild(a);
      frag.appendChild(li);
    });
    wrap.appendChild(frag);
  }

  /* ═══════════════ BOOT ═══════════════ */
  function init() {
    applyConfig();
    theme.init();
    initLoader();

    // Render all config-driven sections first so reveal observers catch them
    renderTimeline();
    renderGallery();
    renderGoals();
    renderSocials();
    renderThoughtsParticles();

    // Interactions
    initNav();
    initReveal();
    initParallax();
    initCountdown();
    initGift();
    initTyping();
    initWishes();
    initCelebration();
    initFinale();

    // Handy for debugging / future tweaks
    window.BirthdaySite = { config: birthdayConfig, fx, music, particles, toast, lightbox };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
