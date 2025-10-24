import ImcCard from "../components/imc/ImcCard";
import ImcCardExplicacao from "../components/imc/ImcCardExplicacao";

const Imc = () => {
  return (
    <section className="imc-section fade-in">
      {/* Card de cálculo (único) */}
      <ImcCard />
      {/* Explicação do IMC */}
      <ImcCardExplicacao />
    </section>
  );
};

export default Imc;
