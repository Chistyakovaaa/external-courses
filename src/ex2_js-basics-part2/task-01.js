const functionTypeOf = (a) => {
  if (typeof a === 'string') {
    return 'string';
  } if (typeof a === 'number') {
    return 'number';
  } if (a === 'NaN') {
    return undefined;
  }
  return undefined;
};

module.exports = functionTypeOf;
