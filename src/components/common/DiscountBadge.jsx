const DiscountBadge = ({ discount }) => {
  return (
    <div className="w-9 h-6 flex items-center px-1.5 bg-error text-white text-sm rounded-sm">
      {discount}%
    </div>
  );
};

export default DiscountBadge;
