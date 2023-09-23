const stairsIn20 = (s) =>
  s.reduce((a, b) => a.concat(...b), []).reduce((c, d) => c + d, 0) * 20;
