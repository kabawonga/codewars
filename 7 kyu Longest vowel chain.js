const solve = (s) => Math.max(...s.split(/[^aeiou]/).map((el) => el.length), 0)
