import { useEffect, useState } from "react";

import { VscChromeClose } from "react-icons/vsc";
import { IoIosCloseCircle } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";

import useProductsSearch from "@/Hooks/useProductsSearch";
import useClickOutside from "@/Hooks/useClickOutside";
import SearchResult from "./SearchResult";

const MobileSearch = ({ isOpenSearch, setIsOpenSearch, ref }) => {
  const [query, setQuery] = useState("");
  const { products, isLoading, error } = useProductsSearch(query);
  const mobileSearchRef = useClickOutside(() => {
    setIsOpenSearch(false);
  });
  useEffect(() => {
    if (!isOpenSearch) return;
    if (isOpenSearch) {
      ref.current.focus();
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenSearch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const productClickHandler = () => {
    setIsOpenSearch(false);
    setQuery("");
  };

  return (
    <div
      dir="ltr"
      className={`md:hidden ${isOpenSearch ? "fixed top-14 left-0 right-0 bottom-17" : "hidden"} z-46 overflow-y-auto bg-white`}
      ref={mobileSearchRef}
    >
      <div
        dir="rtl"
        className="fixed left-0 top-0 right-0 bg-white flex items-center gap-4 xs:gap-7 px-5 py-3 shadow-lg"
      >
        <form className="w-[90%]" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={ref}
            value={query}
            onChange={handleChange}
            className="w-full font-sans text-sm pt-3 pb-4 placeholder:font-dana-Medium max-xs:pr-12 xs:pr-14 bg-input rounded-md outline-none"
            type="text"
            name="search"
            placeholder="جستجو در محصولات"
            autoComplete="off"
          />

          {query ? (
            <IoIosCloseCircle
              onClick={() => setQuery("")}
              className="size-6 opacity-50 absolute top-[38%] right-[8%] xs:right-[6%] md cursor-pointer"
            />
          ) : (
            <VscSearch className="size-6 absolute top-[38%] right-[8%] xs:right-[6%] md cursor-pointer" />
          )}
        </form>
        <VscChromeClose
          className="size-5 opacity-70 cursor-pointer"
          strokeWidth={1}
          onClick={() => setIsOpenSearch(false)}
        />
      </div>

      <SearchResult
        query={query}
        onClose={productClickHandler}
        products={products}
        isLoading={isLoading}
      />
    </div>
  );
};

export default MobileSearch;
