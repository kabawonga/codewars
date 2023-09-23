function calculateTip(amount, rating) {
  if (rating.toLowerCase() === "Terrible".toLowerCase()) {
    return 0;
  }
  if (rating.toLowerCase() === "Poor".toLowerCase()) {
    return Math.ceil(amount * 0.05);
  }
  if (rating.toLowerCase() === "Good".toLowerCase()) {
    return Math.ceil(amount * 0.1);
  }
  if (rating.toLowerCase() === "Great".toLowerCase()) {
    return Math.ceil(amount * 0.15);
  }
  if (rating.toLowerCase() === "Excellent".toLowerCase()) {
    return Math.ceil(amount * 0.2);
  } else {
    return "Rating not recognised";
  }
}
