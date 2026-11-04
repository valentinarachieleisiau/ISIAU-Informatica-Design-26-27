---
tipo: diapositive
lezione: 3
---

# Il foglio e i numeri

Elementi di Informatica per il Design
ISIA di Urbino · 2026/2027

---

## Oggi

1. Dall'HTML allo sketch
2. La variabile
3. Il foglio e le coordinate
4. Dalla carta al codice

---

## Prima di tutto: spegniamo l'assistente

`Cmd + ,` apre le impostazioni di Visual Studio Code

Cercate `chat.disableAIFeatures` e spuntate la casella

Nel precorso il codice lo scrivete voi, con le vostre mani

<small>Windows: Ctrl + ,</small>

---

# Dall'HTML allo sketch

---

## Riaprite `oggi.html`

```html
<!--<script src="sketch.js"></script>-->
```

Togliete `<!--` e `-->`, salvate, ricaricate

**Controllo:** sotto il paragrafo compare la griglia

---

## La pagina e lo sketch

Nella `<head>` la pagina carica p5.js e il vostro `sketch.js`

Nel `<body>` c'è il testo che si vede

Lo sketch aggiunge alla pagina un **foglio** su cui disegnare

---

## L'editor online di p5.js

**shorturl.at/jARZ5**

Esiste, ed è comodo. Noi useremo sempre Visual Studio Code: il codice resta nella vostra cartella, insieme a tutto il resto

---

## Salvare, ricaricare

Aprite `sketch.js` in Visual Studio Code

Visual Studio Code: `Cmd + S`
Browser: `Cmd + R`

Sempre in quest'ordine

<small>Windows: Ctrl + S, poi Ctrl + R</small>

---

## Prima prevedere, poi provare

```js
let colonne = 8;
let diametro = 40;
let distanza = 60;
```

Che cosa succede se scrivo **20** al posto di **8**?

---

## Quattrocento cerchi

Quante volte compare la parola "cerchio" nel codice?

---

# La variabile

---

## Una scatola con un nome

```js
let colonne = 8;
```

`let` crea la scatola
`colonne` è il suo nome
`8` è quello che c'è dentro

---

## Un nome, molti posti

Quante volte compare `distanza` nello sketch?

Cambiate il numero **una volta sola**, in cima: cambia dappertutto

Come un campione di colore in InDesign

---

## I nomi delle variabili

Come per i file:
- niente spazi
- niente accenti
- un nome che dice che cos'è

`distanza`, non `d` 
`diametroCerchio`, non `diametro cerchio`

---

## Le scatole già pronte

p5.js ne ha alcune, che non dovete creare voi

`width` · la larghezza del foglio
`height` · l'altezza del foglio

```js
circle(width / 2, height / 2, 100);
```

Dove sta questo cerchio?

---

# Il foglio e le coordinate

---

## Dove sta un punto

Lo zero è **in alto a sinistra**

La **x** cresce verso destra
La **y** cresce verso il basso

Come X e Y nel pannello Controllo di InDesign

---

## Tre forme

```js
circle(x, y, diametro);
rect(x, y, larghezza, altezza);
line(x1, y1, x2, y2);
```

Il cerchio si misura **dal centro**
Il rettangolo **dall'angolo in alto a sinistra**

---

## Il colore

`background()` · il foglio
`fill()` · il riempimento
`stroke()` · il contorno

Un numero: un grigio, da `0` (nero) a `255` (bianco)
Tre numeri: rosso, verde, blu

`noFill()` · `noStroke()` · per toglierli

---

## Prima prevedere

```js
fill(30);
rect(100, 100, 200, 300);

fill(220, 60, 40);
circle(300, 300, 200);
```

Che cosa vedete? Chi sta sopra?

---

## L'ordine conta

Quello che viene scritto **dopo** è disegnato **sopra**

Come i livelli, ma letti dall'alto in basso

---

## Prima a parole

Su un foglio, una composizione semplice: **da tre a cinque forme**

Scrivetela in italiano, come istruzioni per qualcuno che esegue alla lettera

---

## Poi in coordinate

Sul retro del foglio, un quadrato grande: **600 × 600 pixel**

Dividete ogni lato in 6 parti, a occhio: **un quadretto = 100 pixel**

Numerate i lati: `0`, `100`, `200`… dall'angolo in alto a sinistra

Accanto a ogni forma, i suoi numeri

---

## Il modello di sketch

1. Scaricate da Classroom `composizione.zip`
2. Mettetelo dentro `esercizi`
3. In Visual Studio Code aprite `sketch.js`
4. In Chrome aprite `index.html`

**Controllo:** un cerchio al centro del foglio

---

## Per il codice usiamo Chrome

**Gli strumenti sono già pronti.** In Chrome la console degli errori si apre con `Cmd + Opt + J`.

**Lo stesso browser per tutti.** Chrome c'è su Mac, su Windows e su Linux: vediamo tutti le stesse cose, anche sul mio schermo

**Safari va benissimo per navigare.** Per lavorare sul codice preferiamo uno strumento che non nasconde gli attrezzi

<small>Aprire un file in Chrome: clic destro sul file → Apri con → Google Chrome · Windows: Ctrl + Maiusc + J</small>

---

## La console

`Cmd + Opt + J`

Qui il browser scrive quello che non va

Se il foglio resta vuoto, guardate prima qui

<small>Windows: Ctrl + Maiusc + J</small>

---

## Sbagliamo apposta

Togliete la parentesi chiusa dal cerchio:

```js
circle(300, 300, 100;
```

Salvate, ricaricate, guardate la console

---

## Leggere un errore

`missing ) after argument list` · manca una `)`
`circel is not defined` · un nome che p5.js non conosce

A destra: `sketch.js:9`, il file e **la riga**

Un errore non è un fallimento: è il computer che vi dice dove guardare

---

# Dalla carta al codice

---

## La vostra composizione

Una forma alla volta:
scrivete, salvate, ricaricate, controllate

Se qualcosa non va: la console

