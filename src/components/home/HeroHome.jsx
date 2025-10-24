import React from "react";
import { Activity } from "lucide-react";

const HeroSobre = () => {
  return (
    <section className="hero-banner">
      <div className="overlay"></div>
      <div className="hero-content">
        <Activity size={60} color="#00b4a0" />
        <h1>Health Base</h1>
        <p>
          Cuidar da sua saúde começa entendendo seu corpo. Calcule seu IMC e
          descubra como está o equilíbrio entre peso e altura.
        </p>
        <a href="/imc" className="btn btn-primary mt-3">
          Calcular meu IMC
        </a>
      </div>
    </section>
  );
};

export default HeroSobre;
