import { VscHome } from "react-icons/vsc";
import { BsPersonFill } from "react-icons/bs";
import { LuStore } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

import { NavLink, useNavigate } from "react-router";
import { toast } from "sonner";

import useAuth from "@/Hooks/useAuth";

const MobileBottomNav = () => {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const bottomNavItems = [
    {
      title: "خانه",
      icon: VscHome,
      path: "/",
    },
    {
      title: "سبد خرید",
      icon: MdOutlineShoppingBag,
      path: "basket",
    },
    {
      title: "فروشگاه",
      icon: LuStore,
      path: "products",
    },
    {
      title: isAuthenticated ? "خروج" : "ورود",
      icon: isAuthenticated ? IoExitOutline : BsPersonFill,
      path: "auth",
      action: isAuthenticated ? "logout" : null,
    },
  ];

  const handleLogout = () => {
    logout();

    toast.success("با موفقیت از حساب کاربری خارج شدید");

    navigate("/auth");
  };

  return (
    <div className="flex justify-between *:text-[11px] *:font-dana-Medium">
      {bottomNavItems.map((item) => {
        const Icon = item.icon;

        if (item.action === "logout") {
          return (
            <div key={item.title} className="w-20 xs:w-25">
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full flex-col items-center gap-2 py-4 cursor-pointer"
              >
                <Icon className="size-5 xs:size-6" />

                <span>{item.title}</span>
              </button>
            </div>
          );
        }

        return (
          <div key={item.title} className="w-20 xs:w-25">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-2 py-4 ${
                  isActive ? "border-t-4 border-t-success bg-input" : ""
                }`
              }
            >
              <Icon className="size-5 xs:size-6" />

              <span>{item.title}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default MobileBottomNav;
