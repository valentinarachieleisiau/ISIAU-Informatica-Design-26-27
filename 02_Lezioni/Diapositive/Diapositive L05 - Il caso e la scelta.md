---
tipo: diapositive
lezione: 5
---

# Il caso e la scelta

Elementi di Informatica per il Design
ISIA di Urbino · 2026/2027

---

## Oggi

Oggi la regola impara a scegliere. Prima, però, riguardiamo il ciclo con calma.

1. La cartella della L05
2. Due attrezzi nuovi
3. Il ciclo, un ciclo solo
4. Il ciclo, due cicli
5. Il giardino dei sentieri che si biforcano
6. Il caso
7. La scelta
8. La griglia che sceglie
9. La vostra regola

---

## La cartella della L05

Da oggi, per ogni lezione, un solo file su Classroom, da estrarre dentro `esercizi`.

1. Scaricate `L05-il-caso-e-la-scelta.zip` e spostatelo dentro `esercizi`
2. Fate doppio clic: compare la cartella della lezione. Lo zip si può cestinare

<small>Windows: clic destro → Estrai tutto, e cancellate l'ultimo \L05-il-caso-e-la-scelta dal percorso</small>

---

## Com'è fatta adesso

```
esercizi/
├── L04-ripetere/
└── L05-il-caso-e-la-scelta/
    ├── 1-fila-al-rallentatore/
    ├── 2-griglia-al-rallentatore/
    ├── 3-caso/
    ├── 4-scelta/
    ├── 5-griglia-che-sceglie/
    └── 6-la-mia-regola/
```

Le cartelle sono numerate nell'ordine in cui le usiamo oggi.

---

# Due attrezzi nuovi

Due aiuti per scrivere il codice, che restano per tutto il corso

---

## Un'estensione per p5.js

Un'estensione aggiunge a Visual Studio Code cose che da solo non sa fare

Questa ne fa due:

1. **suggerisce** mentre scrivete, e vi dice in breve che cosa fa ogni istruzione, con un link alla Reference
2. **ricarica** la pagina da sola quando salvate

---

## Installarla

1. Aprite le estensioni: `Cmd + Maiusc + X`
2. Cercate **p5.js 2.x Project Generator**, di Irti
3. **Install**

Si installa una sola estensione: **Live Server** arriva insieme, ed è lui che ricarica la pagina. Nell'elenco compaiono tutte e due.

<small>Windows: Ctrl + Maiusc + X</small>

---

## Un comando da non usare

Non usate il comando "**Create a new p5.js 2.x Project**", perché crea cartelle fatte in un altro modo

Le cartelle degli sketch arrivano da Classroom, come sempre

---

## I suggerimenti

I suggerimenti non scrivono il codice al posto vostro: vi ricordano come si chiama un'istruzione e che cosa vuole tra le parentesi.

Provate in `6-la-mia-regola/sketch.js`, su una riga nuova dentro `setup()`:

- scrivete `circ`: compare `circle`. **Invio** per accettarlo
- con il mouse sopra `circle` compare che cosa fa, in inglese
- dentro le parentesi, `Cmd + Maiusc + Spazio` mostra i parametri, in ordine

Poi cancellate la riga.

<small>Windows: Ctrl + Maiusc + Spazio</small>

---

## Live Server apre Chrome

Senza questa impostazione Live Server apre il browser predefinito, che sul Mac è Safari.

Una volta sola:

1. Impostazioni: `Cmd + ,`
2. Cercate `custom browser`
3. **Custom Browser** → `chrome`

<small>Windows: Ctrl + ,</small>

---

## Aprire lo sketch con Live Server

Clic destro su `1-fila-al-rallentatore/index.html` → **Open with Live Server**

Chrome apre un indirizzo che comincia con `127.0.0.1:5500`. Da qui in poi, quando salvate, la pagina si ricarica da sola.

**Non** il pulsante *Go Live* in basso, perché quello apre tutta la cartella

---

## La Reference, sempre a portata

La Reference è il manuale di p5.js: tutte le istruzioni, con che cosa fanno e che cosa vogliono tra le parentesi.

