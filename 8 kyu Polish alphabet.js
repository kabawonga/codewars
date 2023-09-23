const correctPolishLetters = (string) =>
  string.replace(/[ąćęłńóśźż]/gi, (i) => pol[i]);

const pol = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
};
