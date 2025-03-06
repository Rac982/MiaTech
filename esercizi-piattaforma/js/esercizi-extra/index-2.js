
//Crea una funzione che accetta un numero come parametro e restituisce la somma delle cifre di quel numero
function sommaCifre(a) {
    return a.toString()
        .split('')
        .reduce((somma, cifra) => somma + parseInt(cifra), 0)
};
console.log(sommaCifre(127));