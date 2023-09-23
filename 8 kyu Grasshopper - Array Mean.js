var findAverage = function (nums) {
  let sum = 0;
  nums.forEach((el) => (sum += el));
  return sum / nums.length;
};
