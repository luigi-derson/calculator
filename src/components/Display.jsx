import React from "react";

const Display = ({ operations, result }) => (
  <div className="display">
    <div className="operations">
      <span>{operations}</span>
    </div>
    <div className="result">
      <span>{result}</span>
    </div>
  </div>
);

export default Display;
