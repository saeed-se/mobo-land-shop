import { IoChevronUp } from "react-icons/io5";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import footerArcs from "@/data/footerArcsItems";
import FooterAccordion from "./elements/FooterAccordion";
import FooterMiddleSec from "./elements/FooterMiddleSec";
import FooterCopywrite from "./elements/FooterCopywrite";

const Footer = () => {
  return (
    <footer className="mt-8 pb-28 md:pb-0 md:mt-15 py-8 bg-primary text-white">
      <Container>
        <div className="flex flex-wrap md:flex-nowrap justify-between border-b border-white/50 pb-8 gap-5 md:gap-0 md:*:w-full xs:**:space-y-2.5 **:[&>Li]:*:hover:text-success **:[&>Li]:transition-all **:[&>Li]:*:duration-200 **:[&>Li]:*:ease-in max-xs:flex-col">
          {footerArcs.map((item, idx) => (
            <FooterAccordion key={idx} {...item} />
          ))}
          <div className="flex justify-center items-center mx-auto">
            <Button
              className={"bg-white! text-sm max-xs:py-2! md:px-5!"}
              text={"بازگشت به بالا"}
              icon={<IoChevronUp />}
              to={"#"}
            />
          </div>
        </div>

        <FooterMiddleSec />

        <FooterCopywrite />
      </Container>
    </footer>
  );
};

export default Footer;
