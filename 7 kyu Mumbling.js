const accum = (s) =>
	s
		.split('')
		.map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
		.join('-')
