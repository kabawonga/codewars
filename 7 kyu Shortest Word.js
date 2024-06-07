const findShort = (s) =>
	s
		.split(' ')
		.reduce((acc, el) => (el.length < acc ? (acc = el.length) : acc), 10)
