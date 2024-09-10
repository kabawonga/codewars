const sumEvenNumbers = (input) =>
	input.reduce((acc, el) => (!(el % 2) ? acc + el : acc), 0)
