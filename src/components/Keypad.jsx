import React from "react";
import Button from "./Button";

const Keypad = props => (
  <div className="keypad">
    <Button type={"special-operator"} handleOnClick={props.handleOnClickAC}>
      AC
    </Button>
    <Button
      type={"special-operator invert"}
      handleOnClick={props.handleOnClickOperator}
    >
      ±
    </Button>
    <Button
      type={"special-operator"}
      handleOnClick={props.handleOnClickOperator}
    >
      %
    </Button>
    <Button type={"operator"} handleOnClick={props.handleOnClickOperator}>
      +
    </Button>

    <Button handleOnClick={props.handleOnClickNumber}>1</Button>
    <Button handleOnClick={props.handleOnClickNumber}>2</Button>
    <Button handleOnClick={props.handleOnClickNumber}>3</Button>
    <Button type={"operator"} handleOnClick={props.handleOnClickOperator}>
      -
    </Button>

    <Button handleOnClick={props.handleOnClickNumber}>4</Button>
    <Button handleOnClick={props.handleOnClickNumber}>5</Button>
    <Button handleOnClick={props.handleOnClickNumber}>6</Button>
    <Button type={"operator"} handleOnClick={props.handleOnClickOperator}>
      ×
    </Button>

    <Button handleOnClick={props.handleOnClickNumber}>7</Button>
    <Button handleOnClick={props.handleOnClickNumber}>8</Button>
    <Button handleOnClick={props.handleOnClickNumber}>9</Button>
    <Button type={"operator"} handleOnClick={props.handleOnClickOperator}>
      ÷
    </Button>

    <Button handleOnClick={props.handleOnClickNumber}>0</Button>
    <Button handleOnClick={props.handleOnClickNumber}>.</Button>
    <Button type={"equal"} handleOnClick={props.handleOnClickResult}>
      =
    </Button>
  </div>
);

export default Keypad;
