import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BlogBox from "./BlogBox";
import PrevBtn from "@/components/common/PrevBtn";
import NextBtn from "@/components/common/NextBtn";
import useSwiper from "@/Hooks/useSwiper";

const BlogSlider = ({ blogs }) => {
  const { swiper, setSwiper, isBeginning, isEnd, updateButtons } =
    useSwiper(blogs);

  return (
    <div className="relative max-w-fit border h-fit mt-10 py-3 rounded-2xl">
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
        {blogs.slice(0, 8).map((blog) => (
          <SwiperSlide key={blog.id}>
            <BlogBox {...blog} />
          </SwiperSlide>
        ))}
        <PrevBtn isBeginning={isBeginning} />
        <NextBtn isEnd={isEnd} />
      </Swiper>
    </div>
  );
};

export default BlogSlider;
