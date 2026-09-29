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

export const searchProducts = async (query, signal) => {
  const normalizedQuery = query.trim().toLowerCase();

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
        params: {
          "name:contains": normalizedQuery,
        },
        signal,
      });

      const products = response.data;

      searchCache.set(normalizedQuery, products);

      return products;
    } catch (error) {
      console.log(`SEARCH ERROR ${attempt}:`, error);

      if (signal?.aborted) {
        throw error;
      }

      lastError = error;

      if (attempt < MAX_RETRIES) {
        await delay(RETRY_DELAY);
      }
    }
  }

  console.log("FINAL ERROR:", lastError);

  throw lastError;
};

export const clearSearchCache = () => {
  searchCache.clear();
};
