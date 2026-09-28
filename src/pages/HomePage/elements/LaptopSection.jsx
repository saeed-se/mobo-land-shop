import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSlider from "./SectionSlider";

const LaptopSection = () => {
  return (
    <Container>
      <SectionTitle title={"لپ تاپ"} btnText={"مشاهده همه"} />
      <SectionSlider category={"laptop"} />
    </Container>
  );
};

export default LaptopSection;
