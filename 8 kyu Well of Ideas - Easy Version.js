function well(x) {
  let res = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      res += 1;
    }
  }
  if (res === 0) {
    return "Fail!";
  } else if (res <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}
