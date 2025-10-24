import React from "react";
import { FaJava, FaReact, FaDocker, FaPython } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiJavascript } from "react-icons/si";

const AboutSkills = () => {
  return (
    <section className="sobre-skills fade-in">
      <h2>🧠 Tecnologias e Stack</h2>

      <div className="skills-grid">
        <span>
          <FaJava color="#f89820" /> Java
        </span>
        <span>
          <SiSpringboot color="#6db33f" /> Spring Boot
        </span>
        <span>
          <SiPostgresql color="#336791" /> PostgreSQL
        </span>
        <span>
          <FaDocker color="#0db7ed" /> Docker
        </span>
        <span>
          <FaPython color="#ffd43b" /> Python
        </span>
        <span>
          <FaReact color="#61dafb" /> React
        </span>
        <span>
          <SiJavascript color="#f7df1e" /> JavaScript
        </span>
      </div>
    </section>
  );
};

export default AboutSkills;
