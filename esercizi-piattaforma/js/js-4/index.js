// Funzione di base di callback
function eseguiSomma(num1, num2, callback) {
    const sum = num1 + num2;
    console.log("Risultato della somma:", sum);
    callback();
}

eseguiSomma(5, 3, function () {
    console.log("Callback eseguito!");
});

// Funzione con callback e passaggio di parametri
function eseguiDivisione(a, b, callback) {
    const div = a / b;
    console.log("Risultato della divisione:", div);
    callback(div);
}

eseguiDivisione(10, 2, function (c) {
    console.log("Callback ricevuto con valore: ", c);
});

// Callback annidati
function eseguiSottrazione(a, b, callback) {
    const sub = a - b;
    console.log("Prima operazione (sottrazione):", sub);
    callback(sub);
}

function eseguiQuadrato(c, callback) {
    const squared = c ** 2;
    console.log("Seconda operazione (quadrato): ", squared);
    callback(squared);
}

eseguiSottrazione(9, 3, function (risultatoSottrazione) {
    eseguiQuadrato(risultatoSottrazione, function (risultatoFinale) {
        console.log("Operazioni completate, risultato finale: ", risultatoFinale);
    });
});

// Creare una promessa semplice + gestione di una promessa con catch
let primaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const operazioneRiuscita = true;
        if (operazioneRiuscita) {
            resolve("Operazione riuscita");
        } else {
            reject("Errore nell'operazione");
        }
    }, 2000);
});

primaPromise.then(function (risultato) {
    console.log(risultato);
}).catch(function (errore) {
    console.log(errore);
});

// Promessa con finally
function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("La mail è arrivata");
        } else {
            reject(new Error("Errore: la mail non è arrivata"));
        }
    });
}

checkMail()
    .then((mail) => {
        console.log(mail);
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("Esperimento completato");
    });

// Catena di promesse semplici
function primoRisultato() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true
            if (ok) {
                const numeroCasuale = Math.floor(Math.random() * 100) + 1;
                console.log("Numero generato casualmente: ", numeroCasuale);
                resolve(numeroCasuale);
            } else {
                reject(new Error("Operazione fallita"));
            }
        }, 1000);
    });
}

function moltiplicaPerDue(numero) {
    return new Promise((resolve) => {
        const risultato = numero * 2;
        console.log("Dopo moltiplicazione per 2: ", risultato);
        resolve(risultato);
    });
}

function aggiungiTre(numero) {
    return new Promise((resolve) => {
        const risultato = numero + 3;
        console.log("Dopo aggiunta di 3: ", risultato);
        resolve(risultato);
    });
}

primoRisultato()
    .then(moltiplicaPerDue)
    .then(aggiungiTre)
    .then((finale) => {
        console.log("Risultato finale:", finale);
    })
    .catch((err) => {
        console.error("Errore:", err.message);
    });

// Catena di promesse con condizioni
function generaNumero() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 100) + 1;
            console.log("Numero generato casualmente:", numero);
            resolve(numero);
        }, 1000);
    });
}

generaNumero()
    .then((numero) => {
        if (numero % 2 === 0) {
            console.log("Il numero generato è pari, moltiplico per 2");
            return numero * 2;
        } else {
            console.log("Il numero generato è dispari, aggiungo 1");
            return numero + 1;
        }
    })
    .then((risultatoFinale) => {
        console.log("Risultato finale:", risultatoFinale);
    })
    .catch((err) => {
        console.error("Errore:", err.message);
    });

// Catena di promesse con gestione degli errori (funzione che restituisce un valore casuale)
function randomPromise() {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 11);
        setTimeout(() => {
            if (number >= 5) {
                resolve(`Successo con valore: ${number}`);
            } else {
                reject(`Valore troppo basso: ${number}`);
            }
        }, 1000);
    });
}

randomPromise()
    .then(result => {
        console.log("Fase 1:", result);
        return result + " - Fase 2 completata";
    })
    .then(newResult => {
        console.log("Fase 2:", newResult);
        return newResult.toUpperCase();
    })
    .then(finalResult => {
        console.log("Risultato finale:", finalResult);
    })
    .catch(error => {
        console.error("Si è verificato un errore:", error);
    });

// Gestione degli errori con catch (funzione che restituisce una promessa rifiutata)
function generaErrore(messaggioErrore) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(messaggioErrore));
        }, 1000);
    });
}

generaErrore("Qualcosa è andato storto!")
    .catch((errore) => {
        console.error("Errore catturato:", errore.message);
    });

