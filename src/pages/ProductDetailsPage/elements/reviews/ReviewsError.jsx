const ReviewsError = ({ onRetry }) => (
  <div className="flex min-h-40 flex-col items-center justify-center gap-4 text-center">
    <p className="font-dana-Medium text-sm text-secondary-text">
      دریافت نظرات با مشکل مواجه شد.
    </p>

    <button
      type="button"
      onClick={onRetry}
      className="cursor-pointer rounded-xl border border-primary px-5 py-2.5 font-dana-DemiBold text-sm text-primary transition hover:opacity-90 max-xs:text-xs"
    >
      تلاش مجدد
    </button>
  </div>
);

export default ReviewsError;
