/* ============================================================
   Tiago Garrel — Portfolio  |  app.js
   ============================================================ */
'use strict';

const translations = {
  en: {
    nav: { about:'About', experience:'Experience', projects:'Projects', skills:'Skills', blog:'Blog', contact:'Contact' },
    hero: {
      greeting: "Hi, I'm",
      roles: ['AI Engineer','Data Engineer','ML Practitioner','Problem Solver'],
      subtitle: 'Building AI systems and data pipelines grounded in real operational context.',
      cta_projects:'View Projects', cta_cv:'Download CV',
    },
    about: {
      section_title:'About Me',
      bio1:"AI & Data Engineer with a background in production engineering, currently completing a Master's in Big Data & Analytics at EAE Business School, Barcelona. I build agentic systems, LLM pipelines, and data infrastructure — with the operational context to know what actually needs solving.",
      bio2:"My edge is combining deep experience in operations and supply chain with AI engineering skills. I don't just build models — I understand the real-world systems they need to fit into.",
      stat1_value:'3+', stat1_label:'Years of Experience',
      stat2_value:'4',  stat2_label:'Major Projects',
      stat3_value:'12+',stat3_label:'Technologies',
    },
    experience: {
      section_title:'Experience',
      items:[
        { title:'Independent Consultant', company:'Natural Cosmetics Brand', location:'Remote', period:'Mar 2026 – Present',
          bullets:["Designing and building end-to-end operational infrastructure from scratch — database architecture, stock management logic, automated production systems, and cross-system integrations.","Already reducing more than 1 hour of manual operations work per day, with a full impact evaluation pending."] },
        { title:'Competition Insights Analyst', company:'eDreams ODIGEO', location:'Barcelona, Spain', period:'Nov 2025 – Feb 2026',
          bullets:["Built Python and Google Apps Script tools that automated recurring analytical workflows, saving 15–20 minutes of manual work daily.","Developed a system to detect and track anomalies, cutting detection time from 2.5 weeks to 2 days on average.","Collaborated with cross-functional stakeholders to interpret data and propose improvements aligned with strategic objectives."] },
        { title:'Data & Operations Analyst', company:'Ártico', location:'Canelones, Uruguay', period:'Nov 2022 – Jun 2024',
          bullets:["Led a company-wide TMS software rollout as project manager, taking over a project delayed by 2 months and coordinating over 20 people across departments to deliver on time.","Developed algorithms and management tools for automated warehouse slotting optimisation across 1,500+ SKUs, improving operations by over 20% and significantly reducing warehouse movements.","Analysed supply-chain operations and designed tools to manage complex networks of suppliers, warehouses, and clients.","Created Power BI dashboards that streamlined decision-making and enhanced operational visibility across teams."] },
        { title:'Supervisor', company:'Mayohogar', location:'Montevideo, Uruguay', period:'Feb 2022 – Oct 2022',
          bullets:["Managed a team of 3 and day-to-day operations, improving month-over-month revenue by 70% over 6 months.","Streamlined warehouse operations, optimising space utilisation and inventory management."] },
        { title:'Co-founder', company:'UnMonton Board Games', location:'Uruguay', period:'2020 – 2021',
          bullets:["Co-developed and launched a board-game brand, handling game design, prototyping, production, and marketing.","Managed the end-to-end product lifecycle from industrial printing to sales and customer engagement.","Sustained the business for a year through effective community building and digital marketing, selling over 200 games nationwide."] },
      ],
    },
    projects: {
      section_title:'Projects', github_label:'View on GitHub', demo_label:'Live Demo', paper_label:'View Publication',
      items:[
        { title:'Conversational Analytics System', description:'End-to-end agentic analytics platform for an insurance call center — Medallion Architecture on AWS S3 with LLM enrichment, evaluator-retry quality control, FAISS semantic search, and a multi-agent RAG system (HyDE + MMR).', tags:['Python','AWS S3','LLMs','FAISS','FastAPI','Docker'], github:'https://github.com/tiagogarrel', badge:"Master's Thesis" },
        { title:'BicingCheck', description:"Community web app to scan and rate individual Bicing bikes across Barcelona, helping riders spot which ones are actually in good shape before grabbing one.", tags:['Next.js','Vercel','Web App'], demo:'https://bicing-check.vercel.app/', badge:'Live' },
        { title:'AI & Technology Blog', description:'Technical blog and content platform covering AI systems, data engineering, and emerging technology — for both technical and non-technical audiences. 5+ published posts.', tags:['AI Diffusion','Content','GitHub Pages'], github:'https://tiagogarrel.github.io/personal_webpage/#blog' },
        { title:"Bachelor's Thesis: Route Optimisation", description:'Mathematical model to minimise distribution costs for frozen goods under complex constraints — outperformed commercial software, awarded a 100% grade, and presented at the XXII South American Conference of Industrial, Production & Mechanical Engineering.', tags:['Optimisation','Operations Research','Supply Chain'], paper:'https://www.colibri.udelar.edu.uy/jspui/handle/20.500.12008/43835', badge:"Bachelor's Thesis" },
        { title:'CV Tuning & Application Tracker', description:'AI-powered platform to tailor CVs for specific job postings and manage the full application pipeline — from draft to offer.', tags:['Python','LLMs','FastAPI','AI'], github:'https://github.com/tiagogarrel', badge:'In Development' },
        { title:'Bicing Occupancy Prediction', description:"ML model predicting bicycle station availability across Barcelona's Bicing network. 16M+ rows with feature engineering on temporal and geospatial data.", tags:['Python','Random Forest','LightGBM','Pandas'], github:'https://github.com/tiagogarrel' },
        { title:'Daily Sales ETL Pipeline', description:'Modular Python ETL processing sales, weather, and geolocation data into a MySQL warehouse — automated cleaning, enrichment, and idempotent loading.', tags:['Python','MySQL','ETL','Pandas'], github:'https://github.com/tiagogarrel' },
        { title:'Coffee Big Data Project', description:'End-to-end data pipeline simulating coffee shop sales across Australian cities. PostgreSQL storage, Power BI dashboards, and ML forecasting (LightGBM + Random Forest) with Airflow orchestration.', tags:['Python','PostgreSQL','Power BI','Airflow','ML'], github:'https://github.com/tiagogarrel/Coffee-BigData' },
      ],
    },
    skills: {
      section_title:'Skills',
      categories:[
        { name:'AI & LLM',            items:['LLMs','RAG (HyDE · MMR)','FAISS','OpenRouter','llama.cpp','Multi-agent Systems','FastAPI'] },
        { name:'Data Engineering',    items:['ETL/ELT Pipelines','Apache Airflow','Data Modelling','SQLAlchemy','MySQL','PostgreSQL','Parquet'] },
        { name:'Languages & Tools',   items:['Python','SQL','Docker','Git','Linux','Pandas','Pydantic'] },
        { name:'Analytics & Cloud',   items:['BigQuery','Looker','Power BI','AWS','Scikit-learn','LightGBM','Streamlit'] },
      ],
    },
    education: {
      section_title:'Education',
      items:[
        { degree:"Master's in Big Data & Analytics", school:'EAE Business School', location:'Barcelona, Spain', period:'Oct 2025 – Jul 2026', badge:'In Progress', note:'Thesis: Conversational Analytics System — an end-to-end agentic analytics platform for an insurance call centre. Medallion Architecture on AWS S3 with LLM enrichment, evaluator-retry quality control, FAISS semantic search, and a multi-agent RAG system (HyDE + MMR). Stack: Python, Gemma 3 (llama.cpp/GGUF), OpenRouter, FAISS, FastAPI, AWS S3, Docker Compose.' },
        { degree:"Bachelor's in Production Engineering", school:'Universidad de la República', location:'Montevideo, Uruguay', period:'2019 – 2023', badge:null, note:'Thesis: Optimisation of Routes in Frozen Goods Distribution — Mathematical model achieving results superior to commercial software. Grade: 100% · Presented at the XXII South American Conference of Industrial, Production and Mechanical Engineering.' },
      ],
    },
    certifications: {
      section_title:'Certifications',
      items:[
        { name:'Databricks Fundamentals Learning Plan',        issuer:'Databricks' },
        { name:'Agent Evaluation on Databricks',              issuer:'Databricks' },
        { name:'Data Modelling, Transformation & Serving',    issuer:'DeepLearning.AI · Coursera' },
        { name:'IBM Project Manager Professional Certificate', issuer:'IBM' },
        { name:'Certificate in Proficiency English (C2)',     issuer:'Cambridge University' },
        { name:'Python for Data Science & Machine Learning',  issuer:'Udemy' },
        { name:'Microsoft Power BI Desktop for BI',          issuer:'Udemy' },
        { name:'The Complete SQL Bootcamp',                   issuer:'Udemy' },
      ],
    },
    blog: {
      section_title: 'Blog',
      subtitle: 'Thoughts on tech, data and other stuff.',
      read_more: 'Read post →',
      items: [
        {
          title: 'Claude Cowork: The AI Environment That Looks Like the Future of Work',
          date: 'June 2026',
          tags: ['AI', 'Tools', 'Claude'],
          summary: "Most people still use AI like a fancy search engine. Claude Cowork is one of the first tools that shows what working with AI will actually look like — persistent projects, real file access, connected tools. Here's what it is, why you should start now, and how to make sure you don't lose your work.",
          url: 'blog/cowork-persistence.html',
        },
        {
          title: 'Predicting When Your Bicing Station Will Be Full',
          date: 'June 2026',
          tags: ['Machine Learning', 'Data Science', 'Python'],
          summary: 'How we built an ML model to predict Bicing station occupancy across Barcelona — Random Forest, LightGBM, 16M rows, and what the data actually says about how the city moves.',
          url: 'blog/bicing.html',
        },
        {
          title: 'Why Your Prompts Are Bad (And How to Fix Them)',
          date: 'June 2026',
          tags: ['AI', 'Productivity', 'Prompts'],
          summary: "LLMs don't think — they predict. If your prompt is vague, the answer will be average. The most common mistakes, concrete before/after examples, and the techniques that actually make a difference.",
          url: 'blog/better-prompts.html',
        },
        {
          title: 'How I Use Claude to Study. Consistently.',
          date: 'May 2026',
          tags: ['AI', 'Learning', 'Claude'],
          summary: 'I built a personal study system with Claude — I call it Study Hub. An initial assessment, curiosity-driven sessions, structured docs after each one, and a weekly evaluation. Here\'s how the whole thing works.',
          url: 'blog/study-hub.html',
        },
        {
          title: "Everyone's Talking About Agents. What Are They, and How Do I Build My Own?",
          date: 'May 2026',
          tags: ['AI', 'Agents', 'Python'],
          summary: 'Everyone says "AI agents" like it\'s magic. It\'s not. Here\'s what they actually are, three real use cases already happening today, and a working Python example that shows you exactly how the LLM call works under the hood.',
          url: 'blog/ai-agents.html',
        },
        {
          title: 'Did You Know You Can Run Your Own ChatGPT on Your PC?',
          date: 'April 2026',
          tags: ['AI', 'Open Source', 'LLMs'],
          summary: 'Running a powerful AI model locally — no internet, no subscription, no one reading your prompts. What open source models are, why it matters, and how to get one running in under 10 minutes.',
          url: 'blog/local-llms.html',
        },
      ],
    },
    contact: { section_title:'Get in Touch', subtitle:'Interested in working together or just want to talk AI & data? Feel free to reach out.', email_label:'Email', linkedin_label:'LinkedIn', github_label:'GitHub' },
  },

  es: {
    nav: { about:'Sobre Mí', experience:'Experiencia', projects:'Proyectos', skills:'Habilidades', blog:'Blog', contact:'Contacto' },
    hero: {
      greeting:'Hola, soy',
      roles:['AI Engineer','Data Engineer','ML Practitioner','Problem Solver'],
      subtitle:'Construyendo sistemas de IA e infraestructura de datos con base en contexto operacional real.',
      cta_projects:'Ver Proyectos', cta_cv:'Descargar CV',
    },
    about: {
      section_title:'Sobre Mí',
      bio1:"AI & Data Engineer con background en ingeniería de producción, actualmente cursando un Máster en Big Data & Analytics en EAE Business School, Barcelona. Construyo sistemas agénticos, pipelines con LLMs e infraestructura de datos — con el contexto operacional para entender qué es lo que realmente hay que resolver.",
      bio2:"Mi diferencial está en combinar experiencia real en operaciones y cadena de suministro con habilidades de ingeniería de IA. No solo construyo modelos — entiendo los sistemas reales en los que tienen que funcionar.",
      stat1_value:'3+', stat1_label:'Años de Experiencia',
      stat2_value:'4',  stat2_label:'Proyectos Principales',
      stat3_value:'12+',stat3_label:'Tecnologías',
    },
    experience: {
      section_title:'Experiencia',
      items:[
        { title:'Consultor Independiente', company:'Marca de Cosmética Natural', location:'Remoto', period:'Mar 2026 – Presente',
          bullets:['Diseño y construcción de infraestructura operacional end-to-end desde cero: arquitectura de base de datos, lógica de gestión de stock, sistemas de producción automatizados e integraciones entre sistemas.','Ya reduciendo más de 1 hora diaria de trabajo manual en operaciones, con evaluación de impacto completa pendiente.'] },
        { title:'Analista de Inteligencia Competitiva', company:'eDreams ODIGEO', location:'Barcelona, España', period:'Nov 2025 – Feb 2026',
          bullets:['Construí herramientas en Python y Google Apps Script que automatizaron flujos de trabajo analíticos recurrentes, ahorrando 15 a 20 minutos de trabajo manual por día.','Desarrollé un sistema para detectar y monitorear anomalías, reduciendo el tiempo de detección de 2,5 semanas a 2 días en promedio.','Colaboré con equipos multidisciplinarios para interpretar datos y proponer mejoras alineadas con objetivos estratégicos.'] },
        { title:'Analista de Datos y Operaciones', company:'Ártico', location:'Canelones, Uruguay', period:'Nov 2022 – Jun 2024',
          bullets:['Dirigí la implementación corporativa de un TMS como project manager, asumiendo un proyecto con 2 meses de atraso y coordinando a más de 20 personas entre departamentos para entregarlo a tiempo.','Desarrollé algoritmos y herramientas de gestión para la optimización automatizada del slotting de almacén en más de 1.500 SKUs, mejorando las operaciones en más de un 20% y reduciendo considerablemente los movimientos de almacén.','Analicé operaciones de cadena de suministro y diseñé herramientas para gestionar redes complejas de proveedores, almacenes y clientes.','Creé dashboards en Power BI que agilizaron la toma de decisiones y mejoraron la visibilidad operacional.'] },
        { title:'Supervisor', company:'Mayohogar', location:'Montevideo, Uruguay', period:'Feb 2022 – Oct 2022',
          bullets:['Gestioné un equipo de 3 personas y las operaciones diarias, mejorando los ingresos mes a mes en un 70% en 6 meses.','Optimicé operaciones de almacén, mejorando la utilización del espacio y los procesos de gestión de inventarios.'] },
        { title:'Co-fundador', company:'UnMonton Board Games', location:'Uruguay', period:'2020 – 2021',
          bullets:['Co-desarrollé y lancé una marca de juegos de mesa, gestionando diseño, prototipado, producción y marketing.','Manejé el ciclo de vida completo del producto, desde la impresión industrial hasta las ventas y la comunidad.','Sostuve el negocio durante un año mediante construcción de comunidad y marketing digital efectivo, vendiendo más de 200 juegos a nivel nacional.'] },
      ],
    },
    projects: {
      section_title:'Proyectos', github_label:'Ver en GitHub', demo_label:'Ver en Vivo', paper_label:'Ver Publicación',
      items:[
        { title:'Sistema de Analítica Conversacional', description:'Plataforma agéntica end-to-end para analítica de call center de seguros — Arquitectura Medallion en AWS S3 con enriquecimiento LLM, control de calidad evaluador-retry, búsqueda semántica con FAISS y sistema multi-agente con RAG (HyDE + MMR).', tags:['Python','AWS S3','LLMs','FAISS','FastAPI','Docker'], github:'https://github.com/tiagogarrel', badge:'Tesis de Máster' },
        { title:'BicingCheck', description:'App comunitaria para escanear y valorar bicis individuales de Bicing en Barcelona, ayudando a detectar cuáles están realmente en buen estado antes de agarrarla.', tags:['Next.js','Vercel','Web App'], demo:'https://bicing-check.vercel.app/', badge:'Activo' },
        { title:'Blog de Tecnología e IA', description:'Blog técnico y plataforma de contenido sobre sistemas de IA, ingeniería de datos y tecnología emergente — para audiencias técnicas y no técnicas. Más de 5 posts publicados.', tags:['Divulgación','Contenido','GitHub Pages'], github:'https://tiagogarrel.github.io/personal_webpage/#blog' },
        { title:'Tesis de Grado: Optimización de Rutas', description:'Modelo matemático para minimizar costos de distribución de productos congelados bajo restricciones complejas — superó al software comercial, obtuvo una nota de 100% y fue presentado en la XXII Conferencia Sudamericana de Ingeniería Industrial, de Producción y Mecánica.', tags:['Optimización','Investigación Operativa','Supply Chain'], paper:'https://www.colibri.udelar.edu.uy/jspui/handle/20.500.12008/43835', badge:'Tesis de Grado' },
        { title:'Plataforma de CV y Seguimiento de Aplicaciones', description:'Plataforma con IA para personalizar CVs según ofertas específicas y gestionar todo el pipeline de aplicaciones — desde el borrador hasta la oferta.', tags:['Python','LLMs','FastAPI','IA'], github:'https://github.com/tiagogarrel', badge:'En Desarrollo' },
        { title:'Predicción de Ocupación Bicing', description:'Modelo de ML para predecir la disponibilidad de estaciones de Bicing en Barcelona. Más de 16M de filas con feature engineering sobre datos temporales y geoespaciales.', tags:['Python','Random Forest','LightGBM','Pandas'], github:'https://github.com/tiagogarrel' },
        { title:'Pipeline ETL de Ventas Diarias', description:'Pipeline ETL modular que procesa datos de ventas, clima y geolocalización en un warehouse MySQL — con limpieza automatizada, enriquecimiento y carga idempotente.', tags:['Python','MySQL','ETL','Pandas'], github:'https://github.com/tiagogarrel' },
        { title:'Proyecto Big Data de Café', description:'Pipeline de datos end-to-end que simula ventas de cafeterías en ciudades australianas. Almacenamiento en PostgreSQL, dashboards en Power BI y forecasting con ML (LightGBM + Random Forest) orquestado con Airflow.', tags:['Python','PostgreSQL','Power BI','Airflow','ML'], github:'https://github.com/tiagogarrel/Coffee-BigData' },
      ],
    },
    skills: {
      section_title:'Habilidades',
      categories:[
        { name:'IA y LLMs',                  items:['LLMs','RAG (HyDE · MMR)','FAISS','OpenRouter','llama.cpp','Sistemas Multi-agente','FastAPI'] },
        { name:'Ingeniería de Datos',        items:['Pipelines ETL/ELT','Apache Airflow','Modelado de Datos','SQLAlchemy','MySQL','PostgreSQL','Parquet'] },
        { name:'Lenguajes y Herramientas',   items:['Python','SQL','Docker','Git','Linux','Pandas','Pydantic'] },
        { name:'Analítica y Cloud',          items:['BigQuery','Looker','Power BI','AWS','Scikit-learn','LightGBM','Streamlit'] },
      ],
    },
    education: {
      section_title:'Educación',
      items:[
        { degree:'Máster en Big Data & Analytics', school:'EAE Business School', location:'Barcelona, España', period:'Oct 2025 – Jul 2026', badge:'En Curso', note:'Tesis: Sistema de Analítica Conversacional — plataforma agéntica end-to-end para analítica de call center de seguros. Arquitectura Medallion en AWS S3 con enriquecimiento LLM, control de calidad evaluador-retry, búsqueda semántica FAISS y sistema multi-agente con RAG (HyDE + MMR). Stack: Python, Gemma 3 (llama.cpp/GGUF), OpenRouter, FAISS, FastAPI, AWS S3, Docker Compose.' },
        { degree:'Ingeniería de Producción', school:'Universidad de la República', location:'Montevideo, Uruguay', period:'2019 – 2023', badge:null, note:'Tesis: Optimización de Rutas en Distribución de Bienes Congelados — Modelo matemático con resultados superiores al software comercial. Nota: 100% · Presentada en la XXII Conferencia Sudamericana de Ingeniería Industrial, de Producción y Mecánica.' },
      ],
    },
    certifications: {
      section_title:'Certificaciones',
      items:[
        { name:'Databricks Fundamentals Learning Plan',        issuer:'Databricks' },
        { name:'Agent Evaluation on Databricks',              issuer:'Databricks' },
        { name:'Data Modelling, Transformation & Serving',    issuer:'DeepLearning.AI · Coursera' },
        { name:'IBM Project Manager Professional Certificate', issuer:'IBM' },
        { name:'Certificate in Proficiency English (C2)',     issuer:'Cambridge University' },
        { name:'Python para Data Science & Machine Learning', issuer:'Udemy' },
        { name:'Microsoft Power BI Desktop para BI',         issuer:'Udemy' },
        { name:'The Complete SQL Bootcamp',                   issuer:'Udemy' },
      ],
    },
    blog: {
      section_title: 'Blog',
      subtitle: 'Reflexiones sobre tech, datos y otras cosas.',
      read_more: 'Leer post →',
      items: [
        {
          title: 'Claude Cowork: el entorno de IA que se parece a cómo vamos a trabajar',
          date: 'Junio 2026',
          tags: ['IA', 'Herramientas', 'Claude'],
          summary: 'La mayoría todavía usa la IA como un buscador glorificado. Claude Cowork es uno de los primeros ejemplos de cómo se ve trabajar con IA de verdad — proyectos persistentes, acceso real a tus archivos, herramientas conectadas. Qué es, por qué empezar ahora, y cómo no perder tu trabajo.',
          url: 'blog/cowork-persistence.html',
        },
        {
          title: 'Predecir cuándo tu estación de Bicing va a estar llena',
          date: 'Junio 2026',
          tags: ['Machine Learning', 'Data Science', 'Python'],
          summary: 'Cómo construimos un modelo de ML para predecir la ocupación de las estaciones de Bicing en Barcelona — Random Forest, LightGBM, 16M de filas, y qué dicen los datos sobre cómo se mueve la ciudad.',
          url: 'blog/bicing.html',
        },
        {
          title: 'Por qué tus prompts son malos (y cómo arreglarlos)',
          date: 'Junio 2026',
          tags: ['IA', 'Productividad', 'Prompts'],
          summary: 'Los LLMs no piensan: predicen. Si tu prompt es vago, la respuesta va a ser promedio. Los errores más comunes con ejemplos antes/después, y las técnicas que más diferencia hacen.',
          url: 'blog/better-prompts.html',
        },
        {
          title: 'Cómo uso Claude para aprender de forma consistente',
          date: 'Mayo 2026',
          tags: ['IA', 'Aprendizaje', 'Claude'],
          summary: 'Me armé un sistema de estudio personal con Claude — le digo Study Hub. Un assessment inicial, sesiones guiadas por curiosidad, documentos estructurados después de cada una, y una evaluación semanal. Acá explico cómo funciona todo.',
          url: 'blog/study-hub.html',
        },
        {
          title: 'Todo el mundo habla de los agents. ¿Qué son y cómo puedo tener los míos?',
          date: 'Mayo 2026',
          tags: ['IA', 'Agents', 'Python'],
          summary: 'Todo el mundo dice "agentes de IA" como si fuera magia. No lo es. Qué son en la práctica, tres casos de uso reales que ya están pasando, y un ejemplo en Python que muestra exactamente cómo funciona la llamada al LLM por dentro.',
          url: 'blog/ai-agents.html',
        },
        {
          title: '¿Sabías que podés tener tu propio ChatGPT en tu PC?',
          date: 'Abril 2026',
          tags: ['IA', 'Open Source', 'LLMs'],
          summary: 'Ejecutar un modelo de IA potente en tu propia computadora — sin internet, sin suscripción, sin que nadie lea tus prompts. Qué son los modelos open source, por qué importa y cómo tener uno funcionando en menos de 10 minutos.',
          url: 'blog/local-llms.html',
        },
      ],
    },
    contact: { section_title:'Contacto', subtitle:'¿Interesado en trabajar juntos o simplemente hablar de IA y datos? No dudes en escribirme.', email_label:'Email', linkedin_label:'LinkedIn', github_label:'GitHub' },
  },
};

