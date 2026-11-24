// L06 · Il labirinto con gli archi
// La stessa griglia del labirinto, con una regola della cella diversa.
// Al posto delle diagonali, in ogni cella due quarti di cerchio, attorno a due angoli opposti.
// La griglia non cambia: cambia solo la funzione cella.

// ---- Le variabili della griglia ----
let lato = 50;              // quanto è grande ogni cella, in pixel
let colonne = 600 / lato;   // quante celle in una riga: lo sketch è largo 600 pixel, quindi 600 diviso il lato
let righe = 600 / lato;     // quante righe di celle: lo sketch è alto 600 pixel, quindi 600 diviso il lato


// setup() viene eseguita una volta sola, all'avvio
function setup() {
    createCanvas(600, 600);   // lo sketch: 600 pixel di larghezza, 600 di altezza
    background(240);          // il colore dello sfondo: un grigio molto chiaro
    stroke(30);               // il colore delle linee: quasi nero
    strokeWeight(4);          // lo spessore delle linee: 4 pixel
    noFill();                 // gli archi non si riempiono: si disegna solo la linea

    // Due cicli uno dentro l'altro: per ogni riga, tutte le colonne
    for (let riga = 0; riga < righe; riga++) {
        for (let colonna = 0; colonna < colonne; colonna++) {
            let x = colonna * lato;   // l'angolo in alto a sinistra della cella, da sinistra
            let y = riga * lato;      // l'angolo in alto a sinistra della cella, dall'alto
            cella(x, y);              // la griglia chiama la funzione cella, con l'angolo di questa casella
        }
    }
}


// La funzione cella: in ogni cella il dado sceglie quale coppia di angoli opposti usare.
// arc(centro x, centro y, larghezza, altezza, inizio, fine) disegna un pezzo di cerchio.
// Il centro di ogni arco è un angolo della cella; il cerchio è largo quanto la cella,
// quindi l'arco passa per la metà dei due lati vicini a quell'angolo.
// Inizio e fine dicono quale quarto disegnare: in p5.js gli angoli si misurano partendo da destra
// e girando in senso orario. HALF_PI è un quarto di giro, PI mezzo giro, TWO_PI un giro intero.
function cella(x, y) {
    let dado = random();   // un numero a caso tra 0 e 1
    if (dado < 0.5) {
        arc(x, y, lato, lato, 0, HALF_PI);                         // attorno all'angolo in alto a sinistra
        arc(x + lato, y + lato, lato, lato, PI, PI + HALF_PI);     // attorno all'angolo in basso a destra
    } else {
        arc(x + lato, y, lato, lato, HALF_PI, PI);                 // attorno all'angolo in alto a destra
        arc(x, y + lato, lato, lato, PI + HALF_PI, TWO_PI);        // attorno all'angolo in basso a sinistra
    }
}
