import { Link } from "react-router";
import { IoChevronBack } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { LuStore } from "react-icons/lu";

import DiscountBadge from "@/components/common/DiscountBadge";
import calculateDiscount from "@/utils/discount";
const BasketTooltipContent = ({ products }) => {
  if (!products.length) {
    return (
      <div className="flex flex-col items-center  gap-4">
        <img src="/public/empty-basket.svg" alt="empty" />
        <p className="font-dana-Medium">سبد خرید شما خالی است!</p>
      </div>
    );
  }
  return (
    <div>
      <div className="flex items-center justify-between px-2.5 py-3 mb-2 font-dana-Medium text-xs bg-bg rounded-lg">
        <div>
          <span className="inline-block ml-2">سبد خرید شما</span>
          <span className="text-[10px] text-gray/50">2 عدد کالا</span>
        </div>
        <Link to={"basket"}>
          <div className="flex justify-center items-center gap-0.5 text-primary">
            <p> مشاهده سبد خرید</p> <IoChevronBack size={12} />
          </div>
        </Link>
      </div>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className={`space-y-3 last:mb-0! last:border-0! ${products.length > 2 ? " mb-4 pb-4 border-b border-active-slideBtn/30" : ""}`}
          >
            <div className="flex justify-between">
              <div className="mt-2 text-xs space-y-2">
                <h2 className="w-45 font-sans font-medium">{product.name}</h2>
                <div className="flex items-center gap-2 font-dana-Medium text-primary text-base">
                  <LuStore />
                  <span>مبولند</span>
                </div>
                <div className="w-fit pr-px pl-2 py-px flex items-center gap-2 font-dana-Medium border border-primary rounded-[5px]">
                  <div
                    className="size-5 rounded-[5px]"
                    style={{ backgroundColor: product.color[1] }}
                  />
                  <span>{product.color[0]}</span>
                </div>
              </div>
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  width={116}
                  height={116}
                />
              </div>
            </div>
            <div className="mr-[90%]">
              <DiscountBadge discount={product.discount} />
            </div>
            <div className="flex justify-between items-center">
              <div className="w-35 flex justify-between items-center *:p-3 *:bg-bg *:rounded-lg *:shadow-xl">
                <button className="cursor-pointer text-primary">
                  <FiPlus strokeWidth={3} />
                </button>
                <span className="bg-white! shadow-none!">1</span>
                <button className="cursor-pointer text-primary">
                  <FiMinus strokeWidth={3} />
                </button>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h3 className="text-error">
                  <del className="text-xs">
                    {product.price.toLocaleString()}
                  </del>
                  {" تومان"}
                </h3>
                <h2>
                  <span className="font-dana-DemiBold">
                    {calculateDiscount(
                      product.price,
                      product.discount,
                    ).toLocaleString()}
                  </span>
                  {" تومان"}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BasketTooltipContent;
