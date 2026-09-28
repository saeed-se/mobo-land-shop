import { Link } from "react-router";

const DesktopMenuItems = ({ item, idx }) => {
  const ITEM_HEIGHT = 48;
  const topOffset = -(idx * ITEM_HEIGHT);

  return (
    <li className="relative text-black hover:text-success overflow-hidden hover:overflow-visible">
      <Link className="inline-block w-full" to={item.path}>
        {item.title}
      </Link>

      <div
        className="absolute right-full h-[145.6px] p-3 border-l border-b border-l-gray/10 border-b-gray/10 text-black! bg-white"
        style={{ top: `${topOffset}px` }}
      >
        <ul className="flex gap-6">
          {item.children.map((subItem) => (
            <li key={subItem.id} className="min-w-42">
              <p className="block border-r-2 border-r-primary pr-2 whitespace-nowrap">
                {subItem.title}
              </p>

              <ul className="mt-2 space-y-2 pr-2 *:w-fit">
                {subItem.children?.map((child) => (
                  <li
                    key={child.id}
                    className="whitespace-nowrap hover:text-success transition-colors duration-200"
                  >
                    <Link to={child.path}>{child.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DesktopMenuItems;
