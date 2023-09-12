function divisibleBy(numbers, divisor) {
  let arr = [];
  numbers.forEach((el) => (el % divisor === 0 ? arr.push(el) : delete el));
  return arr;
}
