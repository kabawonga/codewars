function howMuchILoveYou(nbPetals) {
  arr = [
    "not at all",
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
  ];
  return arr[nbPetals % 6];
}
