import HeroSection from "@/pages/HomePage/elements/HeroSection";
import HeroSlider from "@/pages/HomePage/elements/HeroSlider";
import DiscountSection from "@/pages/HomePage/elements/DiscountSection";
import MobileSection from "@/pages/HomePage/elements/MobileSection";
import BannerSection from "@/pages/HomePage/elements/BannerSection";
import LaptopSection from "@/pages/HomePage/elements/LaptopSection";
import BrandsSection from "@/pages/HomePage/elements/BrandsSection";
import BlogSection from "@/pages/HomePage/elements/BlogSection";
import WarrantySection from "@/pages/HomePage/elements/WarrantySection";

const Home = () => {
  return (
    <main>
      <HeroSection>
        <HeroSlider />
      </HeroSection>

      <DiscountSection />

      <MobileSection />

      <BannerSection />

      <LaptopSection />

      <BrandsSection />

      <BlogSection />

      <WarrantySection />
    </main>
  );
};

export default Home;