// ============================================================
// STATE & HELPERS
// ============================================================
let currentLang = 'en', currentTheme = 'dark', twTimer = null;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const getVal = (obj, path) => path.split('.').reduce((a,k) => a&&a[k], obj);

// ============================================================
// THEME
// ============================================================
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const l = $('#themeLight'), d = $('#themeDark');
  if (l && d) { l.classList.toggle('active', theme==='light'); d.classList.toggle('active', theme==='dark'); }
}
document.addEventListener('DOMContentLoaded', () => {
  $('#themeToggle').addEventListener('click', () => setTheme(currentTheme==='dark'?'light':'dark'));
  $('#langToggle').addEventListener('click',  () => setLang(currentLang==='en'?'es':'en'));

  const savedTheme = localStorage.getItem('theme') || 'dark';
  const savedLang  = localStorage.getItem('lang')  || 'en';
  setTheme(savedTheme);
  setLang(savedLang);
  initNavScroll();
  initNavHighlight();
  initHamburger();
  animateHero();
  observeNew('.fade-in');
});

// ============================================================
// LANGUAGE
// ============================================================
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  const en = $('#langEN'), es = $('#langES');
  if (en && es) { en.classList.toggle('active', lang==='en'); es.classList.toggle('active', lang==='es'); }
  renderAll(lang);
}

