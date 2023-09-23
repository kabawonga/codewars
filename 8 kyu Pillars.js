const pillars = (numPill, dist, width) =>
  numPill > 1 ? (numPill - 1) * dist * 100 + (numPill - 2) * width : 0;
