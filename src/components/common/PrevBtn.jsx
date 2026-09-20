import { useSwiper } from "swiper/react";
import { IoChevronBack } from "react-icons/io5";

const PrevBtn = ({ isBeginning }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`absolute top-[47%] right-3 xs:right-2 size-10 cursor-pointer ${isBeginning ? "bg-active-slideBtn/30" : "bg-active-slideBtn"} flex items-center justify-center rounded-full rotate-180 z-10`}
      onClick={() => swiper.slidePrev()}
      disabled={isBeginning}
    >
      <IoChevronBack size={24} color="white" className="*:stroke-70" />
    </button>
  );
};

export default PrevBtn;
