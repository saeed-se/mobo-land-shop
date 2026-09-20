import { useContext } from "react";

import SwiperTemplate from "@/components/common/SwiperTemplate";
import { ProductsContext } from "@/contexts/ProductsProvider";

const SectionSlider = ({ category }) => {
  const { products, loading, error } = useContext(ProductsContext);

  return (
    <>
      {!error ? (
        <SwiperTemplate products={products} type={category} />
      ) : (
        <div className="text-center text-error mt-8">
          {error || (loading && "در حال بارگیری محصولات")}
        </div>
      )}
    </>
  );
};

export default SectionSlider;