1. La palette dei comandi: `Cmd + Maiusc + P`
2. Scrivete `integrated browser` → **Open Integrated Browser**
3. L'indirizzo: `p5js.org/reference`

Il codice da una parte, la Reference dall'altra. Se lo schermo è piccolo, va bene anche una scheda di Chrome.

<small>Windows: Ctrl + Maiusc + P</small>

---

# Il ciclo, un ciclo solo

Il ciclo `for` ancora una volta, con calma: prima a mano, poi al rallentatore

---

## Fate voi il computer

Il computer esegue il ciclo un giro alla volta, senza saltare niente. Adesso lo fate voi, al suo posto.

```js
for (let giro = 0; giro < 4; giro++) {
    circle(100 + giro * 100, 300, 50);
}
```

📝 **Sul foglio**: una tabella con tre colonne, `giro`, `giro < 4 ?` e `x`. Una riga per ogni giro, finché la risposta è no.

---

## Giro per giro

📝 **Sul foglio**

All'inizio, una volta sola, `giro` vale 0. Poi, a ogni giro: la domanda `giro < 4`; se la risposta è sì, un cerchio; poi `giro` cresce di 1, e si torna alla domanda.

| giro | giro < 4 ? | x |
|---|---|---|
| 0 | sì | 100 |
| 1 | | |
| 2 | | |
| … | | |

Quando vi fermate?

---

## Disegnatelo

📝 **Sul foglio**: una linea da 0 a 600, divisa in sei parti da 100. Ogni cerchio ha il centro nella `x` della vostra tabella.

Quanti cerchi? Dove?

---

## Prima prevedere

📝 **Sul foglio**, prima di provare

Se il ciclo parte da 1, con `let giro = 1`: quanti cerchi? Dove?

E se continua finché `giro < 6`? Guardate bene l'ultimo cerchio.

---

## La fila al rallentatore

È la fila della L04, disegnata un cerchio al secondo. Sotto, i numeri cambiano insieme ai cerchi: `giro` conta i giri, `x` dice dove sta il cerchio.

Di quanto cresce `x` a ogni giro?

Alla fine sotto la fila resta `giro = 9`. Perché non 10?

---

## Il vostro ciclo, al rallentatore

Adesso trasformate la fila nel ciclo del foglio. In `1-fila-al-rallentatore/sketch.js` cambiate tre cose:

- `giro < 10` diventa `giro < 4`
- `let x = 30 + giro * 60;` diventa `let x = 100 + giro * 100;`
- il diametro `40` diventa `50`

Salvate e guardate i numeri sotto la fila: sono gli stessi della vostra tabella sul foglio?

Poi provate `giro < 6`: l'ultimo cerchio è dove pensavate?

---

# Il ciclo, due cicli

Un ciclo dentro l'altro: ==🟡per ogni riga, tutte le colonne==

---

## Un cerchio alla volta

È la griglia della L04, disegnata un cerchio alla volta. Sotto, `riga` e `colonna` dicono quale cerchio si sta disegnando, `y` e `x` dove.

Aprite con Live Server `2-griglia-al-rallentatore`

Quale numero cambia più spesso, `riga` o `colonna`? Perché?

---

## Prima prevedere

📝 **Sul foglio**, prima di guardare

Il ciclo ha appena disegnato `riga = 0` · `colonna = 7`: l'ultimo cerchio della prima riga.

Quale cerchio viene dopo? Quanto valgono `riga` e `colonna`?

---

## Cambiate e salvate

In cima allo sketch cambiate il numero delle colonne:

```js
let colonne = 3;
```

📝 **Sul foglio**, prima di salvare: quanti cerchi? In che ordine?

Poi `let pausa = 100;`: il rallentatore va più veloce, il codice resta lo stesso.

---

# Il giardino dei sentieri che si biforcano

Jorge Luis Borges

Stephen Albert, un sinologo inglese, parla con Yu Tsun, discendente di Ts'ui Pên, che aveva lasciato un romanzo confuso e un labirinto che nessuno ha mai trovato

