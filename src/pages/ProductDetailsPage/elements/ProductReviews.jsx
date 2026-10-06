import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import useProductRating from "@/Hooks/useProductRating";

const ProductReviews = ({ comments = [] }) => {
  const [sortBy, setSortBy] = useState("newest");
  const { rating, reviewCount } = useProductRating(comments);
  const sortOptions = [
    { value: "newest", label: "جدیدترین" },
    { value: "oldest", label: "قدیمی‌ترین" },
    { value: "highest", label: "بیشترین امتیاز" },
    { value: "lowest", label: "کمترین امتیاز" },
  ];
  return (
    <section className="max-w-245.5 mt-5 rounded-2xl border border-gray-100 bg-white p-5 md:p-6">
      <div className="flex justify-between items-center gap-5 border-b border-gray-100 pb-5">
        <div className="flex flex-col gap-5 py-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-xl bg-primary/5">
              <span className="font-dana-DemiBold max-xs:text-xl text-2xl text-primary">
                {rating.toFixed(1)}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) =>
                  index < Math.round(rating) ? (
                    <FaStar key={index} size={12} />
                  ) : (
                    <FaRegStar key={index} size={12} />
                  ),
                )}
              </div>
              <span className="font-dana-Medium text-xs text-secondary-text">
                بر اساس {reviewCount} نظر
              </span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="w-fit flex items-center gap-2 cursor-pointer rounded-xl border border-primary px-5 py-2.5 font-dana-DemiBold text-sm max-xs:text-xs text-primary transition hover:opacity-90"
        >
          <FaPlus />

          <span>افزودن نظر</span>
        </button>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto py-5">
        <span className="font-dana-DemiBold max-xs:text-xs text-sm text-primary-text">
          مرتب‌سازی:
        </span>
        <div className="flex shrink-0 items-center gap-5">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setSortBy(option.value)}
              className={`cursor-pointer whitespace-nowrap border-b-2 pb-1 font-dana-Medium text-sm transition ${sortBy === option.value ? "border-primary text-primary" : "border-transparent text-secondary-text hover:text-primary"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-xl border border-gray-100 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 font-dana-DemiBold text-sm text-primary">
                    {comment.name?.charAt(0) || "ک"}
                  </div>
                  <div>
                    <p className="font-dana-DemiBold text-sm text-primary-text">
                      {comment.name || "کاربر"}
                    </p>
                    <p className="mt-1 font-dana-Medium text-xs text-secondary-text">
                      خریدار این محصول
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 text-yellow-500">
                  <FaStar size={14} />
                  <span className="font-dana-Medium text-sm">
                    {comment.rating}
                  </span>
                </div>
              </div>
              <p className="mt-4 font-dana-Medium text-sm leading-7 text-secondary-text">
                {comment.text}
              </p>
            </div>
          ))
        ) : (
          <div className="py-8 text-center">
            <p className="font-dana-Medium text-sm text-secondary-text">
              هنوز نظری برای این محصول ثبت نشده است.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProductReviews;
