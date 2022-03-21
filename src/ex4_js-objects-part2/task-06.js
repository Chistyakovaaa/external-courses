const functionUppercase = (str) => {
  const strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i += 1) {
    strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
  }
  return strArray.join(' ');
};
module.exports = functionUppercase;
