function multi(arr) {
  return arr.reduce((el, acc) => acc * el, 1);
}
function add(arr) {
  return arr.reduce((el, acc) => acc + el, 0);
}
function reverse(str) {
  return str.split("").reverse().join("");
}
