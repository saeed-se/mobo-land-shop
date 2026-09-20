import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoHourglassOutline } from "react-icons/io5";
import { Link } from "react-router";

const SearchResult = ({ query, products, isLoading, onClose }) => {
  return (
    <div
      dir="rtl"
      className="md:absolute md:top-full md:right-0 md:left-0 h-fit py-4 px-2 md:px-5 bg-white text-sm mt-6 md:mt-2 rounded-2xl md:z-60"
    >
      <div className="flex items-center gap-2 pb-3 border-b md:border-b-2 border-b-black/20 md:border-b-black text-active-slideBtn">
        <AiOutlineAppstoreAdd size={20} />
        <p>جستجو برای ...</p>{" "}
        <span className="text-xs text-primary font-dana-Medium">{query}</span>
      </div>

      {query ? (
        <div className="min-h-0 md:max-h-66 md:px-2 py-4 md:overflow-y-auto md:[direction:ltr]">
          <div>
            <p className="text-sm md:[direction:rtl]">
              تمامی محصولات
              <span className="inline-block pr-2 font-dana-Medium">
                {query}
              </span>
            </p>
          </div>
          <div className="space-y-3 md:space-y-1.5 mt-4">
            {products.length === 0 && !isLoading ? (
              <div className="text-center">
                <span> ): متاسفانه محصولی یافت نشد</span>
              </div>
            ) : isLoading ? (
              <div className="flex flex-row-reverse justify-center gap-2 text-center">
                <p>در حال جستجو محصول</p>
                <IoHourglassOutline />
              </div>
            ) : products.length > 0 ? (
              products.map((product) => (
                <div
                  dir="rtl"
                  className="bg-input rounded-lg"
                  onClick={onClose}
                  key={product.id}
                >
                  <Link to={`product/${product.slug}`}>
                    <article className="w-full p-2 flex [&>div]:shrink-0 items-center gap-2">
                      <div className="w-14 h-14 *:w-full">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <h2 className="text-xs lg:text-[13px] xl:text-sm">
                        {product.desc}
                      </h2>
                    </article>
                  </Link>
                </div>
              ))
            ) : null}
          </div>
        </div>
      ) : (
        <div>
          <div className="mt-2">
            <p>جستجو‌های محبوب</p>
            <ul className="flex gap-2 lg:gap-3 text-[9px] lg:text-[10px] font-dana-Medium mt-2 *:px-2 lg:*:px-4 *:py-1.25 *:border *:border-active-slideBtn/50 *:rounded-2xl">
              <Link>
                <li>گوشی</li>
              </Link>
              <Link>
                <li>آیفون</li>
              </Link>
              <Link>
                <li>لپ تاپ</li>
              </Link>
              <Link>
                <li>گوشی سامسونگ</li>
              </Link>
            </ul>
          </div>
          <div className="w-[99%] h-50 mx-auto *:h-full *:w-full *:rounded-xl md:*:rounded-none mt-4">
            <img src="/searchbar-adv.png" alt="adv" />
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchResult;
