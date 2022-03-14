const newObject = (str, obj) => {
  const copyObject = obj;
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (obj.hasOwnProperty(str)) {
      if (key === str) {
        return copyObject;
      }
    }
  }
  copyObject[str] = 'new';
  return copyObject;
};
module.exports = newObject;