// ============================================================
// RENDER
// ============================================================
function renderAll(lang) {
  const d = translations[lang];
  $$('[data-i18n]').forEach(el => { const v = getVal(d, el.getAttribute('data-i18n')); if (typeof v==='string') el.textContent=v; });
  renderExperience(d.experience);
  renderProjects(d.projects);
  renderSkills(d.skills);
  renderEducation(d.education);
  renderCertifications(d.certifications);
  renderBlog(d.blog);
  restartTypewriter(d.hero.roles);
}

function renderExperience(exp) {
  const c = $('#experienceTimeline'); if (!c) return;
  c.innerHTML = exp.items.map((j,i) => `
    <div class="timeline-item" style="transition-delay:${i*.1}s">
      <div class="timeline-title">${j.title}</div>
      <div class="timeline-company">${j.company}</div>
      <div class="timeline-meta"><span>📍 ${j.location}</span><span>🗓 ${j.period}</span></div>
      <ul class="timeline-bullets">${j.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
    </div>`).join('');
  observeNew('.timeline-item');
}

function renderProjects(proj) {
  const c = $('#projectsGrid'); if (!c) return;
  const gh = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
  const ext = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  c.innerHTML = proj.items.map((p,i) => {
    const links = [];
    if (p.github) links.push(`<a href="${p.github}" target="_blank" rel="noopener" class="project-link">${gh} ${proj.github_label} →</a>`);
    if (p.demo)   links.push(`<a href="${p.demo}" target="_blank" rel="noopener" class="project-link">${ext} ${proj.demo_label} →</a>`);
    if (p.paper)  links.push(`<a href="${p.paper}" target="_blank" rel="noopener" class="project-link">${ext} ${proj.paper_label} →</a>`);
    return `
    <div class="project-card" style="transition-delay:${i*.1}s">
      <div class="project-header"><span class="project-title">${p.title}</span>${p.badge?`<span class="project-badge">${p.badge}</span>`:''}</div>
      <p class="project-description">${p.description}</p>
      <div class="project-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="project-links">${links.join('')}</div>
    </div>`;
  }).join('');
  observeNew('.project-card');
}

