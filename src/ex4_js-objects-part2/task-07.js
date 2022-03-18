const checkLength = (str, maxLength) => {
  let string = str;
  if (string.length <= maxLength) {
    return string;
  }
  string = string.slice(0, maxLength - 1);
  string += '…';

  return string;
};
module.exports = checkLength;
