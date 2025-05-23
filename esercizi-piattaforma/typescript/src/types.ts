export interface Product {
    id: number,
    title: string,
    inStock: boolean,
    userId?: number,
    metadata?: any,
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