function renderSkills(skills) {
  const c = $('#skillsGrid'); if (!c) return;
  c.innerHTML = skills.categories.map((cat,i) => `
    <div class="skill-category" style="transition-delay:${i*.08}s">
      <div class="skill-category-name">${cat.name}</div>
      <div class="skill-tags">${cat.items.map(item=>`<span class="tag">${item}</span>`).join('')}</div>
    </div>`).join('');
  observeNew('.skill-category');
}

function renderEducation(edu) {
  const c = $('#educationGrid'); if (!c) return;
  c.innerHTML = edu.items.map((item,i) => `
    <div class="education-card" style="transition-delay:${i*.1}s">
      ${item.badge?`<span class="education-badge">${item.badge}</span>`:''}
      <div class="education-degree">${item.degree}</div>
      <div class="education-school">${item.school}</div>
      <div class="education-meta"><span>📍 ${item.location}</span><span>🗓 ${item.period}</span></div>
      ${item.note?`<div class="education-note">${item.note}</div>`:''}
    </div>`).join('');
  observeNew('.education-card');
}

function renderCertifications(certs) {
  const c = $('#certsGrid'); if (!c) return;
  c.innerHTML = certs.items.map((cert,i) => `
    <div class="cert-card" style="transition-delay:${i*.06}s">
      <div class="cert-icon">✦</div>
      <div><div class="cert-name">${cert.name}</div><div class="cert-issuer">${cert.issuer}</div></div>
    </div>`).join('');
  observeNew('.cert-card');
}

