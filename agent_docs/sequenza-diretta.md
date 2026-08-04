# Sequenza email — Diretta 23 settembre 2026

> Copy pronto da incollare in MailerLite. Gruppo dedicato "Diretta 23 settembre",
> separato da "Parliamo" e dal gruppo del lead magnet.
> Tono da `agent_docs/brand.md`: diretto, concreto, niente "incredibile" o "il segreto che".

## Stato in MailerLite (2026-07-29)

Impianto già costruito nell'account:

| Pezzo | Stato |
|---|---|
| Gruppo `Diretta 23 settembre` | ✅ creato |
| Form embedded `Diretta 23 settembre` (ID **`nNu1Yl`**) | ✅ creato: campi Nome + Email, redirect a `grazie-diretta.html` |
| Double opt-in | ✅ **disattivato** |
| Form collegato in `diretta.html` e nel popup di `index.html` | ✅ fatto |
| Automazione `Diretta 23 settembre - Nurturing` | ✅ **ATTIVA dal 2026-08-04** |

### L'automazione è viva (2026-08-04)

```
Si iscrive al gruppo "Diretta 23 settembre"
        ↓  subito
Email 1 — "Ci sei — ma manca un passaggio"
        ↓  3 giorni
Email 2 — "Ha dovuto spegnere la campagna"
```

Scritte nell'**editor semplice**, non con un template grafico: per un'email personale
il testo semplice rende di più, sembra scritta da una persona e non da un'azienda.
Il colore dei link è stato portato all'oro del brand (`#C9A84C`): era bianco come il
testo, quindi nessuno avrebbe capito che erano cliccabili.

Test inviato a `info@scuoladinetwork.com` prima dell'attivazione.

**Modificare un'automazione attiva si può**, senza spegnerla: chi è già dentro il
percorso prosegue, le modifiche valgono per chi entra dopo.

**Restano da fare le email 3-8** (vedi scaletta sotto). Non urgono: la 3 parte dieci
giorni dopo l'iscrizione, quindi c'è tempo fino a metà agosto.

**Nota:** il campo *Preheader* è bloccato sul piano Free — i preheader indicati sotto
sono da ignorare finché non si passa a un piano superiore.

## La scaletta — da inizio agosto al 23 settembre

Sette settimane. **Agosto è morto**: i networker sono in vacanza, quindi si tiene il
contatto leggero e si concentra la spinta da fine agosto.

| Email | Quando | Tipo | Scopo |
|---|---|---|---|
| 1 — Conferma | subito | automazione | Portarlo dentro Skool. È l'unica azione che conta. |
| 2 — La storia | +3 giorni | automazione | Il caso dei troppi contatti. Costruisce il desiderio. |
| 3 — I 3 errori | +10 giorni | automazione | **Valore puro**, nessuna richiesta. Tiene viva la relazione in agosto. |
| 4 — Il form che filtra | +20 giorni | automazione | **Valore puro**. Secondo tocco d'agosto. |
| 5 — Manca una settimana | 16 settembre | campagna a data fissa | Riporta la data in cima alla testa |
| 6 — Domani sera | 22 settembre | campagna a data fissa | Promemoria |
| 7 — Tra un'ora | 23 settembre, ore 20 | campagna a data fissa | È il promemoria che fa la differenza sulla presenza |
| 8 — La registrazione | 24 settembre | campagna a data fissa | Recupera gli assenti + spinge al passo dopo |

**Perché le email 1-4 in automazione e le 5-8 come campagne programmate:**
le prime devono partire rispetto al giorno di iscrizione (chi entra il 5 agosto e chi entra
il 10 settembre devono ricevere lo stesso percorso). Le ultime quattro sono legate a una
**data fissa**: se le mettessi come ritardi nell'automazione, chi si iscrive il 20 settembre
riceverebbe "manca una settimana" a ottobre. Si creano in `Campaigns`, destinatario il gruppo
`Diretta 23 settembre`, e si programmano alla data.

**Le email 3 e 4 sono le più importanti del periodo estivo** e sono anche le uniche che
non chiedono niente. Servono a non sparire per sette settimane: chi riceve solo promemoria
si dimentica di te, chi riceve qualcosa di utile ti aspetta.

---

## Email 1 — Conferma (immediata)

