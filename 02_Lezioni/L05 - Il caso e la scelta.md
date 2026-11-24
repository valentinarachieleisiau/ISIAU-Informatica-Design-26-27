---
tipo: lezione
fase: 0
lezione: 5
durata: 4h
---
# L05 · Il caso e la scelta

## Di cosa parliamo oggi

Cominciamo con due attrezzi nuovi per Visual Studio Code: un'[Estensione](../04_Glossario/Estensione.md) che suggerisce mentre scrivete e ricarica la pagina da sola, e la Reference di p5.js, il manuale di tutte le sue istruzioni.

Poi torniamo sul [Ciclo](../04_Glossario/Ciclo.md), con calma. Prima lo eseguite voi, a mano, giro per giro, come farebbe il computer. Poi lo guardate al rallentatore: la fila e la griglia della L04 disegnate un cerchio alla volta, con sotto i numeri che cambiano.

Nella seconda parte la regola impara a scegliere. Prima lascia scegliere il [caso](../04_Glossario/Caso.md): ogni volta che la pagina si ricarica, esce una copia diversa. Poi la regola sceglie da sola, con una [condizione](../04_Glossario/Condizione.md): *se* succede una cosa, fa questo, *altrimenti* fa quello. Alla fine la griglia della L04 impara a scegliere: in ogni cella, un quadrato o un cerchio. In mezzo, una pagina di Borges su un libro in cui tutte le strade vengono prese insieme.

## Obiettivi

Alla fine di questa lezione sapete:
- aprire uno sketch con Live Server, e cercare un'istruzione nella Reference di p5.js
- eseguire a mano un ciclo `for`, giro per giro, e dire quando si ferma
- dire in che ordine due cicli, uno dentro l'altro, disegnano una griglia
- far scegliere al computer un numero a caso con `random()`, e ritrovare una copia con `randomSeed()`
- scrivere una scelta con `if` ed `else`

## Che cosa facciamo

1. **La cartella della L05.** Un solo file da Classroom, da estrarre dentro `esercizi`.
2. **Due attrezzi nuovi.** L'estensione *p5.js 2.x Project Generator*, con Live Server, e la Reference di p5.js.
3. **Il ciclo, un ciclo solo.** Un ciclo eseguito a mano, su un foglio, giro per giro. Poi la fila al rallentatore.
4. **Il ciclo, due cicli.** La griglia al rallentatore: un ciclo dentro l'altro, per ogni riga tutte le colonne.
5. **"Il giardino dei sentieri che si biforcano".** Un passo del racconto di Jorge Luis Borges, letto in aula.
6. **Il caso.** Una fila di cerchi a caso: ogni volta che la pagina si ricarica, una copia nuova. E ogni copia ha un numero.
7. **La scelta.** Una fila che cambia colore a metà: `if` ed `else`.
8. **La griglia che sceglie.** Ogni cella sceglie se disegnare un quadrato o un cerchio, con una regola fissa.

## La cartella della L05

Da oggi, per ogni lezione, su Classroom c'è un solo file compresso, da estrarre dentro `esercizi`. Dopo la lezione di oggi la cartella del corso è fatta così:

```
la vostra cartella del corso/
├── esercizi-L02-L03/
└── esercizi/
    ├── L04-ripetere/
    └── L05-il-caso-e-la-scelta/
        ├── 1-fila-al-rallentatore/
        ├── 2-griglia-al-rallentatore/
        ├── 3-caso/
        ├── 4-scelta/
        ├── 5-griglia-che-sceglie/
        └── 6-la-mia-regola/
```

1. Scaricate da Classroom `L05-il-caso-e-la-scelta.zip`
2. Spostatelo dentro la cartella `esercizi`
3. Fate doppio clic: compare la cartella `L05-il-caso-e-la-scelta`. Il file `.zip` adesso si può cestinare

Su Windows: clic destro sul file → *Estrai tutto*, e nel percorso che Windows propone cancellate l'ultimo `\L05-il-caso-e-la-scelta`, altrimenti ne esce una cartella dentro l'altra.

## Se eravate assenti: l'estensione e Live Server

1. In Visual Studio Code aprite le estensioni: `Cmd + Maiusc + X` (Windows: `Ctrl + Maiusc + X`)
2. Cercate **p5.js 2.x Project Generator**, di Irti, e fate clic su **Install**. Insieme arriva **Live Server**: nell'elenco delle estensioni compaiono tutte e due
3. Aprite le impostazioni: `Cmd + ,` (Windows: `Ctrl + ,`). Cercate `custom browser` e in **Custom Browser** scegliete `chrome`
4. Per aprire uno sketch: clic destro su `index.html` → **Open with Live Server**. Da lì in poi, ogni volta che salvate, la pagina si ricarica da sola. Non usate il pulsante *Go Live* in basso: apre l'elenco di tutta la cartella, invece dello sketch

