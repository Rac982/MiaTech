// Estrazione elementi base
let personalNumbers = [123456789, 12340, 35];

let [phone, cap] = personalNumbers;

console.log("Phone: " + phone);
console.log("Cap: " + cap);

// Saltare elementi durante il destructuring
let newPersonalNumbers = [35, 2, 3];

let [age,, cats] = newPersonalNumbers;

console.log("Age: " + age);
console.log("Cats: " + cats);

// Destructuring con valori predefiniti
let introduction = ["Hello", "I", "am", "Mario"];
let [greeting = "Ciao", pronoun = "io", verb = "sono", name = "Giulia", surname = "Rossi"] = introduction;

console.log(greeting, pronoun, verb, name, surname);

// Estrazione di proprietà base
let automobile = {
    brand: "Audi",
    model: "A1",
    year: 2023,
};

let {brand, year} = automobile;

console.log(brand);
console.log(year);

// Destructuring con nomi di variabili diversi
let camion = {
    marca: "Volvo",
    modello: "FH16",
    anno: 2020,
};

let {marca: tipo, anno: produzione} = camion;

console.log(tipo);
console.log(produzione);

// Destructuring con valori predefiniti
let mySelf = {
    defects: "no one",
    followers: "2k",
}

let {merits = "wonderful", defects, followers} = mySelf;

console.log("Merits: " + merits, "Defects: " + defects, "Followers: " + followers);

// Copia di un array
let numbers = [1, 2, 3, 4, 5];
let numbersCopy = [...numbers];

numbers[4] = 55;

console.log(numbers);
console.log(numbersCopy);

// Unione di due array
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let arraysUnion = [...numbers1, ...numbers2];

console.log(arraysUnion);

// Copia di un aggetto con proprietà aggiuntive
let house = {
    mq: 120,
    bedrooms: 3,
    bathrooms: 2,
};

let houseCopy = {...house, elevator: "no"};

console.log(house);
console.log(houseCopy);

// Funzione con parametri variabili
function calculator(...others) { // Usando reduce
    let sum = others.reduce((acc, num) => acc + num, 0);
    return sum;
};

console.log(calculator(1, 2, 3, 4));



function calculator2(...others) { // Usando un ciclo for
    let sum = 0;
    for (let i = 0; i < others.length; i++) {
        sum += others[i];
    };
    return sum;
};

console.log(calculator2(1, 2, 3, 4));

// Destructuring array con rest operator
let numbers3 = [1, 2, 3, 4];
let [number1, number2, ...others] = numbers3;

console.log(number1, number2, others);

// Destrutturing oggetto con rest operator
let train = {
    engine: "electric",
    wagons: 23,
    seatingPax: 1000,
    standingPax: 1000,
};

let {engine, wagons, ...more} = train;

console.log("Engine: " + engine, "Wagons: " + wagons, more);

// Conversione di un oggetto in una stringa JSON
let brands = {
    pasta: "rummo",
    cookies: "saiwa",
    coffee: "illy",
    tomato: "mutti",
    milk: "zymil"
};

let brandsJson = JSON.stringify(brands);

console.log(brandsJson);

// Conversione di una stringa JSON in un oggetto
let shoppingJson = `{"pasta":"rummo","cookies":"saiwa","coffee":"illy","tomato":"mutti","cereals":"zymil"}`;

let shopping = JSON.parse(shoppingJson);

console.log(shopping);

// Manipolazione di dati JSON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Stringa semplice con template literals
let nome = "Giulia";
let cognome = "Rossi";

console.log(`Ciao, son ${nome} ${cognome}!`)

// Stringa multilinea con template literals
let myName = "Giulia";
let mySurname = "Rossi";
let myAge = 30;
let myCity = "Roma";

let infoUser = `Nome: ${myName}
Cognome: ${mySurname}
Età: ${myAge} anni
Città: ${myCity}`;

console.log(infoUser);

// Funzione e template literals
function formattaPersona(persona) {
    return `Informazioni sulla persona:
Nome: ${persona.nome}
Cognome: ${persona.cognome}
Età: ${persona.eta} anni
Città: ${persona.citta}
Professione: ${persona.professione}`;
}

const personaEsempio = {
    nome: "Luca",
    cognome: "Bianchi",
    eta: 28,
    citta: "Milano",
    professione: "Sviluppatore Web"
};

console.log(formattaPersona(personaEsempio));

// Utilizzare console.log
let outPutNumber = 1;
let outPutString = "Ciao mondo!";
let outPutArray = [5, 6, 7, 8];
let outPutObj = {
    frutta: "fragola",
    legumi: "fagioli",
};

console.log(outPutNumber, outPutString, outPutArray, outPutObj);

// Utilizzare console.error e console.warn
let variabile = 2;

function check() {
    if (variabile === 1) {
        console.error("Attenzione, la variabile è uguale a 1")
    } else if (variabile === 2) {
        console.warn("Attenzione, la variabile è uguale a 2")
    }
}

check();

// Utilizzare console.table e console.group
let arrayObj = [
    {
        frutta: "mele",
        legumi: "piselli",
        verdura: "carote",
        pasta: "fusilli",
    },
    {
        frutta: "banane",
        legumi: "ceci",
        verdura: "zucchine",
        pasta: "spaghetti",
    }
];

console.table(arrayObj);
console.group("Messaggi di controllo");
console.log("Eseguendo lo script...");
console.warn("Attenzione: alcuni prodotti potrebbero non essere disponibili.");
