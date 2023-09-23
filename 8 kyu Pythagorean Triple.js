const isPythagoreanTriple = (integers) => {
  const [n1, n2, n3] = integers.sort((a, b) => a - b);
  return n1 ** 2 + n2 ** 2 === n3 ** 2;
};
