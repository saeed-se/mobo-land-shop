import { useState } from "react";
import { Swiper } from "swiper/react";
const useSwiper = (items) => {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const updateButtons = (swiper) => {
    if (items.length > 0) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };
  return { swiper, setSwiper, isBeginning, isEnd, updateButtons };
};
export default useSwiper;
