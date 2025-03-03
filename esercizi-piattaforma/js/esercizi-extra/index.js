// VARIABILI E TIPI DI DATO

// Dichiarazioni di variabili
let name = "Rachele";
let age = 42;
let isStudent = false;
console.log("Nome:", name);
console.log("Età:", age);
console.log("Studente:", isStudent);
//Concatenazione di stringhe
let message = `Ciao, mi chiamo ${name} e ho ${age} anni.`;
console.log(message);

// OPERAZIONI E CONDIZIONI

//Somma di due numeri - Chiedi due numeri all'utente (Nota: prompt restituisce sempre una stringa, quindi bisogna usare parseFloat per convertirla in numero)
let num1 = parseFloat(prompt("Inserisci il primo numero:"));
let num2 = parseFloat(prompt("Inserisci il secondo numero:"));

//Controlla se i valori inseriti sono numeri validi e stampane la somma
if (!isNaN(num1) && !isNaN(num2)) {
    let sum = num1 + num2;
    console.log(`La somma dei numeri è: ${sum}`);
} else {
    console.log("Errore: inserisci solo numeri validi")
}

// Verifica numero pari o dispari
let x = parseFloat(prompt("Inserisci un numero:"));

const isPari = (num) => {
    if (num % 2 === 0) {
        console.log("Pari")
    } else {
        console.log("Dispari")
    }
}

isPari(x)

//Controllo età
let userAge = parseFloat(prompt("Inserisci la tua età:"));

const checkAccess = (age) => {
    if (age >= 18) {
        console.log("Sei maggiorenne");
    } else {
        console.log("Sei minorenne");
    }
};

checkAccess(userAge);

// ARRAY E LOOP

//Crea un array con 5 numeri interi
let numbers = [55, 73, 35, 23, 57];
//Usa un ciclo for per sommarli e stampa il risultato
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log("La somma dei numeri è:", total);

//Trova il numero massimo in un array usando un ciclo
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Il numero massimo è:", max);

//Crea un array di 5 numeri casuali
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100)); // Numeri casuali tra 0 e 99
}

console.log("Array di numeri casuali:", randomNumbers);

//FUNZIONI

//Funzione somma
function sum(a, b) {
    return a + b;
}
let result = sum(5, 3);
console.log(result);

//Funzione per verificare se un numero è primo
function isPrimo(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

console.log("Il numero 7 è primo?", isPrimo(7));
console.log("Il numero 10 è primo?", isPrimo(10));

//OGGETTI

//Oggetto persona + Aggiungi all'oggetto persona un metodo saluta()
let persona = {
    name: "Rachele",
    age: 42,
    hobby: "Nuoto",
    saluta: function() {
        return `Ciao, sono ${this.name}!`;
    }
}

console.log("Nome:", persona.name);
console.log("Età:", persona.age);
console.log("Hobby:", persona.hobby);
console.log(persona.saluta());

/* Stampa i numeri da 1 a 100, ma:
Se un numero è multiplo di 3, stampa "Fizz"
Se è multiplo di 5, stampa "Buzz"
Se è multiplo di entrambi, stampa "FizzBuzz" */
for (let i = 1; i < 100, i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}