let name = "The Window";

let alpha = {
  name: "My Alpha",
  getNameFunc() {
    return function () {
      return this.name;
    }.bind(this);
  },
};
