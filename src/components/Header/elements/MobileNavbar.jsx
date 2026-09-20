import { useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { SlMenu } from "react-icons/sl";

import MobileNavMenu from "@/components/Header/elements/MobileNavMenu";
import useAuth from "@/Hooks/useAuth";
import Logo from "./Logo";

const MobileNavbar = ({ setIsCoverShown, setIsOpenSearch }) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const { isAuthenticated, user } = useAuth();

  const showMenuHandler = () => {
    setIsCoverShown(true);
    setIsOpenMobileMenu(true);
  };

  const hideMenuHandler = () => {
    setIsCoverShown(false);
    setIsOpenMobileMenu(false);
  };

  const showSearchHandler = () => {
    setIsOpenSearch(true);
  };

  return (
    <>
      <div className="flex justify-between items-center md:hidden">
        <div className="flex justify-center items-center gap-3">
          <div className="cursor-pointer" onClick={() => showMenuHandler()}>
            <SlMenu size={25} />
          </div>

          <div>
            <Logo size={130} />
          </div>
        </div>

        <div
          className="flex items-center justify-end text-sm"
          onClick={showSearchHandler}
        >
          {isAuthenticated && (
            <div className="text-[10px] text-primary">
              <p>های {user.name}</p>
            </div>
          )}
          <button className="cursor-pointer">
            <IoIosSearch size={25} />
          </button>
        </div>
      </div>

      <MobileNavMenu
        closeMobileMenu={hideMenuHandler}
        isOpenMobileMenu={isOpenMobileMenu}
      />
    </>
  );
};

export default MobileNavbar;
