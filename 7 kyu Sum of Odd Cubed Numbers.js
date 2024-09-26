const cubeOdd = (arr) =>
	arr.every(Number.isFinite)
		? arr.reduce((acc, el) => (el ** 3 % 2 ? acc + el ** 3 : acc), 0)
		: undefined
