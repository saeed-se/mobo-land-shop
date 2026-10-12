import { useState } from "react";

import { FaPlus } from "react-icons/fa6";
import { toast } from "sonner";

import useCommentsSort from "@/Hooks/useCommentsSort";
import useProductRating from "@/Hooks/useProductRating";
import useRequireAuth from "@/Hooks/useRequireAuth";

import RatingSummary from "./RatingSummary";
import ReviewList from "./ReviewList";
import ReviewModal from "./ReviewModal";
import ReviewsError from "./ReviewsError";
import ReviewSortBar from "./ReviewSortBar";
import ReviewsSpinner from "./ReviewsSpinner";

const ProductReviews = ({
  comments = [],
  product,
  commentsStatus = {},
  onAddComment,
}) => {
  const { isLoading, isError, onRetry } = commentsStatus;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user, isAuthenticated, requireAuth } = useRequireAuth();
  const { rating, reviewCount } = useProductRating(comments);
  const { sortedComments, sortBy, isSorting, changeSort } =
    useCommentsSort(comments);

  const openModal = () =>
    requireAuth(
      () => setIsModalOpen(true),
      "برای ثبت نظر ابتدا وارد حساب کاربری خود شوید",
    );

  const submitReview = async (review) => {
    await onAddComment({ ...review, name: user.name, userId: user.id });
    toast.success("نظر شما با موفقیت ثبت شد");
  };

  const renderContent = () => {
    if (isLoading || isSorting) return <ReviewsSpinner />;
    if (isError) return <ReviewsError onRetry={onRetry} />;
    return <ReviewList comments={sortedComments} />;
  };

  return (
    <section className="mt-5 rounded-2xl border border-gray-100 bg-white p-5 md:p-6">
      <div className="flex items-center justify-between gap-5 border-b border-gray-100 pb-5">
        <RatingSummary rating={rating} reviewCount={reviewCount} />

        <button
          type="button"
          onClick={openModal}
          className="flex w-fit cursor-pointer items-center gap-2 rounded-xl border border-primary px-5 py-2.5 font-dana-DemiBold text-sm text-primary transition hover:opacity-90 max-xs:text-xs"
        >
          <FaPlus />
          <span>افزودن نظر</span>
        </button>
      </div>

      <ReviewSortBar
        value={sortBy}
        onChange={changeSort}
        disabled={isSorting}
      />

      {renderContent()}

      <ReviewModal
        isOpen={isModalOpen && isAuthenticated}
        onClose={() => setIsModalOpen(false)}
        onSubmit={submitReview}
        product={product}
      />
    </section>
  );
};

export default ProductReviews;
