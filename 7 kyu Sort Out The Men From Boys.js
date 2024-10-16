const menFromBoys = (arr) =>
	[...new Set(arr)]
		.filter((n) => !(n % 2))
		.sort((a, b) => a - b)
		.concat([...new Set(arr)].filter((n) => n % 2).sort((a, b) => b - a))
