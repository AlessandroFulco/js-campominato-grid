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

// stampa in pagina ogni riquadro
const difficolta = difficult(input);
for(let i = 0; i < difficolta; i++) {
    const cells = createMyElement();
    cells.addEventListener('click', function() {
        cells.classList.add('azzurro');
    });
}




// funzionalità del programma
// genera un numero random
function getRandomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin)) + rangeMin;
    return result;
}

// crea un elemento in base alla difficoltà scelta
function createMyElement() {
    const node = document.createElement('div');
    if(difficult(input) == 100) {
        node.classList.add('square', 'easy');
    } else if (difficult(input) == 81) {
        node.classList.add('square', 'medium');
    } else if (difficult(input) == 49) {
        node.classList.add('square', 'hard');
    }
    node.append(getRandomNumMinMax(1, difficult(input)))
    contenitore.append(node);
    return node;
}

// determina la difficoltà
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






// function createMyElement() {
//     const node = document.createElement('div');
//     node.classList.add('square', input);
//     return node;
// }