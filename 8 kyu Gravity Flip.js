const flip = (d, a) =>
  d == "R" ? a.sort((b, c) => b - c) : a.sort((b, c) => c - b);
