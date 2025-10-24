import React from "react";

const ButtonSecondary = ({ text, onClick, disabled }) => {
  return (
    <button
      type="button"
      className="btn-secondary"
      onClick={onClick}
      disabled={disabled}
      style={{ width: "45%" }}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
