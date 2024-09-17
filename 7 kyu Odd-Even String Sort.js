const sortMyString = (s) =>
	[...s].reduce((acc, el, i) => ((acc[i % 2] += el), acc), ['', '']).join(' ')
