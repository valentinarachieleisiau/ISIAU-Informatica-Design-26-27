// L06 · Croci
// La prima funzione scritta da voi.
// Una funzione è un gruppo di istruzioni con un nome: si scrive una volta, e si usa quante volte serve.

// setup() viene eseguita una volta sola, all'avvio
function setup() {
    createCanvas(600, 600);   // lo sketch: 600 pixel di larghezza, 600 di altezza
    background(240);          // il colore dello sfondo: un grigio molto chiaro
    stroke(30);               // il colore delle linee: quasi nero
    strokeWeight(4);          // lo spessore delle linee: 4 pixel

    // Tre chiamate alla funzione croce: ogni volta con valori diversi tra le parentesi
    croce(100, 100);   // una croce con il centro in x = 100, y = 100
    croce(300, 200);   // una croce con il centro in x = 300, y = 200
    croce(500, 100);   // una croce con il centro in x = 500, y = 100
}


// La funzione croce: disegna una croce con il centro nel punto (x, y).
// x e y non hanno un valore fisso: ricevono i numeri scritti tra le parentesi in ogni chiamata.
function croce(x, y) {
    line(x - 20, y, x + 20, y);   // la linea orizzontale: da 20 pixel a sinistra del centro a 20 pixel a destra
    line(x, y - 20, x, y + 20);   // la linea verticale: da 20 pixel sopra il centro a 20 pixel sotto
}
