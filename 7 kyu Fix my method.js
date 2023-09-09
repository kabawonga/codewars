function myFunction() {
  var myObject = {
    objProperty: "string",
    objMethod() {
      return myObject.objProperty;
    },
  };

  return myObject;
}
