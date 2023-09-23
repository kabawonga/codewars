const remove = (s, n) => {
  for (let i = 1; i <= n; i++) {
    s = s.replace("!", "");
  }
  return s;
};
