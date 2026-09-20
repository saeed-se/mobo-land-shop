import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const HeroButton = () => {
  return (
    <button className="flex items-center gap-2 px-5 py-3 bg-bg rounded-3xl cursor-pointer">
      <span className="font-dana-DemiBold text-sm">محصولات در حراج</span>
      <FaRegArrowAltCircleLeft />
    </button>
  );
};

export default HeroButton;