**Oggetto:** Ci sei — ma manca un passaggio
**Preheader:** La diretta è dentro la community: entra ora, ci metti due minuti.

```
Ciao [nome],

sei iscritto alla diretta di mercoledì 23 settembre, ore 21.

Un passaggio solo e sei a posto: la diretta si tiene dentro la
community, quindi devi farti un accesso adesso. È gratis e ci
metti due minuti.

👉 [Entra nella community]

Fallo ora, non la sera stessa: se aspetti, il 23 alle 21 ti trovi
a fare l'iscrizione mentre io ho già iniziato.

Nel frattempo, se hai una domanda scrivimela lì dentro: le
raccolgo e alle più utili rispondo in diretta.

A mercoledì,
Tito

---
Mercoledì 23 settembre, ore 21 — dura un'ora.
Non puoi esserci? Nessun problema: registro tutto e ti mando il video.
```

---

## Email 2 — Perché ci sarò (3 giorni dopo l'iscrizione)

**Oggetto:** Ha dovuto spegnere la campagna
**Preheader:** Aveva troppi contatti e non riusciva più a chiamarli.

```
Ciao [nome],

ti racconto la cosa che mi ha convinto a fare questa diretta.

Sto seguendo un gruppo di networker. Uno di loro ha messo
10€ al giorno sulla sua prima campagna.

Ha iniziato a ricevere otto contatti al giorno, a un euro l'uno.
In media ne chiudeva uno al giorno. Altri hanno accettato di
venire alla riunione del mercoledì del suo gruppo.

Poi ha dovuto spegnere tutto. Non riusciva più a richiamarli.

Ti dico subito che sono i numeri di una persona sola, nel suo
mercato: non è una promessa di quello che otterrai tu. Ma dice
una cosa importante, e cioè che il problema del networker non è
trovare contatti. È che nessuno gli ha mai fatto vedere come si
costruisce il sistema che li porta.

Il 23 settembre te lo faccio vedere. Non te lo spiego: apro lo
schermo e lo costruisco davanti a te, dall'inizio a "Pubblica".

Se non l'hai ancora fatto, entra nella community: è lì che
troverai il link per collegarti.

👉 [Entra nella community]

Tito
```

---

## Email 3 — I tre errori (+10 giorni dall'iscrizione)
**Valore puro, nessuna richiesta.** Serve a non sparire durante agosto.

**Oggetto:** I tre errori che bruciano il budget di un networker

```
Ciao [nome],

siamo ancora lontani dal 23 settembre, quindi intanto ti lascio
qualcosa di utile.

Ho visto decine di Lead Ad di networker. Sbagliano quasi sempre
le stesse tre cose:

1. Il form è troppo lungo.
   Ogni campo in più è gente che si ferma a metà. Nome ed email
   bastano quasi sempre: il resto glielo chiedi parlando.

2. Il copy parla a tutti.
   "Vuoi guadagnare di più?" non ferma nessuno, perché non
   riguarda nessuno in particolare. Il tuo lead deve leggere
   la prima riga e pensare "questo parla di me".

3. La creatività è una foto stock.
   Gente sorridente davanti al laptop. Si riconoscono a colpo
   d'occhio e spengono la fiducia in mezzo secondo. Uno screenshot
   vero, storto, funziona dieci volte tanto.

Se correggi solo il primo punto, la tua prossima campagna
già ti costa meno.

Tito

PS — Il 23 settembre queste tre cose le vedi corrette dal vivo,
mentre monto la campagna.
```

---

## Email 4 — Il form che filtra (+20 giorni dall'iscrizione)
**Valore puro.** Secondo tocco d'agosto.

**Oggetto:** Meglio 8 contatti buoni che 40 da rincorrere

```
Ciao [nome],

torno su una cosa che ti avevo raccontato: quel networker
che ha dovuto spegnere la campagna perché aveva troppi contatti.

La prima soluzione che gli ho dato è stata semplice: allungare
il form. Più domande, meno gente che lo compila, contatti più
motivati. Ha funzionato.

Ma ti dico anche il difetto, perché è onesto dirlo: così butti
via domanda. Le persone che hai scartato le avevi già pagate.

La soluzione migliore è un'altra: falli entrare tutti, e lascia
che siano loro a farsi avanti. Un'email automatica che arriva
subito, con dentro un bottone per scriverti su WhatsApp. Chi
preme quel bottone è caldo davvero. Gli altri restano nella tua
lista, e li scaldi con calma.

Costa zero ed è la differenza tra una lista che si consuma
e una che cresce.

Tito
```

