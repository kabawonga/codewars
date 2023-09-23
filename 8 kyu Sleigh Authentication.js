function Sleigh() {}
Sleigh.prototype.authenticate = function (name, password) {
  return password == "Ho Ho Ho!" && name == "Santa Claus";
};
