import { Link } from "react-router";

const BlogBox = ({ title, image }) => {
  return (
    <div className="max-w-full h-55 mx-3 xs:mx-1 sm:mx-2 bg-secondary-text rounded-2xl overflow-hidden">
      <div className="h-40">
        <Link>
          <img className="h-full w-full" src={image} alt={title} />
        </Link>
      </div>
      <div className="px-2.5 py-3">
        <h2 className="text-[13px] xs:text-sm max-w-50 text-bg">
          <Link>{title}</Link>
        </h2>
      </div>
    </div>
  );
};

export default BlogBox;
