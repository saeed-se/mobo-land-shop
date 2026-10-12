import useReviewForm from "@/Hooks/useReviewForm";

import ReviewProductCard from "./ReviewProductCard";
import ReviewTextField from "./ReviewTextField";
import StarRatingInput from "./StarRatingInput";

const ReviewForm = ({ product, onSubmit, onClose }) => {
  const {
    rating,
    text,
    errors,
    isSubmitting,
    changeRating,
    changeText,
    handleSubmit,
  } = useReviewForm({ onSubmit, onClose });

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-1 flex-col gap-5 overflow-y-auto p-6 max-xs:p-5"
    >
      <ReviewProductCard product={product} />

      <StarRatingInput
        value={rating}
        onChange={changeRating}
        error={errors.rating}
      />

      <ReviewTextField value={text} onChange={changeText} error={errors.text} />

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-3 font-dana-DemiBold text-sm text-white shadow-lg shadow-primary/25 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 max-xs:text-xs"
        >
          {isSubmitting ? (
            <>
              <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              <span>در حال ثبت...</span>
            </>
          ) : (
            "ثبت نظر"
          )}
        </button>

        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer rounded-xl border border-gray-200 px-6 py-3 font-dana-DemiBold text-sm text-secondary-text transition hover:bg-bg max-xs:text-xs"
        >
          انصراف
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
