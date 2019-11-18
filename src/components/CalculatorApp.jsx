import React, { Component } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import "../App.css";

const defaultState = {
  currentNumber: "",
  previousNumber: "",
  operator: "",
  operations: "",
  result: ""
};

export default class CalculatorApp extends Component {
  state = defaultState;

  handleOnClickNumber = numberValue => {
    const addValueToState = () => {
      this.setState(prevState => ({
        operations: prevState.operations + numberValue,
        currentNumber: prevState.currentNumber + numberValue
      }));
    };
    if (numberValue === "." && !this.state.currentNumber.includes(".")) {
      addValueToState();
    }

    if (numberValue === "0" && !this.state.currentNumber.startsWith("0")) {
      addValueToState();
    }

    if (!isNaN(numberValue) && numberValue !== "0") {
      addValueToState();
    }
  };

  handleOnClickOperator = operator => {
    const addOperatorToState = operatorName => {
      this.setState(prevState => ({
        operator: operatorName,
        operations: prevState.operations + operator,
        previousNumber: this.state.result,
        currentNumber: ""
      }));
    };
    switch (operator) {
      case "+": {
        return addOperatorToState("plus");
      }
      case "-": {
        return addOperatorToState("subtract");
      }
      case "×": {
        return addOperatorToState("multiply");
      }
      case "÷": {
        return addOperatorToState("divide");
      }
      case "%": {
        return this.setState(prevState => ({
          operator: "percentage",
          operations: prevState.operations + operator,
          previousNumber: this.state.result,
          currentNumber: ""
        }));
      }
      case "+-": {
        const isNegative = parseFloat(this.state.currentNumber) < 0;
        return this.setState(prevState => ({
          operator: "invert",
          operations: !isNegative
            ? "-" + prevState.operations
            : prevState.operations,
          currentNumber: isNegative
            ? parseFloat(this.state.currentNumber).toString()
            : (-parseFloat(this.state.currentNumber)).toString(),
          previousNumber: this.state.result.toString()
        }));
      }
      default:
        return this.setState({ operator: "" });
    }
  };

  handleOnClickResult = () => {
    if (
      this.state.previousNumber &&
      this.state.currentNumber &&
      this.state.operator
    ) {
      this.evaluateResult(this.state);
    }
  };

  handleOnClickAC = () => {
    this.setState(defaultState);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.operations.length !== this.state.operations.length &&
      this.state.currentNumber
    ) {
      this.evaluateResult(this.state);
    }
  }

  evaluateResult = ({ operator, previousNumber, currentNumber }) => {
    switch (operator) {
      case "plus": {
        return this.setState(preState => ({
          result: (
            parseFloat(previousNumber) + parseFloat(preState.currentNumber)
          ).toLocaleString()
        }));
      }
      case "subtract": {
        return this.setState(preState => ({
          result: (
            parseFloat(previousNumber) - parseFloat(preState.currentNumber)
          ).toLocaleString()
        }));
      }
      case "multiply": {
        return this.setState(preState => ({
          result: (
            parseFloat(previousNumber) * parseFloat(preState.currentNumber)
          ).toLocaleString()
        }));
      }
      case "divide": {
        return this.setState(preState => ({
          result: (
            parseFloat(previousNumber) / parseFloat(preState.currentNumber)
          ).toLocaleString()
        }));
      }
      // case "percentage": {
      //   return this.setState(preState => ({
      //     result: (
      //       parseFloat(this.state.result.replace(",", ".")) * 100
      //     ).toString()
      //   }));
      // }
      // case "invert": {
      //   return this.setState(preState => ({
      //     currentNumber
      //   }));
      // }
      default:
        return this.setState({
          result: parseFloat(currentNumber).toLocaleString()
        });
    }
  };

  render() {
    return (
      <div className="App">
        <Display {...this.state} />
        <Keypad
          handleOnClickNumber={this.handleOnClickNumber}
          handleOnClickOperator={this.handleOnClickOperator}
          handleOnClickResult={this.handleOnClickResult}
          handleOnClickAC={this.handleOnClickAC}
        />
      </div>
    );
  }
}
