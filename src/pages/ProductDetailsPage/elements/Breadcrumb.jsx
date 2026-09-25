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

  هدفون: {
    label: "هدفون",
    path: "/products?category=هدفون",
    parent: true,
  },

  console: {
    label: "کنسول بازی",
    path: "/products?category=console",
    parent: true,
  },
};

const Breadcrumb = ({ product }) => {
  const category = categoryInfo[product.category];

  if (!category) return null;

  return (
    <nav className="flex items-center gap-2 text-sm">
      <Link
        to="/"
        className="text-gray-500 transition-colors hover:text-primary"
      >
        خانه
      </Link>

      <span className="text-gray-400">/</span>

      {category.parent && (
        <>
          <Link
            to="/products"
            className="text-gray-500 transition-colors hover:text-primary"
          >
            کالای دیجیتال
          </Link>

          <span className="text-gray-400">/</span>
        </>
      )}

      <Link
        to={category.path}
        className="text-gray-500 transition-colors hover:text-primary"
      >
        {category.label}
      </Link>

      <span className="text-gray-400">/</span>

      <span className="max-w-[250px] truncate text-gray-900">
        {product.slug}
      </span>
    </nav>
  );
};

export default Breadcrumb;
