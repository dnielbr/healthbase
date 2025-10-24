import React from "react";
import ImcGrafico from "./ImcGrafico";
import ImcDicas from "./ImcDicas";

const ImcResultado = ({ dados, classificacoes, dicas, onReset }) => {
  const categoria =
    classificacoes.find((c) => dados.imc >= c.min && dados.imc <= c.max) || {};

  return (
    <div className="imc-result mt-4 animate-fade">
      <h2>Resultado</h2>
      <p>
        <strong>IMC:</strong> {Number(dados.imc).toFixed(2)}
      </p>
      <p>
        <strong>Interpretação:</strong> {categoria?.faixa}
      </p>
      <p>
        <strong>Peso Ideal:</strong> {Number(dados.peso_ideal).toFixed(2)} kg
      </p>

      <ImcGrafico
        dados={dados}
        classificacoes={classificacoes}
        categoria={categoria}
      />

      <ImcDicas categoria={categoria.faixa} dicas={dicas} />

      <button className="btn-secondary mt-3" onClick={onReset}>
        Refazer cálculo
      </button>
    </div>
  );
};

export default ImcResultado;
