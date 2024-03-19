let numeroNodi = 5;
let numeroArchi = numeroNodi + 2;

const nodi = [];
const archi = [];


function setNodi() {
    //  String.fromCharCode(65 + i) -> A, B, C ... 
    for (let i = 0; i < numeroNodi; i++) {
        nodi.push({nome: String.fromCharCode(65 + i)});
    }
    nodi.forEach(nodo => {
       nodo.distanza = Infinity;
       nodo.predecessore = '';
    });
    nodi[0].distanza = 0;
}

function setArchi() {
    // peso archi random 1 : 9
    for (let i = 0; i < numeroArchi; i++) {
        archi.push({peso: Math.floor(Math.random() * -5 + 1)});
    }
    // inizio e fine primi 4 archi 
    for (let i = 0; i < numeroNodi - 1; i ++) {
        archi[i].inizio = nodi[i];
        archi[i].fine = nodi[i + 1];
    }
    // arco 5 = inizio E, fine A
    archi[numeroNodi - 1].inizio = nodi[numeroNodi - 1];
    archi[numeroNodi - 1].fine = nodi[0];
    // arco 6 = AD, arco 7 = BE, ecc...
    for (let i = numeroNodi; i < numeroArchi; i ++) {
        const InizioIndex = i % numeroNodi;
        const FineIndex = (i + numeroNodi - 3) % numeroNodi;
        archi[i].inizio = nodi[InizioIndex];
        archi[i].fine = nodi[FineIndex];
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

    archi.forEach(arco => {
        if (arco.fine.distanza > (arco.peso + arco.inizio.distanza)) {
            console.log("Il grafo contiene un ciclo negativo");
            // se è presente un ciclo negativo esce dalla funzione
            debugger;
        }
    });
}

setNodi();
setArchi(); 
calcoloPercorsiMinimi();
    

