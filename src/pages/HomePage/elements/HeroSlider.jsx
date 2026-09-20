import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderButtons from "@/components/common/SliderButtons";

const HeroSlider = () => {
  return (
    <div className="relative h-45 md:h-80 mt-10 md:mt-15">
      <Swiper
        slidesPerView={1}
        height={120}
        loop
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide>
          <img
            className="h-full"
            src="/src/assets/slider-1.webp"
            alt="slider-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            src="/src/assets/slider-2.webp"
            alt="slider-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            src="/src/assets/slider-3.gif"
            alt="slider-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            src="/src/assets/slider-4.gif"
            alt="slider-4"
          />
        </SwiperSlide>

        <SliderButtons />
      </Swiper>
    </div>
  );
};

export default HeroSlider;
