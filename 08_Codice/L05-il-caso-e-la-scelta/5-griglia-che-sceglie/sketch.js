// L05 · La griglia che sceglie
// La griglia della L04: due cicli for, uno dentro l'altro.
// Oggi ogni cella sceglie che forma disegnare: prima con una regola, poi tirando il dado.

// ---- Le tre variabili della griglia: le stesse della L04 ----
let colonne = 8;     // quanti cerchi in ogni riga (e quante righe)
let diametro = 40;   // quanto è grande ogni cerchio, in pixel
let distanza = 60;   // quanto spazio c'è tra il centro di un cerchio e il successivo, in pixel


// setup() viene eseguita una volta sola, all'avvio
function setup() {
    createCanvas(600, 600);   // il foglio: 600 pixel di larghezza, 600 di altezza
    background(240);          // il colore del foglio: un grigio molto chiaro
    noStroke();               // le forme non hanno il contorno
    fill(30);                 // le forme sono quasi nere
    rectMode(CENTER);         // da qui in poi anche i quadrati si misurano dal centro, come i cerchi

    // Due cicli uno dentro l'altro: per ogni riga, disegna tutte le colonne
    for (let riga = 0; riga < colonne; riga++) {
        for (let colonna = 0; colonna < colonne; colonna++) {
            let x = distanza / 2 + colonna * distanza;   // dove sta la forma, da sinistra
            let y = distanza / 2 + riga * distanza;      // dove sta la forma, dall'alto
            circle(x, y, diametro);
        }
    }
}
