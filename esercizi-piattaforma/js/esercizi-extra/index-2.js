
//Crea una funzione che accetta un numero come parametro e restituisce la somma delle cifre di quel numero
function sommaCifre(a) {
    return a.toString()
        .split('')
        .reduce((somma, cifra) => somma + parseInt(cifra), 0)
};
console.log(sommaCifre(127));

// Scrivi una funzione che accetta due parametri a (numero di partenza) e b (numero di numeri che devono essere presenti nell'array a partire da a), deve restituire un array di b numeri a partire da a
function numArray(a, b) {
    let risultato = [];
    for (let n = 1; n <= b; n++) {
        risultato.push(a + n);
    }
    return(risultato);
}

console.log(numArray(30, 5));