import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSlider from "./SectionSlider";
const MobileSection = () => {
  return (
    <Container>
      <SectionTitle title={"موبایل"} btnText={"مشاهده همه"} />
      <SectionSlider category={"mobile"} />
    </Container>
  );
};

export default MobileSection;
