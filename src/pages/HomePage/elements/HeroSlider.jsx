import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderButtons from "@/components/common/SliderButtons";

import slider1 from "@/assets/slider-1.webp";
import slider2 from "@/assets/slider-2.webp";
import slider3 from "@/assets/slider-3.gif";
import slider4 from "@/assets/slider-4.gif";

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
          <img className="h-full" src={slider1} alt="slider-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full" src={slider2} alt="slider-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full" src={slider3} alt="slider-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full" src={slider4} alt="slider-4" />
        </SwiperSlide>

        <SliderButtons />
      </Swiper>
    </div>
  );
};

export default HeroSlider;
