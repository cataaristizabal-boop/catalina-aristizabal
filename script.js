/* ============================================
   CATALINA ARISTIZABAL — SCRIPTS
   ============================================ */

// === NAV: scroll effect + pills ===
const nav = document.getElementById('nav');
const navPills = document.getElementById('navPills');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  nav.classList.toggle('scrolled', scrolled);
  if (navPills) navPills.classList.toggle('visible', scrolled);
}, { passive: true });

// === NAV: mobile toggle ===
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Cerrar menu al hacer click en un link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// === FADE IN on scroll ===
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger effect para grids
      const delay = entry.target.closest('.mundos-grid')
        ? Array.from(fadeElements).indexOf(entry.target) * 80
        : 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// === PILLS — filtrado editorial ===
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    const filter = pill.dataset.filter;

    document.querySelectorAll('.pill').forEach(p => {
      p.classList.toggle('active', p.dataset.filter === filter);
    });

    document.querySelectorAll('.article-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'todas' && card.dataset.category !== filter);
    });

    if (filter !== 'todas') {
      const editorial = document.getElementById('editorial');
      if (editorial) {
        const top = editorial.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  });
});

// === Smooth scroll para links internos ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
