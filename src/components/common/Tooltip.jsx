const Tooltip = ({ children, products }) => {
  return (
    <div
      className={`w-95 h-fit ${products.length > 2 ? "overflow-y-auto" : ""} px-5.5 py-4 opacity-0 invisible absolute top-[75%] left-0 bg-white border border-active-slideBtn/20 shadow-xl transition-all duration-200 rounded-lg z-20 group-hover:opacity-100 group-hover:visible`}
    >
      {children}
    </div>
  );
};

export default Tooltip;
