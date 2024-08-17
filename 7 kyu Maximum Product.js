const adjacentElementsProduct = (array) =>
	array.reduce(
		(acc, el, i, array) =>
			i < array.length - 1 && el * array[i + 1] > acc ? el * array[i + 1] : acc,
		-Infinity
	)
