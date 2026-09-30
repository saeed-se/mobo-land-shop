import { useContext } from "react";
import { useParams } from "react-router";

import Container from "@/components/common/Container";
import Breadcrumb from "./elements/Breadcrumb";
import { ProductsContext } from "@/contexts/ProductsProvider";
import ProductInfo from "./elements/ProductInfo";

const ProductDetails = () => {
  const { slug } = useParams();
  const { products } = useContext(ProductsContext);

  const product = products.find((item) => item.slug === slug);

  return (
    <div>
      <Container>
        <Breadcrumb product={product} />

        <ProductInfo product={product} />
      </Container>
    </div>
  );
};

export default ProductDetails;
