import { useState } from "react";

import ProductOptions from "./ProductOptions";
import ProductPurchase from "./ProductPurchase";
import useCountdown from "@/Hooks/useCountdown";
import DiscountTimer from "./DiscountTimer";

const ProductInfo = ({ product }) => {
  const [price, setPrice] = useState(
    product.variants?.[0]?.price ?? product.price,
  );

  const timeLeft = useCountdown(
    product.hasDiscount ? product.discountExpiresAt : null,
  );

  return (
    <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_0.9fr_1fr]">
        <ProductOptions product={product} onPriceChange={setPrice} />

        <DiscountTimer timeLeft={timeLeft} />
        {/* Product Image */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <div className="flex max-xs:h-60 h-80  md:h-97 w-full items-center justify-center rounded-xl border border-primary">
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-w-full object-contain md:p-6"
            />
          </div>
        </div>

        <ProductPurchase product={product} price={price} timeLeft={timeLeft} />
      </div>
    </section>
  );
};

export default ProductInfo;
