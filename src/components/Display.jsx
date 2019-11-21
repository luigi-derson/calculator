import React from "react";

const Display = ({ operations, result }) => (
  <div className="display">
    <div className="operations">
      <div>{operations}</div>
    </div>
    <div className="result">
      <div>{result}</div>
    </div>
  </div>
);

export default Display;
