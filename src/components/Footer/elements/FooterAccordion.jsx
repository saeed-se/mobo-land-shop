import { useState } from "react";

import { Link } from "react-router";
import { IoChevronDown } from "react-icons/io5";
const FooterAccordion = ({ title, links }) => {
  const [openSections, setOpenSections] = useState({});

  const handleToggle = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <>
      <div>
        <div
          onClick={() => handleToggle(title)}
          className="flex justify-between items-center max-xs:mb-2.5"
        >
          <p className="text-sm xs:text-lg max-xs:font-dana-Medium xs:font-dana-DemiBold">
            {title}
          </p>
          <IoChevronDown
            size={12}
            className={`xs:hidden cursor-pointer transition-transform duration-200 ${
              openSections[title] ? "rotate-180" : ""
            }`}
          />
        </div>
        <ul
          className={`max-xs:text-[11px] max-xs:border-r max-xs:border-r-success max-xs:pr-2 text-sm md:text-[15px] xs:mt-6 max-xs:space-y-2.5 overflow-hidden transition-all duration-200 ${
            openSections[title]
              ? "max-xs:max-h-96 max-xs:opacity-100"
              : "max-xs:max-h-0 max-xs:opacity-0"
          }`}
        >
          {links.map((link, idx) => (
            <li key={idx}>
              <Link>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterAccordion;
