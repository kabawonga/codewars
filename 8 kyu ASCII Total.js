function uniTotal(string) {
  let res = 0;
  for (let i = 0; i < string.length; i++) {
    res += string.charCodeAt(i);
  }
  return res;
}
