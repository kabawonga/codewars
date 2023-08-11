function invert(arr) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    myArr.push(arr[i] * -1);
  }
  return myArr;
}
