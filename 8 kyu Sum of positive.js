function positiveSum(arr) {
  let count = 0;
  arr.map((i) => {
    if (i > 0) {
      count += i;
    }
  });

  return count;
}
