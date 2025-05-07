import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const API_URL = "https://dummyjson.com/products";
  const { data, loading, error } = useFetch(API_URL);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data]);

  return (
    <ProductContext.Provider value={{ products, loading, error, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};