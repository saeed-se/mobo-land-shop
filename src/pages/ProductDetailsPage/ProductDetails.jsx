import { useContext } from "react";
import { useParams } from "react-router";

import Bread from "./elements/Bread";
import { ProductsContext } from "@/contexts/ProductsProvider";

const ProductDetails = () => {
  const { slug } = useParams();
  const { products } = useContext(ProductsContext);

  const product = products.find((item) => item.slug === slug);

  return (
    <div>
      <Bread product={product} />

      <h1 className="bg-amber-400">{product.name}</h1>
    </div>
  );
};

export default ProductDetails;
