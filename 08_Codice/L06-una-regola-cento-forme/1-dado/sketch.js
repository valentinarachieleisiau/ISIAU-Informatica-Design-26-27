// L06 · Il dado
// La griglia che sceglie della L05, ferma dove l'avevamo lasciata:
// le prime quattro colonne disegnano un quadrato, le altre un cerchio.
// Oggi a scegliere sarà il caso: in ogni cella tiriamo un dado.

// ---- Le tre variabili della griglia: le stesse della L04 ----
let colonne = 8;     // quante forme in ogni riga (e quante righe)
let diametro = 40;   // quanto è grande ogni forma, in pixel
let distanza = 60;   // quanto spazio c'è tra il centro di una forma e la successiva, in pixel


// setup() viene eseguita una volta sola, all'avvio
function setup() {
    createCanvas(600, 600);   // lo sketch: 600 pixel di larghezza, 600 di altezza
    background(240);          // il colore dello sfondo: un grigio molto chiaro
    noStroke();               // le forme non hanno il contorno
    fill(30);                 // le forme sono quasi nere
    rectMode(CENTER);         // anche i quadrati si misurano dal centro, come i cerchi

    // Due cicli uno dentro l'altro: per ogni riga, disegna tutte le colonne
    for (let riga = 0; riga < colonne; riga++) {
        for (let colonna = 0; colonna < colonne; colonna++) {
            let x = distanza / 2 + colonna * distanza;   // dove sta la forma, da sinistra
            let y = distanza / 2 + riga * distanza;      // dove sta la forma, dall'alto

            // La scelta: se la risposta alla domanda è sì, un quadrato; altrimenti, un cerchio.
            // Per ora la domanda è: la colonna è una delle prime quattro (0, 1, 2, 3)?
            if (colonna < 4) {
                square(x, y, diametro);
            } else {
                circle(x, y, diametro);
            }
        }
    }
}
