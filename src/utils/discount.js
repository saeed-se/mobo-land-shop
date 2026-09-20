const calculateDiscount = (price, discount) => {
  const pricePercentage = 100 - discount;
  const discountedPrice = (pricePercentage * price) / 100;
  return discountedPrice;
};

export default calculateDiscount;
