const functionNumber = (arr) => {
  let sumOdd = 0;
  let sumEven = 0;
  let sumNull = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof (arr[i]) === 'number') {
      if (arr[i] === 0) {
        sumNull += 1;
      } else if (arr[i] % 2 === 1) {
        sumOdd += 1;
      } else if (arr[i] % 2 === 0) {
        sumEven += 1;
      }
    }
  }

  const result = [sumEven, sumOdd, sumNull];
  return result;
};

module.exports = functionNumber;