---

## Email 5 — Manca una settimana (16 settembre)

**Oggetto:** Mercoledì prossimo apriamo il computer
**Preheader:** Copy, immagine e video con l'AI, campagna online. Un'ora.

```
Ciao [nome],

mercoledì prossimo, 23 settembre alle 21, ci vediamo in diretta.

Ecco cosa succede in quell'ora:

• Il copy in 4 blocchi — aggancio, qualificazione, prova, chiamata
  all'azione. Li riempio uno per uno e ti dico perché ogni riga sta lì.

• L'immagine e il video con l'intelligenza artificiale — li genero
  davanti a te in pochi minuti. Poi ti mostro anche come si fa la
  stessa cosa col telefono in 30 secondi, se preferisci metterci
  la faccia.

• La campagna, fino a "Pubblica" — gestore inserzioni, modulo,
  pubblico, budget. Comprese le schermate dove è facile sbagliare
  e bruciare soldi.

La campagna che monto è la mia, vera, con i miei soldi dentro.
Non una simulazione.

Segnati la data adesso, con una sveglia mezz'ora prima.

A mercoledì,
Tito
```

---

## Email 6 — Domani sera (22 settembre)

**Oggetto:** Domani sera alle 21
**Preheader:** Il link è dentro la community.

```
Ciao [nome],

domani sera, mercoledì 23, alle 21.

Il link per collegarti è dentro la community: se non ci sei
ancora entrato, fallo stasera e domani sei tranquillo.

👉 [Entra nella community]

Porta una cosa sola: un foglio e una penna. A un certo punto ti
chiedo di scrivere il tuo aggancio, e chi lo fa dal vivo esce di
lì con qualcosa in mano.

A domani,
Tito
```

---

## Email 7 — Tra un'ora (23 settembre, ore 20:00)

**Oggetto:** Tra un'ora
**Preheader:** Ci vediamo alle 21 dentro la community.

```
[nome], ci siamo — tra un'ora.

👉 [Vai alla community]

Se stasera salta, non preoccuparti: registro tutto e domani ti
mando il video.

Tito
```

---

## Email 8 — La registrazione (24 settembre)

> ⚠️ Da personalizzare dopo la diretta: aggiungi una cosa concreta successa
> quella sera (una domanda arrivata, il costo per click della campagna che hai
> lanciato). È la differenza tra un'email automatica e una che sembra scritta a mano.

**Oggetto:** La registrazione di ieri sera
**Preheader:** Un'ora, dall'aggancio alla campagna pubblicata.

```
Ciao [nome],

ieri sera abbiamo costruito una campagna da zero. Ecco la
registrazione:

👉 [Guarda la registrazione]

[UNA RIGA SU COSA È SUCCESSO DAVVERO — es. "La domanda più
frequente è stata: quanto budget serve per iniziare. Risposta
al minuto 42."]

Se guardandola ti viene un dubbio, scrivimelo nella community:
rispondo lì.

Tito

PS — Durante la diretta ho parlato del Tavolo, il gruppo con cui
ci vediamo ogni settimana per lavorare sulle campagne vere.
I posti fondatori sono [N] e si chiudono [DATA]. Se vuoi
saperne di più, rispondi a questa email.
```

---

## Cose da ricordare

- **`[Entra nella community]`** → `https://www.skool.com/scuola-di-network-2283`
- **Il link della diretta** va dato solo dentro Skool, mai in email: è il meccanismo
  che fa entrare le persone nella community. Se giri il link Zoom via email, la
  community resta vuota e perdi il motivo per cui la diretta si tiene lì.
- **Email 6** è quella che vende Il Tavolo, ma con leggerezza: chi era in diretta
  ha già sentito l'offerta, questa serve a recuperare gli assenti.
- Il gruppo MailerLite di questa sequenza è **la lista più preziosa che hai**: sono
  persone che hanno alzato la mano su un tema specifico. Non fonderlo con gli altri.
