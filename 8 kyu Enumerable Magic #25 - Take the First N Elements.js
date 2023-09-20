function take(arr, n) {
  const array = [];
  if (n > arr.length) {
    n = arr.length;
  }
  for (let i = 0; i < n; i++) {
    array.push(arr[i]);
  }
  return array;
}
