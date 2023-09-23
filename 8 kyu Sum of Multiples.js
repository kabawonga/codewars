function sumMul(n, m) {
  let sum = 0;
  if (n >= m) {
    return "INVALID";
  }
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}
