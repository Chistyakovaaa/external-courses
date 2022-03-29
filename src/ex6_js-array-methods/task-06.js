function reduceMethod(array, callback, initialValue) {
  let previousValue = 0;
  if (initialValue) {
    previousValue = initialValue;
    array.forEach((currentItem) => {
      previousValue = callback(previousValue, currentItem, array.indexOf(currentItem), array);
    });
  }
  if (!initialValue) {
    array.forEach((currentItem) => {
      previousValue = callback(previousValue, currentItem, array.indexOf(currentItem), array);
    });
  }
  return previousValue;
}
module.exports = reduceMethod;
