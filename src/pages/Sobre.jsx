import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutIntro from "../components/about/AboutIntro";
import AboutSkills from "../components/about/AboutSkills";
import AboutProjects from "../components/about/AboutProjects";
import AboutContact from "../components/about/AboutContact";

const Sobre = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="sobre-background"></div>

      <AboutIntro />
      <AboutSkills />
      <AboutProjects />
      <AboutContact />
    </>
  );
};

export default Sobre;
