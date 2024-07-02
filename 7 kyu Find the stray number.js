const stray = (numbers) =>
	numbers.reduce(
		(acc, el) =>
			numbers.indexOf(el) == numbers.lastIndexOf(el) ? (acc = el) : acc,
		0
	)
