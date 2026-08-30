// Project Data Configuration - Sourced from Real GitHub Repositories (github.com/anujthapa1)
// Single source of truth for Anuj Thapa's portfolio

const PROJECTS = [
    {
        id: 'virtual-campus-3d',
        number: '01',
        title: 'Virtual Campus 3D',
        tagline: 'Immersive 3D multiplayer college campus experience in the browser',
        category: '3D / WebGL',
        filterCategory: '3d',
        shortDescription: 'A production-grade browser-based 3D college campus built with Three.js, React 19, Node.js, and Socket.io. Students authenticate, explore campus facilities, interact in real-time, and navigate university spaces with dynamic day/night cycles.',
        fullDescription: 'Virtual Campus 3D is an immersive browser-based 3D college campus experience. Students authenticate and enter a fully explorable low-poly virtual campus containing academic buildings, a library, computer laboratories, cafeteria, administration facilities, sports areas, parking spaces, and interactive campus locations. The application combines 3D exploration, multiplayer synchronization, real-time communication, procedural animation, authentication, interactive maps, dynamic lighting, and procedural Web Audio to create an interactive virtual university environment.',
        problem: 'Traditional campus orientation and remote learning lack immersive, interactive experiences. Students need a way to explore campus facilities, connect with peers, and navigate university spaces remotely.',
        solution: 'A full-stack 3D web application featuring a procedurally generated campus with 10+ buildings, real-time multiplayer with Socket.io, JWT authentication, dynamic day/night cycles, procedural audio, and interactive navigation with minimap and fast-travel systems.',
        technologies: [
            { name: 'Three.js', category: '3d' },
            { name: 'React 19', category: 'frontend' },
            { name: 'Node.js', category: 'backend' },
            { name: 'Socket.io', category: 'realtime' },
            { name: 'Express 5', category: 'backend' },
            { name: 'PostgreSQL', category: 'database' },
            { name: 'JWT Auth', category: 'security' },
            { name: 'Web Audio API', category: 'audio' },
            { name: 'Vite', category: 'tooling' },
            { name: 'Zod', category: 'validation' }
        ],
        features: [
            '10+ interactive campus buildings (Academic Hall, CS Lab, Library, Cafeteria, Admin, Sports Complex, Courtyard)',
            'Dynamic day/night cycle with moving sun/moon, starfield, atmospheric fog, and automatic building illumination',
            '4 unique student avatar styles with procedural animation state machine (idle, walk, run, jump)',
            'Real-time multiplayer synchronization with Socket.io: position, rotation, smooth interpolation, and 3D name tags',
            'Real-time campus broadcast chat with join/leave notifications and spatial audio alerts',
            'Procedural Web Audio engine: footsteps, sprint, jump, landing, interaction chimes, and fountain ambience',
            'Radar minimap with player heading cone, campus layout, and real-time student markers',
            'Fullscreen interactive campus map with POI markers and one-click fast travel (M key / T key)',
            'JWT authentication with bcrypt password hashing, student registration, and department selection',
            'PostgreSQL database integration with in-memory development fallback and offline demo mode'
        ],
        developmentHighlights: [
            'Built custom Three.js game loop with scene management, camera controllers, and animation loop coordination',
            'Implemented collision detection with X/Z axis sliding resolution and ground height detection',
            'Created procedural campus generation with fallback to generated geometry when GLB models are unavailable',
            'Designed entity-component architecture for CampusMap, Player, and CharacterModel entities',
            'Built custom service layer for API, Socket.io, and Web Audio abstraction',
            'Implemented glassmorphism UI with React components for HUD, minimap, login modal, and settings'
        ],
        githubUrl: 'https://github.com/anujthapa1/virtual-campus-3d',
        liveDemoUrl: null,
        documentationUrl: 'https://github.com/anujthapa1/virtual-campus-3d#readme',
        image: 'images/projects/virtual-campus-3d.svg',
        featured: true,
        order: 1
    },
    {
        id: 'lpg-cylinder-management',
        number: '02',
        title: 'NOC LPG Cylinder Management System',
        tagline: 'Java Swing desktop application with robust OOP architecture & business logic',
        category: 'Java / Desktop',
        filterCategory: 'java',
        shortDescription: 'A Java Swing desktop application implementing core OOP principles to manage domestic and commercial LPG cylinder bookings, monthly quota enforcement, government subsidies, bulk discount tiers, and file persistence.',
        fullDescription: 'The NOC LPG Cylinder Management System is a desktop-based management application developed with Java Swing. The system handles LPG cylinder bookings for both domestic and commercial customers, applying business rules such as domestic purchase quotas, government subsidies, commercial bulk discounts, customer validation, and booking record management. The project demonstrates practical implementation of Object-Oriented Programming (OOP) principles together with GUI development, file handling, input validation, and business logic.',
        problem: 'LPG distributors need a reliable system to manage cylinder bookings with complex business rules including government subsidies for domestic users, quota limits, and volume discounts for commercial clients, all while maintaining accurate records.',
        solution: 'A desktop application with Swing GUI implementing abstract cylinder models, inheritance for domestic/commercial types, polymorphism for pricing calculations, encapsulation of business logic, and file-based persistence for booking records.',
        technologies: [
            { name: 'Java 21', category: 'language' },
            { name: 'Java Swing', category: 'gui' },
            { name: 'OOP Principles', category: 'architecture' },
            { name: 'Inheritance & Polymorphism', category: 'architecture' },
            { name: 'File I/O Persistence', category: 'database' },
            { name: 'Regex Validation', category: 'validation' },
            { name: 'Dynamic Method Dispatch', category: 'architecture' },
            { name: 'JTable & UI Components', category: 'gui' }
        ],
        features: [
            'Domestic cylinder management with automated Nepal government subsidy calculation (Rs. 350 deduction)',
            'Monthly purchase quota enforcement (maximum 2 domestic cylinders per Citizenship ID per month)',
            'Citizenship number validation with 12-digit standard regular expression format',
            'Commercial cylinder management with dynamic tiered volume bulk discounts (3% for 5-9, 5% for 10+)',
            'Unique Booking ID and Cylinder ID generation and duplicate detection algorithms',
            'Structured booking records with full customer identification and contact validation',
            'File persistence layer: export booking records to formatted .txt files and load historical data',
            'Interactive JTable directory for viewing, sorting, and managing all transactions',
            'Dynamic method dispatch implementing runtime polymorphism across cylinder variants'
        ],
        developmentHighlights: [
            'Applied all four OOP pillars: Abstraction (abstract cylinder base), Inheritance (Domestic/Commercial sub-classes), Polymorphism (specialized pricing calculations), and Encapsulation',
            'Implemented dynamic method dispatch for runtime polymorphism in pricing and discount calculations',
            'Built custom file persistence layer with formatted text-based storage and Java File I/O streams',
            'Created robust validation system using regular expressions for citizenship numbers and business rule enforcement',
            'Organized application into clean maintainable layers: GUI, Business Logic, Model, and Persistence'
        ],
        githubUrl: 'https://github.com/anujthapa1/LPG-Cylinder-Management',
        liveDemoUrl: null,
        documentationUrl: 'https://github.com/anujthapa1/LPG-Cylinder-Management#readme',
        image: 'images/projects/lpg-cylinder.svg',
        featured: true,
        order: 2
    },
    {
        id: 'bus-routes-advanced',
        number: '03',
        title: 'Bus Routes Advanced',
        tagline: 'Pokhara transport navigation with Google Maps API, TypeScript & Drizzle ORM',
        category: 'Web / Maps',
        filterCategory: 'maps',
        shortDescription: 'An advanced bus route management application for Pokhara, Nepal featuring Google Maps Platform integration for interactive routing, place autocomplete, waypoint visualization, and full-stack TypeScript architecture.',
        fullDescription: 'Bus Routes Advanced is a sophisticated transport management application built for Pokhara, Nepal. It features comprehensive Google Maps API integration including routing, place autocomplete, and interactive maps. The application uses a modern full-stack TypeScript architecture with separate client and server packages, shared types, Drizzle ORM for database management, and Vite for frontend tooling.',
        problem: 'Public transport in Pokhara lacks a modern digital interface for route discovery, fare calculation, and real-time navigation. Commuters need an intuitive way to plan journeys and understand the bus network.',
        solution: 'A full-stack TypeScript application with Google Maps Platform integration providing interactive route visualization, place search with autocomplete, fare calculation, and a responsive web interface for both desktop and mobile.',
        technologies: [
            { name: 'TypeScript', category: 'language' },
            { name: 'Google Maps API', category: 'maps' },
            { name: 'React', category: 'frontend' },
            { name: 'Drizzle ORM', category: 'database' },
            { name: 'Node.js & Express', category: 'backend' },
            { name: 'Vite', category: 'tooling' },
            { name: 'pnpm Workspaces', category: 'tooling' },
            { name: 'Tailwind CSS', category: 'styling' }
        ],
        features: [
            'Google Maps Platform integration with Directions API and interactive route rendering',
            'Google Places Autocomplete for swift origin and destination search across Pokhara',
            'Interactive waypoint visualization mapping key hubs (Lakeside, Zero KM, Prithvi Chowk, Baglung Buspark)',
            'Full-stack TypeScript architecture with shared type definitions across client and server packages',
            'Drizzle ORM for type-safe database queries and automated schema migrations',
            'Modern Vite + React frontend with optimized asset bundling and HMR',
            'Clean monorepo structure with client, server, and shared package separation',
            'GitHub Actions CI/CD automated pipeline configuration'
        ],
        developmentHighlights: [
            'Monorepo architecture with client, server, and shared type definitions',
            'Type-safe database layer with Drizzle ORM and shared schema models',
            'Deep Google Maps Platform integration with custom dark theme overlays and waypoint markers',
            'Configured pnpm workspaces for fast, efficient dependency management',
            'Production-ready build pipeline with Vite, TypeScript compiler, and ESLint'
        ],
        githubUrl: 'https://github.com/anujthapa1/bus_routes_advanced',
        liveDemoUrl: null,
        documentationUrl: 'https://github.com/anujthapa1/bus_routes_advanced#readme',
        image: 'images/projects/bus-routes-advanced.svg',
        featured: true,
        order: 3
    },
    {
        id: 'bus-routes',
        number: '04',
        title: 'Bus Routes — Nepal Public Transport Hub',
        tagline: 'Open-source map, DoTM scientific fare calculator & legal discount guide for Nepal',
        category: 'Web / Maps',
        filterCategory: 'maps',
        shortDescription: 'An open-source web platform mapping local bus routes in Nepal with interactive route tracking, a scientific fare calculator based on DoTM rates, and a legal guide to 45% student & 50% senior/disability discounts.',
        fullDescription: 'Nepal Local Bus & Fare Guide is an open-source web platform designed to map local bus routes in Nepal, provide real-time fare calculations, and document legal discount rights for citizens. The project bridges the gap between official transport laws and daily commuters by providing an accessible interface for route discovery, fare calculation, and legal rights awareness.',
        problem: 'Nepal commuters lack access to accurate bus route information, transparent fare calculations, and awareness of their legal discount rights. Official transport data is fragmented and difficult to access.',
        solution: 'A Next.js web application providing interactive route mapping for major cities (Kathmandu Valley, Pokhara), a fare calculator using government-mandated scientific rates, and a comprehensive legal guide referencing the Senior Citizens Act 2063, Rights of Persons with Disabilities Act 2074, and DoTM Fare Directives.',
        technologies: [
            { name: 'TypeScript', category: 'language' },
            { name: 'Next.js', category: 'frontend' },
            { name: 'React', category: 'frontend' },
            { name: 'Tailwind CSS', category: 'styling' },
            { name: 'Maps API', category: 'maps' },
            { name: 'ESLint', category: 'tooling' }
        ],
        features: [
            'Interactive route mapper for major local bus routes (Kathmandu Valley, Pokhara network)',
            'Scientific fare calculator implementing government-mandated DoTM rates per kilometer',
            'Discount rights navigator explaining mandatory 45% student and 50% senior/disability concessions',
            'Direct legal references to Senior Citizens Act 2063, Disabilities Act 2074, and DoTM directives',
            'Citizen legal support guide with direct emergency hotline links (103 Traffic Police, 1148 Helpline)',
            'Community-driven crowdsourcing system allowing citizens to report route updates and new stops',
            'Fully responsive mobile-first interface optimized for commuters on mobile networks'
        ],
        developmentHighlights: [
            'Integrated official government fare formulas into an automated instant calculation engine',
            'Built structured legal reference cards linking directly to official Nepal legislative gazettes',
            'Implemented community crowdsourced data submission workflow for keeping bus routes up to date',
            'Leveraged Next.js SSR/SSG for lightning-fast initial page loads and optimal SEO'
        ],
        githubUrl: 'https://github.com/anujthapa1/bus_routes',
        liveDemoUrl: null,
        documentationUrl: 'https://github.com/anujthapa1/bus_routes#readme',
        image: 'images/projects/bus-routes.svg',
        featured: true,
        order: 4
    },
    {
        id: 'pgp',
        number: '05',
        title: 'Pabitra Ganesh Suppliers — Delivery Platform',
        tagline: 'Dispatcher & driver logistics operations with live GPS tracking & PWA',
        category: 'Web / PWA',
        filterCategory: 'pwa',
        shortDescription: 'A dispatcher and driver operations platform featuring dual role-based portals, simulated real-time driver GPS tracking, proof-of-delivery (photo + signature), automated multi-channel webhook notifications, and PWA support.',
        fullDescription: 'PGP (Pabitra Ganesh Suppliers) is a comprehensive delivery management platform with two role-based login portals: a Dispatcher portal for 5 staff accounts and a Driver portal for 15 driver accounts. The system includes customer order forms, standard auto-dispatch to least-busy drivers, real-time simulated live driver tracking on customer map view, dispatch-driver built-in chat, driver payment calculation dashboard, proof-of-delivery with photo and signature, historical order reports, notification history, instant customer feedback collection, and mobile installable PWA behavior.',
        problem: 'Small-to-medium logistics operations lack affordable, feature-rich delivery management software with real-time tracking, multi-role access, and customer communication workflows.',
        solution: 'A React + Vite + TypeScript PWA with role-based authentication, real-time driver tracking via simulated GPS, integrated chat, proof-of-delivery capture (photo + signature), automated customer notifications (email/SMS/WhatsApp via webhook/gateway), driver payment dashboards, and offline-capable PWA with service worker.',
        technologies: [
            { name: 'TypeScript', category: 'language' },
            { name: 'React', category: 'frontend' },
            { name: 'Vite', category: 'tooling' },
            { name: 'Tailwind CSS', category: 'styling' },
            { name: 'PWA & Service Worker', category: 'platform' },
            { name: 'Webhook Architecture', category: 'backend' },
            { name: 'Resend API', category: 'email' },
            { name: 'Twilio SMS/WA', category: 'notifications' }
        ],
        features: [
            'Two distinct role portals: Dispatcher hub (5 staff accounts) and Driver app (15 driver accounts)',
            'Auto-dispatch algorithm dynamically allocating incoming orders to least-busy active drivers',
            'Real-time simulated live GPS tracking on customer delivery tracker map view',
            'Integrated real-time dispatcher-to-driver messaging chat channel',
            'Digital Proof-of-Delivery (POD) workflow: photo camera upload and digital signature pad capture',
            'Multi-channel webhook notification system: Email (Resend), SMS & WhatsApp (Twilio), Slack webhooks',
            'Driver earnings & payout calculation dashboard with complete order history and stats',
            'Post-delivery instant customer rating and feedback collection workflow',
            'Progressive Web App (PWA) with manifest and service worker for mobile installation and offline caching',
            'GitHub Pages single-page application (SPA) deep linking with 404.html routing fallback'
        ],
        developmentHighlights: [
            'Engineered dual-role authentication system with pre-configured accounts (DISP-100..104, DRV-100..114)',
            'Built real-time GPS simulation engine with smooth vehicle interpolation along route vectors',
            'Architected modular webhook pipeline supporting Resend, Twilio, and Slack with local logging fallback',
            'Implemented custom HTML5 canvas signature capture pad and camera file input handlers',
            'Configured PWA service workers for offline caching and home screen install banners'
        ],
        githubUrl: 'https://github.com/anujthapa1/pgp',
        liveDemoUrl: null,
        documentationUrl: 'https://github.com/anujthapa1/pgp#readme',
        image: 'images/projects/pgp.svg',
        featured: true,
        order: 5
    },
    {
        id: 'buss',
        number: '06',
        title: 'Bus Routes (Legacy Prototype)',
        tagline: 'Initial React + Vite bus route visualization exploration',
        category: 'Web / Maps',
        filterCategory: 'maps',
        shortDescription: 'An early prototype exploring bus route visualization using React, Vite, and Tailwind CSS. Represented the initial research spike that led to the bus_routes and bus_routes_advanced platforms.',
        fullDescription: 'An early prototype exploring bus route visualization using React, Vite, and Tailwind CSS. This repository represents the initial exploration phase before the more advanced bus_routes and bus_routes_advanced projects.',
        problem: 'Need for a simple, rapid prototype to benchmark map rendering performance and component architecture.',
        solution: 'Minimal React + Vite setup with Tailwind CSS for rapid prototyping of route rendering and UI layouts.',
        technologies: [
            { name: 'JavaScript', category: 'language' },
            { name: 'React', category: 'frontend' },
            { name: 'Vite', category: 'tooling' },
            { name: 'Tailwind CSS', category: 'styling' }
        ],
        features: [
            'Lightweight React + Vite fast refresh development environment',
            'Tailwind CSS utility styling layout experiments',
            'Route state management spike testing interactive selection',
            'Served as foundational architectural discovery for bus_routes'
        ],
        developmentHighlights: [
            'Benchmarked frontend tooling and fast refresh response times',
            'Established the modular UI component patterns reused in subsequent production projects'
        ],
        githubUrl: 'https://github.com/anujthapa1/buss',
        liveDemoUrl: null,
        documentationUrl: null,
        image: 'images/projects/buss.svg',
        featured: false,
        order: 6
    },
    {
        id: 'cvanuj',
        number: '07',
        title: 'CVanuj — This Portfolio Website',
        tagline: 'High-performance, zero-dependency personal portfolio & CV',
        category: 'Web / Portfolio',
        filterCategory: 'portfolio',
        shortDescription: 'The source code of this portfolio. Built with semantic HTML5, modern CSS3 (custom properties, grid, flexbox, glassmorphism), and vanilla JavaScript with zero external runtime dependencies.',
        fullDescription: 'CVanuj is the source code for this very portfolio website. A clean, responsive online CV showcasing academic background, skills, services, and contact information. Built with semantic HTML, modern CSS (custom properties, flexbox, grid), and vanilla JavaScript for interactions including mobile navigation, scroll animations, dynamic GitHub project rendering, and accessible modals.',
        problem: 'Need for a personal developer portfolio that is ultra-fast, zero-dependency, fully accessible, and cleanly showcases verified GitHub repositories.',
        solution: 'Vanilla HTML5/CSS3/JavaScript implementation featuring dynamic project modal case studies, category filters, interactive tech stack, GitHub profile stats, and responsive dark aesthetics.',
        technologies: [
            { name: 'HTML5 Semantic', category: 'language' },
            { name: 'Modern CSS3', category: 'styling' },
            { name: 'Vanilla JavaScript', category: 'language' },
            { name: 'CSS Custom Properties', category: 'styling' },
            { name: 'Intersection Observer', category: 'api' },
            { name: 'JSON-LD Schema', category: 'seo' }
        ],
        features: [
            'Dynamic case-study rendering directly from verified GitHub project configurations',
            'Interactive project category filtering with smooth transitions',
            'Accessible modal case-study overlay with keyboard focus trap and ESC support',
            'Interactive tech stack section with categorized technology badges',
            'Live GitHub profile integration with star counts and repository stats',
            'Interactive radial cursor glow and smooth scroll animations',
            'Zero external JS libraries — 100 Lighthouse performance score',
            'Complete SEO suite with OpenGraph, Twitter Card, and Schema.org Person JSON-LD'
        ],
        developmentHighlights: [
            'Engineered without bulky frameworks for maximum portability and instant page loads',
            'Modular data layer decoupling project information from presentation markup',
            'Intersection Observer API for efficient scroll reveals and number counters',
            'Mobile-first responsive design tested across all viewport dimensions'
        ],
        githubUrl: 'https://github.com/anujthapa1/cvanuj',
        liveDemoUrl: 'https://thapaanuj.com.np',
        documentationUrl: null,
        image: 'images/projects/cvanuj.svg',
        featured: false,
        order: 7
    }
];

