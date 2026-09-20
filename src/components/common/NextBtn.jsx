import { useSwiper } from "swiper/react";
import { IoChevronBack } from "react-icons/io5";

const NextBtn = ({ isEnd }) => {
  const swiper = useSwiper();

  return (
    <button
      className={`absolute top-[47%] left-3 xs:left-2 size-10 cursor-pointer ${isEnd ? "bg-active-slideBtn/30" : "bg-active-slideBtn"} flex items-center justify-center rounded-full z-10`}
      onClick={() => swiper.slideNext()}
      disabled={isEnd}
    >
      <IoChevronBack size={24} color="white" className="*:stroke-70" />
    </button>
  );
};

export default NextBtn;
