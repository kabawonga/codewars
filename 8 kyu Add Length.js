function addLength(str) {
  let arr = [];
  str.split(" ").forEach((el) => arr.push(`${el} ${el.length}`));
  return arr;
}
