import { useEffect } from "react";

const useEscapeKey = (handler, isActive = true) => {
  useEffect(() => {
    if (!isActive) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") handler();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [handler, isActive]);
};

export default useEscapeKey;
