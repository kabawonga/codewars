const largest = (n, array) =>
	n == 0 ? [] : array.sort((a, b) => a - b).slice(-n)
