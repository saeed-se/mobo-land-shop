import api from "@/services/api";

const RESOURCE = "/products";
const MAX_RETRIES = 4;
const RETRY_DELAY = 1000;

const searchCache = new Map();

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const normalize = (value) => {
  return value.trim().toLowerCase().replace(/\s+/g, "");
};

export const searchProducts = async (query, signal) => {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return [];
  }

  if (searchCache.has(normalizedQuery)) {
    return searchCache.get(normalizedQuery);
  }

  let lastError;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await api.get(RESOURCE, {
        signal,
      });

      const products = response.data.filter((product) =>
        normalize(product.name).includes(normalizedQuery),
      );

      searchCache.set(normalizedQuery, products);

      return products;
    } catch (error) {
      if (signal?.aborted) {
        throw error;
      }

      lastError = error;

      if (attempt < MAX_RETRIES) {
        await delay(RETRY_DELAY);
      }
    }
  }

  throw lastError;
};

export const clearSearchCache = () => {
  searchCache.clear();
};
