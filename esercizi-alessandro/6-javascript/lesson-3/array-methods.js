
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "black", "white"];

const numbers = [[1, 3, [5, [7, 9]]], [0, [2, 4, 6], 8, 10]];

const users = [
    { id: 0, name: "Giovanni", age: 15, userLevel: 1, email: "giovanni.rossi@gmail.com" },
    { id: 1, name: "Giorgio", age: 25, userLevel: 2, email: "giorgio.bianchi@gmail.com" },
    { id: 2, name: "Elena", age: 18, userLevel: 0, email: "elena.verdi@gmail.com" },
    { id: 3, name: "Manfredi", age: 19, userLevel: 4, email: "manfredi.rossi@gmail.com" },
    { id: 4, name: "Arturo", age: 13, userLevel: 2, email: "arturo.bianchi@gmail.com" },
    { id: 5, name: "Andrea", age: 23, userLevel: 1, email: "andrea.verdi@gmail.com" },
    { id: 6, name: "Elisa", age: 17, userLevel: 3, email: "elisa.rossi@gmail.com" },
];

//* 1. forEach((item, index, array) => {}) -> Equal to for loop

// users.forEach((item) => {
//     item.isOver18 = item.age >= 18;
// });

// console.log(users);

//* 2. map((item, index, array) => {}) -> Dobbiamo ottenere un nuovo array frutto della manipolazione degli elementi dell'array originale?

// const usersName = users.map((item) => {
//     // Template litteral
//     return `email: ${item.email}, id: ${item.id}, name: ${item.name}, age: ${item.age}`;
// });

// console.log(usersName);

//* 3. find((item, index, array) => {}) -> Cerco un singolo elemento nell'array

// const user = users.find((item) => {
//     return item.age >= 18 && item.userLevel <= 3;
// });

// console.log(user);

//* 4. filter((item, index, array) => {}) -> Cerco elementi multipli nell'array

// const items = users.filter((item) => {
//     return item.age >= 18;
//     // return item.id !== 4; // Equivale ad eliminare l'elemento con id 4 dall'array
// });

// console.log(items);

//* 5. reduce((prev, current) => {}, initialValue) -> Effettuare operazione matematica sugli elementi dell'array

// const averageAge = Math.round(users.reduce((accumulator, currentItem, currentIndex) => {
//     return accumulator + currentItem.age;
//     // 0 -> 0 + 15;
//     // 1 -> 15 + 25;
//     // 2 -> 40 + 18;
//     // ...
// }, 0) / users.length);

// console.log(averageAge);

//* 6. sort((a, b) => {}) -> Pre ordinare l'array

// users.sort((a, b) => {
//     // 0 -> mantenere in posizione
//     // (-1)- -> spostare indietro
//     // (+1)+ -> spostare in avanti
//     // return a.age - b.age; // ASC
//     // return b.age - a.age; // DESC
//     // return a.name.localeCompare(b.name); // ASC
//     return b.name.localeCompare(a.name); // DESC
// });

// console.log(users);

//* 7. findIndex((item, index, array) => {}) -> Trova l'indice di un elemento nell'array sulla base di una condizione
// const userIndex = users.findIndex((item) => {
//     return item.id === 4;
// });

// console.log(userIndex);

//* 8. splice(startIndex, deleteCount) -> vogliamo eliminare 1 o più elementi da un array, restituisce gli elemeni eliminati

// const deletedUsers = users.splice(userIndex, 1);

// console.log(users, deletedUsers);

//* 9. indexOf(item) -> trova l'indice di posizione di un elemento nell'array -> index | -1
// const yellowIndex = colors.indexOf("cian");

// if (colors.indexOf("cian") === -1) {
//     // Elemento non presene
// } else {
//     // Elemento presente
// }

// console.log(yellowIndex);

//* 10. includes(item) -> check se l'elemento è nell'array -> true | false
// const existCian = colors.includes("cian");

// console.log(existCian); // false

//* 11. join(separator) -> implodere l'array in una stringa unica che contiene tutti gli elementi dell'array originale
// const colorsStr = colors.join(", ");

// console.log(colorsStr); // red, blue, green, yellow, orange, purple, black, white

//* 11.1 split(separator) -> explode della string in un array
// const colorsStr = "red, blue, green, yellow, orange, purple, black, white";

// const colorsArray = colorsStr.split(", ");

// console.log(colorsArray);

//* 12. reverse() -> inverte l'ordine dellp'array
// const colorsReverse = colors.reverse();

// console.log(colorsReverse);

//* 12.1 invertire una stringa -> split() -> reverse() -> join()
// const str = "abcdefghi";

// const strReverse = str.split("").reverse().join("");

// console.log(strReverse);

//* 13. at(index) -> prendere l'elemento a un certo indice dell'array -> equal to: const lastColor = colors[colors.length - 1];
// const lastColor = colors.at(-1);

// console.log(lastColor);

//* 14. flat(deep) -> posiziona tugli gli ementi contenuti in array innestati in un array in primo livello
// const flattedNumbers = numbers.flat(Number.MAX_SAFE_INTEGER);

// console.log(flattedNumbers);

//* 15. push(...items) -> aggiungi qualcosa alla fine di un array
// colors.push("cian", "teal");

// console.log(colors);

//* 16. unshift(...items) -> aggiungi qualcosa all'inizio dell'array
// colors.unshift("cian", "teal");

// console.log(colors);

//* 17. pop() -> rimuovi l'ultimo elemento dall'array
// colors.pop();

// console.log(colors);

//* 18. shift() -> rimuovi il primo elemento dall'array
// colors.shift();

// console.log(colors);

//* 19. concat(...items) -> concatenare più array
// const arrayConcat = [1, 2, 3, 4, 5].concat([6, 7, 8, 9]);

// console.log(arrayConcat);

//* 20. Array.isArray(value) -> controllare se un elemento è un array -> true | false
// const values = [1, 2, 3, 4, 5];

// console.log(Array.isArray(values));

//* 21. new Array(n) & Array.from(instanceof Array) -> crea un nuovo array vuoto, convertilo in un array utile e "riempilo" (ricorda che map non manipola l'array di partenza ma ne crea uno nuovo con l'esito delle dingole manipolazioni) con map()
// const genrateProressiveNumbersArray = (n) => {
//     if (!n || (typeof n !== "number" && isNaN(n))) {
//         throw new Error("n must be a valid number");
//     }

//     // const emptyArray = new Array(parseInt(n));

//     // const validArray = Array.from(emptyArray);

//     // return validArray.map((_, index) => {
//     //     return index
//     // });

//     return Array.from(new Array(parseInt(n))).map((_, index) => index);
// }

// console.log(genrateProressiveNumbersArray(20));
