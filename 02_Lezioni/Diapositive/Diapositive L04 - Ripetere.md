---
tipo: diapositive
lezione: 4
---

# Ripetere

Elementi di Informatica per il Design
ISIA di Urbino · 2026/2027

---

## Oggi

1. Rimettiamo in ordine le cartelle
2. La prima variabile vostra
3. La biblioteca di Babele
4. Il ciclo
5. Leggere il codice degli altri
6. Il colore che cambia

---

# Rimettiamo in ordine

---

## Ripartiamo tutti dallo stesso punto

La settimana scorsa ognuno ha lavorato in un posto diverso

Oggi la cartella `esercizi` diventa uguale per tutti

**Non si cancella niente:** il lavoro di prima resta in `esercizi-L02-L03`

Da oggi si lavora solo in `esercizi`

---

## Due gesti

1. Rinominate `esercizi` in `esercizi-L02-L03`
2. Scaricate da Classroom `esercizi.zip`, mettetelo nella cartella del corso e fate doppio clic

<small>Windows: clic destro → Estrai tutto, e cancellate l'ultimo \esercizi dal percorso</small>

---

## Com'è fatta adesso

```
esercizi-L02-L03/
esercizi/
└── L04-ripetere/
    ├── 1-dieci-cerchi/
    ├── 2-fila/
    ├── 3-griglia/
    ├── 4-da-leggere/
    └── 5-tre-errori/
```

---

## Controllo

In Chrome aprite `L04-ripetere/1-dieci-cerchi/index.html`

Vedete dieci cerchi?

---

# La prima variabile vostra

---

## Tre cose da ricordare

Lo zero è **in alto a sinistra**

Il cerchio si misura **dal centro**, il rettangolo **dall'angolo**

Quello che scrivete **dopo** sta **sopra**

---

## Nella griglia c'erano già

```js
let colonne = 8;
let diametro = 40;
let distanza = 60;
```

Le avete cambiate

Oggi ne create una voi

---

## Un numero diventa un nome

1. In `1-dieci-cerchi`, quale numero si ripete?
2. In cima al file: `let diametro = 40;`
3. Scrivete `diametro` al posto di ogni `40`, uno per uno
4. Salvate, ricaricate: **non cambia niente**

Poi cambiate il numero in cima

---

## Prima prevedere

```js
let diametro = 60;
```

Che cosa succede?

E con `70`?

---

# La biblioteca di Babele

Jorge Luis Borges

[*Finzioni*: la scansione del libro](https://www.bdl.servizirl.it/bdl/bookreader/index.html?path=fe&cdOggetto=37178#page/88/mode/2up)

---

## Una regola

Che cosa si ripete?

Che cosa cambia?

---

# Il ciclo

---

## Dieci cerchi

Restate in `1-dieci-cerchi`

Che cosa resta uguale da una riga all'altra?

Che cosa cambia, e di quanto?

---

## Prima a parole

Dieci volte:
disegna un cerchio a metà altezza,
ogni volta 60 pixel più a destra

---

## Il ciclo `for`

```js
for (let giro = 0; giro < 10; giro++) {
    circle(30 + giro * 60, 300, 40);
}
```

Dieci righe diventano tre

---

## Tre parti

`let giro = 0` · da dove parte
`giro < 10` · fino a quando continua
`giro++` · a ogni giro, aggiunge 1

Tra le graffe `{ }`, quello che si ripete

---

## Giro per giro

| giro | x |
|---|---|
| 0 | 30 |
| 1 | 90 |
| 2 | 150 |
| … | … |
| 9 | 570 |

`30 + giro * 60`

---

## Una fila che cresce

Aprite `2-fila`

Al posto di `40` scrivete `10 + giro * 5`

Quanto è grande l'ultimo cerchio?

---

## La griglia, finalmente

Aprite `3-griglia`

```js
for (let riga = 0; riga < colonne; riga++) {
    for (let colonna = 0; colonna < colonne; colonna++) {
        circle(x, y, diametro);
    }
}
```

Per ogni riga, tutte le colonne

---

## Prima prevedere

`riga < 3`

E poi `colonna < 3`

Quante volte viene eseguito `circle`?

---

## Come una pagina

Per ogni riga, tutte le parole, da sinistra a destra

Poi si va a capo

---

# Leggere il codice degli altri

---

## Prima leggere

Aprite `4-da-leggere/sketch.js`

**Non** aprite ancora `index.html`

Disegnate a matita quello che vi aspettate

Poi confrontate

---

## Tre errori

Aprite `5-tre-errori`

La pagina è bianca: aprite la console, `Cmd + Opt + J`

Correggete, salvate, ricaricate. Di nuovo

Uno dei tre errori **non** compare nella console

<small>Windows: Ctrl + Maiusc + J</small>

---

## Gli errori del ciclo

Un `;` subito dopo la `)` del `for`

Le virgole al posto dei `;` tra le tre parti

Una graffa `}` che manca

Un cerchio solo: manca `giro` nel calcolo

---

# Il colore che cambia

---

## Una fila di grigi

Aprite `2-fila`

Dentro il ciclo, prima di `circle`:

```js
fill(giro * 25);
```

Di che colore è il primo cerchio? E l'ultimo?

---

## Il colore per colonna

Aprite `3-griglia`

Subito prima di `circle(x, y, diametro);`:

```js
fill(220, colonna * 30, 40);
```

E se al posto di `colonna` scrivete `riga`?

---

## Per lunedì 16 novembre

In `2-fila`: al posto del cerchio, una forma scelta da voi, ripetuta in fila con il `for`

Prima a parole, poi in codice

Il compito è su Classroom
