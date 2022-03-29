function sliceMethod(array, begin, end) {
  const sliceArray = [];
  if (arguments.length === 3) {
    // eslint-disable-next-line no-restricted-syntax
    for (const elem of array) {
      const i = array.indexOf(elem);

      if (i >= begin && i < end) {
        sliceArray.push(elem);
      }
    }

    if (end < 0) {
      array.reverse();

      // eslint-disable-next-line no-restricted-syntax
      for (const elem of array) {
        const i = array.indexOf(elem);
        if (i < Math.abs(begin) && i >= Math.abs(end)) {
          sliceArray.push(elem);
        }
      }
      sliceArray.reverse();
    }
    return sliceArray;
  }

  if (arguments.length === 2) {
    // eslint-disable-next-line no-restricted-syntax
    for (const elem of array) {
      if (array.indexOf(elem) >= begin) {
        sliceArray.push(elem);
      }
    }
    return sliceArray;
  }

  if (arguments.length === 1) {
    // eslint-disable-next-line no-restricted-syntax
    for (const elem of array) {
      sliceArray.push(elem);
    }
    return sliceArray;
  }
  return undefined;
}
module.exports = sliceMethod;
