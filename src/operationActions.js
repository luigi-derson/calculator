export default ({ operator, previousNumber, currentNumber }) => {
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
