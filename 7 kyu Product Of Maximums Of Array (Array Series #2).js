const maxProduct = (numbers, size) =>
	numbers
		.sort((a, b) => b - a)
		.slice(0, size)
		.reduce((acc, el) => (acc *= el), 1)
