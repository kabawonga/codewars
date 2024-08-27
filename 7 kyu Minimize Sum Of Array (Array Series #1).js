const minSum = (arr) =>
	arr
		.sort((a, b) => a - b)
		.reduce((acc, el, i) => acc + el * arr[arr.length - 1 - i], 0) / 2
