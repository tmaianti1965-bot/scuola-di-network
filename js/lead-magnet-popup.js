/* ============================================================
   POPUP LEAD MAGNET
   Compare 9s dopo il caricamento della pagina, una sola volta
   per sessione (sessionStorage). Chiudibile con la X, click
   sullo sfondo o tasto Esc.
============================================================ */
(function () {
  var STORAGE_KEY = 'lm-popup-shown';
  var DELAY_MS = 9000;

  var popup = document.getElementById('lmPopup');
  if (!popup) return;

  var closeBtn = document.getElementById('lmPopupClose');

  function alreadyShown() {
    try { return sessionStorage.getItem(STORAGE_KEY) === '1'; } catch (e) { return false; }
  }

  function markShown() {
    try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
  }

  function show() {
    if (alreadyShown()) return;
    popup.classList.add('is-visible');
    markShown();
  }

  function hide() {
    popup.classList.remove('is-visible');
  }

  if (!alreadyShown()) {
    setTimeout(show, DELAY_MS);
  }

  if (closeBtn) closeBtn.addEventListener('click', hide);

  popup.addEventListener('click', function (e) {
    if (e.target === popup) hide();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popup.classList.contains('is-visible')) hide();
  });
})();
