/**
 * ANUJ THAPA — PORTFOLIO INTERACTION & RENDERING ENGINE
 * High-performance, zero-dependency vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check if PROJECTS data is loaded
    if (typeof PROJECTS === 'undefined') {
        console.error('Project data (projects.js) is not loaded.');
        return;
    }

    // Initialize all components
    initNavigation();
    initCursorGlow();
    renderFeaturedProjects('all');
    renderAllProjectsArchive();
    renderTechStack();
    renderGitHubSection();
    initProjectFilters();
    initProjectModal();
    initScrollAnimations();
    initStatCounters();
});

/* ==========================================================================
   Navigation & Mobile Menu
   ========================================================================== */
function initNavigation() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Header scroll background state
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        highlightActiveNav();
    }, { passive: true });

    // Hamburger toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive);
        });

        // Close on link click
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Active link highlighting on scroll
    function highlightActiveNav() {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinkItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}` || link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

/* ==========================================================================
   Interactive Cursor Glow
   ========================================================================== */
function initCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (!cursorGlow || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, { passive: true });

    function animateCursor() {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;
        cursorGlow.style.left = `${currentX}px`;
        cursorGlow.style.top = `${currentY}px`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}

/* ==========================================================================
   Featured Projects Rendering
   ========================================================================== */
function renderFeaturedProjects(filterCategory = 'all') {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    let projectsToRender = PROJECTS.filter(p => p.featured);
    if (filterCategory !== 'all') {
        projectsToRender = projectsToRender.filter(p => p.filterCategory === filterCategory);
    }

    if (projectsToRender.length === 0) {
        grid.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <p style="color: var(--text-secondary); font-family: var(--font-mono);">No projects found in this category.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = projectsToRender.map((project, index) => {
        const isReversed = index % 2 === 1 ? 'reversed' : '';
        const topFeatures = project.features.slice(0, 3);
        const topTech = project.technologies.slice(0, 5);

        return `
            <article class="project-card ${isReversed}" data-project-id="${project.id}" role="listitem">
                <div class="project-visual" onclick="openProjectModal('${project.id}')" tabindex="0" role="button" aria-label="Open case study for ${escapeHtml(project.title)}">
                    <img src="${project.image}" alt="${escapeHtml(project.title)} Preview" loading="lazy" onerror="this.onerror=null; this.src='images/portfolio-1.jpg';">
                    <div class="project-visual-overlay"></div>
                </div>
                <div class="project-info">
                    <div>
                        <div class="project-meta">
                            <span class="project-number">${project.number}</span>
                            <span class="project-category">${escapeHtml(project.category)}</span>
                        </div>
                        <h3 class="project-title">${escapeHtml(project.title)}</h3>
                        <p class="project-tagline">${escapeHtml(project.tagline)}</p>
                        <p class="project-desc">${escapeHtml(project.shortDescription)}</p>
                        
                        <ul class="project-features-list" role="list">
                            ${topFeatures.map(f => `<li><span>${escapeHtml(f)}</span></li>`).join('')}
                        </ul>
                    </div>

                    <div>
                        <div class="project-tech-tags">
                            ${topTech.map(t => `
                                <span class="tech-tag">
                                    <span class="tech-tag-dot"></span>
                                    ${escapeHtml(t.name)}
                                </span>
                            `).join('')}
                        </div>

                        <div class="project-actions">
                            <button class="btn btn-primary btn-sm" onclick="openProjectModal('${project.id}')" aria-label="Explore case study for ${escapeHtml(project.title)}">
                                Explore Case Study →
                            </button>
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="View ${escapeHtml(project.title)} on GitHub">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                                GitHub ↗
                            </a>
                            ${project.liveDemoUrl ? `
                                <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                                    Live Demo ↗
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

/* ==========================================================================
   Project Filters
   ========================================================================== */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');

            const filter = button.getAttribute('data-filter');
            renderFeaturedProjects(filter);
        });
    });
}

/* ==========================================================================
   All Projects Archive Table
   ========================================================================== */
function renderAllProjectsArchive() {
    const list = document.querySelector('.projects-list');
    if (!list) return;

    list.innerHTML = `
        <div class="archive-row archive-header" role="row">
            <span>#</span>
            <span>Project</span>
            <span>Category</span>
            <span class="archive-tech">Tech Stack</span>
            <span style="text-align: right;">Links</span>
        </div>
        ${PROJECTS.map(project => `
            <div class="archive-row" role="row">
                <span class="archive-number">${project.number}</span>
                <span class="archive-title" onclick="openProjectModal('${project.id}')" tabindex="0" role="button">${escapeHtml(project.title)}</span>
                <span class="archive-category">${escapeHtml(project.category)}</span>
                <div class="archive-tech">
                    ${project.technologies.slice(0, 3).map(t => `<span class="tech-tag">${escapeHtml(t.name)}</span>`).join('')}
                </div>
                <div class="archive-links">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" aria-label="GitHub for ${escapeHtml(project.title)}" title="GitHub Repository">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    ${project.liveDemoUrl ? `
                        <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" aria-label="Live Demo for ${escapeHtml(project.title)}" title="Live Demo">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    ` : ''}
                </div>
            </div>
        `).join('')}
    `;
}

/* ==========================================================================
   Tech Stack Rendering
   ========================================================================== */
function renderTechStack() {
    const container = document.querySelector('.tech-stack');
    if (!container || typeof SKILLS === 'undefined') return;

    const categories = [
        { title: 'Languages', icon: '💻', items: SKILLS.languages },
        { title: 'Frontend & 3D Web', icon: '🌐', items: SKILLS.frontend },
        { title: 'Backend & Real-Time', icon: '⚙️', items: SKILLS.backend },
        { title: 'Databases & Storage', icon: '🗄️', items: SKILLS.databases },
        { title: 'Developer Tools', icon: '🛠️', items: SKILLS.tools },
        { title: 'Core Competencies', icon: '🧠', items: SKILLS.core }
    ];

    container.innerHTML = categories.map(cat => `
        <div class="tech-card" role="listitem">
            <div class="tech-card-header">
                <span class="tech-card-icon">${cat.icon}</span>
                <h3 class="tech-card-title">${escapeHtml(cat.title)}</h3>
            </div>
            <div class="tech-items-grid">
                ${cat.items.map(item => `
                    <div class="tech-item">
                        <div class="tech-item-head">
                            <span class="tech-item-name">${escapeHtml(item.name)}</span>
                            ${item.level ? `<span class="tech-item-level">${escapeHtml(item.level)}</span>` : ''}
                        </div>
                        <span class="tech-item-desc">${escapeHtml(item.desc)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   GitHub Built in Public Section
   ========================================================================== */
function renderGitHubSection() {
    const langContainer = document.querySelector('.github-languages');
    if (!langContainer || typeof GITHUB_PROFILE === 'undefined') return;

    langContainer.innerHTML = GITHUB_PROFILE.topLanguages.map(l => `
        <span class="lang-badge">
            <span class="lang-dot" style="background-color: ${l.color};"></span>
            ${escapeHtml(l.name)} (${l.percent}%)
        </span>
    `).join('');
}

/* ==========================================================================
   Project Detail Modal
   ========================================================================== */
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.modal-close');

    if (!modal) return;

    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }

    // Click outside container
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-meta">
                <span class="project-number">${project.number}</span>
                <span class="project-category">${escapeHtml(project.category)}</span>
            </div>
            <h2 class="modal-title">${escapeHtml(project.title)}</h2>
            <p class="modal-tagline">${escapeHtml(project.tagline)}</p>
        </div>

        <div class="modal-banner">
            <img src="${project.image}" alt="${escapeHtml(project.title)}" onerror="this.onerror=null; this.src='images/portfolio-1.jpg';">
        </div>

        <div class="modal-body">
            <div>
                <h3 class="modal-section-title">📌 Overview</h3>
                <p style="color: var(--text-secondary);">${escapeHtml(project.fullDescription)}</p>
            </div>

            <div class="modal-grid-2">
                <div class="modal-card">
                    <h3 class="modal-section-title">🚨 Problem Statement</h3>
                    <p style="color: var(--text-secondary); font-size: 0.95rem;">${escapeHtml(project.problem)}</p>
                </div>
                <div class="modal-card">
                    <h3 class="modal-section-title">💡 Engineered Solution</h3>
                    <p style="color: var(--text-secondary); font-size: 0.95rem;">${escapeHtml(project.solution)}</p>
                </div>
            </div>

            <div>
                <h3 class="modal-section-title">✨ Key Verified Features</h3>
                <ul class="modal-features-list" role="list">
                    ${project.features.map(f => `<li><span>${escapeHtml(f)}</span></li>`).join('')}
                </ul>
            </div>

            <div>
                <h3 class="modal-section-title">⚡ Architecture &amp; Development Highlights</h3>
                <ul class="modal-highlights-list" role="list">
                    ${project.developmentHighlights.map(h => `<li><span>${escapeHtml(h)}</span></li>`).join('')}
                </ul>
            </div>

            <div>
                <h3 class="modal-section-title">🛠️ Technologies Used</h3>
                <div class="modal-tech-list">
                    ${project.technologies.map(t => `
                        <span class="tech-tag">
                            <span class="tech-tag-dot"></span>
                            <strong>${escapeHtml(t.name)}</strong> (${escapeHtml(t.category)})
                        </span>
                    `).join('')}
                </div>
            </div>

            <div class="modal-actions">
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    Explore GitHub Repository ↗
                </a>
                ${project.liveDemoUrl ? `
                    <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        Open Live Deployment ↗
                    </a>
                ` : ''}
                ${project.documentationUrl ? `
                    <a href="${project.documentationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        Read Documentation ↗
                    </a>
                ` : ''}
            </div>
        </div>
    `;

    modal.hidden = false;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.classList.remove('active');
    setTimeout(() => {
        modal.hidden = true;
        document.body.style.overflow = '';
    }, 300);
}

// Global scope export for inline onclick handlers
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(r => observer.observe(r));
}

/* ==========================================================================
   Animated Statistics Counters
   ========================================================================== */
function initStatCounters() {
    const stats = document.querySelectorAll('.stat-number[data-count]');
    if (stats.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'), 10);
                animateCount(entry.target, target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(s => observer.observe(s));
}

function animateCount(el, target) {
    let current = 0;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, stepTime);
}

/* ==========================================================================
   Utilities
   ========================================================================== */
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
