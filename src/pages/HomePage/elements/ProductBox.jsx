import CountdownTimer from "./CountdownTimer";
import DiscountBadge from "@/components/common/DiscountBadge";
import calculateDiscount from "@/utils/discount";

const ProductBox = ({
  name,
  desc,
  price,
  discount,
  discountExpiresAt,
  image,
  variants,
}) => {
  return (
    <div
      className={`bg-white max-w-full ${discount ? "h-103" : "h-86"} px-3 py-4 mx-3 xs:mx-1 sm:mx-2 rounded-2xl`}
    >
      <div className="w-fit bg-gray/80 text-bg text-[11px] px-4 pt-px rounded-3xl font-dana-Medium">
        <span>{discount ? "موبو آف" : "موبو لند"}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div>
          <img src={image} alt={name} width={186} height={186} />
        </div>
        <div className="line-clamp-2">
          <h2 className="font-dana-DemiBold min-h-10 lg:text-sm">{desc}</h2>
        </div>
        {discount ? (
          <div>
            <CountdownTimer endDate={discountExpiresAt} />
          </div>
        ) : null}
      </div>
      {discount ? (
        <div className="mt-7 flex flex-col justify-between gap-2">
          <div className="flex justify-between">
            <DiscountBadge discount={discount} />
            <span className="text-error">
              <del>
                {price
                  ? price.toLocaleString()
                  : variants[0].price.toLocaleString()}
              </del>
            </span>
          </div>
          <div className="flex justify-end font-dana-DemiBold">
            <span>
              {calculateDiscount(
                price ? price : variants[0].price,
                discount,
              ).toLocaleString()}{" "}
              تومان
            </span>
          </div>
        </div>
      ) : (
        <div className="flex justify-end font-dana-DemiBold mt-10">
          <span>
            {price ? price : variants[0].price.toLocaleString()} تومان
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductBox;
