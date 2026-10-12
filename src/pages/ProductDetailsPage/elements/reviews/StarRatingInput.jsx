import { useState } from "react";

import { FaRegStar, FaStar } from "react-icons/fa";

import { RATING_META } from "@/constants/reviewConstants";

const StarRatingInput = ({ value, onChange, error }) => {
  const [hover, setHover] = useState(0);
  const active = hover || value;
  const meta = RATING_META[active];

  return (
    <div className="rounded-2xl bg-primary/5 p-4">
      <p className="text-center font-dana-DemiBold text-sm text-primary-text">
        به این کالا امتیاز دهید :)
      </p>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div
          className="flex items-center gap-1.5"
          onMouseLeave={() => setHover(0)}
        >
          {[1, 2, 3, 4, 5].map((star) => {
            const Icon = star <= active ? FaStar : FaRegStar;

            return (
              <button
                key={star}
                type="button"
                aria-label={`${star} ستاره`}
                onMouseEnter={() => setHover(star)}
                onClick={() => onChange(star)}
                className={`cursor-pointer transition-transform duration-150 hover:scale-125 ${
                  star <= active ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                <Icon size={25} />
              </button>
            );
          })}
        </div>

        <span
          className={`min-w-14 text-left font-dana-DemiBold text-sm ${
            meta ? meta.color : "text-secondary-text"
          }`}
        >
          {meta ? meta.label : "انتخاب کنید"}
        </span>
      </div>

      {error && (
        <p className="mt-3 font-dana-Medium text-xs text-error">{error}</p>
      )}
    </div>
  );
};

export default StarRatingInput;
