function numberToPower(number, power) {
  let res = 1;
  for (let i = power; i > 0; i--) {
    res *= number;
  }
  return res;
}
