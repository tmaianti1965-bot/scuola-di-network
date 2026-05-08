# PRD — Scuola di Network / Tito Maianti
**Product Requirements Document v1.0**  
Data: Maggio 2026  
Autore: Tito Maianti  
Stato: In sviluppo

---

## 1. VISIONE E OBIETTIVI

### Visione a 12 mesi
Costruire un ecosistema digitale autonomo e prevedibile che generi:
- 6 clienti coaching Elite attivi e costanti (€897/mese cadauno)
- Entrate passive da prodotto digitale a €19
- Tempo libero per formazione e studio personale

### Obiettivi misurabili
| Obiettivo | Target 12 mesi |
|---|---|
| Clienti Elite attivi | 6 |
| Entrate coaching mensili | €5.382/mese |
| Iscritti Skool Free | 500+ |
| Vendite corso €19/mese | 50+ |
| Entrate passive mensili | €950+/mese |
| Lista email MailerLite | 1.000+ |

### Entrate totali target
€5.382 (coaching) + €950 (prodotto) = **€6.332/mese**

---

## 2. TARGET E PSICOGRAFIA

### Pubblico primario
**Chi sono:** Networker con 1-5 anni di esperienza, delusi dai metodi tradizionali.

**Pain principale:** Dipendenza dall'upline, lista nomi esaurita, risultati casuali, zero sistema digitale.

**Desiderio dichiarato:** "Voglio contatti qualificati senza chiamare amici e parenti."

**Desiderio reale:** Indipendenza, prevedibilità, dignità professionale.

**Livello Schwartz:** 3 — Solution Aware  
Sa che esistono strumenti digitali, non conosce ancora Tito e il suo metodo.

### Pubblico secondario
**Chi sono:** Chi ha già comprato corsi online senza risultati. Diffidenti, stanchi di promesse.

**Chiave per convertirli:** Dimostrazione pratica, non promesse. "Apriamo il computer insieme."

### Dati demografici
- Età: 30-55 anni
- Sesso: misto, leggera prevalenza femminile
- Geografia: Italia
- Strumenti: Facebook, Instagram, WhatsApp

---

## 3. ECOSISTEMA E FUNNEL COMPLETO

### Mappa dell'ecosistema
```
TRAFFICO
├── Organico (post, Reel, YouTube)
├── Paid (Meta Ads)
└── Referral (passaparola clienti Elite)
        ↓
SITO scuoladinetwork.com
(prima impressione, qualifica, credibilità)
        ↓
LEAD MAGNET GRATIS
"I 3 errori che fanno fallire ogni Lead Ad di un networker"
PDF 5 pagine — scaricabile subito
        ↓
SKOOL FREE — Community gratuita
(nurture, valore, fiducia, relazione)
        ↓
CORSO €19 — "Lead Ad Masterclass"
(primo acquisto, shock di valore, porta verso Elite)
        ↓
COACHING ELITE €897/mese
(trasformazione completa, 6 mesi, lavoro fianco a fianco)
        ↓
[FUTURO] Alumni / Manutenzione / Rinnovo
```

### Logica psicologica del funnel
Ogni step deve lasciare il prospect con una sola sensazione:
**"Non vedo l'ora di vedere cosa c'è al livello successivo."**

- **Skool Free** → "Tito dà valore gratis. Mi fido."
- **Corso €19** → "Questo vale 10 volte quello che ho pagato. Chi è questo?"
- **Elite €897** → "Voglio lavorare con lui direttamente."

---

## 4. SITO WEB — scuoladinetwork.com

### Stack tecnico
- **Tipo:** Sito statico (HTML + CSS + JS)
- **Hosting:** GitHub Pages (gratuito)
- **Dominio:** scuoladinetwork.com (rinnovare solo dominio su Hostinger, puntare DNS a GitHub Pages)
- **Analytics:** Google Tag Manager (gestisce tutto)
- **Pixel:** Meta Pixel via GTM
- **Email:** MailerLite (integrazione form)
- **Video:** YouTube embed

### Brand Identity
- **Font titoli:** Playfair Display (Google Fonts)
- **Font testo:** DM Sans (Google Fonts)
- **Colore primario:** #1B2B5E (blu notte)
- **Colore accento:** #C9A84C (oro)
- **Colore scuro:** #0F1A3A (blu profondo)
- **Sfondo chiaro:** #F8F6F1 (crema calda)
- **Testo:** #1A1A1A
- **Rosso (solo elementi negativi):** #E24B4A

