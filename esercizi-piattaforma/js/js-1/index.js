//Dichiarazione di variabili
let anima = "Soul";
const name = "Rachele";

console.log(anima)
console.log(name)

//Cambio di valore
let fruit = "Apple";
console.log(fruit);

fruit = "Strawberry";
console.log(fruit)

//Ridefinizione di variabili
let number = 5;
{let number = 7;
    console.log(number);
}
console.log(number)

//Scoping delle variabili
let outside = 55;
{let inside = 77;
    console.log(outside);
    console.log(inside);
}
console.log(outside);
//console.log(inside)

//Genera numeri pari
for (let n = 0; n <= 20; n = n + 2) {
    console.log(n);
}

//Numeri dispari decrescenti
let n = 10;
while (n >= 1) {
    n--;
    if (n % 2 !== 0) {
        console.log("Numero disparo decrescente da 10 a 0:", n);
    }
}

//Il prompt
//let word = prompt("Hello");

//Lunghezza della parola
let word = "supercallifragilistichespiralidoso";
console.log("Il numero dei caratteri di word è:", word.length)

//Richiesta di input corretto
/* let parola;

do {
    parola = prompt("Inserisci una parola di almeno 5 caratteri:");
} while (parola.length < 5);

console.log("Hai inserito:", parola); */

//if & else
let numero = 23;
if (numero > 5) {
    console.log("La variabile è maggiore di 5")
} else {
    console.log("La variabile è minore di 5")
}

//if, else & else-if
let score = 77;
if (score >= 90 && score <= 100) {
    console.log("Voto ottimo");
} else if (score >= 70 && score <= 89) {
    console.log("Voto buono");
} else if (score >= 60 && score <= 69) {
    console.log("Voto sufficiente");
}  else {
    console.log("Voto insufficiente");
}

//Verifica il punteggio
let punteggio = 95;
switch (true) {
    case punteggio >= 90 && punteggio <= 100:
        console.log("Voto ottimo");
        break;
    case punteggio >= 70 && punteggio <= 89:
        console.log("Voto buono");
        break;
    case punteggio >= 60 && punteggio <= 69:
        console.log("Voto sufficiente");
        break;
    case punteggio <= 59:
        console.log("Voto insufficiente");
        break;
}

//Array di numeri
let numeri = [123, 568, 4586, 5875, 569];
console.log(numeri)

//Somma i numeri
let somma = 0;
for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
}
console.log("La somma degli elementi dell'array è: " + somma);

//Array reverse
for (let i = 0; i < Math.floor(numeri.length / 2); i++) {
    let temp = numeri[i];
    numeri[i] = numeri[numeri.length - 1 - i];
    numeri[numeri.length - 1 - i] = temp;
}
console.log(numeri);

//Popolamento array
let parole = [];
for (let x = 0; x < 5; x++) {
    let parola = typeof prompt === "function" ? prompt("Inserisci una parola") : `parola${x}`; // controlla la presenza di prompt() e assegna parole di default in ambienti che non lo supportano.
    parole.push(parola);
}
console.log(parole);

for (let x = 0; x < parole.length; x++) {
    if (parole[x].length % 2 !== 0) {
        console.log(parole[x]);
    }
}

//Crea un oggetto
let person = {
    name: "Rachele",
    age: 42,
    city: "Rome"
}
console.log(person)

//Accedi alle propietà
console.log(person.age)

//Modifica la propietà
person.age = 32;
console.log(person.age)

//Aggiungi una nuova propietà
person.job = "entrepreneur";
console.log(person.job)

//Iterazione della proprietà - stampa in console sia il nome della propietà che il suo valore
for (let key in person) {
  console.log(key + ":" + person[key]);
}

//Funzioni annidate
function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction;
}

//Persistenza delle variabili locali
function outerFunction(x, initialValue) {
    let result = initialValue;
    function innerFunction(y) {
        result += y;
        return result;
    }
    return innerFunction;
}

//Counter
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    }
}

//METODI DEGLI OGGETTI

//Object.keys()
let student = {
    name: "Marco",
    age: 27,
    grade: 110,
    school: "La Sapienza",
}
console.log(Object.keys(student))

//Object.values()
console.log(Object.values(student))

//Object.entries()
console.log(Object.entries(student))

//METODI DEGLI ARRAY

//forEach & map
let numbers = [1, 2, 3, 4, 5];
console.log("Numeri moltiplicati per 2:");
numbers.forEach(num => console.log(num * 2));

let squaredNumbers = numbers.map(num => num ** 2);

console.log("Array dei quadrati:", squaredNumbers);

//filter && find
let students = [
    { name: "Fedrica", grade: 85 },
    { name: "Marco", grade: 42 },
    { name: "Marica", grade: 73 },
    { name: "Mattia", grade: 59 },
    { name: "Gabriele", grade: 90 }
];

let passedStudents = students.filter(student => student.grade >= 60); // Usa filter per ottenere gli studenti con grade >= 60
let failedStudent = students.find(student => student.grade < 60); // Usa find per trovare il primo studente con grade < 60

console.log("Studenti promossi:", passedStudents);
console.log("Primo studente bocciato:", failedStudent);

// reduce & sort (metodo distruttivo, come anche splice: distrugge l'array originale)
let expenses = [5.30, 7.20, 10.75, 3.10]
let sum = expenses.reduce (function(total, amount){
    return total + amount
  }, 0); // questo 0 (zero) è il valore iniziale, va specificato altrimenti, se l'array è vuoto, il codice genererà un errore
  console.log(sum);

let words = ["banana", "apple", "cherry", "date"]
let orderedArray = words.sort();
console.log(orderedArray)