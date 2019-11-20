import React from "react";
import Button from "./Button";

const Keypad = props => (
  <div className="keypad">
    <Button
      value={"AC"}
      type={"special-operator"}
      handleOnClick={props.handleOnClickAC}
    />
    <Button
      value={"±"}
      type={"special-operator invert"}
      handleOnClick={props.handleOnClickOperator}
    />
    <Button
      value={"%"}
      type={"special-operator"}
      handleOnClick={props.handleOnClickOperator}
    />

    <Button
      value={"+"}
      type={"operator"}
      handleOnClick={props.handleOnClickOperator}
    />

    <Button value={"1"} handleOnClick={props.handleOnClickNumber} />
    <Button value={"2"} handleOnClick={props.handleOnClickNumber} />
    <Button value={"3"} handleOnClick={props.handleOnClickNumber} />
    <Button
      value={"-"}
      type={"operator"}
      handleOnClick={props.handleOnClickOperator}
    />

    <Button value={"4"} handleOnClick={props.handleOnClickNumber} />
    <Button value={"5"} handleOnClick={props.handleOnClickNumber} />
    <Button value={"6"} handleOnClick={props.handleOnClickNumber} />
    <Button
      value={"×"}
      type={"operator"}
      handleOnClick={props.handleOnClickOperator}
    />

    <Button value={"7"} handleOnClick={props.handleOnClickNumber} />
    <Button value={"8"} handleOnClick={props.handleOnClickNumber} />
    <Button value={"9"} handleOnClick={props.handleOnClickNumber} />
    <Button
      value={"÷"}
      type={"operator"}
      handleOnClick={props.handleOnClickOperator}
    />

    <Button value={"0"} handleOnClick={props.handleOnClickNumber} />
    <Button value={"."} handleOnClick={props.handleOnClickNumber} />
    <Button
      value={"="}
      type={"equal"}
      handleOnClick={props.handleOnClickResult}
    />
  </div>
);

export default Keypad;
