const simpleNumber = (n) => {
  if (n > 1000) {
    return 'Данные неверны';
  } if (n === 0) {
    return 'Не причисляется ни к простым, ни к составным числам';
  } if (n === 1) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return `Число ${n} - составное число`;
    }
  }
  return `Число ${n} - простое число`;
};

module.exports = simpleNumber;
