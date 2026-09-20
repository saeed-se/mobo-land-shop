import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router";

import Support from "@/components/common/Support";
import { navItems, categoryItems } from "@/data/menuItems";
import DesktopMenuItems from "@/utils/DesktopMenuItems";

const Navbar = ({ showNavbar }) => {
  return (
    <div
      className={`hidden md:flex justify-between items-baseline transition-all duration-150 ease-in-out ${showNavbar ? "h-[45.4px] visible opacity-100" : "invisible opacity-0 h-0 mt-0"}`}
    >
      <ul className={`relative flex items-center gap-4`}>
        {showNavbar &&
          navItems.map((item) => {
            return (
              <li
                key={item.id}
                className="h-11 *:pl-4 group hover:text-success transition-colors duration-200 ease-in"
              >
                <NavLink
                  to={item.path}
                  className={
                    item.icon
                      ? "flex items-start border-l border-primary-text"
                      : ""
                  }
                >
                  {item.icon && <AiOutlineMenu size={15} className="mt-0.5" />}
                  <span>{`${item.title}`}</span>
                </NavLink>

                {/* Nav Sub */}

                {item.hasSub && (
                  <div className="bg-white absolute top-11 w-55 h-fit pl-0! shadow-2xs border border-gray/10 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-40">
                    <ul className="*:pr-2 *:py-3 *:hover:bg-black/5 *:hover:transition-colors *:hover:duration-200 *:hover:ease-in-out">
                      {categoryItems.map((item, idx) => (
                        <DesktopMenuItems key={item.id} item={item} idx={idx} />
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
      </ul>

      {showNavbar && <Support />}
    </div>
  );
};

export default Navbar;
