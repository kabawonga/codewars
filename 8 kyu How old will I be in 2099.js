function calculateAge(a, b) {
  if (b > a) {
    if (b - a > 1) {
      return `You are ${b - a} years old.`;
    } else {
      return `You are ${b - a} year old.`;
    }
  }
  if (a > b) {
    if (a - b > 1) {
      return `You will be born in ${a - b} years.`;
    } else {
      return `You will be born in ${a - b} year.`;
    }
  }
  if (a === b) {
    return "You were born this very year!";
  }
}
