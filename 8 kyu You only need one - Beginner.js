function check(a, x) {
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      res += 1;
    }
  }
  if (res === 0) {
    return false;
  } else {
    return true;
  }
}
