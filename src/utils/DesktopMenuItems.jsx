import { Link } from "react-router";

const DesktopMenuItems = ({ item, idx }) => {
  const ITEM_HEIGHT = 48;
  const topOffset = -(idx * ITEM_HEIGHT);
  const subItems = item.children[0];
  return (
    <li className="relative text-black hover:text-success overflow-hidden hover:overflow-visible">
      <Link>{item.title}</Link>
      <div
        className="absolute right-full p-3 w-50 h-[144.8px] border-l border-b border-l-gray/10 border-b-gray/10 text-black! bg-white"
        style={{ top: `${topOffset}px` }}
      >
        <ul className="*:pr-2 space-y-2">
          <li className="border-r-2 border-r-primary">{subItems.title}</li>
          {subItems.children?.map((child) => (
            <li
              className="*:hover:text-success *:transition-colors *:duration-200"
              key={child.id}
            >
              <Link>{child.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DesktopMenuItems;
