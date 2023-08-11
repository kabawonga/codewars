function strCount(str, letter) {
  if (str === "") {
    return 0;
  } else {
    return str.split(letter).length - 1;
  }
}

function strCount(str, letter) {
  return str.split(letter).length - 1;
}
