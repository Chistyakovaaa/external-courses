const findSubstr = (str, substr) => {
  if (str.includes(substr)) {
    return true;
  }
  return false;
};
module.exports = findSubstr;
