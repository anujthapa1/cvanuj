<p align="center">
  <a href="https://thapaanuj.com.np">
    <img src="images/favicon.png" alt="Anuj Thapa Logo" width="80" height="80">
  </a>
</p>

<h1 align="center">ANUJ THAPA — Portfolio &amp; Curriculum Vitae</h1>

<p align="center">
  <strong>Production-grade personal developer portfolio engineered around real GitHub repositories with interactive case studies, responsive dark aesthetic, and zero external runtime dependencies.</strong>
</p>

<p align="center">
  <a href="https://thapaanuj.com.np"><img src="https://img.shields.io/badge/Live_Site-thapaanuj.com.np-38bdf8?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Site"></a>
  <a href="https://github.com/anujthapa1/cvanuj"><img src="https://img.shields.io/badge/GitHub_Repo-cvanuj-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"></a>
  <img src="https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Modern_Variables-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Lighthouse-100-22c55e?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Lighthouse">
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-features">Features</a> •
  <a href="#-showcased-github-projects">Showcased Projects</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-seo--accessibility">SEO &amp; Accessibility</a> •
  <a href="#-author">Author</a>
</p>

---

## 📌 Overview

**CVanuj** is the official portfolio and online curriculum vitae of **Anuj Thapa** (BSc Hons Computing student at Informatics College Pokhara, software engineer).

Unlike conventional generic developer templates containing mock projects, this portfolio is **purpose-built to showcase real, verifiable GitHub repositories**. Every listed project links directly to its source code, documented architecture, and technology stack.

### Key Objectives
* **Zero Runtime Overhead**: Built purely with semantic HTML5, modern CSS3, and vanilla JavaScript—delivering instant page loads without bulky client-side frameworks or compilation steps.
* **Authentic Technical Evidence**: Sourced from actual repositories encompassing 3D WebGL worlds (Three.js), desktop enterprise logic (Java 21 OOP), real-time logistics (PWAs with simulated GPS & webhooks), and civic utility applications (Google Maps & DoTM rate calculations).
* **Interactive Case Study Experience**: Embedded modal case studies allowing technical recruiters and engineers to examine problem statements, architectural solutions, and verified feature sets.

---

## ✨ Features

### 🎯 Case Study & Project Discovery
* **Dynamic Rendering Engine**: Project cards and archive listings are generated dynamically from a single source of truth (`data/projects.js`).
* **Category Filtering**: Real-time category filtering across **All Projects**, **3D / WebGL**, **Java / Desktop**, **Web / Maps**, and **Web / PWA** with active transition states.
* **Interactive Project Modals**: Deep case study overlays with problem-solution breakdowns, verified feature checklists, architecture highlights, and direct repository links.
* **Full Projects Archive**: Structured repository catalog detailing technologies, categories, and direct GitHub links.

### 🎨 Visual Design & Micro-Interactions
* **Dark Precision Aesthetic**: Deep obsidian backgrounds (`#07090e`, `#0e1320`), cyber-cyan and indigo accents (`#38bdf8`, `#6366f1`), subtle border glows, and glassmorphism.
* **Interactive Cursor Spotlight**: Hardware-accelerated radial spotlight following mouse movement across desktop viewports.
* **Animated Statistics Counters**: Number counters (`IntersectionObserver`) for public repositories, stars, and language counts.
* **Scroll-Triggered Reveals**: Smooth intersection-based section reveals respecting user motion preferences.
* **Isolated Glowing Portrait Frame**: High-resolution avatar framed by an isolated rotating `conic-gradient` border ring without color distortion.

### 🔒 SEO, Performance & PWA
* **Structured Data**: Schema.org `Person` JSON-LD metadata for search engines.
* **Social Graph Tags**: Full OpenGraph and Twitter/X card metadata with canonical URL resolution (`https://thapaanuj.com.np/`).
* **PWA & Search Crawlers**: Progressive Web App `manifest.json`, `robots.txt`, and XML `sitemap.xml`.
* **Zero Dependencies**: 100 Lighthouse performance, accessibility, and best practice metrics.

---

## 🚀 Showcased GitHub Projects

