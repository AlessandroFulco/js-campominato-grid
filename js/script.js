/*
Consegna: 
L'utntente indica un livello di difficoltà in base al quale
viene generata una griglia di gioco quadrata, in cui ogni cella 
contiene un numero tra quelli compresi in un range :
1. difficolta => tra 1 e 100;
2. con difficoltà => tra 1 e 81;
3. con difficoltà => tra 1 e 49;
Quando l'utente clicca su ogni cella,
la cella cliccata si colora di azzurro.
*/

//dato il value dell'input stabilisci la difficoltà
const input = prompt('inserisci la difficoltà: facile,media, difficile');

// salviamo il container di tutte le celle
const contenitore = document.getElementById('grid');





function difficult(numero) {
    let divEl;
    for (let i = 0; i < numero; i++) {
        divEl = createMyElement();
        divEl.className = 'square easy';
        contenitore.append(divEl);
        
    }
    return divEl;
}
difficult(input);





// funzionalità del programma

function getRandomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin)) + rangeMin;
    return result;
}

function createMyElement() {
    const node = document.createElement('div');
    node.className = "square";
    return node;
}
