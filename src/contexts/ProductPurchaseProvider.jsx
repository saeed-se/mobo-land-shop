import { createContext, useState } from "react";

import calculateDiscount from "@/utils/discount";

export const ProductPurchaseContext = createContext(null);

export const ProductPurchaseProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(0);

  const hasActiveDiscount = product?.hasDiscount && product?.discount > 0;

  const finalPrice = hasActiveDiscount
    ? calculateDiscount(price, product.discount)
    : price;

  const discountAmount = hasActiveDiscount ? price - finalPrice : 0;

  const value = {
    product,
    setProduct,
    price,
    setPrice,
    hasActiveDiscount,
    finalPrice,
    discountAmount,
  };

  return (
    <ProductPurchaseContext.Provider value={value}>
      {children}
    </ProductPurchaseContext.Provider>
  );
};
