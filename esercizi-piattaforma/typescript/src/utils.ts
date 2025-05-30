import { Product } from './types'

// Funzione generica per filtrare i prodotti con una logica passata come parametro
// accetta un array di Product e una funzione di filtro e restituisce un array di prodotti filtrati.

export function filterProducts(
    products: Product[],
    filterFunction: (product: Product) => boolean
): Product[] {
    return products.filter(filterFunction)
}