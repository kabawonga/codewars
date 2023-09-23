function pointsPer48(ppg, mpg) {
  if (ppg === 0) {
    return 0;
  } else {
    let res = ((48 / mpg) * ppg).toFixed(1);
    return +res;
  }
}
