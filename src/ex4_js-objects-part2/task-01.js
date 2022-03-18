function findProperty(prop, obj) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj.__proto__) {
    if (key === prop) {
      return obj[key];
    }
  }
  return undefined;
}
module.exports = findProperty;
