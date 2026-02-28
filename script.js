/* ============================================
   CATALINA ARISTIZABAL — SCRIPTS
   ============================================ */

// === NAV: scroll effect ===
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// === NAV: mobile toggle (panel lateral izquierdo) ===
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');

function openMobileMenu() {
  mobileMenu.classList.add('open');
  mobileMenuOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileMenuOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (navToggle) {
  navToggle.addEventListener('click', openMobileMenu);
}
if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', closeMobileMenu);
}
if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

// Cerrar al hacer clic en un link del menú móvil
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// === Desplegable "Mis mundos" en menú móvil ===
const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
if (mobileDropdownToggle) {
  mobileDropdownToggle.addEventListener('click', () => {
    const parent = mobileDropdownToggle.closest('.mobile-item-dropdown');
    parent.classList.toggle('open');
  });
}

// === FADE IN on scroll ===
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = entry.target.closest('.mundos-grid')
        ? Array.from(fadeElements).indexOf(entry.target) * 80
        : 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeElements.forEach(el => observer.observe(el));

// === Smooth scroll ===
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

// === LANGUAGE SWITCHER ===
const translations = {
  es: {
    'nav.about': 'Sobre mi',
    'nav.worlds': 'Mis mundos',
    'hero.eyebrow': 'Una mirada profunda<br />hacia el equilibrio, la salud y la belleza consciente',
    'hero.tagline': 'Salud, belleza y consciencia<br />en un mismo camino.',
    'hero.cta': 'Explora mi mundo',
    'about.label': 'Sobre mi',
    'about.title': 'No llegue al bienestar<br />desde la teoria.',
    'about.p1': 'Llegue desde la experiencia. Durante años estudie el cuerpo femenino, las hormonas, la microbiota y los procesos internos que muchas veces no entendemos hasta que nos atraviesan. Mi propio diagnóstico de Hashimoto marcó un antes y un después. Me obligó a mirar hacia adentro, a cuestionar, a investigar y a construir un conocimiento con fundamento.',
    'about.p2': 'No creo en soluciones rápidas. Creo en comprensión profunda. Mi trabajo une ciencia, conciencia y experiencia real. He acompañado a mujeres que desean entender su cuerpo, recuperar su energía y vivir con mayor claridad. No desde la perfección, sino desde el equilibrio.',
    'about.p3': 'Soy fundadora de Terra Mística, autora y educadora en bienestar femenino. Pero más allá de los títulos, soy una mujer que decidió convertir el aprendizaje en servicio.',
    'about.frase': 'Mi enfoque no es imponer un camino. Es ofrecer claridad para que cada mujer pueda habitar su cuerpo con confianza. Porque la verdadera transformación ocurre cuando comprendemos quiénes somos y cómo funciona nuestro cuerpo.',
    'about.cta': 'Sígueme en Instagram',
    'worlds.label': 'Lo que hago',
    'worlds.title': 'Mis mundos',
    'worlds.desc': 'Cinco caminos hacia el bienestar, la consciencia y la belleza natural.',
    'worlds.course.tag': 'Curso online',
    'worlds.course.title': 'Belleza Natural',
    'worlds.course.desc': '6 módulos para transformar tu relación con tu cuerpo desde adentro. Nutrición, movimiento, meditación y más.',
    'worlds.course.cta': 'Ver curso',
    'worlds.youtube.tag': 'YouTube · Próximamente',
    'worlds.youtube.title': 'Nuevo Canal',
    'worlds.youtube.desc': 'Contenido sobre salud holística, estilo de vida consciente y bienestar. Suscíbete para ser el primero.',
    'worlds.youtube.cta': 'Suscríbete',
    'worlds.terra.tag': 'Tienda · Productos naturales',
    'worlds.terra.title': 'Terra Mística',
    'worlds.terra.desc': 'Co-fundadora de una línea de productos naturales para el bienestar y la belleza consciente.',
    'worlds.terra.cta': 'Explorar tienda',
    'worlds.book.tag': 'Libro',
    'worlds.book.title': 'Belleza Hormonal',
    'worlds.book.desc': 'Mi libro sobre el equilibrio hormonal, la belleza desde adentro y cómo entender tu cuerpo femenino para vivir mejor.',
    'worlds.book.cta': 'Conseguir libro',
    'worlds.podcast.tag': 'Podcast',
    'worlds.podcast.title': 'Conversaciones que Sanan',
    'worlds.podcast.desc': 'Conversaciones profundas que sanan el alma, la mente y el cuerpo. Disponible en Spreaker.',
    'quote.text': '"La salud no es solo lo que comes.<br />Es todo lo que piensas, sientes y cómo te mueves por la vida."',
    'ig.title': 'Únete a la comunidad',
    'ig.desc': 'Comparto recetas, reflexiones, movimiento y todo lo que me apasiona sobre vivir bien.',
    'ig.cta': 'Seguir en Instagram',
    'podcast.label': 'Escþchame',
    'podcast.title': 'Conversaciones que Sanan',
    'podcast.desc': 'Un podcast de conversaciones profundas que sanan el alma, la mente y el cuerpo.',
    'podcast.spotify': 'Escuchar en Spreaker',
    'podcast.name': 'Conversaciones que Sanan',
    'podcast.by': 'con Catalina Aristizabal',
    'footer.tagline': 'Health Coach · Empresaria · Escritora',
    'footer.copy': '2026 Catalina Aristizabal. Todos los derechos reservados.',
  },
  en: {
    'nav.about': 'About me',
    'nav.worlds': 'My worlds',
    'hero.eyebrow': 'A deep look<br />into balance, health and conscious beauty',
    'hero.tagline': 'Health, beauty and consciousness<br />on the same path.',
    'hero.cta': 'Explore my world',
    'about.label': 'About me',
    'about.title': 'I did not find wellness<br />through theory.',
    'about.p1': 'I found it through experience. For years I studied the female body, hormones, the microbiome and the internal processes we often do not understand until they hit us. My own Hashimoto diagnosis was a turning point. It forced me to look inward, to question, to research and to build knowledge with real foundation.',
    'about.p2': 'I do not believe in quick fixes. I believe in deep understanding. My work connects science, awareness and real experience. I have guided women who want to understand their bodies, recover their energy and live with greater clarity. Not from perfection, but from balance.',
    'about.p3': 'I am the founder of Terra Mistica, an author and educator in feminine wellness. But beyond the titles, I am a woman who chose to turn learning into service.',
    'about.frase': 'My approach is not to impose a path. It is to offer clarity so that every woman can inhabit her body with confidence. Because true transformation happens when we understand who we are and how our body works.',
    'about.cta': 'Follow me on Instagram',
    'worlds.label': 'What I do',
    'worlds.title': 'My worlds',
    'worlds.desc': 'Five paths toward wellness, consciousness and natural beauty.',
    'worlds.course.tag': 'Online course',
    'worlds.course.title': 'Natural Beauty',
    'worlds.course.desc': '6 modules to transform your relationship with your body from the inside out. Nutrition, movement, meditation and more.',
    'worlds.course.cta': 'View course',
    'worlds.youtube.tag': 'YouTube · Coming soon',
    'worlds.youtube.title': 'New Channel',
    'worlds.youtube.desc': 'Content about holistic health, conscious lifestyle and wellness. Subscribe to be the first to know.',
    'worlds.youtube.cta': 'Subscribe',
    'worlds.terra.tag': 'Shop · Natural products',
    'worlds.terra.title': 'Terra Mistica',
    'worlds.terra.desc': 'Co-founder of a line of natural products for wellness and conscious beauty.',
    'worlds.terra.cta': 'Explore shop',
    'worlds.book.tag': 'Book',
    'worlds.book.title': 'Hormonal Beauty',
    'worlds.book.desc': 'My book about hormonal balance, beauty from the inside out and how to understand your female body to live better.',
    'worlds.book.cta': 'Get the book',
    'worlds.podcast.tag': 'Podcast',
    'worlds.podcast.title': 'Conversaciones que Sanan',
    'worlds.podcast.desc': 'Deep conversations that heal the soul, mind and body. Available on Spreaker.',
    'quote.text': '"Health is not just what you eat.<br />It is everything you think, feel and how you move through life."',
    'ig.title': 'Join the community',
    'ig.desc': 'I share recipes, reflections, movement and everything I am passionate about when it comes to living well.',
    'ig.cta': 'Follow on Instagram',
    'podcast.label': 'Listen to me',
    'podcast.title': 'Conversaciones que Sanan',
    'podcast.desc': 'A podcast of deep conversations that heal the soul, mind and body.',
    'podcast.spotify': 'Listen on Spreaker',
    'podcast.name': 'Conversaciones que Sanan',
    'podcast.by': 'with Catalina Aristizabal',
    'footer.tagline': 'Health Coach · Entrepreneur · Author',
    'footer.copy': '2026 Catalina Aristizabal. All rights reserved.',
  }
};

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

const savedLang = localStorage.getItem('lang') || 'es';
applyLanguage(savedLang);
