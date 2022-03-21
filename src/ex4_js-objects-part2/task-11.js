const countSymbol = (str) => {
  const arr = str.split('');
  const result = {};
  for (let i = 0; i < arr.length; i += 1) {
    const a = arr[i];
    if (result[a] !== undefined) {
      // eslint-disable-next-line no-plusplus
      ++result[a];
    } else {
      result[a] = 1;
    }
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      console.log(`${key}: ${result[key]}`);
    }
  }
};
module.exports = countSymbol;
