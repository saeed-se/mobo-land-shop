import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getProductsBySlug } from "@/services/products";
import Breadcrumb from "@/Pages/ProductDetailsPage/elements/Breadcrumb";

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
      <Breadcrumb product={product} />

      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductDetails;
