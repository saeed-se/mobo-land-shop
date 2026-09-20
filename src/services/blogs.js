import api from "./api";

const RESOURCE = "/blogs";

export const getBlogs = async () => {
  const { data } = await api.get(RESOURCE);

  return data;
};
