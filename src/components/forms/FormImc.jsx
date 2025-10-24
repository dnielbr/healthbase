import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonSecondary from "../buttons/ButtonSecondary";

// Validação de entrada
const validationSchema = Yup.object({
  altura: Yup.string()
    .required("Informe a altura.")
    .test("formato-altura", "Altura inválida.", (value) => {
      if (!value) return false;
      const num = parseFloat(value.replace(",", "."));
      return num >= 0.5 && num <= 3.0; // Alturas humanas normais
    }),
  peso: Yup.string()
    .required("Informe o peso.")
    .test("formato-peso", "Peso inválido.", (value) => {
      if (!value) return false;
      const num = parseFloat(value.replace(",", "."));
      return num >= 1.0 && num <= 500.0; // Faixa plausível de peso
    }),
});

const FormImc = ({ onSubmit, loading }) => {
  const formik = useFormik({
    initialValues: { altura: "", peso: "" },
    validationSchema,
    onSubmit,
  });

  //Formatação da altura
  const handleAlturaChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 3) value = value.slice(0, 3);

    if (value.length === 3) {
      value = `${value[0]},${value.slice(1)}`;
    } else if (value.length === 2) {
      value = `${value[0]},${value[1]}`;
    }

    formik.setFieldValue("altura", value);
  };

  // --- Formatação do peso (apenas adiciona vírgula quando há 3+ dígitos) ---
  const handlePesoChange = (e) => {
    // valor bruto
    let raw = e.target.value ?? "";

    // mantém só dígitos
    let digits = raw.replace(/\D/g, "");

    // vazio → limpa o campo e sai
    if (!digits) {
      formik.setFieldValue("peso", "", true);
      formik.setFieldTouched("peso", true, false);
      return;
    }

    // limita a 5 dígitos (até 999,99)
    if (digits.length > 5) digits = digits.slice(0, 5);

    // remove zeros à esquerda, mas preserva "0" se o usuário digitar só zeros
    if (/^0+$/.test(digits)) {
      digits = "0";
    } else {
      digits = digits.replace(/^0+(?=\d)/, "");
    }

    // formatação
    let formatted = "";
    if (digits.length <= 2) {
      // até 2 dígitos → sem vírgula (ex.: "7", "70")
      formatted = digits;
    } else {
      // 3+ dígitos → vírgula 2 casas antes do fim (ex.: "700" → "70,00")
      const intPart = digits.slice(0, -2);
      const decPart = digits.slice(-2);
      formatted = `${intPart},${decPart}`;
    }

    formik.setFieldValue("peso", formatted, true);
    formik.setFieldTouched("peso", true, false);
  };

  const handleClear = () => {
    formik.resetForm();
  };

  return (
    <form onSubmit={formik.handleSubmit} className="form-imc">
      {/* Campo Altura */}
      <div className="form-group">
        <label htmlFor="altura">Altura</label>
        <input
          type="text"
          id="altura"
          name="altura"
          value={formik.values.altura}
          onChange={handleAlturaChange}
          placeholder="Ex: 1,70"
          inputMode="numeric"
          className={
            formik.errors.altura && formik.touched.altura ? "input-error" : ""
          }
        />
        {formik.errors.altura && formik.touched.altura && (
          <span className="error-text">{formik.errors.altura}</span>
        )}
      </div>

      {/* Campo Peso */}
      <div className="form-group">
        <label htmlFor="peso">Peso</label>
        <input
          type="text"
          id="peso"
          name="peso"
          value={formik.values.peso}
          onChange={handlePesoChange}
          placeholder="Ex: 70,00"
          inputMode="numeric"
          className={
            formik.errors.peso && formik.touched.peso ? "input-error" : ""
          }
        />
        {formik.errors.peso && formik.touched.peso && (
          <span className="error-text">{formik.errors.peso}</span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <ButtonPrimary type="submit" text="Calcular" loading={loading} />
        <ButtonSecondary
          text="Limpar"
          onClick={handleClear}
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default FormImc;
