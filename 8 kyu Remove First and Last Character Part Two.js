function array(string) {
  let res = string.split(",").slice(1, -1).join(" ");
  return res.length > 0 ? res : null;
}
