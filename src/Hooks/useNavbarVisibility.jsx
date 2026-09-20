import { useEffect, useState } from "react";

const useNavbarVisibility = () => {
  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const showNavBarHandler = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", showNavBarHandler);

    return () => {
      window.removeEventListener("scroll", showNavBarHandler);
    };
  }, []);

  return showNavBar;
};

export default useNavbarVisibility;
