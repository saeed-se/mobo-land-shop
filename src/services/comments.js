import api from "@/services/api";

const RESOURCE = "/comments";

export const getCommentsByProductId = async (productId) => {
  const response = await api.get(RESOURCE, {
    params: {
      productId,
    },
  });

  return response.data;
};
