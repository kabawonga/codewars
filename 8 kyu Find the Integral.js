function integrate(coefficient, exponent) {
  let res1 = exponent + 1;
  let res2 = coefficient / res1;
  return `${res2}x^${res1}`;
}
