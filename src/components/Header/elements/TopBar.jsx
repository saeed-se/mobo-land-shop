import { useState } from "react";

import { BsFillBasket3Fill } from "react-icons/bs";
import { IoPersonAdd } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";

import Button from "@/components/common/Button";
import SearchBar from "@/components/Header/elements/SearchBar";
import Logo from "@/components/Header/elements/Logo";
import Tooltip from "@/components/common/Tooltip";
import BasketTooltipContent from "./BasketTooltipContent";
import useAuth from "@/Hooks/useAuth";

const TopBar = () => {
  const [count, setCount] = useState(0);
  const { isAuthenticated, user, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [shoppingCart, setShoppingCart] = useState([
    // {
    //   id: 1,
    //   name: "گوشی موبایل اپل مد‌ل iPhone 17 CH/A",
    //   color: ["مشکی", "#111827"],
    //   discount: 10,
    //   price: 280_000_000,
    //   image: "src/assets/productsImages/iphone17.webp",
    // },
  ]);

  const handleLogout = () => {
    logout();
    toast.success("با موفقیت از حساب کاربری خارج شدید");
    navigate("/auth");
  };

  return (
    <div className="relative hidden md:flex items-center justify-between pb-4">
      {/* Logo & Search Input */}

      <div className="w-[62%] 2md:w-[65%] flex items-center gap-5">
        <div>
          <Logo size={200} />
        </div>
        <div className="w-lg 2md:w-xl relative z-50">
          <SearchBar />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center justify-between gap-2 2md:gap-4">
        <div className="flex items-center gap-2">
          {isAuthenticated && user.role !== "user" && (
            <Button
              text="پنل مدیریت"
              icon={<MdAdminPanelSettings size={20} />}
              to="/admin"
            />
          )}
          {isAuthenticated ? (
            <Button
              text={user.name}
              icon={<IoExitOutline size={20} />}
              onClick={handleLogout}
            />
          ) : (
            <Button
              text="ورود | ثبت نام"
              icon={<IoPersonAdd size={20} />}
              to="auth"
            />
          )}
        </div>
        <div className="group">
          <Button
            text={"سبد خرید"}
            icon={<BsFillBasket3Fill size={20} />}
            count={count}
            to={"basket"}
          />
          {!(pathname === "/basket") && (
            <Tooltip products={shoppingCart}>
              <BasketTooltipContent products={shoppingCart} />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
