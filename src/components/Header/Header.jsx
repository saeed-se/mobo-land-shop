import Container from "@/components/common/Container";
import Navbar from "@/components/Header/elements/Navbar";
import TopBar from "@/components/Header/elements/TopBar";
import MobileNavbar from "@/components/Header/elements/MobileNavbar";
import useNavbarVisibility from "@/Hooks/useNavbarVisibility";

const Header = ({ setIsCoverShown, setIsOpenSearch }) => {
  const showNavbar = useNavbarVisibility();

  return (
    <>
      {/* Desktop Menu */}
      <header
        className={`hidden md:block w-full ${showNavbar ? "max-h-35" : "max-h-25"} py-4 md:pb-0 md:pt-5 bg-white fixed top-0 left-0 right-0 shadow-lg z-40`}
      >
        <Container>
          <TopBar />

          <Navbar showNavbar={showNavbar} />
        </Container>
      </header>

      {/* Mobile Menu */}
      <nav className="fixed top-0 left-0 right-0 py-4 shadow-lg bg-white z-45 md:hidden">
        <Container>
          <MobileNavbar
            setIsCoverShown={setIsCoverShown}
            setIsOpenSearch={setIsOpenSearch}
          />
        </Container>
      </nav>
    </>
  );
};

export default Header;
