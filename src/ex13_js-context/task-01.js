/* eslint-disable func-names */
function Calculator() {
  this.currentResult = 0;

  this.add = function (n) {
    if (n) {
      this.currentResult += n;
    }
    return this;
  };

  this.subtract = function (n) {
    if (n) {
      this.currentResult -= n;
    }
    return this;
  };

  this.divide = function (n) {
    if (n) {
      this.currentResult /= n;
    }
    return this;
  };

  this.multiply = function (n) {
    if (n) {
      this.currentResult *= n;
    }

    return this;
  };

  this.getResult = function () {
    return this.currentResult;
  };

  this.reset = function () {
    this.currentResult = 0;
    return this;
  };

  this.setState = function (n) {
    if (n) {
      this.currentResult = n;
    }
    return this;
  };

  this.fetchData = function (callback) {
    const promise = new Promise((resolve) => {
      callback(500);
      resolve(500);
    });
    promise.then((res) => { this.currentResult = res; });
  };
}

const calculator = new Calculator();

module.exports = calculator;
