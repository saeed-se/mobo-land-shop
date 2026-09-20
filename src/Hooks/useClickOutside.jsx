import { useEffect, useRef } from "react";

const useClickOutside = (callback) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (!ref.current) return;

      const isScrollbarClick =
        event.clientX >= document.documentElement.clientWidth;
      if (isScrollbarClick) return;

      if (!ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [callback]);
  return ref;
};

export default useClickOutside;
