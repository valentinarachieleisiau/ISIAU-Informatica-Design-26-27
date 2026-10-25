// L01 · Griglia di cerchi
// Il primo codice del corso. Per ora si cambiano solo i tre numeri qui sotto.

// ---- Le tre variabili: provate a cambiare questi numeri ----
let colonne = 8;     // quanti cerchi in ogni riga (e quante righe)
let diametro = 40;   // quanto è grande ogni cerchio, in pixel
let distanza = 60;   // quanto spazio c'è tra il centro di un cerchio e il successivo, in pixel


// setup() viene eseguita una volta sola, all'avvio
function setup() {
  createCanvas(600, 600);   // il foglio: 600 pixel di larghezza, 600 di altezza
  background(240);          // il colore del foglio: un grigio molto chiaro
  noStroke();               // i cerchi non hanno il contorno
  fill(30);                 // i cerchi sono quasi neri

  // Due cicli uno dentro l'altro: per ogni riga, disegna tutte le colonne
  for (let riga = 0; riga < colonne; riga++) {
    for (let colonna = 0; colonna < colonne; colonna++) {
      let x = distanza / 2 + colonna * distanza;   // dove sta il cerchio, da sinistra
      let y = distanza / 2 + riga * distanza;      // dove sta il cerchio, dall'alto
      circle(x, y, diametro);
    }
  }
}
