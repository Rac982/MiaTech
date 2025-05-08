import React, { useRef, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFilteredProducts } from '../hooks/useFilteredProducts';
import ProductCard from './ProductCard';
import { useProductContext } from '../providers/ProductProvider';

function ProductList() {
    const inputRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { products, loading, error } = useProductContext();

    const filteredProducts = useFilteredProducts(products, query);
    const isSearching = query.length > 0;

    const handleInput = useCallback((e) => {
        const newQuery = e.target.value;
        setSearchParams(newQuery ? { q: newQuery } : {});
    }, [setSearchParams]);

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [loading]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Error: {error.message || "Unknown error"}</p>
            </div>
        );
    }

    if (!products?.length) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>No products found.</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 w-full flex flex-col justify-center">
            <div className="p-4 flex flex-col max-w-7xl mx-auto">
                <h1 className="py-6 text-3xl font-bold mb-6 text-center">Product List</h1>
                <div className="flex justify-end">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleInput}
                        className="pl-4 bg-white pr-11 py-3 rounded-full border border-gray-300 text-xs placeholder:text-gray-300 text-text w-64"
                    />
                </div>
            </div>

            <div className="py-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(isSearching ? filteredProducts : products).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;