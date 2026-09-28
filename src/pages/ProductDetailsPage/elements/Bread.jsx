import { Link } from "react-router";

const Bread = ({ product }) => {
  const categoryInfo = {
    موبایل: {
      label: "موبایل",
      path: "/products?category=mobile",
      parent: false,
    },

    "لپ تاپ": {
      label: "لپ‌ تاپ",
      path: "/products?category=laptop",
      parent: true,
    },

    هدفون: {
      label: "هدفون",
      path: "/products?category=هدفون",
      parent: true,
    },

    کنسول: {
      label: "کنسول بازی",
      path: "/products?category=console",
      parent: true,
    },
  };

  const category = categoryInfo[product.category];
  console.log(category);

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
