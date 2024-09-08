const alph = 'abcdefghijklmnopqrstuvwxyz'
const solve = (arr) =>
	arr.map((el) =>
		[...el.toLowerCase()].reduce(
			(acc, char, i) => (i == alph.indexOf(char) ? acc + 1 : acc),
			0
		)
	)
