const nbDig = (n, d) =>
	Array.from({ length: n + 1 }, (value, k) => k * k)
		.join('')
		.split(d).length - 1
