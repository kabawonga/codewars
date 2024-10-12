const vaporcode = (s) =>
	s
		.toUpperCase()
		.split('')
		.filter((el) => el !== ' ')
		.join('  ')
