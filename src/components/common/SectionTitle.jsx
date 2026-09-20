import { IoChevronBack } from "react-icons/io5";

import Button from "@/components/common/Button";
const SectionTitle = ({ title, btnText }) => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="font-dana-DemiBold text-lg pb-3 border-b-[3px] border-b-primary">
        <h3>{title}</h3>
      </div>
      <Button
        className={"flex-row-reverse "}
        text={btnText}
        icon={<IoChevronBack />}
      />
    </div>
  );
};

export default SectionTitle;
