/* ============================================
   Asish Kumar Nayak - Senior Data Engineer
   Portfolio Interactions & Data
   ============================================ */

/* ============================================
   DATA
   ============================================ */

const RESUME_DATA = {
  name: 'Asish Kumar Nayak',
  title: 'Senior Data Engineer',
  summary: '14 Years Experience Driving Enterprise Data Analytics Solutions in Healthcare & Financial Services',
  location: 'Fuquay Varina, NC',
  email: 'asishn16@gmail.com',
  phone: '(405) 714-3128',
  linkedin: 'https://www.linkedin.com/in/asishn/',
  experience: [
    {
      period: 'Mar 2021 – Present',
      role: 'Sr. Data Engineer',
      company: 'AmeriHealth Caritas Health Insurance',
      agency: 'Quiddity Infotech LLC',
      location: 'Remote, United States',
      bullets: [
        'Designed and deployed ETL pipelines processing EHR claims data with <strong>Spark, Python, SQL, Databricks, Snowflake</strong> — improving analytics data availability by <strong>40%</strong>',
        'Extracted critical business logic from legacy SAS systems and rebuilt high-performance pipelines in the modern AWS Databricks ecosystem',
        'Led on-prem → AWS migration using <strong>S3, Glue, Redshift</strong>, breaking monoliths into scalable cloud-native solutions',
        'Optimized Snowflake & Databricks warehouse performance — reduced daily job runtimes by <strong>30+ minutes</strong> via incremental loading and Spark tuning',
        'Maintained <strong>99.9% uptime</strong> on mission-critical production pipelines (Databricks, Snowflake, SAS, Python, SQL, Shell)',
        'Re-engineered <strong>10+ analytics models</strong> from SAS to Python, halving maintenance effort and enabling CI/CD'
      ],
      tech: ['Spark', 'Python', 'SQL', 'SAS', 'Databricks', 'Snowflake', 'AWS', 'Airflow']
    },
    {
      period: 'Sep 2019 – Jan 2021',
      role: 'Sr. Data Engineer',
      company: 'Centene / WellCare Health Insurance',
      agency: 'Rang Technologies Inc.',
      location: 'Tampa, Florida',
      bullets: [
        'Built automated data pipelines processing <strong>member, claims, and clinical data</strong> at enterprise scale',
        'Engineered robust ETL workflows ensuring <strong>data quality and regulatory compliance</strong> (HIPAA, GDPR)',
        'Optimized distributed data processing, reducing runtimes and infrastructure cost',
        'Implemented monitoring and alerting to guarantee production reliability and SLA adherence',
        'Translated business requirements into scalable data solutions with analysts and stakeholders'
      ],
      tech: ['SQL', 'Python', 'SAS', 'Hive', 'Impala', 'Kafka', 'Oozie', 'Teradata', 'Oracle']
    },
    {
      period: 'Aug 2015 – Aug 2019',
      role: 'Healthcare Data Analyst → Senior Data Analyst',
      company: 'Cigna',
      location: 'Hartford, Connecticut',
      bullets: [
        'Analyzed <strong>claims, membership, and clinical data</strong> to support cost, quality, and utilization analytics',
        'Developed SQL queries and dashboards (<strong>Tableau, Power BI</strong>) turning complex healthcare data into executive-ready insights',
        'Partnered with clinical and actuarial stakeholders to design KPIs, validate data quality, and document business rules',
        'Automated recurring analyses with <strong>SAS and Python</strong>, cutting manual reporting effort and turnaround time'
      ],
      tech: ['SQL', 'SAS', 'Python', 'Tableau', 'Power BI', 'Teradata', 'Oracle']
    },
    {
      period: 'Aug 2014 – May 2015',
      role: 'Graduate Teaching Assistant',
      company: 'Oklahoma State University',
      location: 'Stillwater, Oklahoma',
      bullets: [
        'Supported graduate MIS courses — led labs, graded assignments, and mentored students on data analytics projects',
        'Assisted faculty with research data preparation using SAS and statistical analysis'
      ],
      tech: ['SAS', 'MIS', 'Analytics', 'Statistics']
    },
    {
      period: 'Nov 2010 – Jul 2013',
      role: 'System Engineer',
      company: 'Infosys',
      location: 'India',
      bullets: [
        'Developed and maintained enterprise applications for global clients across insurance and banking domains',
        'Built SQL/ETL routines and batch processes ensuring reliable data flows into reporting systems',
        'Provided production support, root-cause analysis, and on-time defect resolution'
      ],
      tech: ['SQL', 'Oracle', 'Java', 'Unix', 'ETL']
    }
  ],
  snapshot: [
    { value: '14+', label: 'Years of Experience' },
    { value: '4', label: 'Enterprises Served' },
    { value: '6', label: 'Distinct Roles' },
    { value: '9+', label: 'Certifications' },
    { value: '3', label: 'Cloud Platforms' }
  ],
  achievements: [
    { metric: '40%', label: 'faster data availability' },
    { metric: '30+ min', label: 'daily runtime saved' },
    { metric: '99.9%', label: 'pipeline uptime' },
    { metric: '10+', label: 'models modernized' }
  ],
  skills: [
    {
      icon: '💻',
      name: 'Programming & Data Processing',
      subtitle: 'Languages & processing frameworks',
      tags: ['Python', 'SQL', 'Spark', 'Hadoop', 'SAS', 'PowerShell', 'Bash']
    },
    {
      icon: '☁️',
      name: 'Cloud Platforms',
      subtitle: 'AWS & Azure services',
      tags: ['AWS: S3, Glue, Redshift, Lambda', 'Azure: Data Factory, Synapse, Data Lake, Blob, Cosmos DB, Event Hubs']
    },
    {
      icon: '🏗️',
      name: 'Data Platforms & Tools',
      subtitle: 'Warehouses, lakes & orchestration',
      tags: ['Snowflake', 'Databricks', 'DBT Labs', 'Apache Airflow', 'Phoenix', 'Django', 'Oozie', 'Kafka', 'Hive', 'Impala']
    },
    {
      icon: '🗄️',
      name: 'Databases',
      subtitle: 'SQL & NoSQL engines',
      tags: ['Oracle', 'MySQL', 'PostgreSQL', 'Redshift', 'Teradata', 'Cosmos DB', 'NoSQL']
    },
    {
      icon: '📊',
      name: 'Analytics & BI',
      subtitle: 'Visualization & analysis',
      tags: ['Power BI', 'Tableau', 'Adobe Analytics', 'NumPy', 'Pandas']
    },
    {
      icon: '🛡️',
      name: 'Data Compliance',
      subtitle: 'Regulatory standards',
      tags: ['HIPAA', 'GDPR']
    }
  ],
  education: [
    {
      degree: 'Master of Science in Management Information Systems',
      school: 'Oklahoma State University',
      period: '2013 – 2015',
      details: 'Advanced coursework in data management, systems analysis, and business intelligence with focus on enterprise data architecture.'
    },
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      school: 'Biju Patnaik University of Technology',
      period: '2006 – 2010',
      details: 'Core computer science curriculum including algorithms, database systems, operating systems, and software engineering.'
    }
  ],
  certifications: [
    { name: 'Databricks Certified Data Engineer Professional', issuer: 'Databricks', icon: '🧱' },
    { name: 'Databricks Certified Data Engineer Associate', issuer: 'Databricks', icon: '🧱' },
    { name: 'SnowPro Associate: Platform Certification', issuer: 'Snowflake', icon: '❄️' },
    { name: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', icon: '☁️' },
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', icon: '🌩️' },
    { name: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional', issuer: 'Oracle Cloud', icon: '☁️' },
    { name: 'SAS Certified Base Programmer for SAS 9', issuer: 'SAS Institute', icon: '📊' },
    { name: 'SAS Certified Statistical Business Analyst', issuer: 'SAS Institute', icon: '📈' },
    { name: 'SAS OSU Marketing Analytics Certificate', issuer: 'Oklahoma State University', icon: '🎓' },
    { name: 'Oracle Certified Associate', issuer: 'Oracle', icon: '💾' }
  ],
  coreTech: ['Python', 'Spark', 'SQL', 'Snowflake', 'Databricks', 'AWS', 'Azure', 'Airflow', 'SAS', 'Kafka'],
  softSkills: ['Team Leadership', 'Mentoring', 'Stakeholder Management', 'Problem Solving', 'Collaboration', 'Communication', 'Consultative Skills']
};

/* ============================================
   DOM Helpers
   ============================================ */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* ============================================
   Particle Canvas (Hero Background)
   ============================================ */

function initParticles() {
  const canvas = $('#particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId = null;

  const COLORS = ['#6366f1', '#818cf8', '#06b6d4', '#22d3ee'];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.2
    };
  }

  function init() {
    resize();
    const count = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
    particles = Array.from({ length: count }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#6366f1';
          ctx.globalAlpha = (1 - dist / 120) * 0.15;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    animationId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      draw();
    }
  });

  init();
  draw();
}

