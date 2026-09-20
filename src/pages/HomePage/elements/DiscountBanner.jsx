import HeroButton from "./HeroButton";

const DiscountBanner = () => {
  return (
    <div className="flex items-center flex-col gap-3 mt-5 xs:mt-0 xs:pr-7 md:pr-10">
      <img
        src="/src/assets/amazings.webp"
        alt="amazings"
        width={150}
        height={150}
      />
      <img
        src="/src/assets/percentage.webp"
        alt="percentage"
        width={150}
        height={150}
      />
      <HeroButton />
    </div>
  );
};

export default DiscountBanner;
