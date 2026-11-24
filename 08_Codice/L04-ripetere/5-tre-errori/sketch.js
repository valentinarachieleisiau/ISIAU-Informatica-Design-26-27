// L04 · Tre errori
// Questo sketch dovrebbe disegnare tre forme:
// - un quadrato quasi nero, in alto a sinistra
// - un grande cerchio quasi nero, in basso a destra
// - un cerchio rosso, in alto a destra
// Invece la pagina resta bianca. Ci sono tre errori: trovateli e correggeteli.
// Aprite la console (Cmd + Opt + J), correggete, salvate, ricaricate. Poi di nuovo.

// setup() viene eseguita una volta sola, all'avvio
function setup() {
    createCanvas(600, 600);   // il foglio: 600 pixel di larghezza, 600 di altezza
    background(240);          // il colore del foglio: un grigio molto chiaro

    fill(30);                       // da qui in poi le forme sono quasi nere
    rect(100, 100, 200, 200;        // il quadrato: angolo in alto a sinistra in (100, 100), lato 200
    circel(400, 400, 250);          // il grande cerchio: centro in (400, 400), diametro 250

    fill(240);                      // da qui in poi le forme sono rosse
    circle(450, 150, 100);          // il cerchio rosso: centro in (450, 150), diametro 100
}
