import React from "react";

const ButtonPrimary = ({ text, loading, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      className="btn-primary"
      onClick={onClick}
      disabled={loading}
      style={{ width: "45%", position: "relative" }}
    >
      {loading ? (
        <>
          <div className="spinner-mini"></div>
          Calculando...
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default ButtonPrimary;
