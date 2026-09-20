import { useEffect, useState } from "react";
import { searchProducts } from "@/services/searchProducts";

const SEARCH_DELAY = 400;

const useProductsSearch = (query) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      setProducts([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    if (normalizedQuery) {
      setIsLoading(true);
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await searchProducts(normalizedQuery, controller.signal);

        if (!controller.signal.aborted) {
          setProducts(data);
        }
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("SEARCH ERROR:", error);

        setProducts([]);
        setError(error);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }, SEARCH_DELAY);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return {
    products,
    isLoading,
    error,
  };
};

export default useProductsSearch;