// Gestione degli errori con then e catch (funzione che restituisce una promessa in base a un booleano)
function operazioneCondizionata(esitoPositivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (esitoPositivo) {
                resolve("Operazione completata con successo!");
            } else {
                reject("Operazione fallita.");
            }
        }, 1000);
    });
}

operazioneCondizionata(true)
    .then((messaggio) => {
        console.log("Successo:", messaggio);
    })
    .catch((errore) => {
        console.error("Errore:", errore);
    });

operazioneCondizionata(false)
    .then((messaggio) => {
        console.log("Successo:", messaggio);
    })
    .catch((errore) => {
        console.error("Errore:", errore);
    });

// Gestione degli errori in una catena di promesse
function randomNumber() {
    return new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 11);
        if (number >= 5) {
            resolve (`Complimenti, hai vinto con il numero: ${number}`)
        } else {
            reject (`Mi dispiace, è uscito il numero ${number}, riprova domani!`)
        }
    })
}

randomNumber()
    .then(result => {
        console.log(result);
        return "Hai sbloccato un bonus!";
    })
    .then(bonus => {
        console.log(bonus);
        return "Fine della catena!";
    })
    .then(finale => {
        console.log(finale);
    })
    .catch(error => {
        console.error("Errore nella catena:", error);
    });


// Utilizzare Promise.all (eseguire le promesse in parallelo e stampare il risultato quando entrambe sono risolte)
function sommaOne(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

function sommaTwo(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

function resultPromiseAll() {
    Promise.all([sommaOne(2, 5), sommaTwo(3, 7)])
        .then(risultati => {
            console.log("Risultato con Promise.all: ", risultati);
        })
        .catch(error => {
            console.log(error);
        });
}

resultPromiseAll();

// Utilizzare Promise.race (eseguire le promesse in parallelo e stampare il risultato della prima che si risolve)
const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("uno");
    }, 200);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("due");
    }, 100);
});

Promise.race([pro1, pro2])
    .then((response) => {
        console.log("Risultato con Promise.race: ", response);
    })
    .catch((err) => {
        console.log(err);
    });

// Utilizzare Promise.allSettled
// (si realizza quando tutte le promesse si risolvono e restituisce un array di oggetti
// che descrivono il risultato di ogni promessa)
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("uno");
    }, 200);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("due");
    }, 100);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const err = "Errore nella promessa 3";
        reject(err);
    }, 100);
});

Promise.allSettled([promise1, promise2, promise3])
    .then((response) => {
        console.log("Risultato con Promise.allSettled: ", response);
    })
    .catch((err) => {
        console.log(err);
    });

// Funzione asincrona semplice
async function somma(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 200);
    });
}

async function inizio() {
    let risultato = await somma(1, 1);
    console.log("Risultato funzione asincrona semplice: ", risultato);
}

inizio();

// Gestione degli errori con try catch
async function conditionalOperation(esitoPositivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (esitoPositivo) {
                resolve("Operazione conditional completata con successo!");
            } else {
                reject("Operazione conditional fallita.");
            }
        }, 1000);
    });
}

async function start() {
    try {
        let risultato = await conditionalOperation(false);
        console.log("Risultato funzione asincrona conditional: ", risultato);
    } catch (error) {
        console.error("Errore:", error);
    }

}

start();

// Funzioni asincrone in serie
async function sommaTimeOne(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

async function sommaTimeTwo(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

async function resultSerie() {
    let risultato = await Promise.all([sommaTimeOne(2, 5), sommaTimeTwo(3, 7)]);
    console.log("Risultato funzioni asincrone in serie: ", risultato);
}

resultSerie();

// Eseguire una richiesta GET semplice
async function provaGet() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await response.json();
        console.log("Dati ricevuti tramite richiesta GET:", data);
    } catch (error) {
        console.log("Errore nella fetch di tipo GET: ", error);
    }
}

provaGet();

// Eseguire una richiesta POST
async function creaPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Post di esempio",
                body: "Questo è il contenuto del post",
                userId: 1
            })
        });

        const data = await response.json();
        console.log("Risposta dal server tramite richiesta POST:", data);
    } catch (error) {
        console.error("Errore nella POST:", error);
    }
}

creaPost();

// Gestione degli errori con async e await
async function test() {
    try {
        const res = await fetch('https://fakestoreapi.com/products/1');
        const data = await res.json();
        console.log("Dati ottenuti: ", data);
    } catch (error) {
        console.log(error);
    }
}

test();