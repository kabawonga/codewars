String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((el) => {
      if (el === el.toUpperCase()) {
        return el.toLowerCase();
      } else {
        return el.toUpperCase();
      }
    })
    .join("");
};
