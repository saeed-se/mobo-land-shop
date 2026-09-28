import { Link } from "react-router";

const Bread = ({ product }) => {
  // const categoryInfo = {
  //   mobile: {
  //     label: "موبایل",
  //     path: "/products?category=mobile",
  //     parent: false,
  //   },

  //   laptop: {
  //     label: "لپ‌تاپ",
  //     path: "/products?category=laptop",
  //     parent: true,
  //   },

  //   هدفون: {
  //     label: "هدفون",
  //     path: "/products?category=هدفون",
  //     parent: true,
  //   },

  //   console: {
  //     label: "کنسول بازی",
  //     path: "/products?category=console",
  //     parent: true,
  //   },
  // };
  // console.log(product);

  // const category = categoryInfo[product.category];

  // if (!category) return null;

  return (
    <nav className="flex items-center gap-2">
      <Link to="/" className="text-gray-500">
        خانه
      </Link>

      <span>/</span>

      <Link
        to={`/products?category=${product?.category}`}
        className="text-gray-500"
      >
        {product?.category}
      </Link>

      <span>/</span>

      <span>{product?.slug}</span>
    </nav>
  );
};

export default Bread;
