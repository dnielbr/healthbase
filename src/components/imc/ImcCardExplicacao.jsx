import { Info } from "lucide-react";

const ImcCardExplicacao = () => {
  return (
    <div className="imc-info">
      <h3 className="d-flex align-items-center gap-2">
        <Info size={22} color="#00b4a0" /> O que é o IMC?
      </h3>
      <p>
        O <strong>IMC (Índice de Massa Corporal)</strong> é uma medida que
        avalia se o peso está adequado em relação à altura. Ele é obtido
        dividindo o peso (kg) pela altura ao quadrado (m²).
      </p>

      <h3>Classificação:</h3>
      <ul>
        <li>
          Abaixo de 18,5 – <strong>Baixo peso</strong>
        </li>
        <li>
          18,5 a 24,9 – <strong>Peso normal</strong>
        </li>
        <li>
          25 a 29,9 – <strong>Sobrepeso</strong>
        </li>
        <li>
          30 a 34,9 – <strong>Obesidade grau I</strong>
        </li>
        <li>
          35 a 39,9 – <strong>Obesidade grau II</strong>
        </li>
        <li>
          ≥ 40 – <strong>Obesidade grau III</strong>
        </li>
      </ul>

      <p className="mt-3 text-muted">
        O IMC é um indicativo, não um diagnóstico. Consulte um profissional de
        saúde para uma análise completa e personalizada.
      </p>
    </div>
  );
};

export default ImcCardExplicacao;
