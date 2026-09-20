import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

import iranCities from "@/data/iranCities";

const CitySelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  const filteredCities = iranCities.filter((city) =>
    city.includes(search.trim()),
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSelect = (city) => {
    onChange(city);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div ref={containerRef} className="relative">
      <label
        htmlFor="city"
        className="mb-1.5 block text-sm font-dana-Medium text-gray-700"
      >
        شهر محل سکونت
      </label>

      {/* Selected city */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-sm outline-none transition ${
          isOpen
            ? "border-primary ring-2 ring-primary/10"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value || "شهر خود را انتخاب کنید"}
        </span>

        <IoChevronDown
          className={`text-lg text-gray-500 transition-transform duration-200 cursor-pointer ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          {/* Search */}
          <div className="border-b border-gray-100 p-2">
            <div className="relative">
              <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                  }
                }}
                placeholder="جستجوی شهر..."
                className="w-full rounded-lg bg-gray-50 py-2.5 pl-3 pr-10 text-sm text-gray-700 outline-none transition focus:bg-gray-100"
              />
            </div>
          </div>

          {/* Cities */}
          <div className="max-h-35 overflow-y-auto p-1.5">
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => {
                const isSelected = city === value;

                return (
                  <button
                    key={city}
                    type="button"
                    onClick={() => handleSelect(city)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-right text-sm transition cursor-pointer ${
                      isSelected
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{city}</span>

                    {isSelected && <IoCheckmark className="text-lg" />}
                  </button>
                );
              })
            ) : (
              <div className="px-3 py-6 text-center text-sm text-gray-400">
                شهری پیدا نشد
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySelect;
