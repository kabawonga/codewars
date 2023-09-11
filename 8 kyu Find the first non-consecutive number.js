const firstNonConsecutive = (arr) => {
  const result = arr.find((number, index) => number !== index + arr[0]);
  if (Number.isInteger(result)) {
    return result;
  } else {
    return null;
  }
};
