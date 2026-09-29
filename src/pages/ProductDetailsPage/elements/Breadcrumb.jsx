import { Link } from "react-router";
const categoryInfo = {
  mobile: {
    label: "موبایل",
    path: "/products?category=mobile",
    parent: false,
  },
  laptop: {
    label: "لپ‌تاپ",
    path: "/products?category=laptop",
    parent: true,
  },
  headphone: {
    label: "هدفون",
    path: "/products?category=headphone",
    parent: true,
  },
  console: {
    label: "کنسول بازی",
    path: "/products?category=console",
    parent: true,
  },
  accessory: {
    label: "لوازم جانبی موبایل",
    path: "/products?category=accessory",
    parent: false,
  },
};

const Breadcrumb = ({ product }) => {
  const category = categoryInfo[product.category];

  return (
    <nav className="flex items-center gap-2">
      <Link to="/" className="text-gray-500">
        خانه
      </Link>

      <span>/</span>

      {category.parent && (
        <>
          <Link to="/products" className="text-gray-500">
            کالای دیجیتال
          </Link>

          <span>/</span>
        </>
      )}

      <Link to={category.path} className="text-gray-500">
        {category.label}
      </Link>

      <span>/</span>

      <span>{product.slug}</span>
    </nav>
  );
};

export default Breadcrumb;
