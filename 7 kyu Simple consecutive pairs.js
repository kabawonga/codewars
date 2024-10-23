const pairs = (arr) =>
	arr.reduce(
		(acc, el, i) =>
			!(i % 2) && Math.abs(el - arr[i + 1]) == 1 ? acc + 1 : acc,
		0
	)
