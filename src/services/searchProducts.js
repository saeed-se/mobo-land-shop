import api from "@/services/api";

const RESOURCE = "/products";
const searchCache = new Map();
export const searchProducts = async (query, signal) => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return [];
  }
  // Check cache
  if (searchCache.has(normalizedQuery)) {
    return searchCache.get(normalizedQuery);
  }
  // Request
  const response = await api.get(RESOURCE, {
    params: { "name:contains": normalizedQuery },
    signal,
  });
  const products = response.data;
  // Save result in cache
  searchCache.set(normalizedQuery, products);
  return products;
};
export const clearSearchCache = () => {
  searchCache.clear();
};
