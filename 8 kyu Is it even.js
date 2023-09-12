function testEven(n) {
  if (n % 1 !== 0) {
    return false;
  } else if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
