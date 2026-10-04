const useProductRating = (comments = []) => {
  const reviewCount = comments.length;

  const rating =
    reviewCount > 0
      ? comments.reduce((sum, comment) => sum + comment.rating, 0) / reviewCount
      : 0;

  return {
    rating,
    reviewCount,
  };
};

export default useProductRating;
