function getAverage(marks) {
  let x = 0;
  for (let i = 0; i < marks.length; i++) {
    x += marks[i];
  }

  return Math.floor(x / marks.length);
}
