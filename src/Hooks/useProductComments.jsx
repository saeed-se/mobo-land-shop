import { useEffect, useState } from "react";

import { getCommentsByProductId } from "@/services/comments";

const useProductComments = (productId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getCommentsByProductId(productId);
        setComments(data);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    if (productId) {
      fetchComments();
    }
  }, [productId]);

  return comments;
};

export default useProductComments;