/* ============================================
   Cursor Glow
   ============================================ */

function initCursorGlow() {
  const glow = $('#cursorGlow');
  if (!glow) return;

  const isDesktop = window.matchMedia('(pointer: fine)').matches;
  if (!isDesktop) return;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    glow.classList.add('visible');
  });

  document.addEventListener('mouseleave', () => {
    glow.classList.remove('visible');
  });

  function animate() {
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;
    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;
    requestAnimationFrame(animate);
  }

  animate();
}

/* ============================================
   Navigation
   ============================================ */

function initNav() {
  const nav = $('#nav');
  const navToggle = $('#navToggle');
  const navLinks = $('#navLinks');
  const links = $$('.nav-link');

  // Scroll state
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click
  links.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Active section tracking
  const sections = $$('section[id], header[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  sections.forEach((section) => observer.observe(section));
}

/* ============================================
   Animated Counter
   ============================================ */

function animateCounter(el) {
  const target = parseFloat(el.dataset.count, 10);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const value = target * eased;
    el.textContent = value.toFixed(decimals) + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counters = $$('.stat-value[data-count]');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  counters.forEach((counter) => {
    // Animate immediately if already in view at load (e.g. tall screens)
    if (isInViewport(counter)) {
      animateCounter(counter);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(counter);
  });
}

/* ============================================
   Reveal Animations
   ============================================ */

function initReveals() {
  const revealEls = $$('.section-header, .about-content, .about-sidebar, .timeline-item, .skill-card, .education-card, .certification-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => observer.observe(el));
}

/* ============================================
   Render Experience Timeline
   ============================================ */

function renderExperience() {
  const timeline = $('#timeline');
  if (!timeline) return;

  timeline.innerHTML = RESUME_DATA.experience.map((job, index) => `
    <article class="timeline-item" data-index="${index}">
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-card">
        <span class="timeline-period">${job.period}</span>
        <div class="timeline-company">
          <h3>${job.role}</h3>
          <span class="company">${job.company}</span>
        </div>
        <p class="timeline-location">📍 ${job.location}${job.agency ? ` · via ${job.agency}` : ''}</p>
        <ul class="timeline-bullets">
          ${job.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
        </ul>
        <div class="timeline-tech">
          ${job.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

/* ============================================
   Render Skills
   ============================================ */

function renderSkills() {
  const grid = $('#skillsGrid');
  if (!grid) return;

  grid.innerHTML = RESUME_DATA.skills.map((skill, index) => `
    <article class="skill-card" data-index="${index}">
      <div class="skill-card-header">
        <div class="skill-icon" aria-hidden="true">${skill.icon}</div>
        <div>
          <h3>${skill.name}</h3>
          <p class="skill-subtitle">${skill.subtitle}</p>
        </div>
      </div>
      <div class="skill-tags">
        ${skill.tags.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
      </div>
    </article>
  `).join('');

  // Add soft skills card
  grid.insertAdjacentHTML('beforeend', `
    <article class="skill-card" data-index="${RESUME_DATA.skills.length}">
      <div class="skill-card-header">
        <div class="skill-icon" aria-hidden="true">🤝</div>
        <div>
          <h3>Soft Skills</h3>
          <p class="skill-subtitle">Leadership & collaboration</p>
        </div>
      </div>
      <div class="skill-tags">
        ${RESUME_DATA.softSkills.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
      </div>
    </article>
  `);
}

/* ============================================
   Render Certifications
   ============================================ */

function renderCertifications() {
  const grid = $('#certificationsGrid');
  if (!grid) return;

  grid.innerHTML = RESUME_DATA.certifications.map((cert, index) => `
    <article class="certification-card" data-index="${index}">
      <div class="certification-icon" aria-hidden="true">${cert.icon}</div>
      <h3 class="certification-name">${cert.name}</h3>
      <p class="certification-issuer">${cert.issuer}</p>
    </article>
  `).join('');
}

/* ============================================
   Render Core Tech Tags
   ============================================ */

function renderCoreTech() {
  const container = $('#coreTechTags');
  if (!container) return;

  container.innerHTML = RESUME_DATA.coreTech
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join('');
}

/* ============================================
   Render Snapshot & Achievements (recruiter scan)
   ============================================ */

function renderSnapshot() {
  const grid = $('#snapshotGrid');
  if (!grid) return;

  grid.innerHTML = RESUME_DATA.snapshot.map((item) => `
    <div class="snapshot-item">
      <span class="snapshot-value">${item.value}</span>
      <span class="snapshot-label">${item.label}</span>
    </div>
  `).join('');
}

function renderAchievements() {
  const strip = $('#achievementStrip');
  if (!strip) return;

  strip.innerHTML = `
    <span class="strip-title">Key Impact</span>
    ${RESUME_DATA.achievements.map((a) => `
      <span class="achievement-chip">
        <strong>${a.metric}</strong> ${a.label}
      </span>
    `).join('')}
  `;
}

/* ============================================
   Contact Form
   ============================================ */

function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  const submitBtn = $('#submitBtn');
  const status = $('#formStatus');
  const toast = $('#toast');
  const toastMessage = $('.toast-message', toast);

  function showToast(message, type = 'success') {
    toast.classList.remove('show', 'success', 'error');
    void toast.offsetWidth; // restart animation
    toast.classList.add('show', type);
    toastMessage.textContent = message;
    toast.hidden = false;

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => { toast.hidden = true; }, 300);
    }, 4000);
  }

  function setInvalid(field, invalid) {
    field.classList.toggle('invalid', invalid);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const subject = $('#subject').value.trim();
    const message = $('#message').value.trim();

    // Validation
    let valid = true;
    if (!name) { setInvalid($('#name'), true); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setInvalid($('#email'), true); valid = false; }
    if (!message) { setInvalid($('#message'), true); valid = false; }

    if (!valid) {
      showToast('Please fill in all required fields correctly.', 'error');
      return;
    }

    // Loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    status.textContent = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        form.reset();
        showToast(`Thanks ${name.split(' ')[0]}! Your message has been sent.`);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (err) {
      // Fallback: open mail client
      const mailto = `mailto:${RESUME_DATA.email}?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.location.href = mailto;
      showToast('Opening your email app to send the message.', 'success');
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });

  // Clear invalid state on input
  ['name', 'email', 'message'].forEach((id) => {
    $('#' + id).addEventListener('input', (e) => setInvalid(e.target, false));
  });
}

/* ============================================
   Analytics Tracking (lightweight, privacy-friendly)
   ============================================ */

function initAnalytics() {
  // Track page view
  try {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'pageview',
        page: window.location.pathname,
        timestamp: new Date().toISOString()
      }),
      keepalive: true
    }).catch(() => {}); // silent fail
  } catch (e) {
    // ignore
  }
}

/* ============================================
   Initialize Everything
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initCursorGlow();
  initNav();
  // Render dynamic content FIRST so reveal observers can see the cards
  renderSnapshot();
  renderAchievements();
  renderExperience();
  renderSkills();
  renderCertifications();
  renderCoreTech();
  initCounters();
  initReveals();
  initContactForm();
  initAnalytics();
});