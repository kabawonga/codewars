const isVow = (a) =>
  a.map((el) =>
    /[aeiou]/.test(String.fromCharCode(el)) ? String.fromCharCode(el) : el
  );
