import { SORT_OPTIONS } from "@/constants/reviewConstants";

const ReviewSortBar = ({ value, onChange, disabled }) => (
  <div className="scrollbar-hide flex items-center gap-4 overflow-x-auto py-5">
    <span className="shrink-0 font-dana-DemiBold text-sm text-primary-text max-xs:text-xs">
      مرتب‌سازی:
    </span>

    <div className="flex shrink-0 items-center gap-5">
      {SORT_OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          disabled={disabled}
          onClick={() => onChange(option.value)}
          className={`cursor-pointer whitespace-nowrap border-b-2 pb-1 font-dana-Medium text-sm transition ${
            value === option.value
              ? "border-primary text-primary"
              : "border-transparent text-secondary-text hover:text-primary"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
);

export default ReviewSortBar;
