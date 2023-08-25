class Warrior {
  constructor(n) {
    this.fName = n;
  }

  name(n) {
    if (n) {
      this.fName = n;
    }
    return this.fName;
  }
}

Warrior.prototype.toString = function () {
  return `Hi! my name's ${this.fName}`;
};
