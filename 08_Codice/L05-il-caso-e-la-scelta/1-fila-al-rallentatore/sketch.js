// L05 · La fila al rallentatore
// È la fila della L04: dieci cerchi, con un ciclo for.
// Cambia una cosa sola: dopo ogni cerchio lo sketch aspetta un attimo.
// Sotto la fila compaiono i valori di giro e di x mentre cambiano.
// Per rivederlo dall'inizio, ricaricate la pagina.

// ---- La variabile del rallentatore ----
let pausa = 1000;   // quanto aspetta lo sketch dopo ogni cerchio, in millesimi di secondo (1000 = un secondo)


// async: questa parola permette a setup() di fermarsi ad aspettare (con await, più sotto)
async function setup() {
    createCanvas(600, 600);   // il foglio: 600 pixel di larghezza, 600 di altezza
    background(240);          // il colore del foglio: un grigio molto chiaro
    noStroke();               // i cerchi non hanno il contorno
    textFont("monospace");    // i numeri sotto la fila, con un carattere da codice
    textSize(32);             // grandi, perché si leggano dal fondo dell'aula

    // for (da dove parte; fino a quando continua; che cosa cambia a ogni giro)
    // giro parte da 0; il ciclo continua finché giro è minore di 10; giro++ aggiunge 1
    for (let giro = 0; giro < 10; giro++) {
        let x = 30 + giro * 60;   // dove sta il cerchio, da sinistra: a ogni giro, 60 pixel più a destra
        fill(30);                 // i cerchi sono quasi neri
        circle(x, 300, 40);

        scriviValori(giro, x);    // sotto la fila: i numeri di questo cerchio
        await aspetta(pausa);     // il rallentatore: aspetta prima del cerchio successivo
    }
}


// ---- Due aiutanti. Non serve capirli adesso: ci torniamo quando parliamo di funzioni ----

// Scrive sotto la fila il valore di giro, e sotto ancora quello di x
function scriviValori(giro, x) {
    fill(240);                         // prima cancella i numeri di prima:
    rect(0, 420, width, 180);          // un rettangolo del colore del foglio
    fill(30);                          // poi scrive quelli nuovi, in nero
    text("giro = " + giro, 30, 480);   // prima riga di testo: il contatore
    text("x    = " + x, 30, 540);      // seconda riga: dove finisce il cerchio
}

// Ferma lo sketch per il numero di millesimi di secondo che le si dà
function aspetta(millesimi) {
    return new Promise(function (fatto) {
        setTimeout(fatto, millesimi);
    });
}
