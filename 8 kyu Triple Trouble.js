function tripleTrouble(one, two, three) {
  return one
    .split("")
    .reduce((a, b, c) => `${a}${one[c]}${two[c]}${three[c]}`, "");
}
