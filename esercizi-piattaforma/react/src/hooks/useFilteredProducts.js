import { useMemo } from 'react';

export function useFilteredProducts(products, query) {
    return useMemo(() => {
        if (!query) return products;
        const q = query.toLowerCase();
        return products.filter(p => p.title?.toLowerCase().includes(q));
    }, [products, query]);
}