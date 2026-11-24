---
tipo: lezione
fase: 0
lezione: 6
durata: 4h
---
# L06 · Una regola, cento forme

## Di cosa parliamo oggi

È l'ultima lezione del precorso. Prima riprendiamo il dado della L05: in ogni cella della griglia il [caso](../04_Glossario/Caso.md) sceglie se disegnare un quadrato o un cerchio.

Poi impariamo a dare un nome a una regola, con una [funzione](../04_Glossario/Funzione.md). Con una funzione costruiamo un labirinto: ogni cella sceglie a caso una diagonale, e dall'insieme delle scelte esce un disegno che nessuno ha fatto.

Alla fine guardiamo che cosa sapete fare, chi l'ha fatto prima di voi, e dove porta tutto questo: il corso e il progetto d'esame.

## Obiettivi

Alla fine di questa lezione sapete:
- far scegliere al caso, in ogni cella di una griglia, con `random()` e `if`
- dire che cos'è una funzione, chiamarla con valori diversi, e dire dove si scrive
- scrivere la regola di una cella dentro una funzione, e cambiarla senza toccare la griglia

## Che cosa facciamo

1. **La cartella della L06.** Un solo file da Classroom, da estrarre dentro `esercizi`.
2. **Il dado.** `random()` con le parentesi vuote dà un numero tra 0 e 1. Con `if (dado < 0.5)` ogni cella sceglie da sola.
3. **La funzione.** Le funzioni che usate già, come `circle`. Poi la vostra prima funzione, `croce`, chiamata con valori diversi e dentro un ciclo.
4. **Il labirinto.** La griglia chiama in ogni casella la funzione `cella`, e la regola della cella la scrivete voi.
5. **Che cosa sapete fare.** Le cinque parole del precorso, e chi le ha usate prima di voi: Georg Nees, Vera Molnár, il Commodore 64, Sébastien Truchet.
6. **Dove andiamo.** Il corso e il progetto d'esame.

## La cartella della L06

```
esercizi/
├── L04-ripetere/
├── L05-il-caso-e-la-scelta/
└── L06-una-regola-cento-forme/
    ├── 1-dado/
    ├── 2-croci/
    ├── 3-labirinto/
    └── 4-archi/
```

Scaricate `L06-una-regola-cento-forme.zip` da Classroom, spostatelo dentro `esercizi` e fate doppio clic. Su Windows: clic destro → *Estrai tutto*, e cancellate l'ultimo `\L06-una-regola-cento-forme` dal percorso. `4-archi` è per chi va avanti.

## Il dado in poche righe

```js
let dado = random();
if (dado < 0.5) {
    square(x, y, diametro);
} else {
    circle(x, y, diametro);
}
```

`random()` con le parentesi vuote dà un numero con la virgola tra 0 e 1, per esempio `0.27` o `0.81`. Il numero da solo non decide niente: decide la domanda dell'`if`. `0.5` sta a metà strada tra 0 e 1, quindi il numero cade sotto `0.5` più o meno una volta su due, come una moneta. La riga del dado sta dentro i due cicli: ogni cella tira il suo dado.

## La funzione in poche righe

```js
function croce(x, y) {
    line(x - 20, y, x + 20, y);
    line(x, y - 20, x, y + 20);
}
```

Una funzione è un gruppo di istruzioni con un nome. `function` dice che qui comincia una funzione, `croce` è il nome, `x` e `y` sono i valori che riceve, e tra le graffe ci sono le istruzioni. Scritta da sola non disegna niente: disegna quando la chiamate, dentro `setup()`, con i valori tra le parentesi, per esempio `croce(300, 200);`. La funzione si scrive fuori da `setup()`, sotto la sua graffa di chiusura.

Come uno stile di paragrafo: si scrive una volta, si usa tutte le volte che serve, e se si cambia, cambia ovunque.

## Il labirinto in poche righe

```js
function cella(x, y) {
    let dado = random();
    if (dado < 0.5) {
        line(x, y, x + lato, y + lato);
    } else {
        line(x, y + lato, x + lato, y);
    }
}
```

Qui `x` e `y` sono l'angolo in alto a sinistra della cella, non il centro. La prima linea scende, dall'angolo in alto a sinistra a quello in basso a destra; la seconda sale, dall'angolo in basso a sinistra a quello in alto a destra. Cambiando `lato` il labirinto si infittisce; cambiando la funzione `cella` cambia tutto il disegno, e la griglia resta com'è.

Se al posto del disegno vedete una rotellina che gira senza fermarsi, o la pagina resta bianca, aprite la console di Chrome, `Cmd + Opt + J` (Windows: `Ctrl + Maiusc + J`): il messaggio dice in quale riga cercare.

## Materiali

- [Diapositive L06 - Una regola, cento forme](Diapositive/Diapositive%20L06%20-%20Una%20regola%2C%20cento%20forme.md)
- [L06 - Sketch per una regola, cento forme](../08_Codice/L06-una-regola-cento-forme/L06%20-%20Sketch%20per%20una%20regola%2C%20cento%20forme.md): su Classroom, dentro `L06-una-regola-cento-forme.zip`
- La Reference di p5.js: [p5js.org/reference](https://p5js.org/reference/)
- [Glossario](../04_Glossario/Glossario.md)

**Per approfondire:**
- Georg Nees, *Schotter*, nella [scheda del Victoria and Albert Museum](https://collections.vam.ac.uk/item/O221321/schotter-print-nees-georg/)
- Vera Molnár, *Interruptions*, nella [pagina del Digital Art Museum](https://dam.org/museum/artists_ui/artists/molnar-vera/interruptions/)
- Nick Montfort e altri, *10 PRINT CHR$(205.5+RND(1)); : GOTO 10* (Cambridge, MA: MIT Press, 2012): il libro sul labirinto del Commodore 64, scaricabile gratis da [10print.org](https://10print.org/)

## Da fare prima della prossima lezione

- [ ] Se non l'avete ancora fatto, consegnate su Classroom l'immagine della vostra copertina
