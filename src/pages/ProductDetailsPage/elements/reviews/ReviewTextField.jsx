import { MAX_LENGTH } from "@/constants/reviewConstants";

const ReviewTextField = ({ value, onChange, error }) => (
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
      autoFocus
      value={value}
      maxLength={MAX_LENGTH}
      onChange={(e) => onChange(e.target.value)}
      placeholder="از کیفیت، قیمت، بسته‌بندی و تجربه استفاده‌ات بنویس..."
      className={`w-full resize-none rounded-xl border bg-input px-4 py-3 font-dana-Medium text-sm leading-7 text-primary-text outline-none transition placeholder:text-secondary-text focus:bg-white focus:ring-4 ${
        error
          ? "border-error focus:border-error focus:ring-error/10"
          : "border-transparent focus:border-primary focus:ring-primary/10"
      }`}
    />

    <div className="flex items-center justify-between gap-3">
      <p className="font-dana-Medium text-xs text-error">{error}</p>
      <span className="font-dana-Medium text-xs text-secondary-text">
        {value.length} / {MAX_LENGTH}
      </span>
    </div>
  </div>
);

export default ReviewTextField;
