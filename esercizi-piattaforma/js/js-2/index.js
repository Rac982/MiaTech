// Classe Automobile che definisce una generica automobile
class Automobile {
    // Campo privato per tenere traccia di quante volte è stato aggiornato il chilometraggio
    #contatoreChiamate = 0;

    // Getter che restituisce il chilometraggio attuale
    get chilometraggioAttuale() {
        return this.chilometraggio;
    }

    // Setter per aggiornare il chilometraggio con controllo dei dati inseriti
    set chilometraggioAttuale(nuovoChilometraggio) {
        if (typeof nuovoChilometraggio !== "number" || nuovoChilometraggio < this.chilometraggio) {
            throw new Error("Il nuovo chilometraggio deve essere un numero e non può essere inferiore al valore attuale.");
        }
        this.chilometraggio = nuovoChilometraggio;
    }

    // Costruttore per creare nuove istanze di Automobile
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    // Metodo che restituisce la descrizione del veicolo
    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    // Metodo per aggiungere chilometri con controlli sull'input
    aggiungiChilometri(km) {
        if (typeof km !== "number" || km <= 0) {
            throw new Error("Il valore dei chilometri deve essere un numero positivo.");
        }
        this.chilometraggio += km;
        this.#incrementaContatore();
        this._controllaChilometri();
    }

    // Mostra quante volte è stato aggiornato il chilometraggio
    mostraContatoreChiamate() {
        return this.#contatoreChiamate;
    }

    // Metodo per visualizzare il chilometraggio attuale
    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }

    // Metodo privato per calcolare l'età del veicolo
    #calcolaEtà() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }

    // Metodo pubblico per visualizzare l'età del veicolo
    mostraEtà() {
        const età = this.#calcolaEtà();
        return `Questa automobile ha ${età} ${età > 1 ? "anni" : "anno"}.`;
    }

    // Metodo interno per controllare se il veicolo supera una certa soglia di chilometri
    _controllaChilometri() {
        if (this.chilometraggio >= 100000) {
            console.log("Attenzione: questa automobile ha più di 100.000 Km");
        }
    }

    // Metodo privato che incrementa il contatore chiamate
    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    // Metodo statico per confrontare il chilometraggio tra due auto
    static confrontaChilometraggio(obj1, obj2) {
        if (obj1.chilometraggio > obj2.chilometraggio) {
            return `${obj1.marca} ${obj1.modello} ha più chilometri: ${obj1.chilometraggio} km.`;
        } else if (obj1.chilometraggio < obj2.chilometraggio) {
            return `${obj2.marca} ${obj2.modello} ha più chilometri: ${obj2.chilometraggio} km.`;
        } else {
            return `Entrambe le automobili hanno ${obj1.chilometraggio} Km.`;
        }
    }

    // Metodo statico che verifica se un oggetto è istanza di una determinata classe
    static verificaIstanza(obj, classe) {
        return obj instanceof classe 
            ? `L'oggetto è un'istanza della classe ${classe.name}.`
            : `L'oggetto NON è un'istanza della classe ${classe.name}.`;
    }
}

// Metodo aggiunto al prototype della classe Automobile (estensione esterna)
Automobile.prototype.saluta = function() {
    return `Ciao! Corri a provare la nostra ${this.marca} ${this.modello}.`;
};

// Sottoclasse Elettrica estende Automobile
class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    // Metodo sovrascritto per descrizione specifica per auto elettriche
    descrizione() {
        return `${super.descrizione()} L'autonomia della batteria è di ${this.autonomia} km.`;
    }

    // Metodo specifico per ricaricare la batteria
    ricarica(km) {
        if (typeof km !== "number" || km <= 0) {
            throw new Error("Il valore della ricarica deve essere un numero positivo.");
        }
        this.autonomia += km;
        let messaggio = `Batteria ricaricata di ${km} km. Nuova autonomia: ${this.autonomia} km.`;
        console.log(messaggio);
        return messaggio;
    }

    // Metodo per verificare chilometraggio specifico per auto elettriche
    verificaChilometraggio() {
        this._controllaChilometri();
    }
}

// Sottoclasse Camion estende Automobile
class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio, caricoMassimo) {
        super(marca, modello, anno, chilometraggio);
        this.caricoMassimo = caricoMassimo;
    }

    // Metodo sovrascritto con descrizione specifica per i camion
    descrizione() {
        return `${super.descrizione()} Il carico massimo è di ${this.caricoMassimo} kg.`;
    }

    // Metodo specifico per gestire il carico del camion
    carica(kg) {
        if (kg > this.caricoMassimo) {
            throw new Error(`Il carico del veicolo non può superare un massimo di ${this.caricoMassimo} Kg.`);
        }
        return `Il carico attuale è di ${kg} kg.`;
    }
}


// Creazione di un'istanza della classe Automobile
let auto1 = new Automobile ("Audi", "A1", 2024, 99000);

console.log(auto1.saluta());
console.log(auto1.descrizione());
console.log(auto1.mostraEtà());

auto1.aggiungiChilometri(1500);
console.log(auto1.mostraChilometraggio());
console.log(auto1.mostraContatoreChiamate());

// Creazione di un'istanza della classe Elettrica
let auto2 = new Elettrica("BMW", "Serie 3 - 100% Electric", 2023, 99000, 250);

console.log(auto2.descrizione());

auto2.ricarica(100);
auto2.aggiungiChilometri(5000);

console.log(auto2.mostraChilometraggio());

// Confronta il chilometraggio di auto1 e auto2
console.log(Automobile.confrontaChilometraggio(auto1, auto2));

// Creazione di un'istanza della classe Camion
let camion1 = new Camion("Volvo", "FH 13 500", 2019, 150000, 44000);

console.log(camion1.descrizione());
console.log(camion1.carica(7000));

// Verifica se un oggetto è un'istanza di una determinata class
console.log(Automobile.verificaIstanza(auto1, Automobile));
console.log(Automobile.verificaIstanza(auto2, Elettrica));
console.log(Automobile.verificaIstanza(camion1, Camion));
console.log(Automobile.verificaIstanza(auto1, Camion));

// Controlla il tipo dell'oggetto usando instanceof e stampa il tipo di veicolo
if (auto1 instanceof Automobile) {
    console.log("Questo veicolo è una Automobile.")
} else if (auto1 instanceof Camion) {
    console.log("Questo veicolo è un Camion.")
} else {
    console.log("Questo veicolo non appartiene alle tipologie previste.")
}