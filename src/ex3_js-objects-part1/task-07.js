const deepClone = (obj) => {
  let cloneObj = {};
  if (Array.isArray(obj)) {
    cloneObj = [];
    // eslint-disable-next-line no-restricted-syntax
  } for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof (obj[key]) === 'object') {
        cloneObj[key] = deepClone(obj[key]);
      } else {
        cloneObj[key] = obj[key];
      }
    }
  }
  return cloneObj;
};
module.exports = deepClone;
