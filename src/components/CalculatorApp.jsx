import React, { Component } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

const defaultState = {
  currentNumber: "",
  previousNumber: "",
  operator: "",
  operations: "",
  result: 0
};

export default class CalculatorApp extends Component {
  state = defaultState;

  handleOnClickNumber = value => {
    const { currentNumber } = this.state;

    const addValueToState = () => {
      this.setState(prevState => ({
        operations: prevState.operations + value,
        currentNumber: prevState.currentNumber + value
      }));
    };
    if (value === "." && !currentNumber.includes(".")) {
      addValueToState();
    }

    if (
      value === "0" &&
      (!currentNumber.startsWith("0") || currentNumber.indexOf(".") === 1)
    ) {
      addValueToState();
    }

    if (!isNaN(value) && value !== "0") {
      addValueToState();
    }
  };

  handleOnClickOperator = operator => {
    const addOperatorToState = operatorName => {
      if (this.state.currentNumber) {
        this.setState(prevState => ({
          operator: operatorName,
          operations: prevState.operations + operator,
          previousNumber: this.state.result,
          currentNumber: ""
        }));
      }
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

      // I need to improve and make the cases below work
      // case "%": {
      // }
      // case "±": {
      // }
      default:
        return this.state;
    }
  };

  handleOnClickResult = () => {
    if (
      this.state.previousNumber &&
      this.state.currentNumber &&
      this.state.operator
    ) {
      this.setState({
        operations: "",
        currentNumber: "",
        previousNumber: "",
        operator: ""
      });
    }
  };

  handleOnClickAC = () => {
    this.setState(defaultState);
  };

  componentDidUpdate(_prevProps, prevState) {
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
          result: currentNumber || 0
        });
    }
  };

  render() {
    return (
      <div className="app-container">
        <div className="app">
          <Display
            operations={this.state.operations}
            result={this.state.result}
          />
          <Keypad
            handleOnClickNumber={this.handleOnClickNumber}
            handleOnClickOperator={this.handleOnClickOperator}
            handleOnClickResult={this.handleOnClickResult}
            handleOnClickAC={this.handleOnClickAC}
          />
        </div>
      </div>
    );
  }
}