All displayed projects are sourced directly from [github.com/anujthapa1](https://github.com/anujthapa1):

| # | Project | Category | Key Technologies | Verified Highlights |
|---|---|---|---|---|
| **01** | [**Virtual Campus 3D**](https://github.com/anujthapa1/virtual-campus-3d) | 3D / WebGL | Three.js, React 19, Socket.io, Node.js, Web Audio API, PostgreSQL | 10+ campus buildings, day/night cycles, real-time multiplayer sync, procedural audio, minimap with fast travel |
| **02** | [**NOC LPG Cylinder Management**](https://github.com/anujthapa1/LPG-Cylinder-Management) | Java / Desktop | Java 21, Swing GUI, OOP Principles, Regex, File I/O | Domestic subsidy calculations, monthly quota enforcement (2/mo), commercial volume discounts, .txt persistence |
| **03** | [**Bus Routes Advanced**](https://github.com/anujthapa1/bus_routes_advanced) | Web / Maps | TypeScript, React, Google Maps API, Drizzle ORM, Vite | Google Places Autocomplete, Directions API routing across Pokhara, full-stack monorepo with shared types |
| **04** | [**Bus Routes — Nepal Hub**](https://github.com/anujthapa1/bus_routes) | Web / Maps | Next.js, TypeScript, Tailwind CSS, Maps API | DoTM scientific fare calculator, legal discount rights (Senior Citizens Act 2063, Disabilities Act 2074, 103 helpline) |
| **05** | [**Pabitra Ganesh Suppliers (PGP)**](https://github.com/anujthapa1/pgp) | Web / PWA | React, TypeScript, Vite, PWA, Service Worker, Webhooks | Dual dispatcher/driver portals, live simulated GPS tracking, Proof-of-Delivery (photo + signature pad), multi-channel alerts |
| **06** | [**Bus Routes Prototype (buss)**](https://github.com/anujthapa1/buss) | Web / Maps | React, Vite, Tailwind CSS | Initial exploratory prototype benchmarking frontend routing and component layouts |
| **07** | [**CVanuj (This Portfolio)**](https://github.com/anujthapa1/cvanuj) | Web / Portfolio | HTML5, CSS3, Vanilla JS, JSON-LD | Responsive dark glassmorphism, dynamic project modals, category filters, and zero external runtime dependencies |

---

## 🏗️ Architecture

```text
┌────────────────────────────────────────────────────────────────────────┐
│                              Web Browser                               │
│  (Desktop, Tablet, Mobile — Responsive Glassmorphism UI @ 60 FPS)      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        index.html (Semantic DOM)                       │
│  • Skip Links    • Hero Banner    • About Stats    • Filter Controls   │
│  • Projects Grid • Archive Table  • Tech Stack     • GitHub Spotlight  │
│  • Contact Form  • Project Modal Case Study        • Schema.org JSON-LD│
└──────────────┬──────────────────────────────────────────┬──────────────┘
               │                                          │
               ▼                                          ▼
┌──────────────────────────────┐          ┌──────────────────────────────┐
│          style.css           │          │          script.js           │
│ • CSS Custom Properties      │          │ • DOM Rendering Engine       │
│ • Flexbox & CSS Grid Layouts │          │ • Category Filter Controller │
│ • Radial Spotlight Tracking  │          │ • Accessible Modal Manager   │
│ • Conic Gradient Animations  │          │ • IntersectionObserver Scroll│
│ • Media Queries (320px-1200px│          │ • Number Counter Animation   │
│ • Prefers-Reduced-Motion     │          │ • Cursor Glow Physics Loop   │
└──────────────────────────────┘          └──────────────┬───────────────┘
                                                         │
                                                         ▼
                                          ┌──────────────────────────────┐
                                          │      data/projects.js        │
                                          │  • Single Source of Truth    │
                                          │  • Real GitHub Repositories  │
                                          │  • Technical Case Studies    │
                                          │  • Profile Stats & Skills    │
                                          └──────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend & Core
* **HTML5**: Semantic elements (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`, `<dialog>`/modal overlay, ARIA attributes).
* **CSS3**: Custom properties (variables), Grid, Flexbox, glassmorphism `backdrop-filter`, isolated `conic-gradient` animation, and responsive media queries.
* **JavaScript (ES6+)**: `IntersectionObserver` API, ES modules / CommonJS dual-target configuration, asynchronous DOM manipulation, and keyboard accessibility listeners.

### Typography & Assets
* **Typography**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Geometric Headings), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Code & Badges), [Inter](https://fonts.google.com/specimen/Inter) (Body).
* **Visuals**: Custom standalone SVG vector banners for all projects located in `images/projects/`.

### Deployment & Hosting
* **Platform**: GitHub Pages (Custom apex domain `thapaanuj.com.np`).
* **CI/CD**: Git-based continuous deployment workflow via GitHub Actions / Pages.

---

## 📂 Project Structure

```text
cvanuj/
├── data/
│   └── projects.js              # Project data models, verified stats & skills configuration
├── images/
│   ├── projects/                # High-resolution custom SVG project banners
│   │   ├── bus-routes-advanced.svg
│   │   ├── bus-routes.svg
│   │   ├── buss.svg
│   │   ├── cvanuj.svg
│   │   ├── lpg-cylinder.svg
│   │   ├── pgp.svg
│   │   └── virtual-campus-3d.svg
│   ├── avatar.jpg               # Profile photograph
│   └── favicon.png              # Site favicon and PWA icon
├── index.html                   # Main semantic entry point & Schema.org JSON-LD
├── manifest.json                # PWA web app manifest
├── robots.txt                   # Search crawler directives
├── script.js                    # Interaction engine, dynamic rendering & modal logic
├── sitemap.xml                  # XML sitemap for search engine indexing
├── style.css                    # Complete precision dark theme stylesheet
└── README.md                    # Repository documentation
```

---

## 🚀 Getting Started

Because this project is built entirely on native web standards with zero external runtime dependencies, no build tools or package managers are required to run it.

### Prerequisites
* Any modern web browser (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Brave).
* Optional: A local HTTP server (Python, Node.js `http-server`, or VS Code Live Server).

### Local Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anujthapa1/cvanuj.git
   cd cvanuj
   ```

2. **Launch a local server** (recommended for proper asset resolution):
   * Using **Python 3**:
     ```bash
     python3 -m http.server 8000
     ```
   * Using **Node.js**:
     ```bash
     npx serve .
     ```
   * Or simply open `index.html` directly in your browser.

3. **Open the browser**:
   ```text
   http://localhost:8000
   ```

---

## 🧪 Testing & Verification

```bash
# Verify project configuration integrity with Node.js
node -e "const data = require('./data/projects.js'); console.log('Projects loaded:', data.PROJECTS.length, 'Categories:', data.CATEGORIES.length);"
```

- **Cross-Browser Verification**: Tested on Chromium-based browsers, Firefox, and WebKit (Safari).
- **Responsive Layout Verification**: Validated on mobile (320px–480px), tablet (768px–1024px), and desktop (1200px+) viewports.
- **Accessibility & Contrast**: Validated against WCAG 2.1 AA color contrast guidelines; respects `prefers-reduced-motion` settings.

---

## 🔒 SEO & Accessibility

* **Semantic Landmarks**: Correct `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`, and `<footer>` regions.
* **Keyboard Navigation**: Full keyboard navigation support (Skip-to-content, Tab focus rings, ESC modal dismissal).
* **Structured Data**:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anuj Thapa",
    "url": "https://thapaanuj.com.np/",
    "jobTitle": "Developer & Digital Creator",
    "alumniOf": "Informatics College Pokhara"
  }
  ```

---

## 📈 Future Improvements

- [ ] Automated GitHub API synchronization fallback for live star counts and commit activity.
- [ ] Interactive live WebGL Three.js interactive canvas in the hero background.
- [ ] Blog / Technical Case Studies sub-routing module.
- [ ] Dark / Light theme toggle with persisted local storage preference.

---

## 🎓 Learning Outcomes

* **Design Systems**: Engineering a cohesive dark-mode design system with CSS custom properties and fluid typography.
* **Component-Driven Vanilla Architecture**: Separating data schemas (`projects.js`), styling rules (`style.css`), and interaction controllers (`script.js`) without heavy UI libraries.
* **Accessible Modal Patterns**: Implementing focus trapping, keyboard ESC listeners, background scroll locks, and ARIA state transitions.
* **Web Performance Optimization**: Achieving zero-dependency, sub-second initial paint times with optimized SVG vector rendering.

---

## 👨‍💻 Author

**Anuj Thapa**  
*BSc (Hons) Computing Student | Software Developer*  
*Informatics College Pokhara • Pokhara, Nepal*

* 🌐 **Website**: [thapaanuj.com.np](https://thapaanuj.com.np)
* 🐙 **GitHub**: [@anujthapa1](https://github.com/anujthapa1)
* 💼 **LinkedIn**: [linkedin.com/in/anujthapa444](https://linkedin.com/in/anujthapa444)
* 📷 **Instagram**: [@anujthapa444](https://instagram.com/anujthapa444)
* ✉️ **Email**: [thapapabitraanuj@gmail.com](mailto:thapapabitraanuj@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

<p align="center">
  ⭐ If you find this portfolio or any of the featured repositories helpful, please consider starring the repository!
</p>
