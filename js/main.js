/* ============================================================
   SCUOLA DI NETWORK — main.js
============================================================ */

// Nav: scroll effect + mobile toggle
(function () {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  toggle.addEventListener('click', function () {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Chiudi menu al click su un link
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
})();

// Smooth scroll per le ancore interne
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = document.getElementById('nav').offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
});

// Fade-in on scroll
(function () {
  const targets = document.querySelectorAll(
    '.dipendenza, .community__benefit, .percorso, .svilupperai__item, ' +
    '.non-per-te__card, .testimonianza, .tito__numero'
  );

  targets.forEach(function (el) { el.classList.add('fade-in'); });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) { observer.observe(el); });
})();

// YouTube facade: sostituisce copertina con iframe al click
(function () {
  var facade = document.getElementById('ytFacade');
  if (!facade) return;

  facade.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var wrapper = facade.parentNode;
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/gdaphi_EpzM?autoplay=1&rel=0');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    iframe.style.width = '100%';
    iframe.style.height = '500px';
    iframe.style.display = 'block';
    wrapper.replaceChild(iframe, facade);
  });
})();

// Nota: il form contatti è gestito dal widget embed MailerLite (Form 1)
// caricato via script in index.html — nessuna validazione JS custom necessaria qui.
