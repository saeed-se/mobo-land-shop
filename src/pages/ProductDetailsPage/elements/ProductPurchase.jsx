import { FiTruck, FiShield } from "react-icons/fi";

import calculateDiscount from "@/utils/discount";
import PurchaseBox from "./PurchaseBox";
import DiscountTimer from "./DiscountTimer";

const ProductPurchase = ({ product, price, timeLeft }) => {
  const hasActiveDiscount =
    product.hasDiscount && product.discount > 0 && timeLeft;

  const finalPrice = hasActiveDiscount
    ? calculateDiscount(price, product.discount)
    : price;

  const discountAmount = hasActiveDiscount ? price - finalPrice : 0;

  return (
    <div className="order-3">
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        {hasActiveDiscount && (
          <DiscountTimer className="max-md:hidden!" timeLeft={timeLeft} />
        )}

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FiTruck className="shrink-0 text-primary" size={20} />
            <div>
              <p className="font-dana-Medium text-sm text-primary-text">
                فروشنده
              </p>
              <p className="font-dana-Medium text-xs text-secondary-text">
                موبو لند
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FiShield className="shrink-0 text-primary" size={20} />
            <div>
              <p className="font-dana-Medium text-sm text-primary-text">
                ضمانت خرید
              </p>
              <p className="font-dana-Medium text-xs text-secondary-text">
                ضمانت اصالت و سلامت کالا
              </p>
            </div>
          </div>
        </div>

        <div className="my-5 max-md:my-0 max-md:hidden h-px bg-gray-100" />

        <PurchaseBox
          className="max-md:hidden"
          price={price}
          hasActiveDiscount={hasActiveDiscount}
          finalPrice={finalPrice}
          discountAmount={discountAmount}
        />
      </div>
      <PurchaseBox
        className="md:hidden p-5 fixed bottom-0 left-0 right-0 z-50 bg-bg"
        price={price}
        hasActiveDiscount={hasActiveDiscount}
        finalPrice={finalPrice}
        discountAmount={discountAmount}
      />
    </div>
  );
};

export default ProductPurchase;
