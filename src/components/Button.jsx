import React from "react";

const Button = ({ type, value, handleOnClick }) => (
  <button
    onClick={() => handleOnClick(value)}
    className={`button ${type || ""}`}
  >
    {value}
  </button>
);

export default Button;
