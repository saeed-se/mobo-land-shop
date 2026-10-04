import { FaShoppingCart } from "react-icons/fa";

const PurchaseBox = ({
  className = "",
  price,
  hasActiveDiscount,
  finalPrice,
  discountAmount,
}) => {
  return (
    <div className={className}>
      {hasActiveDiscount && (
        <div className="mb-3">
          <span className="rounded-full bg-error px-3 py-1 font-dana-Medium text-xs text-white">
            {discountAmount?.toLocaleString("fa-IR")} تومان تخفیف
          </span>
        </div>
      )}

      {hasActiveDiscount && (
        <div className="mb-1 text-left">
          <span className="font-dana-Medium text-sm text-error line-through">
            {price?.toLocaleString("fa-IR")}
          </span>
        </div>
      )}

      <div className="flex items-baseline justify-end gap-2">
        <span className="font-dana-DemiBold text-2xl text-primary-text">
          {finalPrice?.toLocaleString("fa-IR")}
        </span>
        <span className="font-dana-Medium text-sm text-secondary-text">
          تومان
        </span>
      </div>

      <button
        type="button"
        className="mt-5 flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-primary font-dana-DemiBold text-white transition hover:opacity-90"
      >
        <FaShoppingCart size={18} />
        <span>افزودن به سبد خرید</span>
      </button>
    </div>
  );
};

export default PurchaseBox;
