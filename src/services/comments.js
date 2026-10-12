import api from "@/services/api";

const RESOURCE = "/comments";

export const getCommentsByProductId = async (productId, signal) => {
  const response = await api.get(RESOURCE, {
    params: { productId },
    signal,
  });

  return response.data;
};

export const addComment = async ({ productId, userId, name, rating, text }) => {
  const date = new Date()
    .toLocaleDateString("fa-IR-u-nu-latn", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-");

  const response = await api.post(RESOURCE, {
    productId,
    userId,
    name,
    rating,
    text,
    date,
  });

  return response.data;
};
