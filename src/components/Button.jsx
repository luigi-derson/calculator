import React from "react";

const Button = props => (
  <button
    onClick={() => props.handleOnClick(props.children)}
    className={`button${props.type ? " " + props.type : ""}`}
  >
    {props.children}
  </button>
);

export default Button;
