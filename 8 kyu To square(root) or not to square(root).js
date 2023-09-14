const squareOrSquareRoot = (array) =>
  array.map((el) => (fnInt(el) ? Math.sqrt(el) : el ** 2));
const fnInt = (el) => Number.isInteger(Math.sqrt(el));
