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

// Form: validazione base e feedback
(function () {
  const form = document.getElementById('contattoForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = form.querySelector('#nome').value.trim();
    const email = form.querySelector('#email').value.trim();
    const situazione = form.querySelector('#situazione').value.trim();

    if (!nome || !email || !situazione) {
      showMessage(form, 'Compila i campi obbligatori: Nome, Email e Situazione.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showMessage(form, 'Inserisci un indirizzo email valido.', 'error');
      return;
    }

    // Placeholder: sostituire con integrazione reale (MailerLite, Formspree, ecc.)
    showMessage(form, 'Messaggio inviato. Ti rispondo entro 24 ore.', 'success');
    form.reset();
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(form, text, type) {
    let msg = form.querySelector('.form__message');
    if (!msg) {
      msg = document.createElement('p');
      msg.className = 'form__message';
      form.appendChild(msg);
    }
    msg.textContent = text;
    msg.style.cssText = [
      'margin-top: 1rem',
      'padding: 0.75rem 1rem',
      'border-radius: 6px',
      'font-size: 0.9rem',
      'text-align: center',
      type === 'success'
        ? 'background:#e8f5e9;color:#2e7d32;border:1px solid #c8e6c9'
        : 'background:#fdecea;color:#c62828;border:1px solid #ffcdd2'
    ].join(';');

    if (type === 'success') {
      setTimeout(function () { msg.remove(); }, 6000);
    }
  }
})();
