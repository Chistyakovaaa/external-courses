const getProperty = (object, propertyPath) => {
  let newObject = object;
  // eslint-disable-next-line no-restricted-syntax
  for (const key of propertyPath.split('.')) {
    if (newObject[key] === undefined) {
      return undefined;
    }
    newObject = newObject[key];
  }
  return newObject;
};
module.exports = getProperty;