function renderBlog(blog) {
  const c = $('#blogGrid'); if (!c) return;
  c.innerHTML = blog.items.map((post, i) => `
    <div class="blog-card fade-in" style="transition-delay:${i * .1}s">
      <div class="blog-card-header">
        <div class="blog-tags">${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <span class="blog-date">${post.date}</span>
      </div>
      <h3 class="blog-title">${post.title}</h3>
      <p class="blog-summary">${post.summary}</p>
      ${post.url && post.url !== '#'
        ? `<a href="${post.url}" target="_blank" rel="noopener" class="blog-read-more">${blog.read_more}</a>`
        : `<span class="blog-coming-soon-badge">Coming soon</span>`}
    </div>`).join('');
  observeNew('.blog-card');
}

// ============================================================
// TYPEWRITER
// ============================================================
function startTypewriter(roles) {
  const el = $('.typewriter-text'); if (!el) return;
  let rIdx=0, cIdx=0, del=false;
  function tick() {
    const word = roles[rIdx];
    if (del) {
      el.textContent = word.substring(0,--cIdx);
      if (cIdx<=0) { del=false; rIdx=(rIdx+1)%roles.length; twTimer=setTimeout(tick,400); }
      else twTimer=setTimeout(tick,45);
    } else {
      el.textContent = word.substring(0,++cIdx);
      if (cIdx>=word.length) { del=true; twTimer=setTimeout(tick,2200); }
      else twTimer=setTimeout(tick,85);
    }
  }
  tick();
}
function restartTypewriter(roles) {
  if (twTimer) clearTimeout(twTimer);
  const el = $('.typewriter-text'); if (el) el.textContent='';
  twTimer = setTimeout(() => startTypewriter(roles), 300);
}

