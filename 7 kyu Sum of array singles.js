const repeats = (arr) =>
	arr
		.filter((n) => arr.indexOf(n) == arr.lastIndexOf(n))
		.reduce((s, n) => s + n)
