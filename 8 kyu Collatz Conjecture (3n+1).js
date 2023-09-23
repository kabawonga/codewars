const hotpo = (n) => {
  let res = 0;
  while (n > 1) {
    res++;
    if (n % 2) {
      n = 3 * n + 1;
    } else {
      n /= 2;
    }
  }
  return res;
};
