# Tito Maianti — Scuola di Network / Autonomia Digitale

## Identità del brand

**Nome sito:** ScuolaDiNetwork.com  
**Tagline:** Apriamo il computer. Facciamo insieme.  
**Posizionamento:** Consulente marketing con 30 anni di esperienza nel network marketing e nel direct response. Non vende corsi — lavora fianco a fianco con il cliente, schermo condiviso, mouse in mano.  
**Tono:** Autorevole ma diretto. Mai accademico. Mai da guru. La voce di chi ha già fatto tutto sul campo e ora lo insegna senza filtri.

---

## Brand Identity visiva

### Font
- **Titoli:** Playfair Display (Google Fonts) — elegante, autorevole, italiano
- **Testo corpo:** DM Sans (Google Fonts) — pulito, leggibile, moderno
- **Accenti / numeri:** DM Mono — per dati, prezzi, statistiche

### Colori
```
--color-primary:     #1B2B5E   /* Blu notte — autorevolezza */
--color-accent:      #C9A84C   /* Oro — 30 anni di expertise */
--color-dark:        #0F1A3A   /* Blu profondo — sfondo sezioni scure */
--color-light:       #F8F6F1   /* Crema calda — sfondo sezioni chiare */
--color-text:        #1A1A1A   /* Quasi nero */
--color-text-muted:  #5C6070   /* Grigio medio */
--color-red-old:     #C0392B   /* Rosso attuale — da usare solo per elementi negativi (le 3 dipendenze) */
```

### Stile visivo
- Layout: ampio respiro, sezioni alternate chiaro/scuro
- Immagini: foto reali di Tito, niente stock generico
- Icone: minimal, line-style
- Angoli: nessun border-radius esagerato — max 8px
- Niente gradients colorati — solo overlay scuri sulle foto

---

## Struttura del sito (homepage)

### 1. HERO
- Headline principale: **"Apriamo il computer. Facciamo insieme."**
- Subheadline: "Niente corsi da guardare. Mi siedo accanto a te, condivido il tuo schermo e costruiamo il tuo sistema di contatti insieme."
- CTA primaria: **"Entra gratis nella community"** → link Skool
- CTA secondaria: **"Guarda come funziona"** → ancora al video
- Sfondo: foto Tito in ufficio, overlay blu scuro

### 2. IL PROBLEMA (sezione scura)
- Titolo: "Il problema dei networker oggi"
- Le 3 dipendenze (mantenere il rosso qui — è l'unico uso del colore aggressivo):
  - Dipendente dall'upline
  - Dipendente dalla lista nomi
  - Dipendente dalla fortuna

### 3. VIDEO + PROMESSA
- Video YouTube integrato
- Testo affiancato: la promessa differenziante

### 4. CHI È TITO (sezione crema)
- Foto professionale
- Bio sintetica: 30 anni, 2 aziende scalate, reinventato in Francia senza conoscenze, oggi insegna la stessa indipendenza
- NON una lista di titoli — una storia in 4 righe

### 5. COMMUNITY SKOOL (sezione blu notte)
- Titolo: "Entra nella community gratuita"
- 3 benefit dell'entrare
- CTA: "Entra gratis ora" → link Skool

### 6. I PERCORSI (prezzi)
- I 3 livelli: Partenza Rapida / Acceleratore Pro / Partnership Elite
- Prima dei prezzi: una frase di posizionamento che scalda

### 7. COSA SVILUPPERAI
- I 7 punti (già presenti nel sito attuale — sono buoni)

### 8. LA SCUOLA NON È PER TE
- Le 6 card negative (già presenti — funzionano bene)

### 9. TESTIMONIAL
- Recensioni Google (già presenti)

### 10. CTA FINALE + FORM
- Titolo meno frenante: "Parliamo — raccontami la tua situazione"
- Form semplificato: Nome, Email, Tel, Situazione
- Rimuovere la mappa

---

## Copy — Regole fondamentali

- **Stile:** Direct response con sensibilità italiana. Elegante, mai aggressivo.
- **Framework Schwartz:** Il pubblico è a livello 3 (Solution Aware) — sa che esistono strumenti digitali, non conosce ancora Tito
- **Mai usare:** "rivoluzionario", "incredibile", "il segreto che nessuno ti dice"
- **Sempre usare:** verbi concreti, numeri specifici, la storia vera di Tito
- **CTA:** Mai "Acquista ora" — sempre "Entra", "Scopri", "Parliamo", "Inizia"
- **Frase chiave del brand:** "Mi siedo accanto a te" — usarla come ancore nel testo

---

## Target

**Pubblico primario:** Networker con 1-5 anni di esperienza, delusi dai metodi tradizionali (lista nomi, telefonate a freddo), cercano un sistema digitale ma non sanno da dove iniziare.

**Pubblico secondario:** Chi ha già provato corsi online e non ha ottenuto risultati — diffidenti, da conquistare con credibilità e dimostrazione pratica.

**Livello consapevolezza Schwartz:** 3 — Solution Aware  
**Età:** 30-55  
**Sesso:** misto, leggera prevalenza femminile  
**Pain principale:** Dipendenza dall'upline, lista nomi esaurita, risultati casuali

---

## Funnel collegato

```
Sito (traffico freddo)
    ↓
CTA "Entra gratis" → Skool Community Free
    ↓
Nurture nella community (contenuti, live, Q&A)
    ↓
Skool Paid → Autonomia Digitale (€397-897/mese)
    ↓
Coaching 1:1 (pacchetti premium)
```

---

## Integrazioni tecniche

- **Analytics:** Google Tag Manager (snippet nell'header, gestisce tutto)
- **Pixel:** Meta Pixel via GTM
- **Video:** YouTube embed (no autoplay)
- **Form:** Form nativo HTML → collegare a CRM o email
- **Community:** Link esterno a Skool
- **Hosting:** GitHub Pages (sito statico)
- **Dominio:** scuoladinetwork.com (rinnovare solo dominio su Hostinger, puntare a GitHub Pages)

---

## File e cartelle del progetto

```
ScuolaDiNetwork/
├── CLAUDE.md              ← questo file
├── index.html             ← homepage
├── titosofia.html         ← pagina Titosofia
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
│   ├── tito-hero.jpg
│   ├── tito-profilo.jpg
│   └── logo.png
└── README.md
```

---

## Note per Claude Code

Quando lavori su questo progetto:
1. Leggi sempre questo file prima di scrivere qualsiasi codice
2. Usa i font da Google Fonts (Playfair Display + DM Sans)
3. Mantieni la palette colori definita sopra
4. Il sito è statico — niente PHP, niente database
5. GTM va inserito nell'`<head>` e prima del `</body>` di ogni pagina
6. Ottimizza per mobile-first
7. Il tono del copy è autorevole e diretto — mai generico
