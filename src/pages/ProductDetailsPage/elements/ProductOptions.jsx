import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductOptions = ({ product, onPriceChange }) => {
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

  const selectedVariant = selectedStorage
    ? variants.find((variant) => variant.storage === selectedStorage) ||
      variants[0]
    : variants[0];

  const colors = selectedVariant?.colors || [];

  const [selectedColor, setSelectedColor] = useState(colors[0]?.name || null);

  useEffect(() => {
    onPriceChange(selectedVariant?.price ?? product.price);
  }, [selectedVariant, product.price, onPriceChange]);

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

  return (
    <div className="order-2 lg:order-1 flex flex-col">
      <h1 className="font-dana-DemiBold text-lg max-xs:text-base leading-8 text-primary-text md:text-xl">
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
          className="h-12 w-29 object-contain"
        />
      </div>
    </div>
  );
};

export default ProductOptions;