Il comando dell'estensione *Create a new p5.js 2.x Project* non serve: le cartelle degli sketch arrivano da Classroom.

**Controllo:** aprite con Live Server `L05-il-caso-e-la-scelta/1-fila-al-rallentatore/index.html`. Vedete la fila che si disegna un cerchio al secondo, con sotto i numeri.

## Il ciclo, giro per giro

```js
for (let giro = 0; giro < 4; giro++) {
    circle(100 + giro * 100, 300, 50);
}
```

Il computer fa sempre le stesse cose, nello stesso ordine:

1. **una volta sola, all'inizio:** `let giro = 0`
2. **a ogni giro:** prima la domanda, `giro < 4`. Se la risposta è sì, esegue quello che sta tra le graffe, poi `giro++` aggiunge 1, e si torna alla domanda
3. **quando la risposta è no**, il ciclo finisce

| giro | giro < 4 ? | x |
|---|---|---|
| 0 | sì | 100 |
| 1 | sì | 200 |
| 2 | sì | 300 |
| 3 | sì | 400 |
| 4 | no | il ciclo finisce |

Quattro cerchi, non cinque: con `giro = 4` la risposta è no, e non si disegna niente.

Se il ciclo vi confonde ancora, aprite le due cartelle al rallentatore e cambiate `pausa`: potete guardarle alla velocità che volete. In quella della griglia, guardate quando `colonna` torna a 0.

## Il caso e la scelta in poche righe

```js
circle(30 + giro * 60, random(100, 500), 40);
```

`random(100, 500)` è un numero a caso tra 100 e 500, diverso ogni volta. La regola è sempre la stessa, ma ogni volta che la pagina si ricarica esce una copia diversa. Se in cima a `setup()` scrivete `randomSeed(7);`, esce sempre la copia numero 7.

```js
if (giro < 5) {
    fill(30);
} else {
    fill(220, 60, 40);
}
```

Si legge così: *se giro è minore di 5, colora di nero; altrimenti, colora di rosso.* Le parentesi tonde contengono la domanda, le graffe quello che si fa nei due casi. È la stessa domanda, vera o falsa, che il `for` si fa a ogni giro.

Nella griglia la domanda si fa con il numero della colonna, o della riga:

```js
if (colonna < 4) {
    square(x, y, diametro);
} else {
    circle(x, y, diametro);
}
```

Le prime quattro colonne, da 0 a 3, disegnano un quadrato; le altre un cerchio. Con `riga < 4`, i quadrati vanno nelle prime quattro righe.

Se al posto del disegno vedete una rotellina che gira senza fermarsi, la pagina non sta caricando: c'è un errore, spesso un nome scritto male (`radom` al posto di `random`). Aprite la console di Chrome, `Cmd + Opt + J` (Windows: `Ctrl + Maiusc + J`): il messaggio dice quale nome e in quale riga. Se invece la pagina resta tutta bianca, di solito manca una parentesi o una virgola.

## Materiali

- [Diapositive L05 - Il caso e la scelta](Diapositive/Diapositive%20L05%20-%20Il%20caso%20e%20la%20scelta.md)
- [L05 - Sketch per il caso e la scelta](../08_Codice/L05-il-caso-e-la-scelta/L05%20-%20Sketch%20per%20il%20caso%20e%20la%20scelta.md): su Classroom, dentro `L05-il-caso-e-la-scelta.zip`
- La Reference di p5.js: [p5js.org/reference](https://p5js.org/reference/)
- [Glossario](../04_Glossario/Glossario.md)
## Da fare prima della prossima lezione

Entro la mezzanotte di domenica 22 novembre, consegnate uno sketch con tutto quello che abbiamo visto finora. È lo sketch finale del precorso. A ogni lezione lo sketch di uno di voi diventerà la copertina del corso.
- [ ] Lo sketch è grande 1600 × 400 pixel
- [ ] È una griglia di forme a piacere. Lo sfondo e il colore delle forme sono a piacere
- [ ] Nello sketch usate un doppio ciclo `for`, `random()`, `if` ed `else`, e tutte le variabili che vi sembrano utili
- [ ] Consegnate come compito su Classroom solo l'immagine dello sketch, non il codice. Il codice tenetelo sul vostro computer: lunedì lo leggerà un compagno
- [ ] Portate il computer carico, e il caricatore
