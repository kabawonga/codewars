const maxTriSum = (numbers) =>
	[...new Set(numbers.sort((a, b) => b - a))][0] +
	[...new Set(numbers.sort((a, b) => b - a))][1] +
	[...new Set(numbers.sort((a, b) => b - a))][2]
