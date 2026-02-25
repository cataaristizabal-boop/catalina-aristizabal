// NAV scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Fade in
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => observer.observe(el));

// ============================================
//   IDIOMA / LANGUAGE TOGGLE
// ============================================
const i18n = {
  es: {
    'nav-cta':        'Inscríbete ya',
    'hero-title':     'Transforma tus hábitos<br />desde adentro',
    'hero-tagline':   'Un programa de bienestar femenino para vivir con más calma, coherencia y vitalidad.',
    'hero-cta':       '✨ Quiero empezar mi proceso',
    'impact-text':    'No es otro curso de salud. Es el proceso que te ayuda a construir una relación más honesta con tu cuerpo, tu energía y tu vida diaria.',
    'pq-label':       'Tal vez estás en un momento donde…',
    'pq-title':       'Sabes que quieres cuidarte mejor.',
    'pq-p1':          'No desde la exigencia, sino desde el deseo de sentirte más clara, más presente, más en paz con tu cuerpo.',
    'pq-p2':          'Has leído, probado, intentado… pero algo dentro de ti sabe que lo que necesitas no es más información. Necesitas un proceso. Un lugar donde todo tenga sentido.',
    'pq-cta':         '✨ Quiero empezar mi proceso',
    'mod-label':      'Qué es Belleza Natural',
    'mod-title':      'Un programa real de bienestar consciente',
    'mod-desc':       'Diseñado para acompañarte paso a paso a transformar tu relación contigo misma. A través de seis módulos aprenderás a:',
    'mod-01-title':   'Disciplina en la Práctica',
    'mod-01-desc':    'Vivir la disciplina como un acto de conciencia, no de esfuerzo.',
    'mod-02-title':   'Belleza Natural',
    'mod-02-desc':    'Cuidar tu cuerpo con sabiduría y aceptar el paso del tiempo desde un lugar de paz.',
    'mod-03-title':   'Nutrición Inteligente',
    'mod-03-desc':    'Nutrir tu energía con inteligencia, sin dietas ni restricciones.',
    'mod-04-title':   'Cocina Saludable',
    'mod-04-desc':    'Cocinar de forma simple y sustentable en tu vida real.',
    'mod-05-title':   'Movimiento Esencial',
    'mod-05-desc':    'Mover tu cuerpo para activar vitalidad, no para castigarte.',
    'mod-06-title':   'Integración',
    'mod-06-desc':    'Integrar todo en un estilo de vida que se sienta tuyo.',
    'bonos-label':    'Además incluye',
    'bonos-title':    'Tres bonos especiales',
    'bono-1-title':   'Tone Up Facial',
    'bono-1-desc':    'Yoga facial para relajar, tonificar y estimular la circulación de tu rostro naturalmente.',
    'bono-2-title':   'Jugoterapia',
    'bono-2-desc':    '10 recetas de jugos, batidos y extractos para nutrir tu cuerpo desde adentro con ingredientes reales.',
    'bono-3-title':   '30 Ingredientes Poderosos',
    'bono-3-desc':    'Los alimentos que retardan el envejecimiento y transforman tu salud de forma natural y consciente.',
    'cat-label':      'Tu guía',
    'cat-quote':      '"No llegué al bienestar desde la teoría.<br />Llegué desde la experiencia."',
    'cat-p1':         'Colombiana, madre, empresaria y educadora en bienestar femenino. Durante años estudié el cuerpo femenino desde adentro — hormonas, microbiota, hábitos — y convertí ese conocimiento en un método que ya ha transformado a cientos de mujeres.',
    'cat-p2':         'Mi propio diagnóstico de Hashimoto me obligó a mirar hacia adentro, a cuestionar, a investigar y a construir un conocimiento con fundamento real.',
    'cat-p3':         'No te enseño lo que leí en un libro. Te enseño lo que viví en mi propio cuerpo.',
    'detail-1-title': '100% digital',
    'detail-1-desc':  'Accede desde donde estés, en el momento que quieras.',
    'detail-2-title': '1 año de acceso',
    'detail-2-desc':  'Con todo el contenido nuevo y actualizaciones incluidas.',
    'detail-3-title': 'Plataforma Hotmart',
    'detail-3-desc':  'Procesamiento seguro y acceso inmediato al inscribirte.',
    'detail-4-title': 'Garantía 7 días',
    'detail-4-desc':  'Reembolso del 100% si no es lo que esperabas. Sin preguntas.',
    'cta-label':      'Lo que cambia en ti',
    'cta-title':      'No sales con una lista de cosas por hacer.',
    'cta-p1':         'Sales con claridad, con calma, con hábitos que se sostienen y con una relación más amable y coherente con tu propio cuerpo.',
    'cta-p2':         'Porque la verdadera transformación no ocurre cuando intentas ser otra persona.<br />Ocurre cuando empiezas a habitarte con coherencia.',
    'cta-price-note': 'Acceso por 1 año · 100% digital',
    'cta-btn':        '🌿 Quiero empezar mi proceso',
    'cta-guarantee':  '✦ Garantía de devolución total en 7 días',
    'footer-home':    'Inicio',
  },
  en: {
    'nav-cta':        'Enroll now',
    'hero-title':     'Transform your habits<br />from within',
    'hero-tagline':   'A feminine wellness program to live with more calm, coherence, and vitality.',
    'hero-cta':       '✨ I want to start my journey',
    'impact-text':    "This isn't another health course. It's the process that helps you build a more honest relationship with your body, your energy, and your daily life.",
    'pq-label':       "Maybe you're at a point where…",
    'pq-title':       'You know you want to take better care of yourself.',
    'pq-p1':          'Not from pressure, but from the desire to feel clearer, more present, more at peace with your body.',
    'pq-p2':          "You've read, tried, attempted… but something inside you knows that what you need isn't more information. You need a process. A place where everything makes sense.",
    'pq-cta':         '✨ I want to start my journey',
    'mod-label':      'What is Belleza Natural',
    'mod-title':      'A real conscious wellness program',
    'mod-desc':       'Designed to guide you step by step in transforming your relationship with yourself. Through six modules you will learn to:',
    'mod-01-title':   'Discipline in Practice',
    'mod-01-desc':    'Live discipline as an act of awareness, not effort.',
    'mod-02-title':   'Natural Beauty',
    'mod-02-desc':    'Care for your body with wisdom and embrace the passage of time from a place of peace.',
    'mod-03-title':   'Smart Nutrition',
    'mod-03-desc':    'Nourish your energy intelligently, without diets or restrictions.',
    'mod-04-title':   'Healthy Cooking',
    'mod-04-desc':    'Cook simply and sustainably in your real life.',
    'mod-05-title':   'Essential Movement',
    'mod-05-desc':    'Move your body to activate vitality, not to punish yourself.',
    'mod-06-title':   'Integration',
    'mod-06-desc':    'Integrate everything into a lifestyle that feels like yours.',
    'bonos-label':    'Also includes',
    'bonos-title':    'Three special bonuses',
    'bono-1-title':   'Tone Up Facial',
    'bono-1-desc':    'Facial yoga to relax, tone, and stimulate circulation in your face naturally.',
    'bono-2-title':   'Juice Therapy',
    'bono-2-desc':    '10 juice, smoothie, and extract recipes to nourish your body from within with real ingredients.',
    'bono-3-title':   '30 Powerful Ingredients',
    'bono-3-desc':    'The foods that slow aging and transform your health naturally and consciously.',
    'cat-label':      'Your guide',
    'cat-quote':      '"I didn\'t arrive at wellness through theory.<br />I arrived through experience."',
    'cat-p1':         'Colombian, mother, entrepreneur and educator in feminine wellness. For years I studied the female body from the inside — hormones, microbiome, habits — and turned that knowledge into a method that has already transformed hundreds of women.',
    'cat-p2':         "My own Hashimoto's diagnosis forced me to look inward, to question, to research and to build knowledge with a real foundation.",
    'cat-p3':         "I don't teach you what I read in a book. I teach you what I lived in my own body.",
    'detail-1-title': '100% digital',
    'detail-1-desc':  'Access from wherever you are, whenever you want.',
    'detail-2-title': '1 year of access',
    'detail-2-desc':  'Including all new content and updates.',
    'detail-3-title': 'Hotmart Platform',
    'detail-3-desc':  'Secure processing and immediate access upon enrollment.',
    'detail-4-title': '7-day Guarantee',
    'detail-4-desc':  "100% refund if it's not what you expected. No questions asked.",
    'cta-label':      'What changes in you',
    'cta-title':      "You don't leave with a to-do list.",
    'cta-p1':         'You leave with clarity, calm, habits that last, and a kinder, more coherent relationship with your own body.',
    'cta-p2':         "Because true transformation doesn't happen when you try to be someone else.<br />It happens when you start inhabiting yourself with coherence.",
    'cta-price-note': '1 year access · 100% digital',
    'cta-btn':        '🌿 I want to start my journey',
    'cta-guarantee':  '✦ Full refund guarantee within 7 days',
    'footer-home':    'Home',
  }
};

let currentLang = 'es';

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });
  currentLang = lang;
  document.documentElement.lang = lang;
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
}

function toggleLang() {
  setLanguage(currentLang === 'es' ? 'en' : 'es');
}
