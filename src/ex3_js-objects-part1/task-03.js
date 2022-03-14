const toCheckObj = (str, obj) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (obj.hasOwnProperty(str)) {
      if (key === str) {
        return true;
      }
    }
  }
  return false;
};

module.exports = toCheckObj;
