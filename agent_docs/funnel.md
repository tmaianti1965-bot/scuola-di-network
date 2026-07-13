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

- **GTM ID:** `GTM-WN82N9PX` — caricato SOLO dopo consenso cookie (Consent Mode v2 default `denied` + `window.loadGTM()`; niente `<noscript>`). Container esistente, da ripulire/verificare nell'interfaccia GTM. **Il Meta Pixel va aggiunto come tag DENTRO GTM** (così eredita il gating del consenso) oppure gated allo stesso modo lato pagina
- **Meta Pixel ID:** da inserire — dataset "Tito Ottorino Maianti" su Meta Business (ID: `1515308506137464` in `.claude/secrets.md`)
- **Evento da tracciare:** `Lead` — scatta alla visualizzazione di `thank-you.html`

## TODO tecnici aperti

- [x] Collegare il form contatti a MailerLite — widget embed (Form 1, gruppo "Scuola di Network"), redirect a `thank-you.html` configurato nel form. Dominio autenticato via DNS su Cloudflare (SPF unito, CNAME DKIM, TXT verifica). Campi: name, email, phone, situazione (custom field)
- [ ] Creare `thank-you.html` con evento `fbq('track', 'Lead')` e stile brand
- [ ] Inserire Meta Pixel ID reale in `index.html` e `thank-you.html`
- [x] Sostituire `GTM-XXXXXXX` con ID reale su tutte le pagine (fatto su `index.html`; ripetere su nuove pagine quando create)
- [ ] Fase 2: configurare n8n webhook tra MailerLite e Meta Conversions API
- [ ] Verificare che `img/tito-hero.jpg` esista (riferimento in `og:image`)
