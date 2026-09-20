import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductBox from "@/pages/HomePage/elements/ProductBox";
import DiscountBanner from "@/pages/HomePage/elements/DiscountBanner";
import PrevBtn from "@/components/common/PrevBtn";
import NextBtn from "@/components/common/NextBtn";
import useSwiper from "@/Hooks/useSwiper";

const SwiperTemplate = ({ products, type, hasDiscount = null }) => {
  const { swiper, setSwiper, isBeginning, isEnd, updateButtons } =
    useSwiper(products);

  return (
    <div className="relative max-w-fit bg-secondary h-fit mt-10 py-3 rounded-2xl">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          updateButtons(swiper);
        }}
        onSlideChange={updateButtons}
      >
        {hasDiscount && (
          <SwiperSlide>
            <DiscountBanner />
          </SwiperSlide>
        )}
        {products
          .filter((product) =>
            hasDiscount
              ? product.hasDiscount
              : product.category === type && !product.hasDiscount,
          )
          .slice(0, 8)
          .map((product) => (
            <SwiperSlide key={product.id}>
              <ProductBox {...product} />
            </SwiperSlide>
          ))}
        <PrevBtn isBeginning={isBeginning} />
        <NextBtn isEnd={isEnd} />
      </Swiper>
    </div>
  );
};

export default SwiperTemplate;