### Pagine da costruire
| Pagina | File | Priorità | Stato |
|---|---|---|---|
| Homepage | index.html | Alta | ✅ Mockup approvato |
| Titosofia | titosofia.html | Media | Da fare |
| Community Skool | community.html | Alta | Da fare |
| Percorsi | percorsi.html | Alta | Da fare |
| Corso €19 | corso-lead-ad.html | Alta | Da fare |
| Contatti | contatti.html | Media | Da fare |
| Pagina Grazie | grazie.html | Alta | Da fare |
| Landing Ads | landing-ads.html | Alta | Da fare |

### Struttura Homepage (approvata)
1. Nav
2. Hero — headline + CTA Skool + CTA video
3. Il problema — 3 dipendenze (rosso)
4. Video YouTube
5. Chi è Tito
6. Community Skool (sezione blu)
7. I 3 percorsi / prezzi
8. Cosa svilupperai in 6 mesi
9. La scuola non è per te
10. Testimonianze Google
11. Form contatti finale
12. Footer

### CTA principali
- **CTA primaria:** "Entra gratis nella community" → Skool Free
- **CTA secondaria:** "Guarda come funziona" → ancora video
- **CTA coaching:** "Parliamo — raccontami la tua situazione" → form

---

## 5. SKOOL FREE — Community Gratuita

### Obiettivo
Trasformare lead freddi in prospect caldi attraverso valore costante e relazione diretta con Tito.

### Nome community (da definire)
Opzioni:
- "Networker Autonomi"
- "Autonomia Digitale — Community"
- "Scuola di Network di Tito Maianti"

### Struttura contenuti
| Sezione | Contenuto | Frequenza |
|---|---|---|
| Benvenuto | Video intro + regole community | Una volta |
| Risorse | Template, checklist, guide PDF | Crescente |
| Discussioni | Q&A, casi reali, feedback | Quotidiana |
| Live con Tito | Sessione pratica mensile | Mensile |
| Moduli preview | Primi 2 moduli del corso €19 | Fisso |

### Flusso di onboarding
1. Iscritto entra in Skool
2. Riceve messaggio di benvenuto automatico
3. Vede i primi 2 moduli del corso €19
4. Invito a presentarsi nella community
5. Dopo 7 giorni: offerta corso completo a €19

### Regole community
- No spam, no promozioni di altri prodotti
- Domande benvenute, giudizi no
- Tito risponde entro 48h

---

## 6. CORSO €19 — "Lead Ad Masterclass"

### Posizionamento
**Shock di valore:** Dare così tanto a €19 che il prospect pensi "se questo è a €19... cosa mi darà a €897?"

### Titolo (opzioni)
- "Lead Ad in 60 Minuti"
- "La Prima Campagna — Lead Ad Masterclass"
- "Contatti Qualificati con Meta — Senza Landing Page"

### Proposta di valore
Crea la tua prima campagna Meta Lead Ad che genera contatti qualificati — senza landing page, senza pixel, senza tecnicismi. Apriamo Ads Manager insieme.

### Perché Lead Ads
- Zero landing page da costruire
- Zero pixel da installare
- Form si compila con dati già nel profilo Facebook
- Tasso di conversione più alto degli ads tradizionali
- Costo per lead spesso più basso
- Perfetto per networker con poca esperienza tecnica

### Struttura moduli
**Modulo 1 — Il Form**
- Domande dirette vs risposta multipla
- Come filtrare lead qualificati già nel form
- Le domande che spaventano i lead inutili
- Campi obbligatori vs facoltativi

**Modulo 2 — Copy**
- Livelli di consapevolezza Schwartz applicati alle ads
- "Scopri di più" vs "Acquista ora" — quando e perché
- Headline che fermano lo scroll
- CTA in base al livello di consapevolezza del pubblico
- Errori di copy che bruciano budget

**Modulo 3 — Creatività**
- Immagine statica — quando funziona e come crearla
- Video lungo — storytelling e autorevolezza
- Video breve — hook nei primi 3 secondi
- Carosello — educazione e confronto
- Come scegliere il formato giusto per l'obiettivo

**Modulo 4 — Target**
- Audience fredda vs calda
- Interessi specifici per il network marketing
- Lookalike dai contatti esistenti
- Esclusioni intelligenti

