# Funnel Lead & Tracking — ScuolaDiNetwork.com

## Architettura funnel

```
Form "Parliamo" su index.html (sezione #contatti)
    ↓
MailerLite Form 1, gruppo "Scuola di Network"
    ↓
Redirect → thank-you.html
    ↓
Meta Pixel: fbq('track', 'Lead')        ← browser-side
    ↓  [fase 2]
MailerLite webhook → n8n → Meta Conversions API  ← server-side

---

Popup lead magnet su index.html (compare dopo 9s, 1x/sessione)
    ↓
MailerLite "Lead Magnet - Template Lead Ad", gruppo dedicato, singolo opt-in
    ↓
Redirect → lead-magnet.html (template compilabile, consegna immediata)
```

**Deduplication:** usare lo stesso `event_id` su browser e server per evitare doppio conteggio in Meta.

## Tracking — stato attuale

- **GTM ID:** `GTM-WN82N9PX` — caricato SOLO dopo consenso cookie (Consent Mode v2 default `denied` + `window.loadGTM()`; niente `<noscript>`). Container ripulito dall'utente.
- **Meta Pixel ID:** `1515308506137464` — installato via codice (`window.loadPixel()`), gated dal consenso come GTM. `PageView` su `index.html` e `thank-you.html`; **`Lead`** solo su `thank-you.html` (flag `window.ML_TRACK_LEAD`). Niente `<noscript>` img. In futuro migrabile dentro GTM ora che è pulito.

## Lead magnet — popup

- **Contenuto:** `lead-magnet.html` — framework compilabile "Da zero a prima campagna in un weekend", in 3 fasi: copy (4 blocchi: aggancio, qualificazione, prova, CTA), creatività (checklist + 2 format pronti), lancio (checklist budget/targeting/monitoraggio). CTA finale doppia: form contatti + link community gratuita Skool.
- **Popup:** markup in `index.html` (`#lmPopup`), stile in `css/style.css` (blocco "POPUP LEAD MAGNET"), logica in `js/lead-magnet-popup.js` — compare 9s dopo il caricamento, una sola volta per sessione (`sessionStorage`), chiudibile con X/click sfondo/Esc.
- **Form MailerLite:** "Lead Magnet - Template Lead Ad" (embedded form, ID `192865015019078856`, shortcode `AZj25o`), gruppo dedicato "Lead Magnet - Template Lead Ad" (separato dal gruppo del form "Parliamo"), **singolo opt-in**, redirect custom a `https://scuoladinetwork.com/lead-magnet.html`. Embed nel popup: `<div class="ml-embedded" data-form="AZj25o"></div>` (si appoggia allo script universale MailerLite già presente in `index.html`).
- Verificato: il widget si carica nel popup, punta al form corretto (`action` con ID form coincidente), nessun errore console.

## Lead magnet — automazione email (MailerLite)

- **Nome:** "Lead Magnet - Sequenza Framework Weekend" (automazione MailerLite, **attiva**).
- **Trigger:** iscrizione al gruppo "Lead Magnet - Template Lead Ad".
- **Sequenza (5 email, giorni 0-2-4-6-8):**
  1. Giorno 0 — "Eccolo — e una cosa che devi sapere": consegna del framework + link a `lead-magnet.html`
  2. Giorno 2 — "Il networker che ha smesso di chiamare amici": storia/identificazione
  3. Giorno 4 — "Come ho generato i primi lead senza conoscere nessuno": caso reale (lancio in Francia)
  4. Giorno 6 — "La prima campagna che ha cambiato tutto": teaser corso "Lead Ad Masterclass" — **corso in preparazione**, non ancora in vendita
  5. Giorno 8 — "Il corso è in arrivo — vuoi essere tra i primi?": invito a farsi avanti per essere avvisati/tra i primi, non un acquisto diretto (CTA → form contatti `index.html#contatti`, non un checkout)
- **Nota importante:** nessuna delle email promette un acquisto immediato del corso — `corso-lead-ad.html` con pricing/checkout non esiste ancora (vedi roadmap in `PRD-ScuolaDiNetwork.md`). Quando la pagina di vendita sarà pronta, aggiornare Email 4 e 5 per riflettere la disponibilità reale.

## TODO tecnici aperti

- [x] Collegare il form contatti a MailerLite — widget embed (Form 1, gruppo "Scuola di Network"), redirect a `thank-you.html` configurato nel form. Dominio autenticato via DNS su Cloudflare (SPF unito, CNAME DKIM, TXT verifica). Campi: name, email, phone, situazione (custom field)
- [x] Creare `thank-you.html` con evento `fbq('track', 'Lead')` e stile brand
- [x] Inserire Meta Pixel ID reale in `index.html` e `thank-you.html` (gated dal consenso)
- [x] Sostituire `GTM-XXXXXXX` con ID reale su tutte le pagine (fatto su `index.html`; ripetere su nuove pagine quando create)
- [x] Banner cookie GDPR + gating GTM/Pixel al consenso (Consent Mode v2)
- [x] Lead magnet: template `lead-magnet.html` + popup + form MailerLite dedicato con redirect
- [x] Sequenza email 5 step per chi scarica il lead magnet — attiva in MailerLite (vedi sezione dedicata sopra)
- [ ] Fase 2: configurare n8n webhook tra MailerLite e Meta Conversions API
- [ ] Verificare che `img/tito-hero.jpg` esista (riferimento in `og:image`)
