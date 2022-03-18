const getNewStr = (str, substr, index) => {
  const newStr = str.split(' ');
  newStr.splice(index + 1, 0, substr);
  return newStr.join(' ');
};
module.exports = getNewStr;
