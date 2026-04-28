/* ============================================================
   Tiago Garrel — Portfolio
   app.js: translations, dynamic rendering, interactivity
   ============================================================ */

'use strict';

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      blog: 'Blog',
      contact: 'Contact',
    },

    hero: {
      greeting: "Hi, I'm",
      roles: ['Data Professional', 'Data Engineer', 'Analytics Enthusiast', 'Problem Solver'],
      subtitle: 'Bridging operations and data engineering to build solutions that actually work in the real world.',
      cta_projects: 'View Projects',
      cta_cv: 'Download CV',
    },

    about: {
      section_title: 'About Me',
      bio1: 'Data-driven professional with a background in production engineering, currently completing a Master\'s in Big Data & Analytics at EAE Business School, Barcelona. Experienced in designing data pipelines and analytics solutions that turn complex datasets into actionable insights — proficient in Python, SQL, and cloud-based tools.',
      bio2: 'My edge comes from combining hands-on operational experience with data engineering skills. I understand not just how to build data solutions, but how they need to perform in real-world production environments. That context makes all the difference.',
      stat1_value: '3+',
      stat1_label: 'Years of Experience',
      stat2_value: '4',
      stat2_label: 'Major Projects',
      stat3_value: '12+',
      stat3_label: 'Technologies',
    },

    experience: {
      section_title: 'Experience',
      items: [
        {
          title: 'Competition Insights Analyst',
          company: 'eDreams ODIGEO',
          location: 'Barcelona, Spain',
          period: 'Nov 2025 – Feb 2026',
          bullets: [
            'Performed competitive and market analysis for multiple business teams using Google\'s data ecosystem (BigQuery, Looker, Google Sheets).',
            'Designed and developed Python-based operational tools that automated workflows and increased efficiency across teams.',
            'Collaborated with cross-functional stakeholders to interpret data and propose improvements aligned with strategic objectives.',
          ],
        },
        {
          title: 'Data & Operations Analyst',
          company: 'Ártico',
          location: 'Canelones, Uruguay',
          period: 'Nov 2022 – Jun 2024',
          bullets: [
            'Directed the company-wide implementation of a Transportation Management System (TMS), coordinating cross-departmental efforts and ensuring on-time delivery.',
            'Developed Python algorithms for automated analysis and optimisation of warehouse slotting for 1,000+ SKUs.',
            'Analysed supply-chain operations and designed tools to manage complex networks of suppliers, warehouses, and clients.',
            'Created Power BI dashboards that streamlined decision-making and enhanced operational visibility across teams.',
          ],
        },
        {
          title: 'Supervisor',
          company: 'Mayohogar',
          location: 'Montevideo, Uruguay',
          period: 'Feb 2022 – Oct 2022',
          bullets: [
            'Managed and supervised personnel, boosting team productivity and operational efficiency.',
            'Streamlined warehouse operations, optimising space utilisation and inventory management processes.',
          ],
        },
        {
          title: 'Co-founder',
          company: 'UnMonton Board Games',
          location: 'Uruguay',
          period: '2019 – 2021',
          bullets: [
            'Co-developed and launched a board-game brand, handling game design, prototyping, production, and marketing.',
            'Managed the end-to-end product lifecycle from industrial printing to sales and customer engagement.',
            'Sustained the business for two years through effective community building and digital marketing.',
          ],
        },
      ],
    },

    projects: {
      section_title: 'Projects',
      github_label: 'View on GitHub',
      items: [
        {
          title: 'Daily Sales ETL Pipeline',
          description: 'Modular ETL pipeline to process and load sales, weather, and zipcode data into a MySQL warehouse — with automated cleaning, enrichment, and idempotent loading.',
          tags: ['Python', 'MySQL', 'ETL', 'Pandas'],
          github: 'https://github.com/tiagogarrel',
        },
        {
          title: 'Call Center Performance Optimisation',
          description: 'AI-powered conversational analytics system on AWS using LLMs to extract insights from call transcripts and improve performance metrics such as AHT and FCR.',
          tags: ['Python', 'AWS', 'LLMs', 'NLP'],
          github: 'https://github.com/tiagogarrel',
          badge: 'In Development',
        },
        {
          title: 'Coffee Big Data Project',
          description: 'End-to-end data pipeline: simulated sales data stored in PostgreSQL, interactive Power BI dashboards, and predictive models (Random Forest, LightGBM) orchestrated with Airflow.',
          tags: ['Python', 'PostgreSQL', 'Power BI', 'Airflow', 'ML'],
          github: 'https://github.com/tiagogarrel',
        },
        {
          title: 'Screen Time Tracker',
          description: 'Streamlit application to track and analyse daily screen time with automated metrics and visualisations, using Google Sheets as a lightweight backend.',
          tags: ['Python', 'Streamlit', 'Google Sheets'],
          github: 'https://github.com/tiagogarrel',
        },
      ],
    },

    skills: {
      section_title: 'Skills',
      categories: [
        { name: 'Languages & Tools',       items: ['Python', 'SQL', 'Git', 'Docker', 'Linux'] },
        { name: 'Data & Analytics',        items: ['BigQuery', 'Looker', 'Power BI', 'Pandas', 'NumPy', 'Matplotlib'] },
        { name: 'Engineering & Databases', items: ['ETL/ELT Pipelines', 'Data Modelling', 'Airflow', 'SQLAlchemy', 'MySQL', 'PostgreSQL'] },
        { name: 'Cloud & ML',              items: ['Google Cloud', 'AWS', 'Scikit-learn', 'LightGBM', 'Streamlit'] },
      ],
    },

    education: {
      section_title: 'Education',
      items: [
        {
          degree: "Master's in Big Data & Analytics",
          school: 'EAE Business School',
          location: 'Barcelona, Spain',
          period: 'Oct 2025 – Jul 2026',
          badge: 'In Progress',
          note: null,
        },
        {
          degree: "Bachelor's in Production Engineering",
          school: 'Universidad de la República',
          location: 'Montevideo, Uruguay',
          period: '2019 – 2023',
          badge: null,
          note: 'Thesis: Optimisation of Routes in Frozen Goods Distribution — Mathematical model achieving results superior to commercial software. Grade: 100% · Presented at the XXII South American Conference of Industrial, Production and Mechanical Engineering.',
        },
      ],
    },

    certifications: {
      section_title: 'Certifications',
      items: [
        { name: 'Databricks Fundamentals Learning Plan',          issuer: 'Databricks' },
        { name: 'Agent Evaluation on Databricks',                 issuer: 'Databricks' },
        { name: 'Data Modelling, Transformation & Serving',       issuer: 'DeepLearning.AI · Coursera' },
        { name: 'IBM Project Manager Professional Certificate',   issuer: 'IBM' },
        { name: 'Certificate in Proficiency English (C2)',        issuer: 'Cambridge University' },
        { name: 'Python for Data Science & Machine Learning',     issuer: 'Udemy' },
        { name: 'Microsoft Power BI Desktop for BI',             issuer: 'Udemy' },
        { name: 'The Complete SQL Bootcamp',                      issuer: 'Udemy' },
      ],
    },

    blog: {
      section_title: 'Blog',
      subtitle: 'Thoughts on data engineering, analytics, and the intersection of operations and data.',
      coming_soon: 'Posts coming soon. Stay tuned.',
    },

    contact: {
      section_title: 'Get in Touch',
      subtitle: 'Interested in working together or just want to talk data? Feel free to reach out.',
      email_label: 'Email',
      linkedin_label: 'LinkedIn',
      github_label: 'GitHub',
    },
  },

  // ----------------------------------------------------------
  es: {
    nav: {
      about: 'Sobre Mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      blog: 'Blog',
      contact: 'Contacto',
    },

    hero: {
      greeting: 'Hola, soy',
      roles: ['Data Professional', 'Data Engineer', 'Analista de Datos', 'Problem Solver'],
      subtitle: 'Conectando operaciones e ingeniería de datos para construir soluciones que funcionan en el mundo real.',
      cta_projects: 'Ver Proyectos',
      cta_cv: 'Descargar CV',
    },

    about: {
      section_title: 'Sobre Mí',
      bio1: 'Profesional orientado a datos con background en ingeniería de producción, actualmente cursando un Máster en Big Data & Analytics en EAE Business School, Barcelona. Especializado en diseñar pipelines de datos y soluciones analíticas que convierten datasets complejos en insights accionables.',
      bio2: 'Mi diferencial viene de combinar experiencia operacional real con habilidades de ingeniería de datos. Entiendo no solo cómo construir soluciones de datos, sino cómo deben funcionar en entornos de producción reales. Ese contexto marca toda la diferencia.',
      stat1_value: '3+',
      stat1_label: 'Años de Experiencia',
      stat2_value: '4',
      stat2_label: 'Proyectos Principales',
      stat3_value: '12+',
      stat3_label: 'Tecnologías',
    },

    experience: {
      section_title: 'Experiencia',
      items: [
        {
          title: 'Analista de Inteligencia Competitiva',
          company: 'eDreams ODIGEO',
          location: 'Barcelona, España',
          period: 'Nov 2025 – Feb 2026',
          bullets: [
            'Realicé análisis competitivos y de mercado para múltiples equipos de negocio usando el ecosistema de datos de Google (BigQuery, Looker, Google Sheets).',
            'Diseñé y desarrollé herramientas operacionales en Python que automatizaron flujos de trabajo y aumentaron la eficiencia.',
            'Colaboré con equipos multidisciplinarios para interpretar datos y proponer mejoras alineadas con objetivos estratégicos.',
          ],
        },
        {
          title: 'Analista de Datos y Operaciones',
          company: 'Ártico',
          location: 'Canelones, Uruguay',
          period: 'Nov 2022 – Jun 2024',
          bullets: [
            'Dirigí la implementación corporativa de un Sistema de Gestión de Transporte (TMS), coordinando esfuerzos entre departamentos y garantizando la entrega en tiempo.',
            'Desarrollé algoritmos en Python para análisis automatizado y optimización del slotting de almacén para más de 1.000 SKUs.',
            'Analicé operaciones de cadena de suministro y diseñé herramientas para gestionar redes complejas de proveedores, almacenes y clientes.',
            'Creé dashboards en Power BI que agilizaron la toma de decisiones y mejoraron la visibilidad operacional entre equipos.',
          ],
        },
        {
          title: 'Supervisor',
          company: 'Mayohogar',
          location: 'Montevideo, Uruguay',
          period: 'Feb 2022 – Oct 2022',
          bullets: [
            'Gestioné y supervisé personal, mejorando la productividad del equipo y la eficiencia operacional.',
            'Optimicé operaciones de almacén, mejorando la utilización del espacio y los procesos de gestión de inventarios.',
          ],
        },
        {
          title: 'Co-fundador',
          company: 'UnMonton Board Games',
          location: 'Uruguay',
          period: '2019 – 2021',
          bullets: [
            'Co-desarrollé y lancé una marca de juegos de mesa, gestionando diseño, prototipado, producción y marketing.',
            'Manejé el ciclo de vida completo del producto, desde la impresión industrial hasta las ventas y la comunidad.',
            'Sostuve el negocio durante dos años mediante construcción de comunidad y marketing digital efectivo.',
          ],
        },
      ],
    },

    projects: {
      section_title: 'Proyectos',
      github_label: 'Ver en GitHub',
      items: [
        {
          title: 'Pipeline ETL de Ventas Diarias',
          description: 'Pipeline ETL modular para procesar y cargar datos de ventas, clima y códigos postales en un warehouse MySQL, con limpieza automatizada, enriquecimiento y carga idempotente.',
          tags: ['Python', 'MySQL', 'ETL', 'Pandas'],
          github: 'https://github.com/tiagogarrel',
        },
        {
          title: 'Optimización de Call Center',
          description: 'Sistema de analítica conversacional con IA en AWS usando LLMs para extraer insights de transcripciones de llamadas y mejorar métricas de rendimiento como AHT y FCR.',
          tags: ['Python', 'AWS', 'LLMs', 'NLP'],
          github: 'https://github.com/tiagogarrel',
          badge: 'En Desarrollo',
        },
        {
          title: 'Proyecto Big Data de Café',
          description: 'Pipeline de datos end-to-end: datos de ventas simulados en PostgreSQL, dashboards interactivos en Power BI y modelos predictivos (Random Forest, LightGBM) orquestados con Airflow.',
          tags: ['Python', 'PostgreSQL', 'Power BI', 'Airflow', 'ML'],
          github: 'https://github.com/tiagogarrel',
        },
        {
          title: 'Screen Time Tracker',
          description: 'Aplicación en Streamlit para rastrear y analizar el tiempo de pantalla diario con métricas automatizadas y visualizaciones, usando Google Sheets como backend liviano.',
          tags: ['Python', 'Streamlit', 'Google Sheets'],
          github: 'https://github.com/tiagogarrel',
        },
      ],
    },

    skills: {
      section_title: 'Habilidades',
      categories: [
        { name: 'Lenguajes y Herramientas',     items: ['Python', 'SQL', 'Git', 'Docker', 'Linux'] },
        { name: 'Datos y Analítica',            items: ['BigQuery', 'Looker', 'Power BI', 'Pandas', 'NumPy', 'Matplotlib'] },
        { name: 'Ingeniería y Bases de Datos',  items: ['Pipelines ETL/ELT', 'Modelado de Datos', 'Airflow', 'SQLAlchemy', 'MySQL', 'PostgreSQL'] },
        { name: 'Cloud y ML',                   items: ['Google Cloud', 'AWS', 'Scikit-learn', 'LightGBM', 'Streamlit'] },
      ],
    },

    education: {
      section_title: 'Educación',
      items: [
        {
          degree: 'Máster en Big Data & Analytics',
          school: 'EAE Business School',
          location: 'Barcelona, España',
          period: 'Oct 2025 – Jul 2026',
          badge: 'En Curso',
          note: null,
        },
        {
          degree: 'Ingeniería de Producción',
          school: 'Universidad de la República',
          location: 'Montevideo, Uruguay',
          period: '2019 – 2023',
          badge: null,
          note: 'Tesis: Optimización de Rutas en Distribución de Bienes Congelados — Modelo matemático con resultados superiores al software comercial. Nota: 100% · Presentada en la XXII Conferencia Sudamericana de Ingeniería Industrial, de Producción y Mecánica.',
        },
      ],
    },

    certifications: {
      section_title: 'Certificaciones',
      items: [
        { name: 'Databricks Fundamentals Learning Plan',          issuer: 'Databricks' },
        { name: 'Agent Evaluation on Databricks',                 issuer: 'Databricks' },
        { name: 'Data Modelling, Transformation & Serving',       issuer: 'DeepLearning.AI · Coursera' },
        { name: 'IBM Project Manager Professional Certificate',   issuer: 'IBM' },
        { name: 'Certificate in Proficiency English (C2)',        issuer: 'Cambridge University' },
        { name: 'Python para Data Science & Machine Learning',    issuer: 'Udemy' },
        { name: 'Microsoft Power BI Desktop para BI',            issuer: 'Udemy' },
        { name: 'The Complete SQL Bootcamp',                      issuer: 'Udemy' },
      ],
    },

    blog: {
      section_title: 'Blog',
      subtitle: 'Reflexiones sobre ingeniería de datos, analítica y la intersección entre operaciones y datos.',
      coming_soon: 'Posts próximamente. ¡Mantente atento!',
    },

    contact: {
      section_title: 'Contacto',
      subtitle: '¿Interesado en trabajar juntos o simplemente hablar de datos? No dudes en escribirme.',
      email_label: 'Email',
      linkedin_label: 'LinkedIn',
      github_label: 'GitHub',
    },
  },
};

