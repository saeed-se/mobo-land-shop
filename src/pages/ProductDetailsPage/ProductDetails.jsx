import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Bread from "./elements/Bread";
import { getProductsBySlug } from "@/services/products";

const ProductDetails = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductsBySlug(slug);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Bread product={product} />
      <h1 className="bg-amber-400">{product.name}</h1>
    </div>
  );
};

export default ProductDetails;
