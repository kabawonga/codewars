function betterThanAverage(classPoints, yourPoints) {
  let a = classPoints;
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    res += a[i];
  }
  if (res / a.length >= yourPoints) {
    return false;
  } else {
    return true;
  }
}