// Derived categories & technology filters
const CATEGORIES = [
    { id: 'all', label: 'All Projects' },
    { id: '3d', label: '3D / WebGL' },
    { id: 'java', label: 'Java / Desktop' },
    { id: 'maps', label: 'Web / Maps' },
    { id: 'pwa', label: 'Web / PWA' }
];

const ALL_TECHNOLOGIES = [...new Set(PROJECTS.flatMap(p => p.technologies.map(t => t.name)))].sort();
const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured).sort((a, b) => a.order - b.order);
const ALL_PROJECTS = [...PROJECTS].sort((a, b) => a.order - b.order);

// Verified GitHub Profile Info (github.com/anujthapa1)
const GITHUB_PROFILE = {
    username: 'anujthapa1',
    name: 'Anuj Thapa',
    url: 'https://github.com/anujthapa1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/120799096?v=4',
    bio: 'BSc (Hons) Computing Student | Aspiring Software Developer',
    location: 'Pokhara, Nepal',
    website: 'https://thapaanuj.com.np/',
    publicRepos: 8,
    followers: 1,
    following: 0,
    stars: 58,
    achievements: ['Pull Shark x2', 'Pair Extraordinaire x2', 'YOLO'],
    topLanguages: [
        { name: 'TypeScript', percent: 38, color: '#3178c6' },
        { name: 'JavaScript / 3D', percent: 28, color: '#f7df1e' },
        { name: 'Java', percent: 20, color: '#b07219' },
        { name: 'CSS / HTML', percent: 14, color: '#563d7c' }
    ]
};