**Modulo 5 — Lancio Live con Tito**
- Apriamo Ads Manager insieme (schermata condivisa)
- Configurazione campagna step by step
- Leggere i dati che contano
- Quando ottimizzare e quando fermare

### Piattaforma
Skool (sezione corsi) — accesso immediato dopo acquisto

### Prezzo
€19 — pagamento unico, accesso a vita

### Upsell post-acquisto
Pagina di ringraziamento con offerta morbida al coaching Elite

---

## 7. LEAD MAGNET GRATUITO

### Titolo
"I 3 errori che fanno fallire ogni Lead Ad di un networker"

### Formato
PDF 5 pagine — scaricabile subito, si legge in 10 minuti

### Contenuto
- Errore 1: Form troppo lungo che spaventa il lead
- Errore 2: Copy generico che non qualifica
- Errore 3: Target sbagliato — cercare tutti, trovare nessuno
- Bonus: checklist pre-lancio in 1 pagina

### Distribuzione
- Sito web (popup o sezione dedicata)
- Bio Instagram/Facebook
- Skool (risorsa benvenuto)

### Integrazione MailerLite
Chi scarica il PDF entra automaticamente in MailerLite → sequenza email automatica

---

## 8. SEQUENZA EMAIL — MailerLite

### Strumento
MailerLite (gratuito fino a 1.000 iscritti)

### Sequenza post lead magnet (5 email)
| Email | Giorno | Oggetto | Obiettivo |
|---|---|---|---|
| 1 | 0 | "Eccolo — e una cosa che devi sapere" | Consegna PDF + prima impressione |
| 2 | 2 | "Il networker che ha smesso di chiamare amici" | Storia + identificazione |
| 3 | 4 | "Come ho generato i primi lead senza conoscere nessuno" | Credibilità Tito + caso reale |
| 4 | 6 | "La prima campagna che ha cambiato tutto" | Teaser corso €19 |
| 5 | 8 | "Entra — costa meno di un caffè al bar" | Offerta corso €19 |

### Sequenza post acquisto €19 (3 email)
| Email | Giorno | Obiettivo |
|---|---|---|
| 1 | 0 | Benvenuto + accesso corso |
| 2 | 7 | "Com'è andata? Hai già lanciato?" |
| 3 | 14 | Invito call conoscitiva coaching Elite |

---

## 9. COACHING ELITE — I 3 PACCHETTI

### Partenza Rapida — €397/mese
- Contratto 6 mesi (anticipato €1.997)
- Setup completo in videocall
- 1 coaching ogni 15 giorni (60 min)
- Elementor Pro incluso
- Creazione prima landing page
- Creazione prima campagna Meta
- Accesso registrazioni coaching

### Acceleratore Pro — €597/mese ⭐ Più scelto
- Contratto 6 mesi (anticipato €2.997)
- Setup completo in videocall
- 1 coaching a settimana (60 min)
- Elementor Pro incluso
- Creazione prima landing page
- Creazione prima campagna Meta
- Accesso registrazioni coaching
- Tracciamento conversioni

### Partnership Elite — €897/mese
- Contratto 6 mesi (anticipato €4.497)
- Setup completo in videocall
- 2 coaching a settimana (90 min)
- Elementor Pro incluso
- Creazione prima landing page
- Creazione prima campagna Meta
- Linea diretta WhatsApp prioritaria 24/7
- Call strategiche extra in caso di emergenza
- Accesso registrazioni coaching
- Tracciamento conversioni avanzato

### Target clienti Elite
- Obiettivo: 6 clienti Elite attivi e costanti
- Entrata mensile coaching: €5.382
- Rotazione: quando un cliente termina i 6 mesi, entra il successivo

---

## 10. INTEGRAZIONI TECNICHE

### Stack completo
| Strumento | Uso | Costo |
|---|---|---|
| GitHub Pages | Hosting sito | Gratuito |
| Hostinger | Solo dominio | ~€15/anno |
| Google Tag Manager | Gestione tutti i tracciamenti | Gratuito |
| Meta Pixel (via GTM) | Tracciamento ads Facebook/Instagram | Gratuito |
| Google Analytics (via GTM) | Traffico sito | Gratuito |
| MailerLite | Email marketing + automazioni | Gratuito fino a 1.000 |
| Skool | Community + corso €19 | ~€99/mese |
| Canva/Midjourney | Immagini e grafiche | Variabile |

