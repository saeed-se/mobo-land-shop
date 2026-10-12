const ReviewProductCard = ({ product }) => (
  <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-3">
    <div className="aspect-square w-14 shrink-0 overflow-hidden rounded-xl bg-bg lg:w-[3.8rem]">
      <img
        src={product.image}
        alt={product.name}
        width={66}
        height={66}
        className="size-full object-contain"
      />
    </div>

    <p className="line-clamp-2 max-h-15 flex-1 font-dana-Medium text-sm leading-7.5 text-primary-text">
      {product.desc}
    </p>
  </div>
);

export default ReviewProductCard;
