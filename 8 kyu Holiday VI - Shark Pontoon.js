function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin === true) {
    if (
      sharkDistance / (sharkSpeed / 2) < pontoonDistance / youSpeed ===
      false
    ) {
      return "Alive!";
    } else {
      return "Shark Bait!";
    }
  } else if (
    sharkDistance / sharkSpeed < pontoonDistance / youSpeed ===
    false
  ) {
    return "Alive!";
  } else {
    return "Shark Bait!";
  }
}
