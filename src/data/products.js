const products = [
  // =========================
  // 📱 MOBILE - APPLE
  // =========================

  {
    id: 1,
    name: "iPhone 17",
    category: "mobile",
    slug: "iPhone 17",
    brand: "apple",
    price: 280_000_000,
    stock: 12,
    hasDiscount: true,
    discount: 15,
    discountExpiresAt: "2026-08-26T23:59:59",
    image: "src/assets/productsImages/iphone17.webp",
    desc: "گوشی موبایل اپل مد‌ل iPhone 17 CH/A  رم 8 گیگابایت",

    variants: [
      {
        storage: "128GB",
        colors: [
          { name: "مشکی", hex: "#111827" },
          { name: "آبی", hex: "#2563EB" },
        ],
      },
      {
        storage: "256GB",
        colors: [
          { name: "سفید", hex: "#FFFFFF" },
          { name: "سبز", hex: "#22C55E" },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "iPhone 17 Pro",
    category: "mobile",
    slug: "iPhone 17 Pro",
    brand: "apple",
    price: 350_000_000,
    stock: 8,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/iphone-15-pro.jpg",

    variants: [
      {
        storage: "128GB",
        colors: ["black"],
      },
      {
        storage: "256GB",
        colors: ["white", "blue"],
      },
    ],
  },
  {
    id: 3,
    name: "iPhone 17 Pro Max",
    category: "mobile",
    slug: "iPhone 17 Pro Max",
    brand: "apple",
    price: 420_000_000,
    stock: 8,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/iphone-15-pro.jpg",

    variants: [
      {
        storage: "128GB",
        colors: ["black"],
      },
      {
        storage: "256GB",
        colors: ["white", "blue"],
      },
    ],
  },

  {
    id: 4,
    name: "iPhone 16 Pro Max",
    category: "mobile",
    slug: "iPhone 16 Pro Max",
    brand: "apple",
    price: 320_000_000,
    stock: 15,
    hasDiscount: true,
    discount: 10,
    discountExpiresAt: "2026-08-25T23:59:59",
    image: "src/assets/productsImages/iphone16promax.webp",

    variants: [
      {
        storage: "128GB",
        colors: ["green", "black"],
      },
      {
        storage: "256GB",
        colors: ["white"],
      },
    ],
  },
  {
    id: 3,
    name: "iPhone 16",
    category: "mobile",
    slug: "iPhone 16",
    brand: "apple",
    price: 230_000_000,
    stock: 15,
    hasDiscount: true,
    discount: 10,
    discountExpiresAt: "2026-08-25T23:59:59",
    image: "src/assets/productsImages/iphone16.png",

    variants: [
      {
        storage: "128GB",
        colors: ["green", "black"],
      },
      {
        storage: "256GB",
        colors: ["white"],
      },
    ],
  },

  // =========================
  // 📱 MOBILE - SAMSUNG
  // =========================

  {
    id: 4,
    name: "Galaxy S25 Ultra",
    category: "mobile",
    slug: "Galaxy S25 Ultra",
    brand: "samsung",
    price: 280_000_000,
    stock: 20,
    hasDiscount: true,
    discount: 12,
    discountExpiresAt: "2026-08-27T23:59:59",
    image: "src/assets/productsImages/s25ultra.webp",

    variants: [
      {
        storage: "128GB",
        colors: ["black", "green"],
      },
      {
        storage: "256GB",
        colors: ["white", "blue"],
      },
    ],
  },

  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra",
    category: "mobile",
    slug: "Samsung Galaxy S24 Ultra",
    brand: "samsung",
    price: 210_000_000,
    stock: 7,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/galaxy-s24-ultra.jpg",

    variants: [
      {
        storage: "256GB",
        colors: ["black"],
      },
      {
        storage: "512GB",
        colors: ["white", "blue"],
      },
    ],
  },

  {
    id: 6,
    name: "Samsung Galaxy A56",
    category: "mobile",
    slug: "Galaxy S25 Ultra",
    brand: "samsung",
    price: 95_000_000,
    stock: 25,
    hasDiscount: true,
    discount: 8,
    discountExpiresAt: "2026-08-22T23:59:59",
    image: "src/assets/productsImages/a56.webp",

    variants: [
      {
        storage: "128GB",
        colors: ["blue"],
      },
      {
        storage: "256GB",
        colors: ["black", "white"],
      },
    ],
  },

  // =========================
  // 📱 MOBILE - XIAOMI
  // =========================

  {
    id: 7,
    name: "Xiaomi 15 Pro",
    category: "mobile",
    slug: "Xiaomi 15 Pro",
    brand: "xiaomi",
    price: 250_000_000,
    stock: 14,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: "2026-08-21T23:59:59",
    image: "/images/products/xiaomi-14.jpg",

    variants: [
      {
        storage: "256GB",
        colors: ["black", "green"],
      },
      {
        storage: "512GB",
        colors: ["white", "blue"],
      },
    ],
  },

  {
    id: 8,
    name: "Xiaomi 15",
    category: "mobile",
    slug: "Xiaomi 15",
    brand: "xiaomi",
    price: 170_000_000,
    stock: 30,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/redmi-note-13.jpg",

    variants: [
      {
        storage: "128GB",
        colors: ["black"],
      },
      {
        storage: "256GB",
        colors: ["white", "green"],
      },
    ],
  },

  // =========================
  // 💻 LAPTOP - ASUS
  // =========================

  {
    id: 9,
    name: "ASUS VivoBook 15",
    category: "laptop",
    slug: "ASUS VivoBook 15",
    brand: "asus",
    price: 130_000_000,
    stock: 10,
    hasDiscount: true,
    discount: 15,
    discountExpiresAt: "2026-08-30T23:59:59",
    image: "src/assets/productsImages/vivobook15.webp",

    variants: [
      {
        storage: "512GB",
        colors: ["black"],
      },
      {
        storage: "1TB",
        colors: ["white"],
      },
    ],
  },

  {
    id: 10,
    name: "ASUS TUF Gaming F15",
    category: "laptop",
    slug: "ASUS TUF Gaming F15",
    brand: "asus",
    price: 220_000_000,
    stock: 6,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/asus-tuf-f15.jpg",

    variants: [
      {
        storage: "512GB",
        colors: ["black"],
      },
      {
        storage: "1TB",
        colors: ["black", "white"],
      },
    ],
  },

  // =========================
  // 💻 LAPTOP - APPLE
  // =========================

  {
    id: 11,
    name: "MacBook Air M4",
    category: "laptop",
    slug: "MacBook Air M4",
    brand: "apple",
    price: 240_000_000,
    stock: 9,
    hasDiscount: true,
    discount: 10,
    discountExpiresAt: "2026-08-24T23:59:59",
    image: "src/assets/productsImages/airpodpro2.webp",

    variants: [
      {
        storage: "512GB",
        colors: ["black", "white"],
      },
      {
        storage: "1T",
        colors: ["black"],
      },
    ],
  },

  {
    id: 12,
    name: "MacBook Air M3",
    category: "laptop",
    slug: "MacBook Air M3",
    brand: "apple",
    price: 340_000_000,
    stock: 5,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/macbook-air-m3.jpg",

    variants: [
      {
        storage: "256GB",
        colors: ["white"],
      },
      {
        storage: "512GB",
        colors: ["black", "white"],
      },
    ],
  },

  // =========================
  // 💻 LAPTOP - LENOVO
  // =========================

  {
    id: 13,
    name: "Lenovo IdeaPad slim 3",
    category: "laptop",
    slug: "Lenovo IdeaPad slim 3",
    brand: "lenovo",
    price: 180_000_000,
    stock: 13,
    hasDiscount: true,
    discount: 12,
    discountExpiresAt: "2026-08-23T23:59:59",
    image: "src/assets/productsImages/ideapadslim3.webp",

    variants: [
      {
        storage: "512GB",
        colors: ["black"],
      },
      {
        storage: "1TB",
        colors: ["white", "black"],
      },
    ],
  },

  {
    id: 14,
    name: "Lenovo Legion 5",
    category: "laptop",
    slug: "Lenovo Legion 5",
    brand: "lenovo",
    price: 280_000_000,
    stock: 4,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/lenovo-legion-5.jpg",

    variants: [
      {
        storage: "512GB",
        colors: ["black"],
      },
      {
        storage: "1TB",
        colors: ["black", "white"],
      },
    ],
  },

  // =========================
  // 🎮 CONSOLE - SONY
  // =========================

  {
    id: 15,
    name: "PlayStation 5 Slim",
    category: "console",
    slug: "PlayStation 5 Slim",
    brand: "sony",
    price: 125_000_000,
    stock: 8,
    hasDiscount: true,
    discount: 8,
    discountExpiresAt: "2026-08-29T23:59:59",
    image: "src/assets/productsImages/ps5slim.webp",
  },

  {
    id: 16,
    name: "PlayStation 5 Pro",
    category: "console",
    slug: "PlayStation 5 Pro",
    brand: "sony",
    price: 180_000_000,
    stock: 5,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/ps5-pro.jpg",
  },

  // =========================
  // 🎮 CONSOLE - XBOX
  // =========================

  {
    id: 17,
    name: "Xbox Series X",
    category: "console",
    slug: "Xbox Series X",
    brand: "xbox",
    price: 150_000_000,
    stock: 7,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: "2026-08-20T23:59:59",
    image: "/images/products/xbox-series-x.jpg",
  },

  {
    id: 18,
    name: "Xbox Series S",
    category: "console",
    slug: "Xbox Series S",
    brand: "xbox",
    price: 80_000_000,
    stock: 11,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/xbox-series-s.jpg",
  },

  // =========================
  // 🎧 ACCESSORIES
  // =========================

  {
    id: 19,
    name: "Apple AirPods Pro 2",
    category: "accessory",
    slug: "Apple AirPods Pro 2",
    brand: "apple",
    price: 35_000_000,
    stock: 18,
    hasDiscount: true,
    discount: 10,
    discountExpiresAt: "2026-08-21T23:59:59",
    image: "src/assets/productsImages/airpodpro2.webp",
  },

  {
    id: 20,
    name: "Samsung Galaxy Buds 3",
    category: "accessory",
    slug: "Samsung Galaxy Buds 3",
    brand: "samsung",
    price: 20_000_000,
    stock: 15,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/galaxy-buds-3.jpg",
  },

  {
    id: 21,
    name: "Xiaomi Redmi Buds 5",
    category: "accessory",
    slug: "Xiaomi Redmi Buds 5",
    brand: "xiaomi",
    price: 10_000_000,
    stock: 22,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: "2026-08-19T23:59:59",
    image: "/images/products/redmi-buds-5.jpg",
  },

  {
    id: 22,
    name: "Sony WH-1000XM5",
    category: "accessory",
    slug: "Sony WH-1000XM5",
    brand: "sony",
    price: 22_000_000,
    stock: 9,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: "2026-08-25T23:59:59",
    image: "/images/products/sony-wh-1000xm5.jpg",
  },

  {
    id: 23,
    name: "Xbox Wireless Headset",
    category: "accessory",
    slug: "Xbox Wireless Headset",
    brand: "xbox",
    price: 15_000_000,
    stock: 8,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/xbox-headset.jpg",
  },

  {
    id: 24,
    name: "Apple MagSafe Charger",
    category: "accessory",
    slug: "Apple MagSafe Charger",
    type: "charger",
    brand: "apple",
    price: 8_000_000,
    stock: 25,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/magsafe-charger.jpg",
  },

  {
    id: 25,
    name: "Samsung 45W Charger",
    category: "accessory",
    slug: "Samsung 45W Charger",
    type: "charger",
    brand: "samsung",
    price: 4_000_000,
    stock: 20,
    hasDiscount: true,
    discount: 10,
    discountExpiresAt: "2026-08-26T23:59:59",
    image: "src/assets/productsImages/samsungcharger45w.webp",
  },

  {
    id: 26,
    name: "Xiaomi 67W Charger",
    category: "accessory",
    slug: "Xiaomi 67W Charger",
    type: "charger",
    brand: "xiaomi",
    price: 2_000_000,
    stock: 17,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/xiaomi-charger.jpg",
  },

  {
    id: 27,
    name: "Sony DualSense Controller",
    category: "accessory",
    slug: "Sony DualSense Controller",
    type: "controller",
    brand: "sony",
    price: 12_000_000,
    stock: 12,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: "2026-08-22T23:59:59",
    image: "/images/products/dualsense.jpg",
  },

  {
    id: 28,
    name: "Xbox Wireless Controller",
    category: "accessory",
    slug: "Xbox Wireless Controller",
    type: "controller",
    brand: "xbox",
    price: 8_000_000,
    stock: 14,
    hasDiscount: false,
    discount: null,
    discountExpiresAt: null,
    image: "/images/products/xbox-controller.jpg",
  },
];

export default products;
