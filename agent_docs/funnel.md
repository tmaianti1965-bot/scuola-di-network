# Funnel Lead & Tracking — ScuolaDiNetwork.com

## Architettura funnel

```
Form su index.html (sezione #contatti)
    ↓
MailerLite (raccoglie lead + avvia sequenza email)
    ↓
Redirect → thank-you.html
    ↓
Meta Pixel: fbq('track', 'Lead')        ← browser-side
    ↓  [fase 2]
MailerLite webhook → n8n → Meta Conversions API  ← server-side
```

**Deduplication:** usare lo stesso `event_id` su browser e server per evitare doppio conteggio in Meta.

## Tracking — stato attuale

- **GTM ID:** `GTM-WN82N9PX` — caricato SOLO dopo consenso cookie (Consent Mode v2 default `denied` + `window.loadGTM()`; niente `<noscript>`). Container ripulito dall'utente.
- **Meta Pixel ID:** `1515308506137464` — installato via codice (`window.loadPixel()`), gated dal consenso come GTM. `PageView` su `index.html` e `thank-you.html`; **`Lead`** solo su `thank-you.html` (flag `window.ML_TRACK_LEAD`). Niente `<noscript>` img. In futuro migrabile dentro GTM ora che è pulito.

## TODO tecnici aperti

- [x] Collegare il form contatti a MailerLite — widget embed (Form 1, gruppo "Scuola di Network"), redirect a `thank-you.html` configurato nel form. Dominio autenticato via DNS su Cloudflare (SPF unito, CNAME DKIM, TXT verifica). Campi: name, email, phone, situazione (custom field)
- [x] Creare `thank-you.html` con evento `fbq('track', 'Lead')` e stile brand
- [x] Inserire Meta Pixel ID reale in `index.html` e `thank-you.html` (gated dal consenso)
- [x] Sostituire `GTM-XXXXXXX` con ID reale su tutte le pagine (fatto su `index.html`; ripetere su nuove pagine quando create)
- [x] Banner cookie GDPR + gating GTM/Pixel al consenso (Consent Mode v2)
- [ ] Fase 2: configurare n8n webhook tra MailerLite e Meta Conversions API
- [ ] Verificare che `img/tito-hero.jpg` esista (riferimento in `og:image`)
