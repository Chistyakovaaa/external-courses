const Calculator = () => {
  let currentResult = 0;

  function add(n) {
    let num = Number(n);
    if (isNaN(num)) {
      num = 0;
    }
    currentResult += num;
    return add;
  }

  function subtract(n) {
    let num = Number(n);
    if (isNaN(num)) {
      num = 0;
    }
    currentResult -= num;

    return subtract;
  }

  function divide(n) {
    let num = Number(n);
    if (isNaN(num) || currentResult === 0) {
      num = 1;
    }
    currentResult /= num;

    return divide;
  }

  function multiply(n) {
    let num = Number(n);
    if (isNaN(num) || currentResult === 0) {
      num = 1;
    }
    currentResult *= num;

    return multiply;
  }

  function getResult() {
    return currentResult;
  }

  const reset = () => {
    currentResult = 0;
    return currentResult;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
};
const сalculator = Calculator();
module.exports = сalculator;
