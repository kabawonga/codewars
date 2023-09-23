const cannonsReady = (gunners) =>
  Object.values(gunners).every((response) => response === "aye")
    ? "Fire!"
    : "Shiver me timbers!";
