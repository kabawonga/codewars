function fakeBin(x) {
  let xSplit = x.split("");
  let res = [];
  for (let i = 0; i < xSplit.length; i++) {
    if (Number(xSplit[i]) < 5) {
      xSplit[i] = 0;
    } else {
      xSplit[i] = 1;
    }
  }
  return xSplit.join("");
}
