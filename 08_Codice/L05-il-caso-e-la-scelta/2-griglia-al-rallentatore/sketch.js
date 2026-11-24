// L05 · La griglia al rallentatore
// È la griglia della L04, con gli stessi due cicli for, uno dentro l'altro.
// Cambia una cosa sola: dopo ogni cerchio lo sketch aspetta un attimo.
// Così vedete in che ordine i due cicli disegnano i cerchi.
// Sotto la griglia compaiono i valori di riga e colonna, e quelli di x e y che ne derivano.
// Per rivederlo dall'inizio, ricaricate la pagina.

// ---- Le tre variabili della griglia: le stesse della L04 ----
let colonne = 8;     // quanti cerchi in ogni riga (e quante righe)
let diametro = 40;   // quanto è grande ogni cerchio, in pixel
let distanza = 60;   // quanto spazio c'è tra il centro di un cerchio e il successivo, in pixel

// ---- La variabile del rallentatore ----
let pausa = 500;     // quanto aspetta lo sketch dopo ogni cerchio, in millesimi di secondo (500 = mezzo secondo)


// async: questa parola permette a setup() di fermarsi ad aspettare (con await, più sotto)
async function setup() {
    createCanvas(600, 600);   // il foglio: 600 pixel di larghezza, 600 di altezza
    background(240);          // il colore del foglio: un grigio molto chiaro
    noStroke();               // i cerchi non hanno il contorno
    textFont("monospace");    // i numeri sotto la griglia, con un carattere da codice
    textSize(32);             // grandi, perché si leggano dal fondo dell'aula

    // Due cicli uno dentro l'altro: per ogni riga, disegna tutte le colonne
    for (let riga = 0; riga < colonne; riga++) {
        for (let colonna = 0; colonna < colonne; colonna++) {
            let x = distanza / 2 + colonna * distanza;   // dove sta il cerchio, da sinistra
            let y = distanza / 2 + riga * distanza;      // dove sta il cerchio, dall'alto
            fill(30);                                    // i cerchi sono quasi neri
            circle(x, y, diametro);

            scriviValori(riga, colonna, x, y);   // sotto la griglia: i numeri di questo cerchio
            await aspetta(pausa);                // il rallentatore: aspetta prima del cerchio successivo
        }
    }
}


// ---- Due aiutanti. Non serve capirli adesso: ci torniamo quando parliamo di funzioni ----

// Scrive sotto la griglia i valori di riga e colonna, e sotto ancora quelli di x e y
function scriviValori(riga, colonna, x, y) {
    fill(240);                                         // prima cancella i numeri di prima:
    rect(0, 490, width, 110);                          // un rettangolo del colore del foglio
    fill(30);                                          // poi scrive quelli nuovi, in nero
    text("riga = " + riga, 30, 535);                   // prima riga di testo: i due contatori
    text("colonna = " + colonna, 300, 535);
    text("y = " + y, 30, 580);                         // seconda riga: dove finisce il cerchio
    text("x = " + x, 300, 580);                        // (x sotto colonna, y sotto riga)
}

// Ferma lo sketch per il numero di millesimi di secondo che le si dà
function aspetta(millesimi) {
    return new Promise(function (fatto) {
        setTimeout(fatto, millesimi);
    });
}