### Flusso dati
```
Utente arriva sul sito
        ↓
GTM traccia la visita (GA4)
        ↓
Scarica lead magnet → entra in MailerLite
        ↓
Meta Pixel traccia la conversione
        ↓
Sequenza email automatica parte
        ↓
Acquisto €19 → MailerLite tag "acquirente"
        ↓
Sequenza post-acquisto parte
```

---

## 11. PIANO CONTENUTI ORGANICO (minimo)

### Obiettivo
Portare traffico freddo al sito e a Skool senza pagare ads.

### Canali prioritari
1. **Facebook** — post + Reel (pubblico networker 35-55)
2. **Instagram** — Reel + stories
3. **YouTube** — video lunghi (autorevolezza + SEO)

### Frequenza minima
| Canale | Frequenza | Tipo contenuto |
|---|---|---|
| Facebook | 3x/settimana | Post + Reel |
| Instagram | 3x/settimana | Reel + stories |
| YouTube | 1x/settimana | Video 10-20 min |

### Temi contenuti
- Errori comuni nelle Lead Ads
- Case study clienti (con permesso)
- "Apriamo il computer" — screen sharing live
- Livelli di consapevolezza Schwartz spiegati ai networker
- Behind the scenes del metodo

---

## 12. METRICHE DI SUCCESSO

### KPI mensili da monitorare
| Metrica | Strumento | Target mensile |
|---|---|---|
| Visite sito | Google Analytics | 1.000+ |
| Lead magnet scaricati | MailerLite | 100+ |
| Iscritti Skool Free | Skool dashboard | 50+ |
| Vendite corso €19 | Skool | 50+ |
| Call conoscitive prenotate | Form sito | 10+ |
| Nuovi clienti Elite | CRM manuale | 1 |
| Costo per lead (ads) | Meta Ads Manager | <€3 |
| Tasso apertura email | MailerLite | >35% |

---

## 13. ROADMAP — PRIORITÀ DI SVILUPPO

### Fase 1 — Fondamenta (Mese 1-2)
- [ ] Completare sito (HTML reale da Claude Code)
- [ ] Deploy su GitHub Pages
- [ ] Collegare dominio Hostinger → GitHub
- [ ] Installare GTM + Meta Pixel + GA4
- [ ] Creare account Skool
- [ ] Creare account MailerLite
- [ ] Creare lead magnet PDF
- [ ] Impostare sequenza email 5 step

### Fase 2 — Contenuto (Mese 2-3)
- [ ] Registrare corso "Lead Ad Masterclass" (5 moduli)
- [ ] Caricare corso su Skool
- [ ] Impostare pagina di vendita corso €19
- [ ] Impostare sequenza email post-acquisto
- [ ] Attivare community Skool Free
- [ ] Pubblicare prime risorse community

### Fase 3 — Traffico (Mese 3+)
- [ ] Prima campagna Meta Lead Ad (testa il tuo stesso metodo)
- [ ] Piano contenuti organico attivo
- [ ] Primi clienti Elite da funnel (non solo referral)
- [ ] Ottimizzazione basata sui dati

---

## 14. NOTE PER CLAUDE CODE E CLAUDE DESIGN

### Come usare questo PRD
1. Leggi questo documento prima di qualsiasi lavoro
2. Per ogni pagina, rispetta la brand identity della sezione 4
3. Il copy deve seguire le regole della skill `copy-diretto-30apr`
4. Livello Schwartz del target: 3 (Solution Aware)
5. CTA primaria sempre verso Skool Free — mai verso i prezzi direttamente
6. GTM va inserito in ogni pagina HTML

### File da creare (in ordine di priorità)
```
ScuolaDiNetwork/
├── PRD-ScuolaDiNetwork.md     ← questo file
├── CLAUDE.md                   ← brand identity (già creato)
├── index.html                  ← homepage (mockup approvato)
├── community.html              ← pagina Skool Free
├── corso-lead-ad.html          ← pagina vendita €19
├── percorsi.html               ← i 3 pacchetti coaching
├── grazie.html                 ← pagina post-form/acquisto
├── titosofia.html              ← chi è Tito
├── contatti.html               ← form contatti
├── landing-ads.html            ← landing per campagne Meta
├── css/style.css
├── js/main.js
└── img/
    ├── tito-hero.jpg
    ├── tito-profilo.jpg
    └── logo.png
```
