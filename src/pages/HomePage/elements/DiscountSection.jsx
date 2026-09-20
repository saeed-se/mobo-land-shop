import { useContext } from "react";

import Container from "@/components/common/Container";
import SwiperTemplate from "@/components/common/SwiperTemplate";
import { ProductsContext } from "@/contexts/ProductsProvider";

const DiscountSection = () => {
  const { products, loading, error } = useContext(ProductsContext);

  return (
    <Container>
      {!error ? (
        <SwiperTemplate products={products} hasDiscount />
      ) : (
        <div className="text-center text-error mt-8">
          {error || (loading && "در حال بارگیری محصولات")}
        </div>
      )}
    </Container>
  );
};

export default DiscountSection;
