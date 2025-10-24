import React, { useState } from "react";
import FormImc from "../forms/FormImc";
import ImcResultado from "./ImcResultado";
import LoaderMini from "./LoaderMini";
import classificacoes from "../../datasets/classificacoes";
import dicas from "../../datasets/dicas";
import { ImcService } from "../../services/ImcService";

const ImcCard = () => {
  const [dados, setDados] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      const altura = values.altura.replace(",", ".");
      const peso = values.peso.replace(",", ".");
      const dados = await ImcService.calcular(altura, peso);

      setTimeout(() => {
        setDados(dados);
        setExpanded(true);
        setLoading(false);
        resetForm();
      }, 700);
    } catch (e) {
      console.error("Erro ao enviar dados: " + e);
      setLoading(false);
    }
  };

  return (
    <div
      className={`imc-card-container ${expanded ? "expanded" : ""}`}
      style={{ transition: "all 0.4s ease-in-out", overflow: "hidden" }}
    >
      <div className="imc-card refined">
        <h1 className="mb-3">🩺 Calculadora de IMC</h1>
        <p className="text-muted mb-4">
          Informe sua altura e peso para descobrir seu índice corporal ideal.
        </p>

        <div className="form-container">
          <FormImc onSubmit={handleFormSubmit} loading={loading} />
          {loading && <LoaderMini />}
        </div>

        {dados && (
          <ImcResultado
            dados={dados}
            classificacoes={classificacoes}
            dicas={dicas}
            onReset={() => {
              setExpanded(false);
              setDados(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ImcCard;
