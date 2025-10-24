import React from "react";

const ImcDicas = ({ categoria, dicas }) => {
  if (!categoria || !dicas[categoria]) return null;

  return (
    <div className="tips-container mt-4">
      <h4>Dicas de Saúde</h4>
      <ul>
        {dicas[categoria].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImcDicas;
