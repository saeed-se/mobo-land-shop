import { createContext, useEffect, useState } from "react";

import { getProducts } from "@/services/products";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("بارگذاری محصولات با مشکل روبرو شد");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext value={{ products, loading, error }}>
      {children}
    </ProductsContext>
  );
};
