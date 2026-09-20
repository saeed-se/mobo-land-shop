import { useContext, useState, useRef } from "react";

import { Outlet, ScrollRestoration, useLocation } from "react-router";

import Container from "@/components/common/Container";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Cover from "@/components/Cover/Cover";
import MobileBottomNav from "@/components/Header/elements/MobileBottomNav";
import MobileSearch from "@/components/Header/elements/MobileSearch";
import { ProductsContext } from "@/contexts/ProductsProvider";

const AppLayout = () => {
  const [isCoverShown, setIsCoverShown] = useState(false);
  const { loading } = useContext(ProductsContext);
  const { pathname } = useLocation();
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const searchBar = useRef(null);

  return (
    <>
      <ScrollRestoration />

      <Header
        setIsCoverShown={setIsCoverShown}
        setIsOpenSearch={setIsOpenSearch}
      />

      <MobileSearch
        isOpenSearch={isOpenSearch}
        setIsOpenSearch={setIsOpenSearch}
        ref={searchBar}
      />

      <main className="pt-20 md:pt-34">
        <div
          key={pathname}
          className={`page-enter ${loading ? "flex justify-center items-center min-h-dvh" : ""}`}
        >
          {loading ? <h2>سایت در حال بارگیری محصولات</h2> : <Outlet />}
        </div>
      </main>

      <Footer />

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-21 shadow-lg bg-white z-47 md:hidden">
        <Container>
          <MobileBottomNav />
        </Container>
      </nav>

      {isCoverShown && <Cover />}
    </>
  );
};

export default AppLayout;
