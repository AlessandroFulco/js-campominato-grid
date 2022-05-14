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

function difficult(stringa) {
    let selectDifficult;
    if(stringa == "facile") {
        selectDifficult = 100;
    } else if (stringa == "media") {
        selectDifficult = 81;
    } else if (stringa == "difficile") {
        selectDifficult = 49;
    }
    return selectDifficult;
}
