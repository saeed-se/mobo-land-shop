import { useState } from "react";

import { Link } from "react-router";
import { FaCaretLeft } from "react-icons/fa";
const MobileMenuItems = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children?.length > 0;

  return (
    <li className="pt-2">
      <div className="flex items-center justify-between">
        <Link>{item.title}</Link>
        {hasChildren && (
          <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
            <FaCaretLeft
              className={`md:hidden transition-all duration-200 ${isOpen ? "-rotate-90" : "rotate-0"} cursor-pointer`}
            />
          </button>
        )}
      </div>

      {
        <ul
          className={`md:bg-white overflow-hidden ${isOpen ? "mt-2 px-2 pb-1.5 space-y-1.5 bg-active-slideBtn/15 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"} rounded-lg transition-all duration-150 ease-in-out`}
        >
          {item.children?.map((child) => (
            <MobileMenuItems key={child.id} item={child} mobile />
          ))}
        </ul>
      }
    </li>
  );
};

export default MobileMenuItems;
