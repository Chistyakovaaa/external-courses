const lowerCamelCase = (str) => {
  const newStr = str.split(' ');
  for (let i = 0; i < newStr.length; i += 1) {
    if (i === 0) {
      newStr[i] = newStr[i].toLowerCase();
    } else {
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].toLowerCase().slice(1);
    }
  }
  return newStr.join('');
};
module.exports = lowerCamelCase;