// ============================================================
// STATE
// ============================================================
let currentLang  = 'en';
let currentTheme = 'dark';
let typewriterTimer = null;

// ============================================================
// HELPERS
// ============================================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function getVal(obj, path) {
  return path.split('.').reduce((acc, k) => acc && acc[k], obj);
}

// ============================================================
// THEME
// ============================================================
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const icon = $('.theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
}

$('#themeToggle').addEventListener('click', () => {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ============================================================
// LANGUAGE
// ============================================================
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  const btn = $('#langToggle');
  if (btn) btn.textContent = lang === 'en' ? 'ES' : 'EN';
  renderAll(lang);
}

$('#langToggle').addEventListener('click', () => {
  setLang(currentLang === 'en' ? 'es' : 'en');
});

// ============================================================
// RENDER ALL
// ============================================================
function renderAll(lang) {
  const d = translations[lang];

  // Static i18n elements
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getVal(d, key);
    if (typeof val === 'string') el.textContent = val;
  });

  // Dynamic sections
  renderExperience(d.experience, d);
  renderProjects(d.projects);
  renderSkills(d.skills);
  renderEducation(d.education);
  renderCertifications(d.certifications);

  // Restart typewriter with new roles
  restartTypewriter(d.hero.roles);
}

// ============================================================
// RENDER: EXPERIENCE
// ============================================================
function renderExperience(exp) {
  const container = $('#experienceTimeline');
  if (!container) return;

  container.innerHTML = exp.items.map((job, i) => `
    <div class="timeline-item" style="transition-delay:${i * 0.1}s">
      <div class="timeline-title">${job.title}</div>
      <div class="timeline-company">${job.company}</div>
      <div class="timeline-meta">
        <span>📍 ${job.location}</span>
        <span>🗓 ${job.period}</span>
      </div>
      <ul class="timeline-bullets">
        ${job.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  observeNew('.timeline-item');
}

// ============================================================
// RENDER: PROJECTS
// ============================================================
function renderProjects(proj) {
  const container = $('#projectsGrid');
  if (!container) return;

  const githubIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;

  container.innerHTML = proj.items.map((p, i) => `
    <div class="project-card" style="transition-delay:${i * 0.1}s">
      <div class="project-header">
        <span class="project-title">${p.title}</span>
        ${p.badge ? `<span class="project-badge">${p.badge}</span>` : ''}
      </div>
      <p class="project-description">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <a href="${p.github}" target="_blank" rel="noopener" class="project-link">
        ${githubIcon} ${proj.github_label} →
      </a>
    </div>
  `).join('');

  observeNew('.project-card');
}

// ============================================================
// RENDER: SKILLS
// ============================================================
function renderSkills(skills) {
  const container = $('#skillsGrid');
  if (!container) return;

  container.innerHTML = skills.categories.map((cat, i) => `
    <div class="skill-category" style="transition-delay:${i * 0.08}s">
      <div class="skill-category-name">${cat.name}</div>
      <div class="skill-tags">
        ${cat.items.map(item => `<span class="tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');

  observeNew('.skill-category');
}

// ============================================================
// RENDER: EDUCATION
// ============================================================
function renderEducation(edu) {
  const container = $('#educationGrid');
  if (!container) return;

  container.innerHTML = edu.items.map((item, i) => `
    <div class="education-card" style="transition-delay:${i * 0.1}s">
      ${item.badge ? `<span class="education-badge">${item.badge}</span>` : ''}
      <div class="education-degree">${item.degree}</div>
      <div class="education-school">${item.school}</div>
      <div class="education-meta">
        <span>📍 ${item.location}</span>
        <span>🗓 ${item.period}</span>
      </div>
      ${item.note ? `<div class="education-note">${item.note}</div>` : ''}
    </div>
  `).join('');

  observeNew('.education-card');
}

// ============================================================
// RENDER: CERTIFICATIONS
// ============================================================
function renderCertifications(certs) {
  const container = $('#certsGrid');
  if (!container) return;

  container.innerHTML = certs.items.map((cert, i) => `
    <div class="cert-card" style="transition-delay:${i * 0.06}s">
      <div class="cert-icon">✦</div>
      <div>
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">${cert.issuer}</div>
      </div>
    </div>
  `).join('');

  observeNew('.cert-card');
}

// ============================================================
// TYPEWRITER
// ============================================================
function startTypewriter(roles) {
  const el = $('.typewriter-text');
  if (!el) return;

  let rIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    const word = roles[rIdx];
    if (deleting) {
      el.textContent = word.substring(0, --cIdx);
      if (cIdx <= 0) {
        deleting = false;
        rIdx = (rIdx + 1) % roles.length;
        typewriterTimer = setTimeout(tick, 400);
      } else {
        typewriterTimer = setTimeout(tick, 45);
      }
    } else {
      el.textContent = word.substring(0, ++cIdx);
      if (cIdx >= word.length) {
        deleting = true;
        typewriterTimer = setTimeout(tick, 2200);
      } else {
        typewriterTimer = setTimeout(tick, 85);
      }
    }
  }
  tick();
}

function restartTypewriter(roles) {
  if (typewriterTimer) clearTimeout(typewriterTimer);
  const el = $('.typewriter-text');
  if (el) el.textContent = '';
  typewriterTimer = setTimeout(() => startTypewriter(roles), 300);
}

// ============================================================
// INTERSECTION OBSERVER — scroll animations
// ============================================================
let io = null;

function getObserver() {
  if (!io) {
    io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  }
  return io;
}

function observeNew(selector) {
  const obs = getObserver();
  $$(selector).forEach(el => {
    el.classList.remove('visible');
    obs.observe(el);
  });
}

// ============================================================
// ACTIVE NAV LINK
// ============================================================
function initNavHighlight() {
  const sections = $$('section[id]');
  const links    = $$('.nav-links a');

  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-38% 0px -38% 0px' }).observe
  // Observe each section
  ;

  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-38% 0px -38% 0px' });

  sections.forEach(s => sectionObs.observe(s));
}

// ============================================================
// NAVBAR SCROLL STYLE
// ============================================================
function initNavScroll() {
  const navbar = $('#navbar');
  const onScroll = () => navbar && navbar.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ============================================================
// HAMBURGER MENU
// ============================================================
function initHamburger() {
  const btn   = $('#hamburger');
  const links = $('#navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  $$('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// HERO ENTRANCE ANIMATION
// ============================================================
function animateHero() {
  const children = $$('.hero-content > *');
  children.forEach((el, i) => {
    el.style.cssText = `opacity:0; transform:translateY(22px); transition: opacity 0.55s ease ${i * 0.1 + 0.1}s, transform 0.55s ease ${i * 0.1 + 0.1}s`;
  });
  requestAnimationFrame(() => requestAnimationFrame(() => {
    children.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }));
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Restore preferences
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const savedLang  = localStorage.getItem('lang')  || 'en';

  setTheme(savedTheme);
  setLang(savedLang);   // also calls renderAll + restartTypewriter

  initNavScroll();
  initNavHighlight();
  initHamburger();
  animateHero();

  // Observe static fade-in elements
  observeNew('.fade-in');
});
