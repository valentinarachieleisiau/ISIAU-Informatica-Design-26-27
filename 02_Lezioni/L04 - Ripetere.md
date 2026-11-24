---
tipo: lezione
fase: 0
lezione: 4
durata: 4h
---
# L04 · Ripetere

## Di cosa parliamo oggi

Cominciamo mettendo in ordine le cartelle: ripartiamo tutti dallo stesso punto, senza perdere niente di quello che avete fatto. Poi, in uno sketch con dieci cerchi, create la vostra prima [Variabile](../04_Glossario/Variabile.md). Da lì passiamo alla seconda idea importante del precorso, il [Ciclo](../04_Glossario/Ciclo.md): il modo in cui un programma ripete la stessa cosa molte volte senza riscriverla. Lo vediamo prima con dieci cerchi scritti a mano, poi con un ciclo di tre righe, e infine torniamo alla griglia di cerchi, che oggi potete leggere tutta. Prima del ciclo, una pagina di Borges: una biblioteca costruita come una regola che si ripete.

## Obiettivi

Alla fine di questa lezione sapete:
- creare una variabile vostra con `let`, e usarla al posto di un numero
- spiegare a parole che cosa si ripete e che cosa cambia in una serie di forme
- scrivere un ciclo `for` che disegna una fila di forme
- leggere la griglia di cerchi riga per riga, e prevedere che cosa succede cambiando i limiti dei suoi due cicli
- leggere uno sketch scritto da altri prima di eseguirlo, e correggerne gli errori con la console

## Che cosa facciamo

1. **Rimettiamo in ordine le cartelle.** Due gesti, uguali per tutti: la vecchia cartella `esercizi` diventa `esercizi-L02-L03`, e quella nuova arriva da Classroom.
2. **La prima variabile vostra.** In uno sketch con dieci cerchi scritti a mano, un numero che torna in tutte le righe diventa una variabile. Cambiando un solo numero, cambiano tutti i cerchi insieme.
3. **"La biblioteca di Babele".** Un passo del racconto di Jorge Luis Borges, letto in aula. Che cosa si ripete, e che cosa cambia?
4. **Il ciclo `for`.** Dieci cerchi scritti a mano, poi gli stessi dieci con un ciclo. Poi una fila che cresce, e la griglia riletta riga per riga: due cicli, uno dentro l'altro.
5. **Leggere il codice degli altri.** Uno sketch da leggere e disegnare a matita prima di aprirlo, e uno con tre errori da trovare.
6. **Il colore che cambia.** Il numero del ciclo può cambiare anche il colore: una fila di grigi, e una griglia con un colore per colonna.

## La cartella `esercizi`

Dopo la ripartenza di oggi, la cartella del corso è fatta così:

```
la vostra cartella del corso/
├── esercizi-L02-L03/           tutto quello che avevate prima
└── esercizi/
    └── L04-ripetere/
        ├── 1-dieci-cerchi/
        ├── 2-fila/
        ├── 3-griglia/
        ├── 4-da-leggere/
        └── 5-tre-errori/
```

Ogni cartella ha la stessa forma: `index.html`, da aprire in Chrome; `sketch.js`, da aprire in Visual Studio Code; `lib`, che non si tocca. Dalla prossima lezione, su Classroom ci sarà un file compresso per lezione, da estrarre dentro `esercizi`.

Se eravate assenti, ecco i passi per arrivare fin qui. Non si cancella niente.

1. Nel Finder, dentro la cartella del corso, rinominate `esercizi` in `esercizi-L02-L03`
2. Scaricate da Classroom `esercizi.zip` e spostatelo dentro la cartella del corso
3. Fate doppio clic su `esercizi.zip`: compare la cartella `esercizi`. Il file `.zip` adesso si può cestinare. Su Windows: clic destro sul file → *Estrai tutto*, e nel percorso che Windows propone cancellate l'ultimo `\esercizi`, altrimenti ne esce una cartella dentro l'altra

**Controllo:** aprite `esercizi/L04-ripetere/1-dieci-cerchi/index.html` in Chrome, e vedete dieci cerchi in fila.

## Il ciclo in una frase

```js
for (let giro = 0; giro < 10; giro++) {
    circle(30 + giro * 60, 300, 40);
}
```

Si legge così: *parti da zero; finché giro è minore di dieci, disegna un cerchio; poi aggiungi uno a giro e ricomincia.* Il numero che cambia a ogni giro è quello che rende ogni cerchio diverso dagli altri.

## Materiali

- [Diapositive L04 - Ripetere](Diapositive/Diapositive%20L04%20-%20Ripetere.md)
- [L04 - Sketch per ripetere](../08_Codice/L04-ripetere/L04%20-%20Sketch%20per%20ripetere.md): su Classroom, dentro `esercizi.zip`
- [Glossario](../04_Glossario/Glossario.md)

## Da fare prima della prossima lezione

Per lunedì 16 novembre:
- [ ] Nella cartella `L04-ripetere/2-fila`, al posto del cerchio, ripetete in fila con il ciclo `for` una forma scelta da voi, se volete dal vostro disegno su carta della L03. Prima scrivetelo a parole, poi in codice
- [ ] Portate il computer carico, e il caricatore
