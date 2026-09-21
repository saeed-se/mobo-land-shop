import HeroButton from "./HeroButton";
import amazings from "@/assets/amazings.webp";
import percentage from "@/assets/percentage.webp";

const DiscountBanner = () => {
  return (
    <div className="flex items-center flex-col gap-3 mt-5 xs:mt-0 xs:pr-7 md:pr-10">
      <img src={amazings} alt="amazings" width={150} height={150} />
      <img src={percentage} alt="percentage" width={150} height={150} />
      <HeroButton />
    </div>
  );
};

export default DiscountBanner;
