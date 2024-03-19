- Descrizione

    Rappresentazione dell'algoritmo di Bellman-Ford con JavaScript.

- Funzionamento

    L'algoritmo di Bellman-Ford è basato sul calcolo dei percorsi minimi di un dato grafo, creando due array di nome nodi[] e archi[] posso rappresentare sotto forma di codice il grafo e iterare sui vari elementi presenti in essi.

    Utilizzando la funzione setNodi() inizializzo ogni nodo con tre variabili:
        - Nome 
            Ad ogni nodo viene assegnato un nome, tramite fromCharCode(), utilizzando la tabella ascii con valore iniziale 65('A') e sommando l'indice i per fare in modo che ogni nodo abbia un nome in ordine alfabetico A -> B -> C...
        - Distanza
            La distanza di ogni nodo è inizializzata ad INFINITO, tranne il nodo di origine che ha distanza = 0
        - Predecessore
            Questa variabile viene inizializzata come una stringa vuota e verrà associata al nodo al quale la distanza verrà aggiornata

    Tramite la funzione setArchi() inizializzo ogni arco con tre variabili:
        - Peso
            Rappresenta il "costo" dell'arco e influenza il percorso migliore per raggiungere un determinato nodo
        - Inizio
            Rappresenta il punto di inizio dell'arco e questa variabile viene caricata direttamente con l'oggetto nodo di partenza
        - Fine 
            Rappresenta il punto di fine dell'arco e questa variabile viene caricata direttamente con l'oggetto nodo finale        

    Infine la funzione calcoloPercorsiMinimi() prende ogni arco e, seguendo i criteri dell'algoritmo, calcola i percorsi minimi che verranno stampati sulla console come Nome : Valore.
    Se l'algoritmo presenta dei cicli negativi il codice viene stoppato e viene stampato un messaggio di errore 