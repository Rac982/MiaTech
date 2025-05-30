import { Product } from "./types";

// Classe User con le proprietà id, name, email (opzionale), e un costruttore per inizializzare queste proprietà
export class User {
    id: number;
    name: string;
    email: string | undefined;
    products: Product[] = [];

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Metodo della classe User che accetta un oggetto Product e lo aggiunge a un array di products dell'utente.
    addProduct(product: Product): this {
        this.products.push(product)
        return this
    }
}