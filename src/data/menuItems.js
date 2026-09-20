export const navItems = [
  { id: 1, title: "دسته بندی محصولات", path: "#", icon: true, hasSub: true },
  { id: 2, title: "صفحه اصلی", path: "/", icon: false },
  { id: 3, title: "فروشگاه", path: "products", icon: false },
  { id: 4, title: "وبلاگ", path: "vlog", icon: false },
  { id: 5, title: "درباره ما", path: "contactUs", icon: false },
];

export const categoryItems = [
  {
    id: 1,
    title: "موبایل",
    path: "/mobile",
    children: [
      {
        id: 11,
        title: "برند",
        path: "/mobile/phones",
        children: [
          {
            id: 111,
            title: "گوشی اپل",
            path: "/mobile/phones/apple",
          },
          {
            id: 112,
            title: "گوشی سامسونگ",
            path: "/mobile/phones/samsung",
          },
          {
            id: 113,
            title: "گوشی شیائومی",
            path: "/mobile/phones/xiaomi",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "کالای دیجیتال",
    path: "/digital",
    children: [
      {
        id: 21,
        title: "لپ تاپ",
        path: "/digital/laptops",
        children: [
          {
            id: 211,
            title: "لپ تاپ ایسوس",
            path: "/digital/laptops/asus",
          },
          {
            id: 212,
            title: "لپ تاپ لنوو",
            path: "/digital/laptops/lenovo",
          },
        ],
      },
      {
        id: 22,
        title: "هدفون",
        path: "/digital/headphone",
        children: [
          {
            id: 221,
            title: "هدفون بی سیم",
            path: "/digital/headphone/remote",
          },
          {
            id: 222,
            title: "هدفون اپل",
            path: "/digital/headphone/apple",
          },
        ],
      },
      {
        id: 23,
        title: "کنسول بازی",
        path: "/digital/console",
        children: [
          {
            id: 231,
            title: "PS5",
            path: "/digital/console/ps5",
          },
          {
            id: 232,
            title: "Xbox 360",
            path: "/digital/console/xbox-360",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "لوازم جانبی موبایل",
    path: "/mobile-accessories",
    children: [
      {
        id: 24,
        title: "جانبی سامسونگ",
        children: [
          {
            id: 31,
            title: "شارژر",
            path: "/mobile-accessories/chargers",
          },
          {
            id: 32,
            title: "هندزفری",
            path: "/mobile-accessories/headphones",
          },
        ],
      },
    ],
  },
];
