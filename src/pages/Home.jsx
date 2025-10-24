import AboutHome from "../components/home/AboutHome";
import HeroHome from "../components/home/HeroHome";

const Home = () => {
  return (
    <>
      {/* Seção principal com hero visual */}
      <HeroHome />
      {/* Seção de explicação */}
      <AboutHome />
    </>
  );
};

export default Home;
