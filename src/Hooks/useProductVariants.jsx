import { useEffect, useState } from "react";

const useProductVariants = (product, onPriceChange) => {
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

  return {
    hasStorage,
    hasColors,
    storages,
    selectedStorage,
    setSelectedStorage,
    colors,
    selectedColor,
    setSelectedColor,
  };
};

export default useProductVariants;
