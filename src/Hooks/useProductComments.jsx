import { useCallback, useEffect, useState } from "react";

import { addComment, getCommentsByProductId } from "@/services/comments";
import { retry } from "@/utils/retry";

const useProductComments = (productId) => {
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (!productId) return;

    const controller = new AbortController();
    const { signal } = controller;

    setStatus("loading");

    retry(() => getCommentsByProductId(productId, signal), { signal })
      .then((data) => {
        setComments(data);
        setStatus("success");
      })
      .catch(() => {
        if (!signal.aborted) setStatus("error");
      });

    // با عوض شدن محصول یا خروج از صفحه، تلاش‌های در حال انجام لغو میشن
    return () => controller.abort();
  }, [productId, reloadKey]);

  const refetch = useCallback(() => setReloadKey((key) => key + 1), []);

  const handleAddComment = useCallback(
    async (review) => {
      const newComment = await addComment({ ...review, productId });
      setComments((prev) => [newComment, ...prev]);
    },
    [productId],
  );

  return {
    comments,
    isLoading: status === "loading",
    isError: status === "error",
    refetch,
    addComment: handleAddComment,
  };
};

export default useProductComments;
