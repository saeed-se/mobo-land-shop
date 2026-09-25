import api from "./api";

const RESOURCE = "/products";

export const getProducts = async () => {
  const maxRetries = 4;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const { data } = await api.get(RESOURCE);

      return data;
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
};

export const getProductsBySlug = async (slug) => {
  const { data } = await api.get(RESOURCE, {
    params: { slug },
  });

  return data[0];
};
