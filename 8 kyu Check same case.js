function sameCase(a, b) {
  return a.toLowerCase() === a.toUpperCase() ||
    b.toLowerCase() === b.toUpperCase()
    ? -1
    : (a === a.toLowerCase() && b === b.toLowerCase()) ||
      (a === a.toUpperCase() && b === b.toUpperCase())
    ? 1
    : 0;
}
