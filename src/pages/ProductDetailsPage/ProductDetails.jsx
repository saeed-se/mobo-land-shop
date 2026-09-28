import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import Bread from "./elements/Bread";
import { ProductsContext } from "@/contexts/ProductsProvider";

const ProductDetails = () => {
  const { slug } = useParams();
  const { products } = useContext(ProductsContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((product) => product.slug === slug);

    setProduct(foundProduct);
  }, [products, slug]);

  return (
    <div>
      <Bread product={product} />
      <h1 className="bg-amber-400">{product?.name}</h1>
    </div>
  );
};

export default ProductDetails;
