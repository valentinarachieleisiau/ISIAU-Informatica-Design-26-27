// L04 · La fila
// Gli stessi dieci cerchi, scritti con un ciclo for: tre righe al posto di dieci.
// Il ciclo ripete le istruzioni tra le parentesi graffe { }.
// A ogni giro la variabile giro cresce di 1: vale 0, poi 1, poi 2... fino a 9.

// setup() viene eseguita una volta sola, all'avvio
function setup() {
    createCanvas(600, 600);   // il foglio: 600 pixel di larghezza, 600 di altezza
    background(240);          // il colore del foglio: un grigio molto chiaro
    noStroke();               // i cerchi non hanno il contorno
    fill(30);                 // i cerchi sono quasi neri

    // for (da dove parte; fino a quando continua; che cosa cambia a ogni giro)
    // giro parte da 0; il ciclo continua finché giro è minore di 10; giro++ aggiunge 1
    for (let giro = 0; giro < 10; giro++) {
        circle(30 + giro * 60, 300, 40);   // a ogni giro il cerchio si sposta di 60 pixel a destra
    }
}
