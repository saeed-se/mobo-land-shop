import { useState } from "react";

import { NavLink } from "react-router";
import { VscChromeClose } from "react-icons/vsc";
import { MdAdminPanelSettings } from "react-icons/md";

import MobileMenuItems from "@/utils/MobileMenuItems";
import Button from "@/components/common/Button";
import { navItems, categoryItems } from "@/data/menuItems";
import Support from "@/components/common/Support";
import useAuth from "@/Hooks/useAuth";
import useClickOutside from "@/Hooks/useClickOutside";

const MobileNavMenu = ({ closeMobileMenu, isOpenMobileMenu }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const { isAuthenticated, user } = useAuth();
  const menuRef = useClickOutside(closeMobileMenu);

  return (
    <aside
      ref={menuRef}
      className={`w-70 fixed top-0 right-0 bottom-0 transition-all duration-200 ease-in-out px-4 py-6 ${isOpenMobileMenu ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"} border-l border-active-slideBtn/20 bg-white rounded-2xl z-50 md:hidden`}
    >
      <div
        className="mr-[88%] cursor-pointer"
        onClick={() => closeMobileMenu()}
      >
        <VscChromeClose size={25} color="#6B7280" strokeWidth={1} />
      </div>

      <div className="max-w-fit mt-6 font-dana-DemiBold text-sm flex items-center rounded-lg overflow-hidden *:px-2.5 *:py-4 *:text-center *:transition-all *:duration-200">
        <button
          className={`w-fit cursor-pointer ${activeMenu === "main" ? "bg-primary-text/15" : "bg-white"}`}
          onClick={() => setActiveMenu("main")}
        >
          منوی اصلی
        </button>

        <button
          className={`w-fit cursor-pointer ${activeMenu === "products" ? "bg-primary-text/15" : "bg-white"}`}
          onClick={() => setActiveMenu("products")}
        >
          دسته بندی محصولات
        </button>
      </div>
      <div>
        <ul className="mt-7 space-y-3 font-dana-Medium">
          {activeMenu === "products"
            ? categoryItems?.map((item) => (
                <MobileMenuItems key={item.id} item={item} />
              ))
            : navItems?.map((item) => {
                return (
                  !item.hasSub && (
                    <li className="py-3" key={item.id}>
                      <NavLink to={item.path}>{item.title}</NavLink>
                    </li>
                  )
                );
              })}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4 mt-15">
        {isAuthenticated && user.role !== "customer" && (
          <Button
            text="پنل مدیریت"
            icon={<MdAdminPanelSettings size={20} />}
            to="/admin"
          />
        )}
        <Support />
      </div>
    </aside>
  );
};

export default MobileNavMenu;
