const capitalize = (s, arr) =>
	s
		.split('')
		.reduce(
			(acc, el, i) => (arr.includes(i) ? acc + el.toUpperCase() : acc + el),
			''
		)
