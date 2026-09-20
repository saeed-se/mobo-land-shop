const SearchCover = ({ isOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    />
  );
};

export default SearchCover;
