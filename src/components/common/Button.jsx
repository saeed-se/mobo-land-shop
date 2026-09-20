import { Link } from "react-router";

const Button = ({ className = "", text, icon, count = 0, to, onClick }) => {
  const afterClasses =
    "relative after:absolute after:content-[attr(data-count)] after:-top-3 after:-right-2 after:pt-1 after:flex after:items-center after:justify-center after:size-4 after:rounded-full after:bg-gray/70 after:text-white after:text-[10px]";

  const baseClasses = `flex items-center justify-center ${className} gap-3 max-w-fit max-xs:bg-bg md:border md:border-2 md:border-secondary-text text-secondary-text px-3 py-3 2md:px-3 2md:py-3 rounded-lg text-xs md:text-sm font-dana-DemiBold md:hover:bg-primary-text/15 md:transition-all cursor-pointer`;

  const content = (
    <>
      <div data-count={count} className={count ? afterClasses : ""}>
        {icon}
      </div>

      {text}
    </>
  );

  if (to) {
    return (
      <Link className={baseClasses} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
