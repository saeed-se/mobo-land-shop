import Container from "@/components/common/Container";

const BannerSection = () => {
  return (
    <Container>
      <div className="grid gap-1 xs:gap-3 *:w-full grid-cols-2 lg:grid-cols-4 mt-10 *:h-45 lg:*:h-50 *:rounded-2xl">
        <img src="src/assets/banners/headphone-banner.png" alt="banner" />
        <img src="src/assets/banners/laptop-banner.webp" alt="banner" />
        <img src="src/assets/banners/mac-banner.jpg" alt="banner" />
        <img src="src/assets/banners/phone-banner.png" alt="banner" />
      </div>
    </Container>
  );
};

export default BannerSection;
