const largestPairSum = (numbers) =>
	numbers
		.sort((a, b) => b - a)
		.slice(0, 2)
		.reduce((a, b) => a + b)
