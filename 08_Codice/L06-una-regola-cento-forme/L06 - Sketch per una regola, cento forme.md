---
tipo: codice
lezione: 6
---
# L06 · Sketch per una regola, cento forme

Quattro cartelle per la L06, numerate nell'ordine in cui si usano in aula. Su Classroom stanno in `L06-una-regola-cento-forme.zip`, da estrarre dentro la cartella `esercizi`.

- `1-dado/`: la griglia che sceglie della L05, ferma dove l'avevamo lasciata, con le prime quattro colonne di quadrati. Qui a scegliere sarà il caso: in ogni cella si tira un dado
- `2-croci/`: la prima funzione, `croce(x, y)`, chiamata tre volte in `setup()`. Si legge, si prevede, poi si aggiungono altre chiamate e un ciclo
- `3-labirinto/`: una griglia di celle quadrate che in ogni casella chiama la funzione `cella`. La funzione è vuota: la regola della cella la scrivete voi
- `4-archi/`: per chi va avanti. La stessa griglia, con una regola della cella diversa: due quarti di cerchio attorno a due angoli opposti

In ciascuna cartella:
- `index.html`: la pagina da aprire con Live Server. Non si tocca. Se lo sketch è più largo della finestra, lo rimpicciolisce senza deformarlo
- `sketch.js`: il codice
- `lib/p5.min.js`: p5.js, versione 2.3.4. Non si tocca

I file: [sketch.js](1-dado/sketch.js) · [sketch.js](2-croci/sketch.js) · [sketch.js](3-labirinto/sketch.js) · [sketch.js](4-archi/sketch.js)
