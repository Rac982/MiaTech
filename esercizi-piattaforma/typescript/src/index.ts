import { Product } from './types';
import { ProductWithMetadata } from './types';
import { Project } from './types';

// Variabile inizializzata con un array vuoto
const products: (Product | ProductWithMetadata)[] = [];

let nextId = 1;

// Funzione per aggiungere un prodotto + Tipo any + Tipo derivato con extends
export const addProduct = (title: string, metadata?: any, metadataBis?: string | object): ProductWithMetadata => {
    const newProduct: ProductWithMetadata = {
        id: nextId++,
        title,
        inStock: false,
        metadata,
        metadataBis,
    };

    products.push(newProduct);
    return newProduct;
};

// Funzione per associare un id di un prodotto a un id di un utente
export const assignProductToUser = (id: number, userId: number): Product => {
    const product = products.find(p => p.id === id);

    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }

    product.userId = userId;
    return product;
};

// Funzione per ottenere i prodotti di un utente
export const getUserProducts = (userId: number): Product[] => {
    return products.filter(product => product.userId === userId);
};

// Gestione degli errori con never
export const throwError = (message: string = 'Unaspected input'): never => {
    throw new Error(message);
};

// Gestione dei tipi dinamici con unknown
let surprise: unknown = "It's me";

export const parseInput = () => {
    if (typeof surprise === 'number') {
        return String(surprise);
    } else {
        return throwError();
    }
};

// Funzione che aggiorna parzialmente le proprietà di un Product con il tipo utility Partial
const updateProduct = (id: number, updates: Partial<Product>): Product => {
    const product = products.find(p => p.id === id);

    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }

    product.title = updates.title ?? product.title;
    product.inStock = updates.inStock ?? product.inStock;

    return product;
};

updateProduct(2, { title: "New title", inStock: true });

// Funzione che restituisce una tupla con il titolo e la disponibilità di un Product
export const getProductSummary = (product: Product): [string, boolean] => {
    return [product.title, product.inStock];
};

// Funzione che inizializza un nuovo progetto con utenti e prodotti
export const createProject = (): Project => {
    return {
        users: [],
        products: [],
    };
};