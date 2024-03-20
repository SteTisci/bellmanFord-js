const nodi = [];
const archi = [];

function getNodi() {
    let input = document.querySelector('.numeroNodi');
    let nodi = input.innerHTML; //  Cannot read properties of null (reading 'innerHTML')

    return nodi;
}

function getArchi() {
    let input = document.querySelector('.numeroArchi');
    let archi = input.innerHTML

    return archi;
}

let numeroNodi = getNodi();
let numeroArchi = getArchi();

function setNodi() {
    //  String.fromCharCode(65 + i) -> A, B, C ... 
    for (let i = 0; i < numeroNodi; i++) {  // Cannot access 'numeroNodi' before initialization
        nodi.push({nome: String.fromCharCode(65 + i)});
    }
    nodi.forEach(nodo => {
       nodo.distanza = Infinity;
       nodo.predecessore = '';
    });
    nodi[0].distanza = 0;
}

function setArchi() {
    // peso archi random 1 : 7
    for (let i = 0; i < numeroArchi; i++) {
        archi.push({peso: Math.floor(Math.random() * 7 + 1)});
    }
    // inizio e fine primi archi in ordine
    for (let i = 0; i < numeroNodi - 1; i ++) {
        archi[i].inizio = nodi[i];
        archi[i].fine = nodi[i + 1];
    }
    //inizio ultimoNodo, fine Origine
    archi[numeroNodi - 1].inizio = nodi[numeroNodi - 1];
    archi[numeroNodi - 1].fine = nodi[0];
    // archi non ordinati AD, BE, CF, ecc...
    for (let i = numeroNodi; i < numeroArchi; i ++) {
        const indexInizio = i % numeroNodi;
        const indexFine = (i + numeroNodi + 3) % numeroNodi;
        archi[i].inizio = nodi[indexInizio];
        archi[i].fine = nodi[indexFine];
    }
}

function calcoloPercorsiMinimi() {
    // il calcolo dei percorsi viene eseguito (numeroNodi - 1) volte
    for (let i = 0; i < numeroNodi - 1; i++) {
        archi.forEach(arco => {
            if (arco.fine.distanza === Infinity || arco.fine.distanza > (arco.peso + arco.inizio.distanza)) {
                arco.fine.distanza = (arco.peso + arco.inizio.distanza);
                arco.fine.predecessore = arco.inizio.nome;
            }
        });
    }
    nodi[0].predecessore = 'Origine';

    // controllo cicli negativi
    archi.forEach(arco => {
        if (arco.fine.distanza > (arco.peso + arco.inizio.distanza)) {
            console.error("Errore >> Il Grafo contiene un ciclo negativo!");
            return;
        }
    });
}