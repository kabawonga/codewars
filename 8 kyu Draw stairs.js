const drawStairs = (n) => {
  let str = "";
  let str2 = "I\n ";
  for (let i = 1; i <= n; i++) {
    if (i === n) {
      break;
    }
    str += str2;
    str2 += " ";
  }
  return (str += "I");
};
