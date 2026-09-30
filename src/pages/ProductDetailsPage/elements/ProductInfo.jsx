import { useState, useEffect, useMemo } from "react";

import { FaStar, FaShoppingCart } from "react-icons/fa";
import { FiTruck, FiShield } from "react-icons/fi";

import useCountdown from "@/hooks/useCountdown";

const ProductInfo = ({ product }) => {
  const variants = product.variants || [];

  const hasStorage = variants.some((variant) => variant.storage);

  const hasColors = variants.some(
    (variant) => variant.colors && variant.colors.length > 0,
  );

  const storages = [
    ...new Set(
      variants
        .filter((variant) => variant.storage)
        .map((variant) => variant.storage),
    ),
  ];

  const [selectedStorage, setSelectedStorage] = useState(storages[0] || null);

  const selectedVariant = useMemo(() => {
    if (selectedStorage) {
      return (
        variants.find((variant) => variant.storage === selectedStorage) ||
        variants[0]
      );
    }

    return variants[0];
  }, [selectedStorage, variants]);

  const colors = selectedVariant?.colors || [];

  const [selectedColor, setSelectedColor] = useState(colors[0]?.name || null);

  useEffect(() => {
    if (!colors.length) {
      setSelectedColor(null);
      return;
    }

    const colorStillExists = colors.some(
      (color) => color.name === selectedColor,
    );

    if (!colorStillExists) {
      setSelectedColor(colors[0].name);
    }
  }, [selectedVariant, colors, selectedColor]);

  const price = selectedVariant?.price ?? product.price;

  const timeLeft = useCountdown(
    product.hasDiscount ? product.discountExpiresAt : null,
  );

  const hasActiveDiscount =
    product.hasDiscount && product.discount > 0 && timeLeft;

  const discountAmount = hasActiveDiscount
    ? Math.round(price * (product.discount / 100))
    : 0;

  const finalPrice = price - discountAmount;

  return (
    <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_0.9fr_1fr]">
        {/* Product Info */}
        <div className="order-1 flex flex-col">
          <h1 className="font-dana-DemiBold text-lg leading-8 text-primary-text md:text-xl">
            {product.desc}
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex gap-1 text-yellow-500">
              <FaStar size={15} />
              <span className="font-dana-Medium text-sm">4.5</span>
            </div>

            <span className="font-dana-Medium text-sm text-secondary-text">
              (12 نظر)
            </span>
          </div>

          <div className="my-5 h-px bg-gray-100" />

          {hasStorage && (
            <div>
              <p className="mb-3 font-dana-Medium text-sm text-primary-text">
                حافظه:
              </p>

              <div className="flex flex-wrap gap-2">
                {storages.map((storage) => (
                  <button
                    key={storage}
                    type="button"
                    onClick={() => setSelectedStorage(storage)}
                    className={`cursor-pointer rounded-lg border px-4 py-2 font-dana-Medium text-sm transition ${
                      selectedStorage === storage
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-gray-200 text-secondary-text hover:border-primary"
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>
          )}

          {hasColors && colors.length > 0 && (
            <div className="mt-5">
              <p className="mb-3 font-dana-Medium text-sm text-primary-text">
                رنگ:
                <span className="mr-2 font-dana-Medium text-secondary-text">
                  {selectedColor}
                </span>
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex w-fit cursor-pointer items-center gap-2 rounded-[5px] border py-px pl-2 pr-px font-dana-Medium text-sm transition ${
                      selectedColor === color.name
                        ? "border-primary text-primary"
                        : "border-gray-200 text-secondary-text"
                    }`}
                  >
                    <div
                      className="size-5 rounded-[5px] border border-gray-200"
                      style={{ backgroundColor: color.hex }}
                    />

                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-3 py-3">
            <div className="flex flex-col gap-1">
              <p className="font-dana-DemiBold text-sm text-primary-text">
                ارسال فردا
              </p>

              <button
                type="button"
                className="flex w-fit cursor-pointer items-center gap-1 font-dana-Medium text-xs text-primary transition hover:opacity-80"
              >
                <span>توضیحات بیشتر</span>
                <span className="text-sm">←</span>
              </button>
            </div>

            <img
              src="/delivery_tomorrow.svg"
              alt="ارسال فردا"
              title="ارسال فردا"
              className="h-12 w-29 object-contain"
            />
          </div>
        </div>

        {/* Product Image */}
        <div className="order-2 flex items-center justify-center">
          <div className="flex h-97 w-full items-center justify-center rounded-xl border border-primary">
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-w-full object-contain p-6"
            />
          </div>
        </div>

        {/* Purchase Card */}
        <div className="order-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            {hasActiveDiscount && (
              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-gray/80 px-3 py-1 font-dana-DemiBold text-sm text-white">
                    موبو آف
                  </span>

                  <div className="flex items-center gap-1 *:text-gray/80">
                    <span className="font-dana-DemiBold text-lg">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>

                    <span className="font-dana-DemiBold text-lg">:</span>

                    <span className="font-dana-DemiBold text-lg">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>

                    <span className="font-dana-DemiBold text-lg">:</span>

                    <span className="font-dana-DemiBold text-lg">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>

                    <span className="font-dana-DemiBold text-lg">:</span>

                    <span className="font-dana-DemiBold text-lg">
                      {timeLeft.days}
                    </span>
                  </div>
                </div>

                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-full rounded-full bg-primary" />
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiTruck className="shrink-0 text-primary" size={20} />

                <div>
                  <p className="font-dana-Medium text-sm text-primary-text">
                    فروشنده
                  </p>

                  <p className="font-dana-Medium text-xs text-secondary-text">
                    موبو لند
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiShield className="shrink-0 text-primary" size={20} />

                <div>
                  <p className="font-dana-Medium text-sm text-primary-text">
                    ضمانت خرید
                  </p>

                  <p className="font-dana-Medium text-xs text-secondary-text">
                    ضمانت اصالت و سلامت کالا
                  </p>
                </div>
              </div>
            </div>

            <div className="my-5 h-px bg-gray-100" />

            {hasActiveDiscount && (
              <div className="mb-3">
                <span className="rounded-full bg-error px-3 py-1 font-dana-Medium text-xs text-white">
                  {discountAmount.toLocaleString("fa-IR")} تومان تخفیف
                </span>
              </div>
            )}

            {hasActiveDiscount && (
              <div className="mb-1 text-left">
                <span className="font-dana-Medium text-sm text-error line-through">
                  {price.toLocaleString("fa-IR")}
                </span>
              </div>
            )}

            <div className="flex items-baseline justify-end gap-2">
              <span className="font-dana-DemiBold text-2xl text-primary-text">
                {finalPrice.toLocaleString("fa-IR")}
              </span>

              <span className="font-dana-Medium text-sm text-secondary-text">
                تومان
              </span>
            </div>

            <button
              type="button"
              className="mt-5 flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-primary font-dana-DemiBold text-white transition hover:opacity-90"
            >
              <FaShoppingCart size={18} />
              <span>افزودن به سبد خرید</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
