import Header from "../components/structure/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/structure/Footer";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default PublicLayout;
