const squares = (x, n) =>
	n > 0 ? Array.from({ length: n }, (el, i) => x ** (2 ** i)) : []
