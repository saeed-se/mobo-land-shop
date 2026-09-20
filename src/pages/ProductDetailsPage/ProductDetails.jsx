import { useParams } from "react-router";

const ProductDetails = () => {
  const { slug } = useParams();

  return <div className="bg-amber-300">{slug}</div>;
};

export default ProductDetails;
