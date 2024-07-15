const capitals = (word) =>
	[...word].reduce(
		(acc, char, i) => (char === char.toUpperCase() ? [...acc, i] : acc),
		[]
	)
