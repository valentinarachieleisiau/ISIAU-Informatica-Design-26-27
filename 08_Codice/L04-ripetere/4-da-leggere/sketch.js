// L04 · Da leggere
// Prima di aprire index.html, leggete il codice riga per riga
// e disegnate a matita, su un foglio, quello che vi aspettate di vedere.
// Solo dopo aprite la pagina nel browser e confrontate.

// setup() viene eseguita una volta sola, all'avvio
function setup() {
    createCanvas(600, 600);   // il foglio: 600 pixel di larghezza, 600 di altezza
    background(245, 235, 215);   // il colore del foglio: tre numeri, rosso, verde e blu

    noStroke();                     // da qui in poi le forme non hanno il contorno
    fill(30);                       // riempimento quasi nero
    rect(0, 0, 300, 600);           // un rettangolo: angolo in (0, 0), largo 300, alto 600

    fill(220, 60, 40);              // riempimento rosso
    circle(300, 200, 240);          // un cerchio: centro in (300, 200), diametro 240

    stroke(30);                     // da qui in poi il contorno è quasi nero
    noFill();                       // e le forme sono vuote, senza riempimento
    circle(300, 420, 120);          // un cerchio vuoto: centro in (300, 420), diametro 120

    line(0, 540, 600, 540);         // una linea orizzontale, da (0, 540) a (600, 540)
}
