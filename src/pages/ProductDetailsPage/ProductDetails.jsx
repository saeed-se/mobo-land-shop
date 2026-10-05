import { useContext, useEffect } from "react";

import { useParams } from "react-router";

import Container from "@/components/common/Container";

import Breadcrumb from "./elements/Breadcrumb";

import { ProductsContext } from "@/contexts/ProductsProvider";
import { ProductPurchaseContext } from "@/contexts/ProductPurchaseProvider";

import useProductComments from "@/Hooks/useProductComments";

import ProductInfo from "./elements/ProductInfo";

const ProductDetails = () => {
  const { slug } = useParams();
  const { products } = useContext(ProductsContext);
  const { setProduct, setPrice } = useContext(ProductPurchaseContext);
  const product = products.find((item) => item.slug === slug);

  useEffect(() => {
    setProduct(product);

    setPrice(product?.variants?.[0]?.price ?? product?.price ?? 0);
  }, [product, setProduct, setPrice]);

  const comments = useProductComments(product.id);

  return (
    <div>
      <Container>
        <Breadcrumb product={product} />
        <ProductInfo product={product} comments={comments} />
      </Container>
    </div>
  );
};

export default ProductDetails;
