/* ==========================================================================
   Prince Kumar Singh — Portfolio
   Projects live in PROJECTS below: add an entry and it renders itself.
   ========================================================================== */

const GH = "https://github.com/prince76725261";

/* `featured` gives a card double width in the bento grid.
   `cover` is a CSS gradient used for the card header. */
const PROJECTS = [
  {
    name: "MetaTune",
    mono: "MT",
    year: "2023",
    featured: true,
    cover: "linear-gradient(135deg,#7c6cff,#c14cff 55%,#ff5f8f)",
    desc: "A MERN music streaming app with personal libraries, liked songs and " +
          "curated playlists — including public playlists so listeners can " +
          "discover what other people are playing.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://meta-tunes.vercel.app/",
    repo: GH + "/MetaTune",
  },
  {
    name: "Talk-A-Tive",
    mono: "TA",
    year: "2023",
    featured: true,
    cover: "linear-gradient(135deg,#23d3c4,#2a8cff 60%,#6a5cff)",
    desc: "Real-time chat built on Socket.IO with JWT auth, one-to-one and group " +
          "conversations, live typing indicators and notification badges.",
    tags: ["React", "Socket.IO", "Chakra UI", "MongoDB", "JWT"],
    repo: GH + "/chat-frontend",
    repo2: GH + "/chat-backend",
  },
  {
    name: "Cryptopedia",
    mono: "CP",
    year: "2023",
    cover: "linear-gradient(135deg,#f7a800,#ff6a3d 60%,#e5395f)",
    desc: "A crypto research dashboard — live market stats, interactive price " +
          "charts and aggregated news, with server state handled through Redux Toolkit.",
    tags: ["React", "Redux Toolkit", "Chart.js", "Ant Design"],
    repo: GH + "/Cryptopedia",
  },
  {
    name: "Cryptoverse",
    mono: "CV",
    year: "2022",
    cover: "linear-gradient(135deg,#00c2a8,#0b8bd0 60%,#5b53e0)",
    desc: "A price tracker covering the whole cryptocurrency market, quoted in USD " +
          "and refreshed live from a public markets API.",
    tags: ["JavaScript", "REST API", "Firebase"],
    live: "https://cryptoverse-70847.web.app/",
  },
  {
    name: "Speedy Type",
    mono: "ST",
    year: "2023",
    cover: "linear-gradient(135deg,#5b53e0,#23d3c4)",
    desc: "A typing-speed trainer that scores words per minute and accuracy in " +
          "real time as you type against the clock.",
    tags: ["React", "JavaScript"],
    live: "https://speeduptyping.vercel.app",
    repo: GH + "/prince76725261.github.io",
  },
  {
    name: "Quiz App",
    mono: "QA",
    year: "2023",
    cover: "linear-gradient(135deg,#ff7a59,#ffbe3d)",
    desc: "A timed multiple-choice quiz with instant scoring, questions and results " +
          "persisted to Firebase.",
    tags: ["JavaScript", "Firebase", "Bootstrap"],
    live: "https://quiz-app-by-prince.vercel.app/",
    repo: GH + "/QuizApp",
  },
  {
    name: "Todo List",
    mono: "TD",
    year: "2023",
    cover: "linear-gradient(135deg,#2a8cff,#23d3c4)",
    desc: "A task manager for ordering work by priority — add, edit, reorder and " +
          "tick items off, with state kept between visits.",
    tags: ["React", "CSS"],
    live: "https://todo-list-prince.vercel.app/",
    repo: GH + "/todo-list",
  },
  {
    name: "Entertainment News",
    mono: "EN",
    year: "2023",
    cover: "linear-gradient(135deg,#e5395f,#a24bff)",
    desc: "A React news reader that pulls entertainment headlines from a news API " +
          "and lays them out as a browsable feed.",
    tags: ["React", "REST API"],
    repo: GH + "/Entertainment_News",
  },
  {
    name: "Weather App",
    mono: "WA",
    year: "2023",
    cover: "linear-gradient(135deg,#0b8bd0,#5ec8ff)",
    desc: "Search any city and get current conditions back from a live weather API, " +
          "in a compact responsive card.",
    tags: ["JavaScript", "REST API", "CSS"],
    repo: GH + "/WeatherApp",
  },
];

const ICON = {
  live: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  repo: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>',
};

/* ---------- render projects ---------- */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => {
    const links = [];
    if (p.live) links.push(`<a class="p-link" href="${p.live}" target="_blank" rel="noopener noreferrer">${ICON.live} Live demo</a>`);
    if (p.repo) links.push(`<a class="p-link" href="${p.repo}" target="_blank" rel="noopener noreferrer">${ICON.repo} ${p.repo2 ? "Frontend" : "Code"}</a>`);
    if (p.repo2) links.push(`<a class="p-link" href="${p.repo2}" target="_blank" rel="noopener noreferrer">${ICON.repo} Backend</a>`);

    return `
      <article class="card p-card reveal${p.featured ? " featured" : ""}">
        <div class="p-cover" style="background:${p.cover}">
          <span class="p-mono">${p.mono}</span>
        </div>
        <div class="p-body">
          <div class="p-head">
            <h3 class="p-title">${p.name}</h3>
            <span class="p-year">${p.year}</span>
          </div>
          <p class="p-desc">${p.desc}</p>
          <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          <div class="p-links">${links.join("")}</div>
        </div>
      </article>`;
  }).join("");
}

/* ---------- theme ---------- */
function initTheme() {
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (_) {}

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.dataset.theme = saved || (prefersLight ? "light" : "dark");

  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (_) {}
  });
}

/* ---------- typing effect ---------- */
function initTyped() {
  const el = document.getElementById("typed");
  if (!el) return;

  const words = [
    "Full Stack MERN Developer",
    "Competitive Programmer",
    "React & Node.js Engineer",
    "NIT Jamshedpur Graduate",
  ];

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = words[0];
    return;
  }

  let w = 0, i = 0, deleting = false;

  (function tick() {
    const word = words[w];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);

    let wait = deleting ? 45 : 85;

    if (!deleting && i === word.length) { deleting = true; wait = 1700; }
    else if (deleting && i === 0)       { deleting = false; w = (w + 1) % words.length; wait = 350; }

    setTimeout(tick, wait);
  })();
}

/* ---------- scroll reveal ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, n) => {
      if (!e.isIntersecting) return;
      setTimeout(() => e.target.classList.add("in"), n * 70);
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px" });

  items.forEach((el) => io.observe(el));
}

/* ---------- nav: blur on scroll, active link, mobile menu ---------- */
function initNav() {
  const nav = document.querySelector(".nav");
  const links = [...document.querySelectorAll(".nav-links a[href^='#']")];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const onScroll = () => {
    if (nav) nav.classList.toggle("stuck", window.scrollY > 12);

    let current = sections[0];
    for (const s of sections) {
      if (window.scrollY >= s.offsetTop - 140) current = s;
    }
    links.forEach((a) => a.classList.toggle("active", current && a.getAttribute("href") === "#" + current.id));
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

/* ---------- cursor-tracked card highlight ---------- */
function initCardGlow() {
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  }, { passive: true });
}

/* ---------- go ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initTheme();
  initTyped();
  initReveal();
  initNav();
  initCardGlow();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