[*Finzioni*: la scansione del libro](https://www.bdl.servizirl.it/bdl/bookreader/index.html?path=fe&cdOggetto=37178#page/104/mode/2up)

---

## Una scelta

Ts'ui Pên, nel suo romanzo, non sceglie: prende tutte le strade insieme.

Un programma, di solito, ne sceglie una sola. Tra poco vediamo come: si chiama `if`.

Che cosa servirebbe per prenderle tutte?

---

# Il caso

Oggi, prima di insegnare al computer a scegliere, lasciamo scegliere il caso.

---

## Una fila a caso

`random(100, 500)` è un numero a caso tra 100 e 500. Ogni volta che la pagina si carica, il computer tira di nuovo.

Aprite `3-caso` con Live Server. Al posto di `300` scrivete `random(100, 500)`

Salvate. Poi ricaricate più volte: `Cmd + R`

Confrontate con il vicino: stesso codice, disegni diversi.

<small>Windows: Ctrl + R</small>

---

## Prima prevedere

📝 **Sul foglio**

`random(100, 500)`: un cerchio può finire fuori dai bordi? Pensate al raggio: il cerchio è largo 40.

E con `random(0, 600)`?

---

## Una regola, molte copie

La regola è sempre la stessa: dieci cerchi in fila, a un'altezza a caso.

A ogni caricamento, una copia diversa.

Un libro generato funziona così: una regola sola, e ogni copia stampata è diversa dalle altre.

---

## Ogni copia ha un numero

Il computer non tira davvero i dadi: segue una lista di numeri che sembrano a caso. Il seme dice da dove cominciare la lista.

Prima del `for`, dopo `fill(30);`:

```js
randomSeed(7);
```

Ricaricate: la fila è sempre la stessa. Con `8`, un'altra fila. Stesso seme, stessa copia: la copia numero 7 si può ristampare uguale.

---

# La scelta

Il caso sceglie un numero. La condizione sceglie che cosa fare.

---

## Prima a parole

Prima la regola in italiano, poi il codice:

Se il cerchio è tra i primi cinque, nero. Altrimenti, rosso.

---

## Se… altrimenti

```js
if (giro < 5) {
    fill(30);
} else {
    fill(220, 60, 40);
}
```

`if` vuol dire *se*, `else` *altrimenti*.

Tra le tonde `( )` c'è una domanda, vera o falsa: la stessa che il `for` si fa a ogni giro. Tra le graffe `{ }`, che cosa fare nei due casi. Il computer prende una strada sola.

---

## Provatela

Aprite `4-scelta` con Live Server. Scrivete l'`if` dentro il ciclo, prima di `circle`.

Quanti cerchi neri? Ripensate alla tabella di stamattina: per ogni giro, la risposta alla domanda.

---

## Prima prevedere

📝 **Sul foglio**, prima di provare

`giro < 3`: quanti cerchi di un colore?

E con `giro > 5`?

---

## Gli errori della scelta

Tre errori frequenti, e che cosa dice la console:

- un `;` subito dopo la `)` dell'`if`: `Unexpected token 'else'`
- le tonde `( )` che mancano: `Unexpected identifier`
- un `=` al posto di `<`: non confronta, assegna. Il ciclo non finisce più e la pagina si blocca. **Non provatelo**

Se vedete la rotellina che gira senza fermarsi, la pagina non sta caricando: c'è un errore. Aprite la console, `Cmd + Opt + J`

---

# La griglia che sceglie

Ogni cella sceglie che forma disegnare: prima con una regola, poi con il dado

---

## Prima una regola

Ogni cella conosce la sua riga e la sua colonna, e può fare una domanda con quei numeri. Cominciamo con la colonna: la stessa domanda della fila, ma nella griglia.

Aprite `5-griglia-che-sceglie`. Al posto di `circle(x, y, diametro);`:

```js
if (colonna < 4) {
    square(x, y, diametro);
} else {
    circle(x, y, diametro);
}
```

`rectMode(CENTER);` è già scritto: il quadrato si misura dal centro, come il cerchio.

---

## Prima prevedere

📝 **Sul foglio**, prima di salvare

`colonna < 4`: dove finiscono i quadrati?

E con `riga < 4`?

Perché una volta strisce verticali, e l'altra orizzontali?

