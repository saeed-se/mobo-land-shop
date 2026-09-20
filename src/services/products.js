import api from "./api";

const RESOURCE = "/products";

export const getProducts = async () => {
  const { data } = await api.get(RESOURCE);

  return data;
};

export const getProductsBySlug = async (slug) => {
  const res = await api.get(RESOURCE, { params: slug });
  return res.data[0];
};
