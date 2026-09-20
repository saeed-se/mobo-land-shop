import { useRef, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

import useClickOutside from "@/Hooks/useClickOutside";
import SearchCover from "@/components/Cover/SearchCover";
import SearchResult from "@/components/Header/elements/SearchResult";
import useProductsSearch from "@/Hooks/useProductsSearch";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { products, isLoading, error } = useProductsSearch(query);
  const searchBoxRef = useClickOutside(() => {
    setIsOpen(false);
  });
  const searchRef = useRef(null);
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.ctrlKey && e.altKey && e.key === "f") {
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const productClickHandler = () => {
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      <SearchCover isOpen={isOpen} />

      <div ref={searchBoxRef} className="relative z-50">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={query}
            onChange={handleChange}
            onFocus={() => setIsOpen(true)}
            className="w-full font-sans text-sm pt-3 pb-3 px-10 placeholder:font-dana-Medium bg-input rounded-lg outline-none"
            type="text"
            name="search"
            placeholder="جستجو در محصولات  ( Ctrl + Alt + F )"
            autoComplete="off"
            ref={searchRef}
          />
          <IoIosSearch className="size-6 absolute top-[27%] right-[2%] cursor-pointer" />

          {query && (
            <IoIosCloseCircle
              onClick={() => setQuery("")}
              className="size-6 opacity-70 absolute top-[27%] left-[2%] cursor-pointer"
            />
          )}
        </form>
        {isOpen && (
          <SearchResult
            query={query}
            onClose={productClickHandler}
            products={products}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
};

export default SearchBar;
