import { Product, ProductWithMetadata, Project, ProductStatus, ProductRecord } from './types'
import { User } from './User';
import { filterProducts } from './utils'

// Variabile inizializzata con un array vuoto
const products: (Product | ProductWithMetadata)[] = [];

let nextId = 1;

// Funzione per aggiungere un prodotto + Tipo any + Tipo derivato con extends
export const addProduct = (
    title: string,
    status: ProductStatus,
    metadata?: any,
    metadataBis?: string | object,
): ProductWithMetadata => {
    const newProduct: ProductWithMetadata = {
        id: nextId++,
        title,
        inStock: false,
        metadata,
        metadataBis,
        status: 0,
    };

    products.push(newProduct);
    return newProduct;
};

// Funzione per aggiornare lo stato del prodotto
export const updateProductStatus = (
    id: number,
    status: ProductStatus
): Product => {
    const product = products.find(p => p.id === id)

    if (!product) {
        throw new Error(`Product with id ${id} not found`)
    }

    product.status = status
    return product
}

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

// Funzione updatePartialProduct che accetta un productId e un oggetto di tipo PartialProduct e aggiorna le proprietà specificate del product
export function updatePartialProduct(
    productId: number,
    updates: Partial<Product>
): Product {
    const product = products.find(p => p.id === productId)

    if (!product) {
        throw new Error(`Product with id ${productId} not found`)
    }

    Object.assign(product, updates)

    return product
}

updatePartialProduct(3, { title: 'Nuovo nome', inStock: true })
updatePartialProduct(5, { status: ProductStatus.Restocking })

// Funzione che accetta un array di Product e restituisce un oggetto di tipo ProductRecord
export function convertArrayToRecord(products: Product[]): ProductRecord {
    const record: ProductRecord = {}

    for (const product of products) {
        record[product.id] = product
    }

    return record
}

const productsArray: Product[] = [
  { id: 1, title: 'Mouse', inStock: true, status: 2 },
  { id: 2, title: 'Tastiera', inStock: false, status: 0 },
]

const productMap = convertArrayToRecord(productsArray)

console.log(productMap[1].title)


// Istanze di User con prodotti e assegnazione dei prodotti agli utenti con addProduct
const user1 = new User(1, 'Fabio Rossi', 'fabio@example.com')
const user2 = new User(2, 'Lucia Bianchi')

const prod1 = addProduct('Monitor 4K', ProductStatus.InStock)
const prod2 = addProduct('Mouse Wireless', ProductStatus.OutOfStock)
const prod3 = addProduct('Notebook 15"', ProductStatus.Restocking)

user1.addProduct(prod1)
user1.addProduct(prod2)
user2.addProduct(prod3)

console.log('Prodotti di Fabio:', user1.products)
console.log('Prodotti di Lucia:', user2.products)

// Filtro per disponibilità che utilizza filterProducts in utils.ts
const availableProducts = filterProducts(products, product => product.inStock)

const outOfStockProducts = filterProducts(products, product => product.status === ProductStatus.OutOfStock)

console.log('Disponibili:', availableProducts)
console.log('Esauriti:', outOfStockProducts)