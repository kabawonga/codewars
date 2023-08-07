function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let count = 0;
  let sum = 0;
  for (let i of input) {
    if (i > 0) {
      count++;
    } else {
      sum += i;
    }
  }
  return [count, sum];
}