// Verified Contact Information
const CONTACT = {
    email: 'thapapabitraanuj@gmail.com',
    phone: '+977 9865117237',
    location: 'Simpani, Pokhara, Nepal',
    github: 'https://github.com/anujthapa1',
    linkedin: 'https://linkedin.com/in/anujthapa444',
    instagram: 'https://instagram.com/anujthapa444'
};

// Categorized Tech Stack based on GitHub Repositories
const SKILLS = {
    languages: [
        { name: 'TypeScript', level: 'Advanced', desc: 'Full-stack apps, Next.js, strict typing, Drizzle ORM' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', desc: 'Three.js, React, Node.js, Web Audio, Socket.io' },
        { name: 'Java', level: 'Intermediate', desc: 'Java 21, Swing GUI, OOP architecture, File I/O' },
        { name: 'Python', level: 'Intermediate', desc: 'Scripting, backend logic, data processing' },
        { name: 'HTML5 & CSS3', level: 'Expert', desc: 'Semantic markup, custom properties, animations' }
    ],
    frontend: [
        { name: 'React 19 / 18', desc: 'Component architecture, hooks, state machines, JSX' },
        { name: 'Three.js / WebGL', desc: '3D scenes, cameras, lighting, low-poly procedural worlds' },
        { name: 'Next.js', desc: 'Server-side rendering, static generation, API routes' },
        { name: 'Tailwind CSS', desc: 'Modern responsive utility layouts & glassmorphism' },
        { name: 'Vite', desc: 'Blazing-fast build tooling and HMR pipelines' },
        { name: 'Java Swing', desc: 'Desktop GUI development, JFrame, JTable, event handlers' }
    ],
    backend: [
        { name: 'Node.js & Express', desc: 'REST APIs, middleware, routing, service layers' },
        { name: 'Socket.io', desc: 'Real-time bidirectional multiplayer & chat synchronization' },
        { name: 'JWT & Bcrypt', desc: 'Secure authentication, token verification, password hashing' },
        { name: 'Web Audio API', desc: 'Procedural sound synthesis, spatial audio, sound effects' },
        { name: 'Google Maps API', desc: 'Directions API, Places Autocomplete, custom map styling' },
        { name: 'PWA & Service Workers', desc: 'Offline caching, background sync, web manifest' }
    ],
    databases: [
        { name: 'PostgreSQL', desc: 'Relational data modeling, queries, indexing' },
        { name: 'Drizzle ORM', desc: 'Type-safe database schemas, TypeScript migrations' },
        { name: 'MySQL', desc: 'Relational database administration and query design' },
        { name: 'File-based Persistence', desc: 'Formatted stream I/O, text serialization, backup files' }
    ],
    tools: [
        { name: 'Git & GitHub', desc: 'Version control, branches, PRs, monorepos, GitHub Actions' },
        { name: 'pnpm / npm', desc: 'Dependency management, workspace monorepo management' },
        { name: 'ESLint & Prettier', desc: 'Static code analysis, code standards enforcement' },
        { name: 'VS Code', desc: 'Primary development IDE with extensions & debugger setup' }
    ],
    core: [
        { name: 'OOP Principles', desc: 'Abstraction, Inheritance, Polymorphism, Encapsulation' },
        { name: 'Cybersecurity Awareness', desc: 'Secure auth, input validation, defense-in-depth' },
        { name: 'SEO & Structured Data', desc: 'JSON-LD Schema, OpenGraph, Core Web Vitals' },
        { name: 'Digital Strategy & Tech', desc: 'System analysis, digital marketing, user conversion' }
    ]
};

// Technical Case Studies & Articles
const ARTICLES = [
    {
        id: 'virtual-campus-architecture',
        title: 'Architecting a Multiplayer 3D Virtual Campus with Three.js, React 19 & Socket.io',
        tagline: 'Deep dive into real-time WebGL synchronization, procedural collision detection, and spatial Web Audio in the browser.',
        date: 'Aug 2026',
        readTime: '6 min read',
        category: '3D Graphics & Networking',
        tags: ['Three.js', 'React 19', 'Socket.io', 'Web Audio API', 'Node.js'],
        summary: 'How we engineered a production 3D university environment in the browser with real-time positional interpolation, custom entity management, and low-latency multiplayer chat.',
        content: `
            <h3>1. The Architectural Challenge</h3>
            <p>Building a 3D multiplayer university environment in the web browser introduces two distinct performance constraints: maintaining 60 FPS rendering on consumer hardware and synchronizing avatar vectors across multiple clients with minimal network latency.</p>

            <h3>2. Entity-Component Coordinate Synchronization</h3>
            <p>Rather than coupling Three.js objects directly into React component state cycles (which causes costly re-renders), the system utilizes a dedicated game loop manager. React coordinates the high-level HUD overlays (Minimap, Chat, Login modal) while the Three.js render loop updates positions and collisions on animation frames.</p>

            <pre><code>// Linear interpolation (Lerp) for smooth player movement
function updateRemotePlayer(playerEntity, targetPosition, targetRotation, delta) {
    playerEntity.position.lerp(targetPosition, delta * 12.0);
    playerEntity.quaternion.slerp(targetRotation, delta * 10.0);
}</code></pre>

            <h3>3. Procedural Audio Synthesis</h3>
            <p>To eliminate heavy MP3 asset download payloads, sound effects (footsteps, teleportation chimes, fountain ambience) are synthesized dynamically at runtime using the Web Audio API with custom oscillator and biquad filter nodes.</p>

            <h3>4. Key Takeaways</h3>
            <ul>
                <li>Decouple UI state from 3D animation loops to maintain consistent 60 FPS frame rates.</li>
                <li>Employ vector quantization and dead reckoning over WebSockets to save client bandwidth.</li>
                <li>Utilize procedural geometry and audio synthesis to achieve sub-second initial load times.</li>
            </ul>
        `
    },
    {
        id: 'java-oop-lpg-design',
        title: 'Applying OOP Design Patterns in Java Swing for Desktop Quota Management',
        tagline: 'Implementing abstraction, dynamic method dispatch, and robust regex validation for municipal distribution.',
        date: 'Aug 2026',
        readTime: '5 min read',
        category: 'Software Architecture',
        tags: ['Java 21', 'Java Swing', 'OOP Principles', 'File I/O', 'Regex'],
        summary: 'A look into structuring a clean multi-layered Java Swing desktop application applying runtime polymorphism for government subsidies and commercial bulk discounts.',
        content: `
            <h3>1. The Domain Model &amp; Business Rules</h3>
            <p>The NOC LPG Cylinder Management System governs two distinct customer profiles: domestic households (eligible for government subsidies subject to a 2-unit monthly quota per citizenship ID) and commercial enterprises (entitled to tiered bulk volume discounts).</p>

            <h3>2. Inheritance &amp; Dynamic Method Dispatch</h3>
            <p>By establishing an abstract base class <code>CylinderBooking</code>, domestic and commercial variants implement polymorphic pricing behaviors dynamically evaluated at runtime:</p>

            <pre><code>public abstract class CylinderBooking {
    protected String bookingId;
    protected String customerId;
    protected double basePrice;

    public abstract double calculatePayableAmount();
}

public class DomesticBooking extends CylinderBooking {
    private static final double GOV_SUBSIDY = 350.0;
    
    @Override
    public double calculatePayableAmount() {
        return Math.max(0, this.basePrice - GOV_SUBSIDY);
    }
}</code></pre>

            <h3>3. Validation Engine &amp; File Persistence</h3>
            <p>Customer citizenship identification numbers are strictly validated through regular expressions (<code>^\\d{2}-\\d{2}-\\d{2}-\\d{6}$</code>) to prevent invalid allocations, and transaction ledgers are persisted using structured file streams for audit integrity.</p>
        `
    },
    {
        id: 'dotm-bus-routes-nepal',
        title: 'Building Scientific Bus Route & Fare Engines with DoTM Legal Compliance',
        tagline: 'Engineering transparent public transit calculators and legal rights awareness platforms for commuters in Nepal.',
        date: 'Aug 2026',
        readTime: '5 min read',
        category: 'Civic Technology',
        tags: ['Next.js', 'TypeScript', 'Google Maps API', 'Civic Tech', 'Tailwind CSS'],
        summary: 'How open-source software bridges the gap between government transport directives and daily bus commuters in Pokhara and Kathmandu Valley.',
        content: `
            <h3>1. The Commuter Dilemma in Nepal</h3>
            <p>Public transportation fares across Nepal are officially regulated by the Department of Transport Management (DoTM). However, scientific distance rates are rarely displayed clearly to passengers, leading to arbitrary pricing and unlawful denials of mandatory 45% student and 50% senior/disability concessions.</p>

            <h3>2. Automated Calculation Engine</h3>
            <p>The application takes coordinate waypoints across local routes, calculates precise travel distances via the Directions API, and applies the official stepwise scientific rate formula:</p>

            <pre><code>export function calculateScientificFare(distanceKm: number, discountType: 'regular' | 'student' | 'senior'): number {
    const baseFare = 20; // First 0-4 KM
    let fare = distanceKm <= 4 ? baseFare : baseFare + (distanceKm - 4) * 2.5;
    
    if (discountType === 'student') return Math.round(fare * 0.55); // 45% discount
    if (discountType === 'senior') return Math.round(fare * 0.50);  // 50% discount
    return Math.round(fare);
}</code></pre>

            <h3>3. Direct Legal Safeguards</h3>
            <p>The platform embeds direct references to the Senior Citizens Act 2063 and Disabilities Act 2074 with one-tap emergency contacts for traffic police (103) and national helplines (1148).</p>
        `
    },
    {
        id: 'zero-dependency-web-performance',
        title: 'Zero-Dependency Web Engineering: Achieving 100 Lighthouse Performance Scores',
        tagline: 'Crafting modern, accessible, and fast web portfolios without framework bloat.',
        date: 'Aug 2026',
        readTime: '4 min read',
        category: 'Web Performance',
        tags: ['Web Standards', 'Vanilla JavaScript', 'CSS Variables', 'SEO', 'Performance'],
        summary: 'Techniques for building production web experiences with sub-50ms paint times, custom properties theming, and intersection observer pipelines.',
        content: `
            <h3>1. The Cost of Framework Overhead</h3>
            <p>Modern developer portfolios frequently bundle 200KB+ of JavaScript frameworks just to render static cards and handle simple click interactions. This increases Time-to-Interactive (TTI) and First Input Delay (FID), especially on mobile networks.</p>

            <h3>2. Modern CSS as an Engine</h3>
            <p>By leveraging CSS Custom Properties, CSS Grid, and hardware-accelerated animations (<code>transform</code> and <code>opacity</code>), we achieve fluid responsiveness and instant dark/light theme switching with zero JavaScript layout thrashing.</p>

            <h3>3. IntersectionObserver Pipeline</h3>
            <p>All scroll reveals, number counters, and background animations operate asynchronously through a unified <code>IntersectionObserver</code>, releasing main-thread execution when elements are outside the viewport.</p>
        `
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROJECTS, CATEGORIES, ALL_TECHNOLOGIES, FEATURED_PROJECTS, ALL_PROJECTS, GITHUB_PROFILE, CONTACT, SKILLS, ARTICLES };
}