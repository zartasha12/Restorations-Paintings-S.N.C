import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="w-full overflow-hidden min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
