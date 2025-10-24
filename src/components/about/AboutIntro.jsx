import React from "react";

const AboutIntro = () => {
  return (
    <section className="sobre-intro" data-aos="fade-up">
      <img
        src="/perfil-github.jpeg"
        alt="Foto de perfil"
        className="perfil-img"
        loading="lazy"
      />

      <h1>
        Olá, eu sou <span>Daniel</span> 👋
      </h1>

      <p>
        Sou estudante de <strong>Sistemas para Internet</strong> no{" "}
        <strong>IFPB</strong>, apaixonado por desenvolvimento de software e
        sempre em busca de aprender novas tecnologias. Atualmente estudo e
        pratico <strong>Java</strong>, <strong>Spring Framework</strong>,{" "}
        <strong>PostgreSQL</strong>, <strong>Docker</strong>,{" "}
        <strong>Python</strong>, <strong>JavaScript</strong> e{" "}
        <strong>React</strong>, desenvolvendo projetos próprios para consolidar
        meus conhecimentos. Tenho interesse especial em desenvolvimento{" "}
        <strong>back-end</strong> e integração entre sistemas, aplicando boas
        práticas de organização de código, padrões de projeto e versionamento
        com <strong>Git</strong>. Aberto a{" "}
        <strong>oportunidades de estágio</strong>, desafios práticos e
        colaboração em <strong>projetos open source</strong>.
      </p>
    </section>
  );
};

export default AboutIntro;
