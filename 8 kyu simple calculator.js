function calculator(a, b, sign) {
  if (typeof a === "number" && typeof b === "number") {
    if (sign === "+") {
      return a + b;
    } else if (sign === "-") {
      return a - b;
    } else if (sign === "*") {
      return a * b;
    } else if (sign === "/") {
      return a / b;
    } else {
      return "unknown value";
    }
  } else {
    return "unknown value";
  }
}
