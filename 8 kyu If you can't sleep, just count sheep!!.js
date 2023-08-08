var countSheep = function (num) {
  let result = "";
  for (i = 1; num >= i; i++) {
    result += `${i} sheep...`;
  }
  return result;
};
