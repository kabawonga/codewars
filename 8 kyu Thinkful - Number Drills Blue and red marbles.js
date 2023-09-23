const guessBlue = (blueStart, redStart, bluePulled, redPulled) =>
  (blueStart - bluePulled) / (redStart - redPulled + (blueStart - bluePulled));
