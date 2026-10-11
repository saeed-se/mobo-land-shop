import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { FaRegCommentDots, FaRegStar, FaStar } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import useClickOutside from "@/Hooks/useClickOutside";

const MIN_LENGTH = 10;
const MAX_LENGTH = 500;

const ratingMeta = {
  1: { label: "خیلی بد", color: "text-error" },
  2: { label: "بد", color: "text-error" },
  3: { label: "متوسط", color: "text-yellow-500" },
  4: { label: "خوب", color: "text-success" },
  5: { label: "عالی", color: "text-success" },
};

const ReviewModal = ({ isOpen, onClose, onSubmit, product }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reviewModalRef = useClickOutside(() => {
    onClose();
  });

  // Reset form when opening and focus the first field
  useEffect(() => {
    if (!isOpen) return;

    setRating(0);
    setHoverRating(0);
    setName("");
    setText("");
    setErrors({});
    setIsSubmitting(false);

    const timer = setTimeout(() => nameInputRef.current?.focus(), 100);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Lock page scroll and close with Escape
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !isSubmitting) onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) return null;

  const activeRating = hoverRating || rating;

  const validate = () => {
    const newErrors = {};

    if (!rating) newErrors.rating = "لطفاً امتیاز خود را انتخاب کنید.";

    if (text.trim().length < MIN_LENGTH)
      newErrors.text = `متن نظر باید حداقل ${MIN_LENGTH} کاراکتر باشد.`;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || !validate()) return;

    try {
      setIsSubmitting(true);

      await onSubmit?.({
        rating,
        name: name.trim(),
        text: text.trim(),
      });

      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div className="animate-modal-overlay fixed inset-0 z-50 flex items-end justify-center bg-primary-text/50 p-0 backdrop-blur-sm sm:items-center sm:p-4">
      <div
        ref={reviewModalRef}
        className="animate-modal-content flex max-xs:h-dvh w-full flex-col overflow-hidden bg-white shadow-2xl sm:max-w-lg sm:rounded-3xl"
      >
        {/* Colored header */}
        <div className="relative shrink-0 overflow-hidden bg-linear-to-br from-primary to-secondary px-6 py-6 text-white">
          <div className="pointer-events-none absolute -top-10 -left-10 size-36 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -right-6 -bottom-12 size-28 rounded-full bg-white/10" />

          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="close"
            className="absolute top-4 left-4 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FaXmark size={16} />
          </button>

          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <FaRegCommentDots size={22} />
            </div>

            <div className="min-w-0">
              <h2
                id="add-review-title"
                className="font-dana-DemiBold text-lg max-xs:text-base"
              >
                افزودن نظر
              </h2>

              <p className="mt-1 font-dana-Medium text-xs text-white/85">
                {product.name
                  ? `تجربه‌ات از «${product.name}» رو با بقیه به اشتراک بگذار`
                  : "تجربه‌ات از این محصول رو با بقیه به اشتراک بگذار"}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-1 flex-col gap-5 overflow-y-auto p-6 max-xs:p-5"
        >
          {/* Product card */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-3">
            <div className="aspect-square w-14 shrink-0 overflow-hidden rounded-xl bg-bg lg:w-[3.8rem]">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                width={66}
                height={66}
                className="size-full object-contain"
              />
            </div>

            <p className="line-clamp-2 max-h-15 flex-1 font-dana-Medium text-sm leading-7.5 text-primary-text">
              {product.desc}
            </p>
          </div>

          <div className="text-center">
            <p class="text-sm font-dana-DemiBold">به این کالا امتیاز دهید :)</p>
          </div>
          {/* Rating */}
          <div className="rounded-2xl bg-primary/5 p-4">
            <p className="font-dana-DemiBold text-sm text-primary-text">
              امتیاز شما به این محصول
            </p>

            <div className="mt-3 flex items-center justify-between gap-3">
              <div
                className="flex items-center gap-1.5"
                onMouseLeave={() => setHoverRating(0)}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    aria-label={`${value} ستاره`}
                    onMouseEnter={() => setHoverRating(value)}
                    onClick={() => {
                      setRating(value);
                      setErrors((prev) => ({
                        ...prev,
                        rating: undefined,
                      }));
                    }}
                    className={`cursor-pointer transition-transform duration-150 hover:scale-125 ${
                      value <= activeRating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    {value <= activeRating ? (
                      <FaStar size={25} />
                    ) : (
                      <FaRegStar size={25} />
                    )}
                  </button>
                ))}
              </div>

              <span
                className={`min-w-14 text-left font-dana-DemiBold text-sm transition-colors ${
                  activeRating
                    ? ratingMeta[activeRating].color
                    : "text-secondary-text"
                }`}
              >
                {activeRating ? ratingMeta[activeRating].label : "انتخاب کنید"}
              </span>
            </div>

            {errors.rating && (
              <p className="mt-3 font-dana-Medium text-xs text-error">
                {errors.rating}
              </p>
            )}
          </div>

          {/* Review text */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="review-text"
              className="font-dana-DemiBold text-sm text-primary-text"
            >
              متن نظر
            </label>

            <textarea
              id="review-text"
              rows={5}
              value={text}
              maxLength={MAX_LENGTH}
              onChange={(e) => {
                setText(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  text: undefined,
                }));
              }}
              placeholder="از کیفیت، قیمت، بسته‌بندی و تجربه استفاده‌ات بنویس..."
              className={`w-full resize-none rounded-xl border bg-input px-4 py-3 font-dana-Medium text-sm leading-7 text-primary-text outline-none transition placeholder:text-secondary-text focus:bg-white focus:ring-4 ${
                errors.text
                  ? "border-error focus:border-error focus:ring-error/10"
                  : "border-transparent focus:border-primary focus:ring-primary/10"
              }`}
            />

            <div className="flex items-center justify-between gap-3">
              <p className="font-dana-Medium text-xs text-error">
                {errors.text}
              </p>

              <span
                className={`font-dana-Medium text-xs ${
                  text.length >= MAX_LENGTH
                    ? "text-error"
                    : "text-secondary-text"
                }`}
              >
                {text.length} / {MAX_LENGTH}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-1 flex items-center gap-3">
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
                <span>ثبت نظر</span>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="cursor-pointer rounded-xl border border-gray-200 px-6 py-3 font-dana-DemiBold text-sm text-secondary-text transition hover:bg-bg disabled:cursor-not-allowed disabled:opacity-50 max-xs:text-xs"
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default ReviewModal;
