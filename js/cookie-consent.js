/* ============================================================
   COOKIE CONSENT — banner GDPR + Consent Mode v2
   La scelta è salvata in localStorage['cookie-consent'] ('granted' | 'denied').
   Il caricamento di GTM è gestito nello snippet inline in <head> di ogni pagina
   (window.loadGTM / window.gtagConsentUpdate). Qui gestiamo solo la UI del banner.
============================================================ */
(function () {
  var STORAGE_KEY = 'cookie-consent';
  var banner = document.getElementById('cookieBanner');

  function store(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
  }

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function showBanner() { if (banner) banner.classList.add('is-visible'); }
  function hideBanner() { if (banner) banner.classList.remove('is-visible'); }

  function accept() {
    store('granted');
    if (typeof window.gtagConsentUpdate === 'function') {
      window.gtagConsentUpdate('granted');
    }
    hideBanner();
  }

  function reject() {
    store('denied');
    if (typeof window.gtagConsentUpdate === 'function') {
      window.gtagConsentUpdate('denied');
    }
    hideBanner();
  }

  // Mostra il banner solo se l'utente non ha ancora scelto
  if (!getStored()) { showBanner(); }

  if (banner) {
    var acceptBtn = banner.querySelector('[data-cookie="accept"]');
    var rejectBtn = banner.querySelector('[data-cookie="reject"]');
    if (acceptBtn) acceptBtn.addEventListener('click', accept);
    if (rejectBtn) rejectBtn.addEventListener('click', reject);
  }

  // Link "Gestisci cookie" nel footer → riapre il banner
  document.querySelectorAll('[data-cookie="manage"]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      showBanner();
    });
  });
})();
