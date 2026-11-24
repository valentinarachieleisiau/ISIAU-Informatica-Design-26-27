// L04 · Dieci cerchi
// Dieci cerchi in fila, scritti a mano, uno per riga.
// Prima di toccare il codice, guardate le dieci righe con i cerchi:
// quali numeri restano uguali? Quale numero cambia, e di quanto ogni volta?

// setup() viene eseguita una volta sola, all'avvio
function setup() {
    createCanvas(600, 600);   // il foglio: 600 pixel di larghezza, 600 di altezza
    background(240);          // il colore del foglio: un grigio molto chiaro
    noStroke();               // i cerchi non hanno il contorno
    fill(30);                 // i cerchi sono quasi neri

    circle(30, 300, 40);      // il primo cerchio: centro in (30, 300), diametro 40
    circle(90, 300, 40);
    circle(150, 300, 40);
    circle(210, 300, 40);
    circle(270, 300, 40);
    circle(330, 300, 40);
    circle(390, 300, 40);
    circle(450, 300, 40);
    circle(510, 300, 40);
    circle(570, 300, 40);     // il decimo cerchio: tocca quasi il bordo destro
}
