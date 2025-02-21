/**
 * 1. Scrivi una funzione che accetta come parametri un oggetto "user" e un numero;
 * 2. All'interno della funzione controlla se l'età dell'utente è maggiore o minore rispettto
 *    a quella fornita come secondo parametro;
 * 3. Se maggiore restituisci true, altrimenti false;
 * 4. Crea una seconda funzione che in base al risultato della prima fa un console log, se true allora
 *    stampampa in console "Accesso consentito" altrimenti "Accesso negato";
 */

const user = {name: "Mario", age: 25};

const checkAge = (user, age) => {
    return user.age >= age;
};

const checkAccess = (user, age) => {
    if (checkAge(user, age)) {
        console.log("Accesso consentito");
    } else {
        console.log("Accesso negato");
    }
};

checkAccess(user, 10);

// Crea una funzione che accetta un parametro stringa, metti in outpunt un errore 
// se il parametro passato non è una stringa, e controlla il numero di caratteri 
// per mettere in console log "Pari" se il numero dei caratteri è pari, 
// "Dispari" se dispari

const getLength = (str) => {
    if (typeof str !== "string") {
      throw new Error("Not a string");
    }
    return str.length;
  }

const isPari = (num) => {
    if (num % 2 === 0) {
        console.log("Pari")
    } else {
        console.log("Dispari")
    }
}

let x = getLength("Hello world!") // x=12
isPari(x)