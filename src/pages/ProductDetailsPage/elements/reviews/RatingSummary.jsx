import { FaRegStar, FaStar } from "react-icons/fa";

const RatingSummary = ({ rating, reviewCount }) => (
  <div className="flex items-center gap-4 py-5">
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
);

export default RatingSummary;
