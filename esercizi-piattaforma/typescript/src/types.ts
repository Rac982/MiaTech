// Tipi e interfacce
export interface Product {
    id: number,
    title: string,
    inStock: boolean,
    userId?: number,
    metadata?: any,
    status: ProductStatus,
};

export interface User {
    id: number,
    name: string,
    email?: string,
    readonly products: readonly Product[];
};

export interface ProductWithMetadata extends Product {
    metadataBis?: string | object,
}

export interface Project {
    users: User[],
    products: Product[],
};

// Enum per gli stati dei Product
export enum ProductStatus {
    OutOfStock,
    Restocking,
    InStock
}

// Tipo mappato PartialProduct che rende tutte le proprietà dell'interfaccia Product opzionali
export type PartialProduct = {
    [K in keyof Product]?: Product[K]
}

// Tipo ProductRecord che mappa number (id del product)
export type ProductRecord = Record<number, Product>