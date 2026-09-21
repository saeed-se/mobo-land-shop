import { Link } from "react-router";
const FooterMiddleSec = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between max-xs:flex-col max-xs:gap-6 gap-4 md:gap-0 md:*:w-full py-8">
      <div className="[&>div]:mt-6 [&>div]:text-[15px] max-xs:[&>div]:text-sm">
        <strong className="inline-block">ارتباط با ما</strong>
        <div className="**:[&>span]:pr-2 space-y-2.5">
          <p>
            تلفن : <span>65789481-041</span>
          </p>
          <p>
            ایمیل : <span>info@moboland.com</span>
          </p>
        </div>
      </div>
      <div className="[&>div]:mt-6 [&>div]:text-[15px]">
        <strong className="inline-block">شبکه های اجتماعی</strong>
        <div className="flex gap-4 max-xs:**:[&>img]:size-6 **:[&>img]:transition-all **:[&>img]:duration-300 **:[&>img]:ease-in-out **:[&>img]:hover:brightness-100 **:[&>img]:hover:invert-0">
          <Link>
            <img
              src="/social-media/instagram.webp"
              alt="instagram"
              className="brightness-10 invert"
            />
          </Link>
          <Link>
            <img
              src="/social-media/aparat.webp"
              alt="aparat"
              className="brightness-10 invert"
            />
          </Link>
          <Link>
            <img
              src="/social-media/telegram.webp"
              alt="telegram"
              className="brightness-10 invert"
            />
          </Link>
          <Link>
            <img
              src="/social-media/youtube.webp"
              alt="youtube"
              className="brightness-10 invert"
            />
          </Link>
        </div>
      </div>
      <div className="[&>div]:mt-6 [&>div]:text-[15px]">
        <strong className="inline-block">مجوز های ما</strong>
        <div className="grid grid-cols-4 md:grid-cols-3 w-fit lg:grid-cols-4 gap-4 *:rounded-lg *:size-16 md:*:size-19 *:flex *:justify-center *:items-center **:[&>img]:size-12 md:**:[&>img]:size-15 *:bg-white">
          <div>
            <img src="/permit/logo1.png" alt="logo1" />
          </div>
          <div>
            <img src="/permit/logo2.svg" alt="logo2" />
          </div>
          <div>
            <img src="/permit/logo3.webp" alt="logo3" />
          </div>
          <div>
            <img src="/permit/logo4.webp" alt="logo4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddleSec;