// ============================================================
// INTERSECTION OBSERVER
// ============================================================
let io = null;
function getIO() {
  if (!io) io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold:0.1, rootMargin:'0px 0px -40px 0px' }
  );
  return io;
}
function observeNew(sel) {
  const obs = getIO();
  $$(sel).forEach(el => { el.classList.remove('visible'); obs.observe(el); });
}

// ============================================================
// NAV
// ============================================================
function initNavHighlight() {
  const links = $$('.nav-links a');
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href')==='#'+e.target.id));
    }),
    { rootMargin:'-38% 0px -38% 0px' }
  );
  $$('section[id]').forEach(s => obs.observe(s));
}
function initNavScroll() {
  const nb = $('#navbar');
  window.addEventListener('scroll', () => nb && nb.classList.toggle('scrolled', window.scrollY>10), { passive:true });
}
function initHamburger() {
  const btn=$('#hamburger'), links=$('#navLinks'); if (!btn||!links) return;
  btn.addEventListener('click', () => { const o=links.classList.toggle('open'); btn.setAttribute('aria-expanded',o); });
  $$('.nav-links a').forEach(l => l.addEventListener('click', () => { links.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }));
}

// ============================================================
// HERO ENTRANCE
// ============================================================
function animateHero() {
  const children = $$('.hero-content > *');
  children.forEach((el,i) => {
    el.style.cssText=`opacity:0;transform:translateY(22px);transition:opacity .55s ease ${i*.1+.1}s,transform .55s ease ${i*.1+.1}s`;
  });
  requestAnimationFrame(() => requestAnimationFrame(() => {
    children.forEach(el => { el.style.opacity='1'; el.style.transform='translateY(0)'; });
  }));
}
