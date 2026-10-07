import { useState } from "react";

import ProductOptions from "./ProductOptions";
import ProductPurchase from "./ProductPurchase";
import useCountdown from "@/Hooks/useCountdown";
import DiscountTimer from "./DiscountTimer";
import ProductReviews from "./ProductReviews";
import SectionTitle from "@/components/common/SectionTitle";

const ProductInfo = ({ product, comments }) => {
  const [price, setPrice] = useState(
    product.variants?.[0]?.price ?? product.price,
  );

  const timeLeft = useCountdown(
    product.hasDiscount ? product.discountExpiresAt : null,
  );

  return (
    <section className="mt-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
        <div className="flex-1">
          <div className="flex flex-col md:flex-col-reverse lg:flex-row bg-white p-5 border border-primary rounded-2xl">
            <ProductOptions
              product={product}
              onPriceChange={setPrice}
              comments={comments}
            />

            {product.hasDiscount && (
              <DiscountTimer timeLeft={timeLeft} className="md:hidden" />
            )}

            <div className="order-1 flex items-center justify-center md:order-2">
              <div className="flex max-xs:h-60 h-80 md:h-97 w-full items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full max-w-full object-contain md:p-6"
                />
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <ProductPurchase
              product={product}
              price={price}
              timeLeft={timeLeft}
            />
          </div>
          <SectionTitle title={"نظرات کاربران"} />

          <ProductReviews comments={comments} />
        </div>

        {/* Purchase - Sticky */}
        <div className="hidden lg:block lg:sticky lg:top-35 lg:w-100 lg:self-start">
          <ProductPurchase
            product={product}
            price={price}
            timeLeft={timeLeft}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
