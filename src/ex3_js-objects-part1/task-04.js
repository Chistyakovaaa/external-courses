const newObject = (str, obj) => {
  const copyObject = obj;
  if (obj.hasOwnProperty(str)) {
    return copyObject;
  }
  copyObject[str] = 'new';
  return copyObject;
};
module.exports = newObject;
