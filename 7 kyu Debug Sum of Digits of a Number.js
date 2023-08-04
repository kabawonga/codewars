const getSumOfDigits = (integer) => {
  let sum = 0;
  let digits = [...("" + integer)].map(Number);
  for (i of digits) {
    sum += i;
  }
  return sum;
};
