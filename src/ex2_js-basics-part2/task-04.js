const identicalElement = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] !== array[i + 1]) {
      return false;
    }
  }
  return true;
};

module.exports = identicalElement;
