import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutProjects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/dnielbr/repos?sort=updated&per_page=8")
      .then((res) => setRepos(res.data))
      .catch((err) => console.error("Erro ao buscar repositórios:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="sobre-projetos" data-aos="fade-up">
      <h2>🚀 Projetos Recentes</h2>
      {loading ? (
        <p>Carregando projetos...</p>
      ) : (
        <div className="projetos-lista">
          {repos.map((repo, index) => (
            <div
              key={repo.id}
              className="projeto-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3>{repo.name}</h3>
              <p>{repo.description || "Sem descrição disponível."}</p>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                Ver no GitHub →
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AboutProjects;
