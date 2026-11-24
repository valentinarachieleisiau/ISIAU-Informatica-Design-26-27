// L05 · La scelta
// Ancora la fila della L04: dieci cerchi, scritti con un ciclo for.
// Oggi, a ogni giro, il cerchio sceglie il suo colore: se è nella prima metà, uno; altrimenti, un altro.

// setup() viene eseguita una volta sola, all'avvio
function setup() {
    createCanvas(600, 600);   // il foglio: 600 pixel di larghezza, 600 di altezza
    background(240);          // il colore del foglio: un grigio molto chiaro
    noStroke();               // i cerchi non hanno il contorno
    fill(30);                 // i cerchi sono quasi neri

    // Dieci giri: a ogni giro un cerchio, 60 pixel più a destra del precedente
    for (let giro = 0; giro < 10; giro++) {
        circle(30 + giro * 60, 300, 40);
    }
}
