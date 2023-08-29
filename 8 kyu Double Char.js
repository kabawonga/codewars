function doubleChar(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] += arr[i];
  }
  return arr.join("");
}
