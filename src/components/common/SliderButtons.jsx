import { useSwiper } from "swiper/react";

import { IoChevronBack } from "react-icons/io5";

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="hidden md:flex absolute left-[3%] bottom-[10%]  items-center gap-2 *:bg-bg z-10 *:cursor-pointer *:rounded-lg *:flex *:items-center *:justify-center">
      <button className="size-8 md:size-10" onClick={() => swiper.slidePrev()}>
        <IoChevronBack className="rotate-180 size-5 md:size-8" />
      </button>
      <button className="size-8 md:size-10" onClick={() => swiper.slideNext()}>
        <IoChevronBack className="size-5 md:size-8" />
      </button>
    </div>
  );
};

export default SliderButtons;
