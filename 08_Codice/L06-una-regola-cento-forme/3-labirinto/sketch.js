// L06 · Il labirinto
// Una griglia di celle quadrate. La griglia è già pronta: in ogni casella chiama la funzione cella.
// La regola della cella la scrivete voi, dentro la funzione cella, in fondo al file.

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

    // Due cicli uno dentro l'altro: per ogni riga, tutte le colonne
    for (let riga = 0; riga < righe; riga++) {
        for (let colonna = 0; colonna < colonne; colonna++) {
            let x = colonna * lato;   // l'angolo in alto a sinistra della cella, da sinistra
            let y = riga * lato;      // l'angolo in alto a sinistra della cella, dall'alto
            cella(x, y);              // la griglia chiama la funzione cella, con l'angolo di questa casella
        }
    }
}


// La funzione cella: la regola di una sola cella.
// Riceve l'angolo in alto a sinistra della cella, (x, y). Il lato della cella è la variabile lato, in cima al file.
function cella(x, y) {
    // Qui la regola della cella
}
