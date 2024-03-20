# Algoritmo Bellman-Ford

## Descrizione
Algoritmo di Bellman-Ford per il calcolo dei percorsi minimi in un grafo.

## Funzionamento
L'algoiritmo si basa sull'utilizzo di due vettori `nodi[]` e `archi[]`. <br>
Ogni nodo contiene `nome`, `distanza`, `predecessore`. <br>
Ogni arco contiene il punto di `inizio` di esso, il punto di `fine` e il `peso` del nodo. <br>
Nel caso `fine` > `peso` + `inizio` il valore `fine` = `peso` + `inizio`; questa operazione viene ripetuta per ogni arco del grafo.<br>
Infine controlla la presenza di eventuali cicli negativi e, se presenti, invia un messaggio di errore e ferma l'esecuzione del programma. <br>