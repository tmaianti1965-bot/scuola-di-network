# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Progetto

ScuolaDiNetwork.com — sito statico (HTML + CSS + JS vanilla), hostato su GitHub Pages. Dominio su Hostinger. Nessun build step, bundler o package manager.

**Deployment:** `git push origin main` → GitHub Pages pubblica automaticamente.  
**Preview locale:** `python -m http.server 8080` oppure apri `index.html` direttamente.

## Stack

- HTML / CSS / JS puro (no framework, no librerie)
- GitHub Pages (hosting)
- MailerLite (email funnel — in integrazione)
- Meta Pixel + GTM (tracking)
- n8n (Conversions API server-side — fase 2)

## Architettura

- `index.html` — unica pagina principale, single-scroll, 10 sezioni
- `thank-you.html` — pagina post-form (da creare), spara evento Meta `Lead`
- Pagine pianificate ma non ancora create (vedi roadmap in `PRD-ScuolaDiNetwork.md`): `titosofia.html`, `community.html`, `percorsi.html`, `corso-lead-ad.html`, `contatti.html`, `grazie.html`, `landing-ads.html`
- `css/style.css` — tutto il CSS, organizzato per sezione con `/* === NOME === */`
- `js/main.js` — tutto il JS, organizzato in IIFE indipendenti
- Logo e immagini hero nella root (non in `img/`) — percorsi sensibili, non spostare

**CSS:** usa sempre le variabili in `:root`, mai valori hardcoded.  
**JS pattern attivi:** nav scroll, hamburger, smooth scroll, IntersectionObserver fade-in, YouTube facade, form validation.

## Regole hard

- Mai usare valori CSS hardcoded — solo variabili `var(--*)` definite in `:root`
- Mai spostare i file immagine dalla root senza aggiornare tutti i riferimenti HTML
- GTM (`GTM-WN82N9PX`) e Meta Pixel (`1515308506137464`) NON partono al load: gated dietro consenso cookie (Consent Mode v2 default `denied` in `<head>`, caricati da `window.loadGTM()` / `window.loadPixel()` solo dopo "Accetta"). Niente `<noscript>` né img fallback (bypasserebbero il consenso). Evento `Lead` su `thank-you.html` via flag `window.ML_TRACK_LEAD` (vedi `agent_docs/funnel.md`)
- Cookie banner GDPR: markup `#cookieBanner` prima di `</body>` su ogni pagina + `js/cookie-consent.js`; scelta in `localStorage['cookie-consent']`; link "Gestisci cookie" (`[data-cookie="manage"]`) lo riapre
- SICUREZZA: la API key privata MailerLite e ogni segreto vivono SOLO in `.claude/secrets.md` (git-ignored). Mai inserirli nel frontend o in file tracciati. Il form usa il widget embed pubblico, non la chiave
- Il form contatti è il widget embed MailerLite (Form 1) in `index.html` — non modificare a mano i campi lì dentro, si gestiscono dal builder MailerLite (vedi `agent_docs/funnel.md`)

## Riferimenti

- Brand, palette, font, copy, vincoli visivi → `agent_docs/brand.md`
- Funnel lead, tracking Meta, TODO tecnici → `agent_docs/funnel.md`
- Link fissi (Skool, social) → `agent_docs/brand.md`
- Visione, target, funnel completo, pricing coaching, roadmap e pagine da costruire → `PRD-ScuolaDiNetwork.md`
- Credenziali (API key MailerLite, Group ID, GTM/Pixel ID) → `.claude/secrets.md` (locale, mai committato — non inserire mai valori reali qui)
