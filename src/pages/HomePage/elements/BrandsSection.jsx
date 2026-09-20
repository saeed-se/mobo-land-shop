import MarqueeItem from "./MarqueeItem";

const BrandsSection = () => {
  const marquee = [
    "/banners/anker.banner.webp",
    "/banners/asus.banner.webp",
    "/banners/jbl.banner.webp",
    "/banners/lg.banner.png",
    "/banners/nokia.banner.webp",
    "/banners/philips.banner.png",
    "/banners/samsung.banner.webp",
    "/banners/siliconpower.banner.webp",
    "/banners/sony.banner.webp",
    "/banners/apple.banner.webp",
    "/banners/xiaomi.banner.webp",
    "/banners/huawei.banner.webp",
    "/banners/haylou.banner.webp",
  ];

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="w-fit rounded-t-2xl bg-secondary px-6 md:px-8 py-2 md:py-4 font-dana-DemiBold text-lg md:text-xl text-white">
        <h4>برندهای موجود در فروشگاه</h4>
      </div>

      {/* Logos Animation */}
      <div dir="ltr" className="w-full overflow-hidden">
        <MarqueeItem images={marquee} from={0} to={"-100%"} />
      </div>
    </div>
  );
};

export default BrandsSection;
